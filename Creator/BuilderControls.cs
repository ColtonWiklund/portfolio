using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// The Builder controls the Frame Tool and Equipment Tool

namespace Player
{
	namespace Builder
	{
		public class BuilderControls : MonoBehaviour {

			private PlayerCamera playerCameraScript;

			private BuilderMovement builderMovementScript;
			private BuilderCamera builderCameraScript;

			private Frame.FrameTool frameToolScript;
			private Panel.PanelTool panelToolScript;
			private EquipmentTool.EquipmentTool equipmentToolScript;

			public GameObject buildGridMesh;	// displays the build grid

			int builderIgnoreLayers = 0;	// what layers the builder should ignore when initializing (determines where the builder is placed)

			private float scrollSens = 0.025f; 	// how sensitive the scroll wheel is for movement

			void Start () {
				playerCameraScript = this.gameObject.GetComponentInParent<PlayerCamera> ();
				builderMovementScript = this.gameObject.GetComponent<BuilderMovement> ();
				builderCameraScript = this.gameObject.GetComponent<BuilderCamera> ();
				frameToolScript = this.gameObject.GetComponent<Frame.FrameTool> ();
				equipmentToolScript = this.gameObject.GetComponent<EquipmentTool.EquipmentTool> ();
			}

			public void UpdateBuilderControls (Tools activeTool) // runs the controls common to the frame and equipment tool
			{
				// Run the active tool each frame
				if (activeTool == Tools.Frame) {
					frameToolScript.FrameToolUpdate ();		
				} else if (activeTool == Tools.Equipment) {
					equipmentToolScript.EquipmentToolUpdate ();
				}

				float scrollwheel = Input.GetAxis ("Mouse ScrollWheel");

				// scrollwheel controls (camera zoom and builder move up/down on z-axis)
				if (scrollwheel >= scrollSens) {
					if (Input.GetKey (KeyCode.LeftShift)) {	// camera zoom in with shift + mouse scrollwheel
						builderCameraScript.ZoomIn (scrollwheel);
					} else {
						builderMovementScript.ScrollMoveZ (1f);
					}
				
				} else if (scrollwheel <= -scrollSens) {
					if (Input.GetKey (KeyCode.LeftShift)) {
						builderCameraScript.ZoomOut (scrollwheel);
					} else {
						builderMovementScript.ScrollMoveZ (-1f);
					}
				}

				builderMovementScript.UpdateBuilderMovement ();	// allow the position and camera of the Builder to update
				builderCameraScript.UpdateBuilderCamera ();
			}

			// Start the builder tool on the first frame its being used
			public void InitializeBuilder (Tools activeTool) 
			{
				Vector3 builderLocation; // place the builder where the player is looking
				bool startingOnJoiner = false;
				RaycastHit hit;
				Ray ray = new Ray(builderCameraScript.playerCamera.transform.position, builderCameraScript.playerCamera.transform.TransformDirection (Vector3.forward));
				if (Physics.Raycast (ray, out hit, 8f, ~builderIgnoreLayers)) {
					if (hit.collider.gameObject.layer == LayerMask.NameToLayer ("Frame Joiner")) {	// Builder Location will snap to existing Frame Joiners and Frame Segments
						builderLocation = hit.collider.transform.position;
						startingOnJoiner = true;
					} else if (hit.collider.gameObject.layer == LayerMask.NameToLayer("Frame Segment")) {
						builderLocation = hit.point;
					} else {
						if (Vector3.Distance (transform.position, hit.point) < 4f) {
							builderLocation = hit.point;
						} else {
							builderLocation = ray.GetPoint (4f);
						}
					}
				} else {
					builderLocation = ray.GetPoint (4f);
				}
				this.gameObject.transform.position = builderLocation;
				builderMovementScript.CenterBuilderPosition ();
				playerCameraScript.SetCameraToBuilder ();
				buildGridMesh.SetActive (true);

				if (activeTool == Tools.Frame) {
					builderMovementScript.activeTool = Tools.Frame;
					if (startingOnJoiner == true) {
						frameToolScript.ShowIndicators (builderLocation);
					} else {
						frameToolScript.HideIndicators (true);
					}
				} else {
					builderMovementScript.activeTool = Tools.Equipment;
				}
			}

			// End the builder tool
			public void TerminateBuilder (Tools activetool) 
			{
				playerCameraScript.SetCameraToFirstPerson ();
				buildGridMesh.SetActive (false);
				this.gameObject.transform.localPosition = new Vector3 (0f, 0f, 0f);	// center the builder onto the player when its not in use

				if (activetool == Tools.Frame) {
					frameToolScript.HideIndicators (false);
				} else if (activetool == Tools.Equipment) {
					equipmentToolScript.TerminateEquipmentTool ();
				}
			}
		}
	}
}
