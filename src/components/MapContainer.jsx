import React, { Component } from "react";

import Map from "./Maps";
import { SearchBar } from "./SearchBar";

const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDMqBNkJ3WeEsG7rt__v7W1If9mUPcxkNo`;
export class MapContainer extends Component {
  render() {
    const styles = {
      zIndex: "1",
      margin: "10px",
      position: "absolute",
      left: "50%",
      top: "0",
    };

    return (
      <div>
        <div style={styles}>
          <SearchBar />
        </div>
        <div style={{ zIndex: "1" }}>
          <Map
            googleMapURL={mapUrl}
            containerElement={<div style={{ height: "100vh" }} />}
            mapElement={<div style={{ height: "100vh" }} />}
            loadingElement={<p>cargando</p>}
          />
        </div>
      </div>
    );
  }
}
