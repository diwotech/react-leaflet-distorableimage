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

const ReactLeafletDistortableImage = core.createLayerComponent(function createImageOverlay({
  url,
  corners,
  mode,
  selected,
  actions,
  suppressToolbar,
  zIndex
}, ctx) {
  const instance = new L__default["default"].distortableImageOverlay(url, {
    mode,
    actions,
    selected,
    suppressToolbar,
    zIndex,
    corners
  });
  return {
    instance,
    context: { ...ctx,
      overlayContainer: instance
    }
  };
}, function updateImageOverlay(overlay, props, prevProps) {
  core.updateMediaOverlay(overlay, props, prevProps);

  if (props.url !== prevProps.url) {
    overlay.setUrl(props.url);
  }
});

exports.ReactLeafletDistortableImage = ReactLeafletDistortableImage;
//# sourceMappingURL=index.js.map
