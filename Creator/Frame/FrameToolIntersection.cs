using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Frame Tool extension
// Handles collisions for the Frame Tool

namespace Player
{
	namespace Builder
	{
		namespace Frame
		{
			public class FrameToolIntersection 
			{
				public Material materialValid;
				public Material materialInvalid;

				// Check if the passed Frame Segment Indicator is in a valid position. Turn the Segment Indicator red if the position is invalid.
				// Valid: Indicator's Internal Segment Collider does not collide with any other Internal Segment Colliders [AND] Indicator's Frame Segment Collider does not collide with any Frame Joiners, Panels, or Equipment colliders
				// Invalid: Indicator's Internal Segment Collider collides with any other Internal Segment Colliders [OR] Indicator's Frame Segment Collider collides with any Frame Joiners, Panels, or Equipment colliders
				public bool IsValidSegmentIndicator (GameObject segmentIndicator) 
				{
					bool validSegmentPosition = true;
					Transform segmentBody = segmentIndicator.transform.GetChild(0);
					if (segmentBody.localScale.x >= 0.5f) 	// only check collisions if the frame segment is longer than 0.5m (ie. buildPosition != startPos)
					{
						FrameSegment frameSegmentScript = segmentIndicator.GetComponent<FrameSegment> ();

						float colliderSize = frameSegmentScript.colliderSize;
						float colliderSpacing = frameSegmentScript.colliderSpacing;
						Vector3 boxInternal = new Vector3 ((segmentBody.localScale.x / 2) - colliderSpacing, (0.25f * colliderSize) / 2f, (0.25f * colliderSize) / 2f);	// size of the internal frame segment collider, smaller so frame segments can overlap
						Quaternion anchorRotation = frameSegmentScript.anchor.rotation;

						// The frames internal collider cannot collide with any other frame segment's internal colliders
						Collider[] frameColliders = Physics.OverlapBox (segmentBody.position, boxInternal, anchorRotation, 1 << LayerMask.NameToLayer ("Frame Segment Internal"));
						if (frameColliders.Length != 0) {
							validSegmentPosition = false;
							//Debug.Log ("Frame Segment Colliding with: " + frameColliders [0].transform.parent.parent.name);
						}

						// The full size of the frame must not collide with any Frame Joiners (extra space is provided at its own Joiners) [Eventually shouldnt collide with any equipment collision boxes]
						Vector3 boxExternal = new Vector3 (segmentBody.localScale.x / 2f - colliderSpacing, segmentBody.localScale.y / 2f, segmentBody.localScale.z/ 2f); 			// full size of the frame segment except for space between the frame joiners
						Collider[] joinerColliders = Physics.OverlapBox (segmentBody.position, boxExternal, anchorRotation, 1 << LayerMask.NameToLayer ("Frame Joiner Internal")); 	// OR additional layer masks with '|' operation (bitwise OR)
						if (joinerColliders.Length != 0) {
							validSegmentPosition = false;
							//Debug.Log ("Frame Segment Colliding with: " + joinerColliders [0].transform.parent.name);
						}
					} else {
						validSegmentPosition = true;
					}

					if (validSegmentPosition) {
						segmentIndicator.GetComponentInChildren<Renderer> ().material = materialValid;
					} else {
						segmentIndicator.GetComponentInChildren<Renderer> ().material = materialInvalid;
					}
					return validSegmentPosition;
				}

				// Check if the passed Frame Joiner Indicator is in a valid location. Turns the Joiner Indicator red if the position is invalid.
				// Valid-1: Frame Joiner Indicator is in the same position as an existing Frame Joiner [OR]
				// Valid-2: Frame Joiner Indicator is not touching anything [OR]
				// Valid-3: Frame Joiner Indicator is intersecting an existing Frame Segment directly between its two Frame Joiners (will result in the existing Frame Segment being split into two shorter Frame Segments)
				// Invalid-1: Colliding with an existing Frame Segment off-centered
				public bool IsValidJoinerIndicator (GameObject joinerIndicator)
				{
					float frameJoinerSize = joinerIndicator.transform.localScale.x;
					Vector3 box = new Vector3 (frameJoinerSize / 2f, frameJoinerSize / 2f, frameJoinerSize / 2f); // Physics.OverlapBox doubles the dimensions of its passed Vector3, so the dimensons are halved beforehand

					// Check if a Frame Joiner already exists at this position
					Collider[] joinerColliders = Physics.OverlapBox (joinerIndicator.transform.position, box, Quaternion.identity, 1 << LayerMask.NameToLayer ("Frame Joiner"));
					if (joinerColliders.Length > 0) {
						joinerIndicator.GetComponentInChildren<Renderer> ().material = materialValid;
						return true;	// [VALID-1]: There is a joiner present at this location already. The rest of the function does not need to be executed as the position must be valid.
					}

					// Check if the Frame Joiner Intersects an existing Frame Segment exactly
					Collider[] segmentColliders = Physics.OverlapBox (joinerIndicator.transform.position, box, Quaternion.identity, 1 << LayerMask.NameToLayer ("Frame Segment Internal"));
					Vector3 lineStart, lineEnd;

					// For each Frame Segment hit, Linecast between its two Frame Joiners to see if the Joiner Indicator is on the line. If it is not, then it is not intersecting in a valid Location
					for (int i = 0; i < segmentColliders.Length; i++) {
						lineStart = segmentColliders [i].GetComponentInParent<FrameSegment> ().ReturnJoiner (0).transform.position;	// Get the position of the two Frame Joiners connected to the Frame Segment hit
						lineEnd = segmentColliders [i].GetComponentInParent<FrameSegment> ().ReturnJoiner (1).transform.position;

						if (!Physics.Linecast (lineStart, lineEnd, 1 << LayerMask.NameToLayer ("Frame Intersection"))) {	// The Linecast does not hit the Frame Indicator
							joinerIndicator.GetComponentInChildren<Renderer> ().material = materialInvalid;
							//Debug.Log ("Joiner Indicator Colliding with: " + segmentColliders [i].transform.parent.parent.name);
							return false;	// [INVALID-1]: Off-centered collision. Can return False even if it is intersecting one Frame Segment correctly, if another Frame Segment blocks it it is still an invalid position
						}
					}

					joinerIndicator.GetComponentInChildren<Renderer> ().material = materialValid;
					return true;	// [VALID-2] OR [VALID-3]: Joiner Indicator did not collide with anything OR is intersecting a Frame Segment in a valid location
				}

				// Returns True if the passed position is touching a frame segment (used to show the joiner indicator when hovering over an existing frame segment)
				public void IsBuilderTouchingFrameSegment (GameObject joiner) 
				{
					float frameJoinerSize = joiner.transform.localScale.x;
					Vector3 joinerBox = new Vector3 (frameJoinerSize / 2f, frameJoinerSize / 2f, frameJoinerSize / 2f);

					Collider[] segmentColliders = Physics.OverlapBox (joiner.transform.position, joinerBox, Quaternion.identity, 1 << LayerMask.NameToLayer ("Frame Segment Internal"));

					if (segmentColliders.Length > 0) {
						joiner.SetActive (true);
					} else {
						joiner.SetActive(false);
					}
				}

				// Returns a Frame Segment GameObject if it should be split. Returns null if there isnt a Frame Segment to split
				public GameObject FrameSegmentToSplit (GameObject centerJoiner)
				{
					float frameJoinerSize = centerJoiner.transform.localScale.x;
					Vector3 joinerBox = new Vector3 (frameJoinerSize / 2f, frameJoinerSize / 2f, frameJoinerSize / 2f);

					Collider[] segmentColliders = Physics.OverlapBox (centerJoiner.transform.position, joinerBox, Quaternion.identity, 1 << LayerMask.NameToLayer ("Frame Segment Internal"));
					Vector3 lineStart, lineEnd;

					if (segmentColliders.Length > 0) {
						lineStart = segmentColliders [0].GetComponentInParent<FrameSegment> ().ReturnJoiner (0).transform.position;	// Get the position of the two Frame Joiners connected to the Frame Segment hit
						lineEnd = segmentColliders [0].GetComponentInParent<FrameSegment> ().ReturnJoiner (1).transform.position;

						if (Physics.Linecast (lineStart, lineEnd, 1 << LayerMask.NameToLayer ("Frame Intersection"))) {	// The Linecast does not hit the Frame Indicator
							return segmentColliders [0].transform.parent.parent.gameObject;
						}
					}
					return null;
				}
			}
		}
	}
}