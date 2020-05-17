using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Creates a volume the same size as the panel and check if it collides with any Frame Segments or Panels
// If it doesn't, a Panel may be built at the location
// If it does, the Indicator Panel is destroyed preventing players from building a Panel at the location

namespace Player
{
	namespace Builder
	{
		namespace Panel 
		{
			public class PanelTrigger : MonoBehaviour {

				private int contactedObjects = 0;
				private int timeDelay = 0;

				// OnTrigger enter will detect any collisions on the first physics update. On the second delete this script and show the panel
				void FixedUpdate() {
					timeDelay++;
					if (timeDelay == 2) {
						this.gameObject.GetComponent<Panel3> ().DrawPanel ();
						print ("No Collisions Found, deleting trigger script");
						Destroy (this);
					}
				}

				void OnTriggerEnter (Collider objectCollider) {
					contactedObjects++;
					if (contactedObjects > 6) {
						print ("Panel contacting: " + objectCollider.name + ", Destroying Panel: " + this.gameObject.name);
						Destroy (gameObject);
					}
				}
			}
		}
	}
}
