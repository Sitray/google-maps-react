import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import { SearchBar } from "./SearchBar";

const initialPosition = {
  lat: 41.40649793217181,
  lng: 2.174371444383683,
};
export class MapContainer extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={initialPosition}
          style={{ width: "100%", height: "100%" }}
        >
          <Marker onClick={this.onMarkerClick} name={"current location"} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDMqBNkJ3WeEsG7rt__v7W1If9mUPcxkNo",
})(MapContainer);
