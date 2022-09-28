using System.Collections;
using TowerDefense.Units;
using UnityEngine;
using UnityEngine.UI;

namespace TowerDefense.UI
{
	/// <summary>
	/// The UITooltip displays information when a UI element is moused over. The tooltip has 2 display options:
	/// Info: Displays generic information using plain text
	/// Card: Displays an Ability formatted as a card
	/// </summary>
	public class UITooltip : MonoBehaviour, IInitialize
	{
		public static UITooltip Instance;

		[Header("Components")]
		[SerializeField] CanvasScaler _canvasScaler;    // the placement of a tooltip requires the reference resolution of the canvas

		[Header("Tooltips")]
		[SerializeField] UITooltipInfo _tooltipInfo;    // tooltip for displaying generic information
		[SerializeField] UICard _tooltipCardUiCard;     // tooltip for displaying an ability as a card

		[Header("Delay")]
		[SerializeField] float _showDelay;  // how long after the cursor is on the element before the tooltip is shown
		[SerializeField] float _hideDelay;  // how long after the cursor leaves the element before the tooltip is hidden

		[Header("Overworld")]
		[SerializeField] bool _inOverworld; // is the prefab in the overworld (position calculations are different)

		[Header("Boundary Padding")]
		[SerializeField] int _boundaryPadding;  // how close to the edge of the screen the tooltip can get

		private RectTransform _tooltipTransform;        // the parent transform of both tooltips (the transform this script is on)
		private RectTransform _tooltipTransformCard;
		private RectTransform _tooltipTransformInfo;

		private Coroutine _coroutineTooltipTransition;  // shows or hides the tooltip after a delay
		private Camera _mainCamera;

		/// <summary> The tooltip that is currently open. </summary>
		private RectTransform OpenTooltip => _tooltipTransformInfo.gameObject.activeSelf ? _tooltipTransformInfo : _tooltipTransformCard;

		/// <summary> The generic information tooltip. </summary>
		public static UITooltipInfo Info { get; private set; }

		/// <summary> The UI element the tooltip is positioned on and loading data from. </summary>
		public ITooltip Caller { get; private set; }

		// IInitialize
		public void Initialize(Unit unit)
		{
			Instance = this;
			_mainCamera = Camera.main;

			_tooltipTransform = (RectTransform)transform;
			_tooltipTransformInfo = _tooltipInfo.GetComponent<RectTransform>();
			_tooltipInfo.Initialize(this);
			_tooltipTransformCard = _tooltipCardUiCard.GetComponent<RectTransform>();

			Info = _tooltipInfo;
		}

		// IInitialize
		public void Terminate() { }

		/// <summary> 
		/// Show the Card tooltip. 
		/// The data used by the Card UI should be loaded by chaining UICard initialization functions from this call.
		/// </summary>
		public UICard ShowCard(ITooltip caller)
		{
			ShowTooltip(_tooltipTransformCard, caller);
			return _tooltipCardUiCard;
		}

		/// <summary> Display the passed tooltip, does not have a delay if any tooltip is already open. </summary>
		public void ShowTooltip(RectTransform tooltip, ITooltip caller)
		{
			Caller = caller;

			// if both tooltips are hidden, wait a short delay before showing this one
			if (!_tooltipTransformInfo.gameObject.activeSelf && !_tooltipTransformCard.gameObject.activeSelf)
			{
				if (_coroutineTooltipTransition != null)
					StopCoroutine(_coroutineTooltipTransition);

				_coroutineTooltipTransition = StartCoroutine(DisplayDelay(tooltip, _showDelay, true));
			}
			// a tooltip is already open
			else
			{
				// toggle the tooltips if the selected one isn't already shown
				if (tooltip != OpenTooltip)
				{
					OpenTooltip.gameObject.SetActive(false);
					tooltip.gameObject.SetActive(true);
				}

				// stop the tooltip from becoming hidden if the hide coroutine was already started
				if (_coroutineTooltipTransition != null)
					StopCoroutine(_coroutineTooltipTransition);
			}

			AlignTooltip(tooltip, caller);
		}

		/// <summary>
		/// Hide the tooltip after a short delay. This allows the tooltip to be updated from a different caller without disappearing. 
		/// </summary>
		public void HideTooltip()
		{
			if (_coroutineTooltipTransition != null)
				StopCoroutine(_coroutineTooltipTransition);

			_coroutineTooltipTransition = StartCoroutine(DisplayDelay(OpenTooltip, _hideDelay, false));
		}

		/// <summary> Hide the tooltip during this frame. </summary>
		public void HideTooltipImmediate()
		{
			if (_coroutineTooltipTransition != null)
				StopCoroutine(_coroutineTooltipTransition);

			_coroutineTooltipTransition = StartCoroutine(DisplayDelay(OpenTooltip, 0, false));
		}

		// Add a small delay before tooltip is shown or hidden so it does not load while the mouse is quickly moving over the element
		private IEnumerator DisplayDelay(RectTransform tooltip, float delay, bool show)
		{
			// there is no tooltip open
			if (tooltip == null) yield break;

			// immediately reset the caller when hidden so the tooltip is considered inactive
			if (!show) Caller = null;

			// wait in realtime so the tooltip can update while paused
			yield return new WaitForSecondsRealtime(delay);

			// show the tooltip
			tooltip.gameObject.SetActive(show);
		}

		// Update the tooltip or card anchors so it can be positioned relative to the caller
		private void AlignTooltip(RectTransform tooltipRect, ITooltip caller)
		{
			// Force the tooltip to resize to fit its content immediately.
			// Otherwise the RectTransform's size will be incorrect until the end of this frame.
			// This requires the RectTransform's GameObject to be active (otherwise will not update)

			// 1 - enable the RectTransform's GameObject so it can be updated
			bool isAlreadyOpen = tooltipRect.gameObject.activeSelf;
			tooltipRect.gameObject.SetActive(true);

			// 2 - update the RectTransform's size
			LayoutRebuilder.ForceRebuildLayoutImmediate(tooltipRect);

			// 3 - keep an already open tooltip open, otherwise hide it
			if (!isAlreadyOpen) tooltipRect.gameObject.SetActive(false);

			// update the shared parent anchors
			Vector2 callerAnchors = caller.GetAnchors();
			_tooltipTransform.anchorMin = callerAnchors;
			_tooltipTransform.anchorMax = callerAnchors;
			_tooltipTransform.pivot = callerAnchors;

			// update the tooltip or card anchors
			tooltipRect.anchorMin = callerAnchors;
			tooltipRect.anchorMax = callerAnchors;
			tooltipRect.pivot = callerAnchors;

			// position offset from anchor
			Vector2 tooltipPos = new Vector2();
			Vector2 callerPos = ScreenPositioning.CalculateRectTransformPosition(caller.CallerRectTransform(), caller.GetAnchors(), _inOverworld || caller.IsWorldSpace(), _mainCamera, _canvasScaler);

			// get the boundaries of where the tooltip can be placed so it doesn't get placed off screen
			var boundary = GetPlacementBoundary(tooltipRect, caller);

			// fixed positioning
			if (caller.RelativeOffsetFromCaller() == Vector2.zero)
			{
				// has no checks to prevent the tooltip from being placed offscreen
				if (caller.FixedOffsetFromTooltipAnchor().x > 0)
				{
					tooltipPos.x = caller.FixedOffsetFromTooltipAnchor().x;
					tooltipPos.y = Mathf.Clamp(callerPos.y, boundary.w, boundary.y);
				}
				else
				{
					tooltipPos.x = Mathf.Clamp(callerPos.x, boundary.z, boundary.x);
					tooltipPos.y = caller.FixedOffsetFromTooltipAnchor().y;
				}
			}
			// offset positioning
			else
			{
				tooltipPos.x = callerPos.x + caller.RelativeOffsetFromCaller().x;
				tooltipPos.y = callerPos.y + caller.RelativeOffsetFromCaller().y;

				// flip the offset vector if the tooltip would have been placed offscreen
				// horizontal
				if (tooltipPos.x > boundary.x || tooltipPos.x < boundary.z)
				{
					tooltipPos.x = callerPos.x - caller.RelativeOffsetFromCaller().x;

					// flip the horizontal anchor around 0.5 (ex. 1 becomes 0, 0.75 becomes 0.25, etc.)
					float newXAnchor = caller.GetAnchors().x - 0.5f;
					newXAnchor *= -1;
					newXAnchor += 0.5f;
					tooltipRect.pivot = new Vector2(newXAnchor, tooltipRect.pivot.y);
				}

				// vertical
				if (tooltipPos.y > boundary.y || tooltipPos.y < boundary.w)
				{
					tooltipPos.y = callerPos.y - caller.RelativeOffsetFromCaller().y;

					// flip the vertical anchor
					float newYAnchor = caller.GetAnchors().y - 0.5f;
					newYAnchor *= -1;
					newYAnchor += 0.5f;
					tooltipRect.pivot = new Vector2(tooltipRect.pivot.x, newYAnchor);
				}
			}

			_tooltipTransform.anchoredPosition = tooltipPos;
		}

		// Calculate the boundaries (in pixels) of where the tooltip can be placed, based on the tooltip size and screen resolution
		private Vector4 GetPlacementBoundary(RectTransform tooltipRect, ITooltip caller)
		{
			// X = Max X, Z = min X, Y = max Y, W = min Y
			var boundary = new Vector4
			{
				// x coordinate (x = right, z = left)
				x = _canvasScaler.referenceResolution.x - (_canvasScaler.referenceResolution.x * caller.GetAnchors().x) - _boundaryPadding,
				z = -(_canvasScaler.referenceResolution.x * caller.GetAnchors().x) + _boundaryPadding,

				// y coodinate (t = top, w = bottom)
				y = _canvasScaler.referenceResolution.y - (_canvasScaler.referenceResolution.y * caller.GetAnchors().y) - _boundaryPadding,
				w = -(_canvasScaler.referenceResolution.y * caller.GetAnchors().y) + _boundaryPadding
			};

			// reduce the boundary size by the size of the open tooltip
			boundary.x -= tooltipRect.rect.width * (1 - tooltipRect.anchorMax.x);
			boundary.z += tooltipRect.rect.width * tooltipRect.anchorMax.x;
			boundary.y -= tooltipRect.rect.height * (1 - tooltipRect.anchorMax.y);
			boundary.w += tooltipRect.rect.height * tooltipRect.anchorMax.y;

			return boundary;
		}
	}
}