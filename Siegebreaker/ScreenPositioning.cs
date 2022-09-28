using UnityEngine;
using UnityEngine.UI;

namespace TowerDefense
{
    /// <summary> Functions that assist in positioning UI elements relative to the screen. </summary>
    public static class ScreenPositioning
    {
        /// <summary> Calculate the center position of a rect transform relative to its anchor position. </summary>
        public static Vector2 GetPositionOfRectTransform(RectTransform transform, Vector2 anchors, bool usingWorldSpace, Camera camera, CanvasScaler canvasScaler)
        {
            // the four corners of the rect transform in pixel coorindates (X: 0 to Screen Res - X, Y: 0 - Screen Res - Y);
            Vector3[] corners = new Vector3[4];
            transform.GetWorldCorners(corners);

            // convert the world position to screen space if required (for canvases that aren't 'Screen Space - Overlay')
            if (usingWorldSpace)
                for (int i = 0; i < corners.Length; i++)
                    corners[i] = camera.WorldToScreenPoint(corners[i]);

            // calculate the center of this rect transform (centerPos.x = the average of the x values, centerPos.y = the average of the y values)
            // v[0] is the bottom left corner of the rect transform v[2] is the top right corner
            Vector2 centerPos = new Vector2(corners[0].x + ((corners[2].x - corners[0].x) / 2f), corners[0].y + ((corners[2].y - corners[0].y) / 2f));

            // the position of the caller's anchor in pixel coorindates
            var anchorPos = new Vector2(camera.scaledPixelWidth * anchors.x, camera.scaledPixelHeight * anchors.y);

            // the position of the rect transform relative to its anchor
            Vector2 offsetPos = centerPos - anchorPos;

            // scale offsetPos relative to the ratio of the reference screen size (currently 2560x1440) to the current screen size
            float canvasScaleX = canvasScaler.referenceResolution.x / camera.scaledPixelWidth; // Ex. Ref Width = 2560, Current Width = 1920, Scale = 1.33
            float canvasScaleY = canvasScaler.referenceResolution.y / camera.scaledPixelHeight;
            Vector2 scaledOffsetPos = new Vector2(offsetPos.x * canvasScaleX, offsetPos.y * canvasScaleY);

            return scaledOffsetPos;
        }
    }
}