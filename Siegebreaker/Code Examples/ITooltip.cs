using UnityEngine;

namespace TowerDefense.UI
{
    /// <summary>
    /// Implemented by all UI elements that require the tooltip. The tooltip has 2 positioning modes:
    /// <para> Fixed Offset: The tooltip is placed at the set coorindates relative to the tooltip's anchor position. </para>
    /// <para> Relative Offset: The tooltip is placed a specified offset from the position of the caller. </para>
    /// </summary>
    public interface ITooltip
    {
        /// <summary>
        /// Where the tooltip will be placed on the x or y-axis in pixels relative to the parent anchor position.
        /// Only one axis should be greater than 0. The caller's position will be used for the axis that is 0.
        /// Ex. Offset = (0, 180), Anchor Pos = (0.5, 0), Screen Size = (1920, 1080) Tooltip Pos = (960, 180).
        /// </summary>
        Vector2 FixedOffsetFromTooltipAnchor();

        /// <summary> Where the tooltip should be anchored (bottom-center, center-right, etc). </summary>
        Vector2 GetAnchors();

        /// <summary>
		/// A position offset from the caller's rect transform.
        /// Overrides FixedOffsetFromTooltipAnchor if either the RelativeOffsetFromCaller X or Y value is not zero.
        /// Ex. Offset = (0, 180), Caller Pos = (840, 230), Tooltip Pos = (840, 410).
		/// </summary>
        Vector2 RelativeOffsetFromCaller();

        /// <summary> The rect transform of the calling element. </summary>
        RectTransform CallerRectTransform();

        /// <summary>
        /// Set to True if the caller coorindates must be converted from world space to screen space. 
        /// Used for 'Screen Space - Camera' and 'World Space' canvases.
        /// </summary>
        bool IsWorldSpace();
    }
}