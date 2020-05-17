using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Controls the movement of the Builder in the X, Y, and Z axes
// Builder movement is used for the Frame Tool and Equipment Tool
// Builder moves in 0.5m increments, can only step 0.5m in each direction per stepTime

namespace Player
{
	namespace Builder
	{
		public class BuilderMovement : MonoBehaviour {

			private Frame.FrameTool frameToolScript;
			private EquipmentTool.EquipmentTool equipmentToolScript;

			public Transform cameraCenterY;
			private Transform builder;

			private Vector3 targetPosition;		// where the builder is moving to
			
			private float scrollMoveZ;			// set by BuilderControls to allow the scrollwheel to change builder height

			private float stepSize = 0.5f;		// how many meters to move in one step

			public bool isMoving = false;		// is the building moving
			public float stepTimeMax;			// maximum time between steps while moving
			public float stepTimeMin;			// minimum time between steps while moving
			private float stepTime = 0f;		// current time between steps while moving, gets reduced if player is holding movement keys down
			private float decayPercent = 0.95f; 	// steps become (1-decayPercent)% faster on each successive movement (builder movement speeds up as movement keys are held down)

			public Tools activeTool = Tools.Select;
				
			void Start () {
				frameToolScript = this.gameObject.GetComponent<Frame.FrameTool> ();
				equipmentToolScript = this.gameObject.GetComponent<EquipmentTool.EquipmentTool> ();
				builder = this.gameObject.transform;
				stepTime = stepTimeMax;
			}

			public void UpdateBuilderMovement () {

				float builderRotY = cameraCenterY.eulerAngles.y;

				// Get input on all three movement axes, and update the target position
				if (isMoving == false) 
				{
					targetPosition = builder.position;	// set the target position to the builder's current position

					MoveX (builderRotY);
					MoveZ (builderRotY);
					MoveY (builderRotY);

					if (targetPosition != builder.position)	// if the target position has not changed after quering each movement axis, do nothing, otherwise lerp to the new position
					{
						StartCoroutine (ChangePosition ());
					}
				}
				// set the step time back to its maximum when player is not moving
				if (stepTime != stepTimeMax) 
				{
					if (Input.GetAxis ("Horizontal") == 0 && Input.GetAxis ("Vertical") == 0 && Input.GetAxis ("Mouse ScrollWheel") == 0) 
					{
						stepTime = stepTimeMax;
					}
				}
			}

			// builder movement left and right relative to camera
			void MoveX (float builderRotY) 
			{
				bool right = Input.GetKey (KeyCode.D);
				bool left = Input.GetKey (KeyCode.A);

				float x = 0f;	// if player is trying to move in both directions at once, stop movement
				if (right == true && left == false) {
					x = stepSize;
				} 
				else if (right == false && left == true) {
					x = -stepSize;
				}

				if (x != 0) {	// determines which direction the builder should move depending on which way the camera is facing
					if (builderRotY <= 45 || builderRotY >= 315) {
						targetPosition += new Vector3 (x, 0f, 0f);	// add the movement vector the the target position
					} 
					else if (builderRotY >= 45 && builderRotY <= 135) {
						targetPosition += new Vector3 (0f, 0f, -x);
					} 
					else if (builderRotY >= 135 && builderRotY <= 225) {
						targetPosition += new Vector3 (-x, 0f, 0f);
					} 
					else {
						targetPosition += new Vector3 (0f, 0f, x);
					}
				}
			}

			// builder movement backwards and forward relative to camera
			void MoveZ (float builderRotY) {
				bool forward = Input.GetKey (KeyCode.W);
				bool back = Input.GetKey (KeyCode.S);

				float x = 0f;
				if (forward == true && back == false) {
					x = stepSize;
				} 
				else if (forward == false && back == true) {
					x = -stepSize;
				}

				if (x != 0) {
					if (builderRotY <= 45 || builderRotY >= 315) {
						targetPosition += new Vector3 (0f, 0f, x);
					} 
					else if (builderRotY >= 45 && builderRotY <= 135) {
						targetPosition += new Vector3 (x, 0f, 0f);
					} 
					else if (builderRotY >= 135 && builderRotY <= 225) {
						targetPosition += new Vector3 (0f, 0f, -x);
					} 
					else {
						targetPosition += new Vector3 (-x, 0f, 0f);
					}
				}
			}

			// builder movement up and down
			void MoveY (float builderRotY) {
				bool up = Input.GetKey (KeyCode.Space);
				bool down = Input.GetKey (KeyCode.C);
				float x = 0f;

				if (up == true && down == false) {
					x = stepSize;
				}
				else if (up == false && down == true) {
					x = -stepSize;
				}

				if (scrollMoveZ != 0) {	// scrollwheel control of builder height, overrides keyboard keys
					x = scrollMoveZ * stepSize;
					scrollMoveZ = 0;
				}

				if (x != 0) {
					targetPosition += new Vector3 (0f, x, 0f);
				}
			}

			// called from BuilderControls
			public void ScrollMoveZ (float x) {
				scrollMoveZ = x;
			}

			// slide the builder to the new target position
			IEnumerator ChangePosition () 
			{
				DecreaseStepTime ();
				float percentTravelled = 0f;
				isMoving = true;	// while the builder is moving its target position cannot change
				while (percentTravelled < 1f) 
				{
					percentTravelled += Time.deltaTime / (stepTime);

					if (activeTool == Tools.Frame) {
						frameToolScript.UpdateIndicatorPositions ();	// updates the position of the frame tool's indicators to match the builder moving
					}

					builder.position = Vector3.Lerp (builder.position, targetPosition, percentTravelled);
					yield return null;
				}
				CenterBuilderPosition ();
				isMoving = false;	// allows the target movement position to be changed again

				// After the builder is finished moving, update the relevant tools
				if (activeTool == Tools.Frame) {
					frameToolScript.UpdateIndicatorPositions ();
				} else if (activeTool == Tools.Equipment) {
					equipmentToolScript.UpdateEquipmentPosition (this.gameObject.transform.position + new Vector3 (0f, 0.125f, 0f));
				}
			}

			// set the step time, and reduce the time between the next step
			void DecreaseStepTime () 
			{
				if (stepTime > stepTimeMin) 
				{
					stepTime *= decayPercent;
					if (stepTime < stepTimeMin) 
					{
						stepTime = stepTimeMin;
					}
				}
			}

			// center the Builder to the nearest grid position (multiples of 0.5) in case it gets off grid while moving due to float rounding
			public void CenterBuilderPosition () 
			{
				float posX = Mathf.Round(builder.position.x * 2)/2;
				float posY = Mathf.Round(builder.position.y * 2)/2;
				float posZ = Mathf.Round(builder.position.z * 2)/2;
				builder.position = new Vector3 (posX, posY, posZ);
			}
		}
	}
}
