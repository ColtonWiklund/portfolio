using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Controls the Builder camera

namespace Player
{
	namespace Builder
	{

		public class BuilderCamera : MonoBehaviour {

			public Transform camCenterY;
			public Transform camCenterX;
			private Transform playerAvatar;
			public Camera playerCamera;     // used by other scripts accessing this variable

			public float mouseSensitivityX; // mouse sensitivity, affects camera look speed
			public float mouseSensitivityY;
			public float zoomSensitivity;

			private Vector3 camtargetPos;

			private float maxCamDistance = -8f; // how far away the camera can be from the Builder
			private float minCamDistance = -1.5f;
			private float newCamZ = 0f;

			private float maxVertAngle = 80f;   // maximum angle the camera can be facing down
			private float minVertAngle {
				get { 
					return 360 - maxVertAngle;  // minimum angle the camera can be facing up
				}
			}

			void Start () {
				LockCursor ();
			}

			public void SetBuilderCamera(Transform avatar) {
				playerAvatar = avatar;
			}
			
			// Control the position and angle of the camera by rotating the Builder on the Y axis, and the camera on the X axis
			public void UpdateBuilderCamera () {
				float xRot = Input.GetAxis ("Mouse X") * mouseSensitivityX;
				float yRot = Input.GetAxis ("Mouse Y") * -mouseSensitivityY;

				camCenterY.Rotate (new Vector3 (0f, xRot, 0f));	// rotate the X and Y axes individually to keep the camera straight
				camCenterX.Rotate (new Vector3 (yRot, 0f, 0f));

				// prevent the camera from going over or under the Builder entirely
				float camX = camCenterX.localRotation.eulerAngles.x;
				if (camX < minVertAngle && camX > maxVertAngle) {
					if (Mathf.Abs (camX - minVertAngle) < (Mathf.Abs (camX - maxVertAngle))) {
						camCenterX.localEulerAngles = new Vector3 (minVertAngle, 0f, 0f);
					} else {
						camCenterX.localEulerAngles = new Vector3 (maxVertAngle, 0f, 0f);
					}
				}
			}

			// moves the camera towards the builder
			public void ZoomIn (float amount) {
				newCamZ = playerAvatar.localPosition.z + (amount * zoomSensitivity);
				if (newCamZ > minCamDistance) {
					newCamZ = minCamDistance;
				}
				camtargetPos = new Vector3 (playerAvatar.localPosition.x, playerAvatar.localPosition.y, newCamZ);
				StartCoroutine(LerpPosition());
			}

			// move the camera away from the builder
			public void ZoomOut (float amount) {
				newCamZ = playerAvatar.localPosition.z + (amount * zoomSensitivity);
				if (newCamZ < maxCamDistance) {
					newCamZ = maxCamDistance;
				}
				camtargetPos = new Vector3 (playerAvatar.localPosition.x, playerAvatar.localPosition.y, newCamZ);
				StartCoroutine(LerpPosition());
			}

			IEnumerator LerpPosition () {
				float percentTravelled = 0f;
				while (percentTravelled < 1f) {
					percentTravelled += Time.deltaTime * 6.0f;
					playerAvatar.localPosition = Vector3.Lerp (playerAvatar.localPosition, camtargetPos, percentTravelled);
					yield return null;
				}
			}

			public void LockCursor () {
				Cursor.lockState = CursorLockMode.Locked;
			}

			public void UnlockCursor () {
				Cursor.lockState = CursorLockMode.None;
			}
		}
	}
}
