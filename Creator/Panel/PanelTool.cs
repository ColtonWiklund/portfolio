using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Panels fill in the space between 3 connected Vertices
// The tool will generate all potential valid panels and collision check them to see if they are conflicting with an existing Frame Segment or Panel
// All valid panels will be shown as Indicators, show that a panel can be built at the shown location
// If an Indicator is then selected, a Panel will be instantiated at that location
// ** TODO: 4 Vertex Panels **

namespace Player
{
	namespace Builder
	{
		namespace Panel 
		{
			public class PanelTool : MonoBehaviour 
			{
				private PlayerInfo playerInfoScript;

				public GameObject panel3Prefab;
				public GameObject panel4Prefab;

				public Material materialHover;
				private Material materialHoverPrevious;
				public Material materialSelect;
				private Material materialSelectPrevious;

				public Material materialPanelBuild;

				private Camera playerCam;
				public GameObject panelIndicatorParentPrefab;
				private GameObject panelIndicatorParent;

				private GameObject hoverFrameJoiner;
				private GameObject activeFrameJoiner;

				private int panel3Count = 0;
				private int panel4Count = 0;

				List<Vector3[]> validPanel3 = new List<Vector3[]> ();
				List<Vector3[]> validPanel4 = new List<Vector3[]> ();

				void Start () 
				{
					playerInfoScript = GetComponentInParent<PlayerInfo> ();
					playerCam = GetComponentInChildren<Camera> ();
				}

				public void PanelToolUpdate ()
				{
					if (Input.GetButtonDown ("Fire1")) {	// left click to add vertices. When 3 or 4 vertices are added, created a panel
						RaycastHit hit;
						Ray ray = new Ray (playerCam.transform.position, playerCam.transform.TransformDirection (Vector3.forward));
						if (Physics.Raycast (ray, out hit, 8f, (1 << LayerMask.NameToLayer ("Frame Joiner")) | (1 << LayerMask.NameToLayer("Panel Indicator")))) {
							if (hit.collider.gameObject.layer == LayerMask.NameToLayer("Frame Joiner")) {
								if (activeFrameJoiner != null) {	// Change the material back to its original when selecting a new Frame Joiner
									ClearSelection ();
								}
								if (hit.collider.gameObject != activeFrameJoiner) {	// The same Framer Joiner can only be selected once
									ResetHover ();
									activeFrameJoiner = hit.collider.gameObject;
									materialSelectPrevious = activeFrameJoiner.GetComponent<Renderer> ().material;
									activeFrameJoiner.GetComponent<Renderer> ().material = materialSelect;
									PanelBranchSearch ();
								}
							} else {
								BuildPanel (hit.collider.gameObject);
							}
						} 
					} else if (Input.GetButtonDown ("Fire2")) {	// right click to clear vertices
						ClearSelection ();
					} else {
						RaycastHit hit;
						Ray ray = new Ray(playerCam.transform.position,playerCam.transform.TransformDirection (Vector3.forward));
						if (Physics.Raycast (ray, out hit, 8f, (1 << LayerMask.NameToLayer ("Frame Joiner")) | (1 << LayerMask.NameToLayer("Panel Indicator")))) {
							if (hit.collider.gameObject != hoverFrameJoiner && hit.collider.gameObject != activeFrameJoiner) {
								SetHover (hit.collider.gameObject);
							}
						} else if (hoverFrameJoiner != null) {
							ResetHover ();
						}
					}
				}

				// Find all possible Panel configurations connected to this Frame Joiner
				private void PanelBranchSearch () {
					Frame.FrameJoiner baseJoinerScript = activeFrameJoiner.GetComponent<Frame.FrameJoiner>();
					List<GameObject> firstStepJoiners = baseJoinerScript.GetConnectedJoinersList ();

					panelIndicatorParent = Instantiate (panelIndicatorParentPrefab);
					panelIndicatorParent.transform.position = playerInfoScript.GetEditiongCreation ().transform.position;

					foreach (GameObject node1 in firstStepJoiners)	// Frame Joiners connected to the selected Frame Joiner
					{
						foreach (GameObject node2 in node1.GetComponent<Frame.FrameJoiner>().GetConnectedJoinersList()) {
							// The second step cannot be back to the selected Frame Joiner
							if (node2 != activeFrameJoiner) {	
								foreach (GameObject node3 in node2.GetComponent<Frame.FrameJoiner>().GetConnectedJoinersList()) {	
									if (node3 == activeFrameJoiner) {	// If the third step reaches back the original Frame Joiner, it produces a Panel with three vertices
										Vector3[] array = new Vector3[] {
											activeFrameJoiner.transform.position,	// Uses world position so no two panels can have the same coorindates without actually being equal
											node1.transform.position,
											node2.transform.position
										};
										array = SortVector3Array (array);	// Vector3 values are sorted before being added so Enumerable.SequenceEqual() will find duplicate Panels

										bool addPanel3 = true;
										for (int i = 0; i < validPanel3.Count; i++) {
											if (System.Linq.Enumerable.SequenceEqual (validPanel3 [i], array)) {	// If the panel already exists in the List, dont add it
												addPanel3 = false;
											}
										}
										if (addPanel3 == true) {
											validPanel3.Add (array);

											GameObject[] frameJoiners = new GameObject[] {
												activeFrameJoiner,
												node1,
												node2
											};

											if (CreatePanel3 (frameJoiners) == true) {	// Panels are created from Frame Joiners as they need local position, not world position as used by the vector3 array
												//print ("Created Panel 3");
											}
										}
									}
									// ----------- TODO: Panel 4 Functionality -------------------
//									else if (node3 != node1 && node3 != activeFrameJoiner) {
//										foreach (GameObject node4 in node3.GetComponent<Frame.FrameJoiner>().GetConnectedJoinersList()) {
//											if (node4 == activeFrameJoiner) {
//												Vector3[] array = new Vector3[] {
//													activeFrameJoiner.transform.position,
//													node1.transform.position,
//													node2.transform.position,
//													node3.transform.position
//												};
//												array = SortVector3Array (array);
//												bool addPanel4 = true;
//												for (int i = 0; i < validPanel3.Count; i++) {
//													if (System.Linq.Enumerable.SequenceEqual (validPanel4 [i], array)) {	// If the panel already exists in the List, dont add it
//														addPanel4 = false;
//													}
//												}
//												if (addPanel4 == true) {
//													validPanel4.Add (array);
//
//													GameObject[] frameJoiners = new GameObject[] {
//														activeFrameJoiner,
//														node1,
//														node2,
//														node3
//													};
//
//													if (CreatePanel4 (frameJoiners) == true) {	// Panels are created from Frame Joiners as they need local position, not world position as used by the vector3 array
//														//print ("Created Panel 3");
//													}
//												}
//											}
//										}
//									}
									// -----------------------------------------------------------
								}
							}
						}
					}
					for (int i = 0; i < validPanel3.Count; i++) {
						Debug.Log ("Panel 3: " + i + ": " + validPanel3[i][0] + ", " + validPanel3[i][1] + ", " + validPanel3[i][2]);
					}
					for (int i = 0; i < validPanel4.Count; i++) {
						Debug.Log ("Panel 4: " + i + ": " + validPanel4[i][0] + ", " + validPanel4[i][1] + ", " + validPanel4[i][2] + ", " + validPanel4[i][3]);
					}
				}

				// Create a panel from three Vector3 positions. Returns TRUE if the panel was sucessfully created and FALSE if the panel was colliding with an object and therefore destroyed
				private bool CreatePanel3 (GameObject[] frameJoiners) 
				{
					GameObject panel = Instantiate (panel3Prefab, Vector3.zero, Quaternion.identity, panelIndicatorParent.transform);
					panel.name = "Panel_3-" + panel3Count.ToString();
					panel3Count++;
					panel.GetComponent<Panel3> ().InitializePanel (frameJoiners);
					return true;
				}
				private bool CreatePanel4 (GameObject[] frameJoiners)
				{
					GameObject panel = Instantiate (panel4Prefab, Vector3.zero, Quaternion.identity, panelIndicatorParent.transform);
					panel.name = "Panel_4-" + panel4Count.ToString();
					panel4Count++;
					panel.GetComponent<Panel4> ().InitializePanel (frameJoiners);
					return true;
				}

				// Convert a panel indicator into a real panel on the Creation
				private void BuildPanel (GameObject panel) {
					ResetHover ();
					Destroy (panel.GetComponent<Rigidbody> ());
					Destroy (panel.GetComponent<PanelTrigger> ());
					panel.GetComponent<MeshCollider> ().isTrigger = false;
					panel.transform.localScale = new Vector3 (1f, 1f, 1f);
					panel.layer = LayerMask.NameToLayer ("Panel");
					panel.transform.SetParent (playerInfoScript.GetEditiongCreation ().transform);
					panel.GetComponent<Renderer> ().material = materialPanelBuild;
				}

				// Sort an array of Vectors based on smallest x, y, and z values with that priority
				private Vector3[] SortVector3Array (Vector3[] positions) 
				{
					int length = positions.Length;
					//print ("Sorting Array Length: " + length);
					for (int q = 0; q < length; q++) {
						//print ("--- q: " + q + ", i: " + (length - 1) + " ---");
						for (int i = (length - 1); i >= q && i != 0; i--) {
							//print ("q: " + q + " , i: " + i);
							if (Vector3Compare (positions [i], positions [i - 1]) == positions [i]) {	// Ex. If pos[3] is smaller than pos[2], switch their positions
								//print (positions [i] + " is smaller than " + positions [i - 1]);
								Vector3 temp = positions [i - 1];
								positions [i - 1] = positions [i];
								positions [i] = temp;
							} else {
								//print (positions [i] + " is larger than " + positions [i - 1]);
							}
						}
					}
					return positions;
				}

				// Returns the lower Vector3, order by smallest x -> smallet y -> smallest z
				private Vector3 Vector3Compare(Vector3 vec1, Vector3 vec2)
				{
					if (vec1.x < vec2.x) {
						return vec1;
					} else if(vec1.x == vec2.x) {
						if(vec1.y < vec2.y) {
							return vec1;
						} else if(vec1.y == vec2.y) {
							if(vec1.z < vec2.z){
								return vec1;
							} else if(vec1.z == vec2.z) {
								return vec1;
							} else {
								return vec2;
							}
						} else {
							return vec2;
						}
					} else {
						return vec2;
					}
				}

				private void ClearSelection () {
					if (activeFrameJoiner != null) {
						activeFrameJoiner.GetComponent<Renderer> ().material = materialSelectPrevious;
						activeFrameJoiner = null;
					}
					Destroy (panelIndicatorParent);
					validPanel3.Clear ();
					validPanel4.Clear ();
				}

				// Set the passed gameObject to the hover over material to indicate the cursor is over it
				private void SetHover (GameObject hover) {
					ResetHover ();	// Change the previous gameObject back to its regular material
					materialHoverPrevious = hover.GetComponent<Renderer> ().material;
					hover.GetComponent<Renderer> ().material = materialHover;
					hoverFrameJoiner = hover;
				}

				// Reset the gameObject previously being hovered over back to its default material
				private void ResetHover () {
					if (hoverFrameJoiner != null) {
						hoverFrameJoiner.GetComponent<Renderer> ().material = materialHoverPrevious;
						hoverFrameJoiner = null;
					}
				}

				public void TerminatePanelTool () {
					ClearSelection();

					if (hoverFrameJoiner != null) {
						print ("Reseting Hover Material");
						hoverFrameJoiner.GetComponent<Renderer> ().material = materialHoverPrevious;
						hoverFrameJoiner = null;
					}
				}
			}
		}
	}
}
