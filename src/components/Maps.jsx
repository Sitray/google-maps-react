import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { useSelector } from "react-redux";

import { InfoWindowMarker } from "./InfoWindowMarker.jsx";

const Map = (props) => {
  const initialPosition = {
    lat: 41.40649793217181,
    lng: 2.174371444383683,
    InitialAddress: "Barcelona, Spain",
  };

  const { address, latitude, longitude } = useSelector((state) => state.marker);

  const position = { lat: latitude, lng: longitude };

  return (
    <GoogleMap defaultZoom={10} defaultCenter={initialPosition}>
      {" "}
      {position.lat === undefined ? (
        <InfoWindowMarker
          position={initialPosition}
          address={initialPosition.InitialAddress}
        />
      ) : (
        <InfoWindowMarker position={position} address={address} />
      )}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));
