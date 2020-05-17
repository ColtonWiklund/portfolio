using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// The Frame Joiner hides where Frame Segments overlap.
// When a new Frame Segment or Panel is created that connects to this Joiner, it must be added to the respective list to show it is connected
// If all Frame Segments used by this Joiner are deleted, this Joiner is deleted in the process

namespace Player
{
	namespace Builder
	{
		namespace Frame
		{
			public class FrameJoiner : MonoBehaviour {

				private List<GameObject> connectedJoiners = new List<GameObject> ();		// all Frame Joiners connected to this Frame Joiner via a Frame Segment
				private List<GameObject> connectedSegments = new List<GameObject>();	// all Frame Segments connected to this Frame Joiner
				private List<GameObject> connectedPanels = new List<GameObject> ();		// all Panels that use this Frame Joiner

				private float materialDensity = 75f;	// kg/m^3

				public float weight {
					get { 
						return transform.localScale.x * transform.localScale.y * transform.localScale.z * materialDensity;
					}
				}

				public void UpdateParentMass () {
					GetComponentInParent<Creation.CreationInfo> ().Mass += weight;
				}

				// add a frame segment connected to this joiner
				public void AddSegment (GameObject segment) {
					if (connectedSegments.Contains (segment) == false) {
						connectedSegments.Add (segment);
					} else {
						print ("Error: " + segment.name + " already connected to " + this.name);
					}
				}

				// remove a frame segment connected to this joiner, and deletes the frame joiner if no frame segments overlap it anymore
				public void RemoveSegment (GameObject segment) {
					if (connectedSegments.Contains (segment) == true) {
						connectedSegments.Remove (segment);
						RemoveJoiner (segment);
					} else {
						print ("Error: " + segment.name + " is not connected to " + this.name);
					}

					if (connectedSegments.Count == 0) {
						Destroy (this.gameObject);
					}
				}

				// Add the other Frame Joiner connected to this Frame Segment (every Frame Segment has two Frame Joiners, one of them is this one, the other is added to this List)
				public void AddJoiner (GameObject frameSegment) {
					if (frameSegment.GetComponent<FrameSegment> ().ReturnJoiner (0) != this.gameObject) {
						connectedJoiners.Add (frameSegment.GetComponent<FrameSegment> ().ReturnJoiner (0));
					} else {
						connectedJoiners.Add (frameSegment.GetComponent<FrameSegment> ().ReturnJoiner (1));
					}
				}

				public void RemoveJoiner (GameObject frameSegment) {
					if (connectedJoiners.Contains (frameSegment.GetComponent<FrameSegment> ().ReturnJoiner (0)) == true) {
						connectedJoiners.Remove (frameSegment.GetComponent<FrameSegment> ().ReturnJoiner (0));
					} else {
						connectedJoiners.Remove (frameSegment.GetComponent<FrameSegment> ().ReturnJoiner (1));
					}
				}

				public List<GameObject> GetConnectedJoinersList () {
					return connectedJoiners;
				}

				// add a panel that is connected to this joiner
				public void AddPanel (GameObject panel) {
					
				}

				// remove a panel connected to this joiner
				public void RemovePanel (GameObject panel) {
					
				}

				public void DeleteJoiner () {
					foreach (GameObject segment in connectedSegments) {
						segment.GetComponent<FrameSegment> ().DeleteSegment ();
					}
					foreach (GameObject panel in connectedPanels) {
						//panel.GetComponent<Panel> ().DeletePanel ();
					}
					GetComponentInParent<Creation.CreationInfo> ().Mass -= weight;
				}
			}
		}
	}
}
