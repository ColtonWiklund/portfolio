using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Set a Frame Segement's length, position, and rotation based on the two positions passed by the Frame Tool

namespace Player
{
	namespace Builder
	{
		namespace Frame
		{
			public class FrameSegment : MonoBehaviour 
			{
				private List<GameObject> connectedJoiners = new List<GameObject>();	// The two joiners connected to this Frame Segment

				public Transform anchor;	// the axes where the body rotates around
				public Transform body;		// the mesh and collider used in the game world
				public Transform frameCollider;	// only collides with other frame segments

				private float materialDensity = 75f;	// kg/m^3 density of the material being used, affects mass of creations rigidbody

				public float weight {
					get { 
						return body.localScale.x * body.localScale.y * body.localScale.z * materialDensity;
					}
				}
				public float colliderSize = 0.25f;		// the x and y coordinates of the internal collider relative to its parent size
				public float colliderSpacing = 0.24f;	// how much space there should be betwee the frame joiner and the frame segment's frameCollider
														// must produce a collider when frame segment is only 0.5m long (frame segment length - (colliderSpacing * 2) = frame collider length)

				// stretch and rotate the frame segment prefab to reach from startPos to endPos
				public void SetTransform (Vector3 startPos, Vector3 endPos) 
				{
					ResetTransform ();	// remove any previous transform this segment had
					if (startPos != endPos) {
						this.gameObject.transform.position = startPos;			// move the instantiate frame segment to the first position selected by the builder
						float length = Vector3.Distance (startPos, endPos);		// the length of the segment is the distance between both positions selected by the builder
						body.localScale = new Vector3 (length, 0.25f, 0.25f);	// extend the length of the segment to reach from the first position to the second
						body.localPosition += new Vector3 (((length - 0.25f) / 2) + 0.125f, 0f, 0f);	// center the segment in its parent game object to be halfway
						// body.localPosition +=

						Vector3 offset = endPos - startPos;

						float angleY;	// rotation on the y-axis
						if (offset.x != 0) {
							angleY = -Mathf.Atan (offset.z / offset.x) * Mathf.Rad2Deg;
						} else {
							angleY = 90; // set it to 90 if there is no change in x-coordinate
						}
						if (offset.x < 0) {
							angleY += 180;	// rotate the angle by 180 degrees if the x-coordinate is negative
						} else if (offset.x == 0) {
							if (offset.z > 0) {
								angleY -= 180;
							}
						}

						float angleZ;	// rotation on the z-axis
						if (offset.y != 0 || offset.z != 0) {
							angleZ = Mathf.Atan (offset.y / Mathf.Sqrt (Mathf.Pow (offset.x, 2) + Mathf.Pow (offset.z, 2))) * Mathf.Rad2Deg; // angleZ = tan-1(a/b), where a = y-axis offset, b = sqrt((x-axis offset)^2 + (z-axis offset)^2)
                        } else {
							angleZ = 0f;	// if the offset has no y and or z component (travelling flat)
						}

						if (frameCollider != null) {
							if (body.localScale.x >= 0.5) {
								frameCollider.localScale = new Vector3 ((1 - (colliderSpacing * 2 / body.localScale.x)), colliderSize, colliderSize);	// scale the frame collider to be colliderSpacing shorter than the frame segment on both ends
							} else {
								frameCollider.localScale = new Vector3 (0.01f, 0.3f, 0.3f);
							}
						}
						anchor.Rotate (new Vector3 (0f, angleY, angleZ));	// rotate the frame segment into position via its anchor
						anchor.gameObject.SetActive (true);
					} else {
						anchor.gameObject.SetActive (false);
					}
				}

				// set the segment back to its default starting values
				public void ResetTransform(){
					body.localScale = new Vector3 (0.25f, 0.25f, 0.25f);
					body.localPosition = new Vector3 (0f, 0f, 0f);
					anchor.localRotation = Quaternion.identity;
					anchor.localPosition = new Vector3 (0f, 0.125f, 0f);
				}

				// add a frame joiner connected to this joiner
				public void AddJoiner (GameObject joiner) {
					if (connectedJoiners.Contains(joiner) == false) {
						connectedJoiners.Add (joiner);
						joiner.GetComponent<FrameJoiner> ().AddSegment (this.gameObject);	// Update the Frame Joiner to know this Frame segment is connected to it
					}
				}

				// remove a frame joiner connected to this segment
				public void RemoveJoiner (GameObject joiner) {
					if (connectedJoiners.Contains (joiner) == true) {
						connectedJoiners.Remove (joiner);
						joiner.GetComponent<FrameJoiner> ().RemoveSegment (this.gameObject);
					}
				}

				// Allow other scripts to access the connectedJoiners lists
				public GameObject ReturnJoiner (int i) {
					return connectedJoiners [i];
				}

				public void SetJoinerNeighbors () {
					connectedJoiners [0].GetComponent<FrameJoiner> ().AddJoiner (this.gameObject);
					connectedJoiners [1].GetComponent<FrameJoiner> ().AddJoiner (this.gameObject);
				}

				// delete this segment and any stranded joiner segments
				public void DeleteSegment () {
					foreach (GameObject joiner in connectedJoiners) {	// remove this segment from each connected joiner
						//print ("Deleting Segment from Joiner: " + joiner.name);
						joiner.GetComponent<FrameJoiner> ().RemoveSegment (this.gameObject);
					}
					Destroy (this.gameObject);
				}
			}
		}
	}
}
