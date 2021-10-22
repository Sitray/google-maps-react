import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { useSelector } from "react-redux";

import { InfoWindowMarker } from "./InfoWindowMarker.jsx";

const Map = () => {
  const initialPosition = {
    lat: 41.40649793217181,
    lng: 2.174371444383683,
    InitialAddress: "Barcelona, Spain",
  };

  const state = useSelector((state) => state.marker);

  return (
    <div>
      <GoogleMap defaultCenter={initialPosition} defaultZoom={12}>
        {" "}
        {state.map((marker, i = 0) => {
          return (
            <InfoWindowMarker
              key={i++}
              position={{ lat: marker.latitude, lng: marker.longitude }}
              address={marker.address}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
};

export default withScriptjs(withGoogleMap(Map));
