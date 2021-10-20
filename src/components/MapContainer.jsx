import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 41.40649793217181, lng: 2.174371444383683 }}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDMqBNkJ3WeEsG7rt__v7W1If9mUPcxkNo",
})(MapContainer);
