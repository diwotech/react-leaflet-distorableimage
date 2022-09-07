"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@react-leaflet/core");

var _leaflet = require("leaflet");

// import L from "leaflet";
// import "./lib/leaflet-distortableimage";
// import "./lib/leaflet-path-transform";
// const ReactDistortableImageOverlayMapLayer = ({
//   url,
//   corners,
//   options,
//   opacity,
//   editMode,
//   onUpdate
// }) => {
//   let distortableImage = null;
//   const map = useMap();
//   const createLeafletElement = () => {
//     distortableImage = new L.DistortableImageOverlay(url, options);
//     L.DomEvent.on(
//       distortableImage,
//       "load",
//       () => {
//         distortableImage._image.style.opacity = opacity;
//         handleEditModeState(editMode);
//       },
//       distortableImage
//     );
//     distortableImage.on(
//       "edit",
//       update => {
//         onUpdate(update.sourceTarget._corners);
//       },
//       distortableImage
//     );
//     return distortableImage;
//   };
//   const updateLeafletElement = (fromProps, toProps) => {
//     // Keep map ref before removing so we can addLayer when the LeafletElement is recreated
//     distortableImage.onRemove();
//     // The translation state behaves differently from the rotate and distort (uses leaflet-path-transform)
//     // We hold the translated corners in a local var and wipe it after each translation
//     if (translateUpdateCorners !== undefined) {
//       distortableImage = new L.DistortableImageOverlay(toProps.url, {
//         corners: translateUpdateCorners
//       });
//       translateUpdateCorners = undefined;
//     } else {
//       distortableImage = new L.DistortableImageOverlay(
//         toProps.url,
//         getOptions(toProps)
//       );
//     }
//     2;
//     // Apply opacity after the image loads
//     L.DomEvent.on(
//       distortableImage,
//       "load",
//       () => {
//         distortableImage._image.style.opacity = props.opacity;
//       },
//       distortableImage
//     );
//     // Re-add the update listener
//     distortableImage.on(
//       "edit",
//       update => {
//         props.onUpdate(update.sourceTarget._corners);
//       },
//       distortableImage
//     );
//     map.addLayer(distortableImage);
//     endTranslate();
//     handleEditModeState(toProps.editMode);
//   };
//   const handleEditModeState = editMode => {
//     switch (editMode) {
//       case "rotate":
//         distortableImage.editing.enable();
//         distortableImage.editing._toggleRotateDistort();
//         distortableImage._image.style.opacity = props.opacity;
//         break;
//       case "distort":
//         distortableImage.editing.enable();
//         distortableImage._image.style.opacity = props.opacity;
//         break;
//       case "translate":
//         startTranslate();
//         break;
//       case "scale":
//         distortableImage.editing.enable();
//         distortableImage.editing._toggleScale();
//         distortableImage._image.style.opacity = props.opacity;
//         break;
//       default:
//         distortableImage.editing.disable();
//         distortableImage._image.style.opacity = props.opacity;
//     }
//   };
//   const startTranslate = () => {
//     const corners = distortableImage.getCorners();
//     // DistortableImageOverlay corners have different ordering from L.Polygon bounds
//     var polygonDragCorners = [corners[0], corners[1], corners[3], corners[2]];
//     translatePolygon = new L.Polygon(polygonDragCorners, {
//       draggable: true,
//       transform: true,
//       color: "red",
//       fill: true
//     });
//     distortableImage._image.style.opacity = opacity;
//     translatePolygon.transform.enable();
//     translatePolygon.on("dragend", event => {
//       const latlngs = event.target.getLatLngs()[0];
//       const newImageCorners = [latlngs[0], latlngs[1], latlngs[3], latlngs[2]];
//       // Without this timeout it crashes trying to access the map ref of a removed element.
//       // Not sure why..
//       setTimeout(() => {
//         onUpdate(newImageCorners);
//       }, 10);
//       map.removeLayer(distortableImage);
//       distortableImage = new L.DistortableImageOverlay(url, {
//         corners: newImageCorners
//       });
//       distortableImage.addTo(map);
//       distortableImage._image.style.opacity = opacity;
//       translateUpdateCorners = newImageCorners;
//     });
//     translatePolygon.addTo(map);
//   };
//   const endTranslate = () => {
//     if (translatePolygon) {
//       map.removeLayer(translatePolygon);
//     }
//   };
//   return null;
// };
// export default ReactDistortableImageOverlayMapLayer;
// const ReactDistortableImageOverlayMapLayer = ({
//   url,
//   corners,
//   options,
//   opacity,
//   editMode,
//   onUpdate
// }) => {
// };
// export default ReactDistortableImageOverlayMapLayer;
const MyImageOverlay = (0, _core.createLayerComponent)(function createImageOveraly(_ref, ctx) {
  let {
    bounds,
    url,
    ...options
  } = _ref;
  const overlay = new _leaflet.ImageOverlay(url, bounds, options);
  return (0, _core.createElementObject)(overlay, (0, _core.extendContext)(ctx, {
    overlayContainer: overlay
  }));
}, function updateImageOverlay(overlay, props, prevProps) {
  (0, _core.updateMediaOverlay)(overlay, props, prevProps);

  if (props.url !== prevProps.url) {
    overlay.setUrl(props.url);
  }
});
var _default = MyImageOverlay;
exports.default = _default;