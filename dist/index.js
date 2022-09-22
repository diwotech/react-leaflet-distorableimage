'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@react-leaflet/core');
var L = require('leaflet');
require('leaflet-toolbar');
require('@diwotech/leaflet-distortableimage');
require('@diwotech/leaflet-distortableimage/dist/leaflet.distortableimage');
require('@diwotech/leaflet-distortableimage/dist/vendor.js');
require('leaflet/dist/leaflet.css');
require('leaflet-toolbar/dist/leaflet.toolbar.css');
require('@diwotech/leaflet-distortableimage/dist/leaflet.distortableimage.css');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var L__default = /*#__PURE__*/_interopDefaultLegacy(L);

function createDistortableImageOverlay(props, context) {
  const img = new L__default["default"].distortableImageOverlay(props.url, {
    mode: props.mode,
    actions: props.actions,
    selected: props.selected,
    suppressToolbar: props.suppressToolbar,
    zIndex: props.zIndex,
    corners: props.corners
  });
  img.on("update", () => {
    return props.onUpdate(img._corners);
  });
  return {
    instance: img,
    context
  };
}

function updateDistortableImageOverlay(overlay, props, prevProps) {
  core.updateMediaOverlay(overlay, props, prevProps);

  if (props.url !== prevProps.url) {
    overlay.setUrl(props.url);
  }
}

const ReactLeafletDistortableImage = core.createLayerComponent(createDistortableImageOverlay, updateDistortableImageOverlay);

exports.ReactLeafletDistortableImage = ReactLeafletDistortableImage;
//# sourceMappingURL=index.js.map
