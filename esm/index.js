import React, { useState } from 'react';
import MyImageOverlay from './react-distortable-imageoverlay-maplayer';
import L from 'leaflet';

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
    React.createElement(MyImageOverlay // url={this.props.url}
    // opacity={this.props.opacity}
    // corners={this.state.corners}
    // editMode={this.props.editMode}
    // onUpdate={this.onUpdate.bind(this)}
    , null)
  );
};

export default ReactDistortableImageOverlay;