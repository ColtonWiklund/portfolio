using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Calculate how a 3 Vertex Panel should be drawn

namespace Player
{
	namespace Builder
	{
		namespace Panel 
		{
			[RequireComponent(typeof (MeshFilter))]
			[RequireComponent(typeof (MeshCollider))]
			public class Panel3 : MonoBehaviour 
			{
				public GameObject[] connectedJoiners;	// Keeps track of what Frame Joiners this panel is connected to

				private Mesh panelMesh;
				private Collider panelCollider;

				private Vector3 panelCenter;
				Vector3[] verticesPos;

				private int[] triangles;

				private float panelThickness = 0.08f; // Half of the thickness of the Panel
					
				public bool InitializePanel (GameObject[] frameJoiners)	// Sends both the vertices and the frame joiners instead of using gameObject.transform.position as the vertices array is sorted
				{
					Vector3 cross1 = frameJoiners [2].transform.position - frameJoiners [0].transform.position;
					Vector3 cross2 = frameJoiners [1].transform.position - frameJoiners [0].transform.position;

					Vector3 perp = (Vector3.Cross (cross1, cross2)).normalized * panelThickness;	// Calculate the perpendicular vector to the three frame joiner positions

					panelCenter = CalculatePanelCenter (frameJoiners);

					verticesPos = new Vector3[6];
					for (int i = 0; i < 3; i++) {
						verticesPos [i] = frameJoiners [i].transform.position - panelCenter + perp;
					}
					for (int i = 3; i < 6; i++) {
						verticesPos [i] = frameJoiners [i-3].transform.position - panelCenter - perp;
					}
                    
					triangles = new int[] {2, 1, 0, 3, 4, 5};

					panelMesh = GetComponent<MeshFilter> ().mesh;	// Draw the mesh once to set the Mesh Collider, then clear the Renderer's Mesh to stop it from showing
					panelMesh.vertices = verticesPos;
					panelMesh.triangles = triangles;
					GetComponent<MeshCollider> ().sharedMesh = panelMesh;
					panelMesh.Clear ();

					transform.localPosition = panelCenter - transform.parent.position;
					
					connectedJoiners = new GameObject[3];
					connectedJoiners = frameJoiners;
					return true;
				}

				// Redraw the Filters mesh if the PanelTrigger script detects the panel is not colliding with anything 
				public void DrawPanel() {
					panelMesh = GetComponent<MeshFilter> ().mesh;
					panelMesh.vertices = verticesPos;
					panelMesh.triangles = triangles;
					transform.localScale = new Vector3 (0.99f, 0.99f, 0.99f);	// Makes the panel slightly smaller to hide it inside a panel that already exists at this location
				}

				Vector3 CalculatePanelCenter (GameObject[] frameJoiners) {
					Vector3 maxPos = Vector3.Max (frameJoiners [0].transform.position, frameJoiners [1].transform.position);
					maxPos = Vector3.Max(maxPos, frameJoiners[2].transform.position);

					Vector3 minPos = Vector3.Min (frameJoiners [0].transform.position, frameJoiners [1].transform.position);
					minPos = Vector3.Min(minPos, frameJoiners[2].transform.position);

					Vector3 panelCenter = (minPos + maxPos) / 2;

					print ("Min: " + minPos.ToString() + ", Max: " + maxPos.ToString() + ", Center: " + panelCenter.ToString());
					return panelCenter;
				}
			}
		}
	}
}
