import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import { useSelector } from "react-redux";

const Map = () => {
  const state = useSelector((state) => state.marker.initialState);
  console.log(state);
  const initialPosition = {
    lat: state.latitude,
    lng: state.longitude,
  };

  const { latitude, longitude } = useSelector((state) => state.marker);
  const position = { lat: latitude, lng: longitude };

  if (position.lat === undefined) {
    return (
      <GoogleMap defaultZoom={14} defaultCenter={initialPosition}>
        {" "}
        <Marker position={initialPosition} />
      </GoogleMap>
    );
  } else {
    return (
      <GoogleMap
        defaultZoom={14}
        defaultCenter={initialPosition}
        center={position}
      >
        <Marker position={position} />
      </GoogleMap>
    );
  }
};

export default withScriptjs(withGoogleMap(Map));
