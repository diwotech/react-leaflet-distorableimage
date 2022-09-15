import React, { useState } from "react";
import { MyComponent } from "@diwotech/testlib";
import { MapContainer, TileLayer } from "react-leaflet";
import Image from "./example.jpg";
import "leaflet";
import L from "leaflet";

const App = () => {
  const [onShow, setOnShow] = useState(true);
  return (
    <div>
      <button onClick={() => setOnShow(!onShow)}> Click </button>
      <MapContainer
        bounds={[
          [43.786293, 15.64765, 0],
          [43.686293, 15.54765, 0],
        ]}
      >
        <TileLayer noWrap={true} attribution="" url="http://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" />

        {onShow ? (
          <MyComponent
            url={Image}
            corners={[
              new L.latLng(43.78710550492949, 15.647438805314396),
              new L.latLng(43.78710550492949, 15.655914504316957),
              new L.latLng(43.78098644922989, 15.647438805314396),
              new L.latLng(43.78098644922989, 15.655914504316957),
            ]}
            mode={"freeRotate"}
            actions={[L.RotateAction, L.ScaleAction, L.OpacityAction]}
            selected={true}
            suppressToolbar={false}
            zIndex={200}
          />
        ) : null}
      </MapContainer>
    </div>
  );
};
export default App;
