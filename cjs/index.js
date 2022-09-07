"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDistortableImageoverlayMaplayer = _interopRequireDefault(require("./react-distortable-imageoverlay-maplayer"));

var _leaflet = _interopRequireDefault(require("leaflet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ReactDistortableImageOverlay = () => {
  // const[corners, setCorners] = useState([L.latLng, L.latLng, L.latLng, L.latLng])
  return (
    /*#__PURE__*/
    // <ReactDistortableImageOverlayMapLayer 
    //   url={this.props.url}
    //   opacity={this.props.opacity}
    //   corners={this.state.corners}
    //   editMode={this.props.editMode}
    //   onUpdate={this.onUpdate.bind(this)}
    // />
    _react.default.createElement(_reactDistortableImageoverlayMaplayer.default // url={this.props.url}
    // opacity={this.props.opacity}
    // corners={this.state.corners}
    // editMode={this.props.editMode}
    // onUpdate={this.onUpdate.bind(this)}
    , null)
  );
};

var _default = ReactDistortableImageOverlay;
exports.default = _default;