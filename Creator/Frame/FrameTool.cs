using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Creates Frame Segments and Frame Joiners as specified by the player
// Frame Segment: Connects two points in world space together with a rectangular prism
// Frame Joiner: Placed on the end of each Frame Segment to indiciate where additional Frame segments can be connected

namespace Player
{
	namespace Builder
	{
		namespace Frame
		{
			public class FrameTool : MonoBehaviour {

				private PlayerInfo playerInfoScript;
				private BuilderMovement	builderMovementScript;

				private Transform builder;

				public GameObject creationPrefab;	// Master Creation prefab, holds all Frame components, Panels, Equipment, & Connections
				public GameObject segmentPrefab;
				public GameObject joinerPrefab;

				public GameObject segmentIndicator;	// Indicator prefabs. Show where the Frame Segments & Joiners will be built. Hidden while not in use.
				public GameObject joinerIndicatorStart;
				public GameObject joinerIndicatorEnd;
				private FrameSegment segmentIndicatorFrameSegmentScript;

				private int creationCount = 0;	// How many creations have been made
				private int segmentCount = 0;	// How many Segments/Joiners have been built for naming purposes
				private int joinerCount = 0;

				public bool buildPositionValid = false;	// Is the frame segment in a valid position? (not colliding with other frame segments)
				public Material materialValid;			// Indicator material when frame segment is in a valid build position
				public Material materialInvalid;		// Invalid build position

				private Vector3 startPos;				// Frame segments are built between startPos and buildPosition
				private Vector3 offsetVector = new Vector3 (0f, 0.125f, 0f);		// The builder is set at increments of 0.5m, the blocks sit 0.125 higher than the builder
				private Vector3 emptyVector = new Vector3 (0.123f, 0.456f, 0.789f);	// Default value of startPos when a starting position has not been selected

				private FrameToolIntersection intersectionScript = new FrameToolIntersection();

				private float frameJoinerSize;

				private Vector3 buildPosition {	// position of the builder + 0.125m, this is where all frame segments and joiners are built
					get { 
						return builder.position + offsetVector;
					}
				}
				
				void Start () {
					playerInfoScript = GetComponentInParent<PlayerInfo> ();
					builderMovementScript = GetComponent<BuilderMovement> ();
					segmentIndicatorFrameSegmentScript = segmentIndicator.GetComponent<FrameSegment> ();

					intersectionScript.materialValid = materialValid;
					intersectionScript.materialInvalid = materialInvalid;

					frameJoinerSize = joinerIndicatorStart.transform.localScale.x;	// returns the size of the frame joiner cube length (0.375m)

					builder = this.gameObject.transform;
					startPos = emptyVector;
				}

				// Select build positions with left click. When two valid build positions have been selected, build a frame segment (and necessary joiners) between them
				public void FrameToolUpdate () 
				{
					if (!builderMovementScript.isMoving)	// builder can't be moving when placing frame segments
					{
						if (Input.GetButtonDown ("Fire1"))	// on left click
						{
							if (startPos == emptyVector)	// startPos is not currently set
							{
								startPos = buildPosition;

								if (playerInfoScript.GetEditiongCreation() == null)	{	// create a new Creation if the player is not editing one already
									GameObject creation = Instantiate (creationPrefab, startPos, Quaternion.identity);
									creation.name = "Creation-" + creationCount.ToString ();
									creationCount++;
									playerInfoScript.SetEditingCreation (creation);
								}
								ShowIndicators (emptyVector);
							} 
							else if (buildPosition != startPos && buildPositionValid)	// Build the frame segement. A segment can not be built with no length (ex: between (1, 2.5, 2) and (1, 2.5, 2))
							{
								BuildSegment (startPos, buildPosition);
								startPos = buildPosition;
								UpdateIndicatorPositions ();
							}
						}	
					}
					if (Input.GetButtonDown("Fire2")) // on right click, clear the build positions and frame segment indicators
					{
						HideIndicators (true);
						intersectionScript.IsBuilderTouchingFrameSegment (joinerIndicatorEnd);
					}
				}

				// Build a Frame Segment from pos1 to pos2 and necessary Frame Joiners. If the joiners intersect an existing valid frame segment, that frame segment is divided into two smaller frame segments
				void BuildSegment (Vector3 pos1, Vector3 pos2) 
				{
					GameObject joiner1 = FindJoiner (pos1);	
					GameObject joiner2 = FindJoiner (pos2);

					GameObject segment = Instantiate (segmentPrefab, pos1, Quaternion.identity, playerInfoScript.GetEditiongCreation ().transform);
					FrameSegment frameSegmentScript = segment.GetComponent<FrameSegment> ();
					frameSegmentScript.SetTransform (pos1, pos2);

					playerInfoScript.GetEditiongCreation ().GetComponent<Creation.CreationInfo> ().Mass += frameSegmentScript.weight;

					segment.name = "Segment-" + segmentCount.ToString ();
					segmentCount++;

					frameSegmentScript.AddJoiner (joiner1);	// Set the connected Frame Joiners to be connected to this Frame Segment
					frameSegmentScript.AddJoiner (joiner2);

					frameSegmentScript.SetJoinerNeighbors ();	// Set the Frame Joiners to know they're connected through the Frame Segment
				}

				// Return the joiner present at the location. If one doesn't exit, create a new one and return that.
				GameObject FindJoiner (Vector3 pos)
				{
					GameObject joiner = null;
					Collider[] hitJoiners = Physics.OverlapBox (pos, new Vector3 (frameJoinerSize/2, frameJoinerSize/2, frameJoinerSize/2), Quaternion.identity, 1 << LayerMask.NameToLayer("Frame Joiner"));
						
					if (hitJoiners.Length == 0) {	// If there isn't a Frame Joiner at this location, create a new one
						joiner = Instantiate (joinerPrefab, pos, Quaternion.identity, playerInfoScript.GetEditiongCreation ().transform);
						joiner.GetComponent<FrameJoiner> ().UpdateParentMass ();
						joiner.name = "Joiner-" + joinerCount.ToString ();
						joinerCount++;

						GameObject toSplit = intersectionScript.FrameSegmentToSplit (joiner);	// Returns a Frame Segment if it should be split, otherwise returns null
						if (toSplit != null) {
							SplitFrameSegment (toSplit, joiner);
						}
					} else {	// If there is a Frame Joiner at this location, return the first Joiner hit (there should only ever be one hit)
						joiner = hitJoiners [0].gameObject;
					}
					return joiner;
				}

				// Change the position of the segment indicator (called while the Builder is moving to animate frame segment length/rotation/position changes)
				public void UpdateIndicatorPositions ()
				{
					if (startPos != emptyVector) {
						segmentIndicatorFrameSegmentScript.SetTransform (startPos, buildPosition);
						joinerIndicatorStart.transform.position = startPos;
						joinerIndicatorEnd.transform.position = buildPosition;
					} else {	
						intersectionScript.IsBuilderTouchingFrameSegment (joinerIndicatorEnd);	// joinerIndicatorEnd is enabled if the builder is hovering over a frame segment, even if startPos is empty
					}

					if (builderMovementScript.isMoving == false) {
						buildPositionValid = intersectionScript.IsValidSegmentIndicator (segmentIndicator);
						if (intersectionScript.IsValidJoinerIndicator (joinerIndicatorStart) == false) {		// Returns True if the indicator is in a valid position
							buildPositionValid = false;
						}
						if (intersectionScript.IsValidJoinerIndicator (joinerIndicatorEnd) == false) {
							buildPositionValid = false;
						}
					}
				}

				// Show the frame tool indicators and change their parents to the active creation (keeps them fixed in place while the builder is moving)
				public void ShowIndicators (Vector3 optionalPos)	// Allows the frame tool to be initialized with a startPos
				{
					if (optionalPos != emptyVector) {
						startPos = optionalPos;
					}
					if (startPos != emptyVector) {	// ShowFrameTool() should never be called while startPos == emptyVector
						segmentIndicator.transform.SetParent (playerInfoScript.GetEditiongCreation ().transform);
						segmentIndicatorFrameSegmentScript.ResetTransform ();
						segmentIndicator.transform.position -= new Vector3 (0f, 0.125f, 0f);	// reduces the segment indicators height by 0.125f as ResetTransform() sets it back to 0.125f by default
						segmentIndicator.GetComponentInChildren<Renderer> ().material = materialValid;
						segmentIndicator.SetActive (true);

						joinerIndicatorStart.transform.SetParent (playerInfoScript.GetEditiongCreation ().transform);
						joinerIndicatorStart.transform.position = startPos;
						joinerIndicatorStart.SetActive (true);

						joinerIndicatorEnd.transform.position = startPos;
						joinerIndicatorEnd.SetActive (true);
					}
				}

				// Hide the tool indicators and change their parents back to the builder while not in use
				public void HideIndicators (bool showSegmentIndicator)
				{
					segmentIndicator.transform.SetParent (builder);
					segmentIndicatorFrameSegmentScript.ResetTransform ();
					segmentIndicator.GetComponentInChildren<Renderer> ().material = materialValid;

					if (showSegmentIndicator) {
						segmentIndicator.SetActive (true);
					} else {
						segmentIndicator.SetActive (false);
					}

					joinerIndicatorStart.transform.SetParent (builder);
					joinerIndicatorStart.transform.localPosition = new Vector3 (0f, 0.125f, 0f);
					joinerIndicatorStart.SetActive (false);
					intersectionScript.IsBuilderTouchingFrameSegment (joinerIndicatorStart);

					joinerIndicatorEnd.transform.localPosition = new Vector3 (0f, 0.125f, 0f);
					joinerIndicatorEnd.SetActive (false);

					startPos = emptyVector;
				}

				// Split a Frame Segment into two smaller Frame Segments running from its original Frame Joiners plus a new center Joiner
				public void SplitFrameSegment (GameObject splitSegment, GameObject centerJoiner) 
				{
					GameObject joiner1 = splitSegment.GetComponent<FrameSegment> ().ReturnJoiner (0);	// Get the two joiners the new Frame Segments should connect to (joiner1 <-> centerJoiner <-> joiner2)
					GameObject joiner2 = splitSegment.GetComponent<FrameSegment> ().ReturnJoiner (1);

					GameObject segment1 = MonoBehaviour.Instantiate (segmentPrefab, playerInfoScript.GetEditiongCreation ().transform);
					segment1.name = "Segment-" + segmentCount.ToString ();
					segmentCount++;

					FrameSegment segmentScript = segment1.GetComponent<FrameSegment> ();
					segmentScript.SetTransform (joiner1.transform.position, centerJoiner.transform.position);
					segmentScript.AddJoiner (joiner1);
					segmentScript.AddJoiner (centerJoiner);
					segmentScript.SetJoinerNeighbors ();

					GameObject segment2 = MonoBehaviour.Instantiate (segmentPrefab, playerInfoScript.GetEditiongCreation ().transform);
					segment2.name = "Segment-" + segmentCount.ToString ();
					segmentCount++;

					segmentScript = segment2.GetComponent<FrameSegment> ();
					segmentScript.SetTransform (joiner2.transform.position, centerJoiner.transform.position);
					segmentScript.AddJoiner (joiner2);
					segmentScript.AddJoiner (centerJoiner);
					segmentScript.SetJoinerNeighbors ();

					splitSegment.GetComponent<FrameSegment> ().DeleteSegment ();
				}
			}
		}
	}
}
