import React from "react";
import ReactDistortableImageOverlayComponent from "./react-distortable-imageoverlay-maplayer";

const ReactDistortableImageOverlay = ({ url, mode, actions, selected, suppressToolbar, zIndex, corners, onUpdate }) => {
  return (
    <ReactDistortableImageOverlayComponent
      url={url}
      mode={mode}
      actions={actions}
      selected={selected}
      suppressToolbar={suppressToolbar}
      zIndex={zIndex}
      corners={corners}
      onUpdate={onUpdate}
    />
  );
};

export default ReactDistortableImageOverlay;

