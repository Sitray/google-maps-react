import React, { Component } from "react";

import Map from "./Maps";
import { SearchBar } from "./SearchBar";

const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDMqBNkJ3WeEsG7rt__v7W1If9mUPcxkNo`;
export class MapContainer extends Component {
  render() {
    return (
      <div>
        <Map
          googleMapURL={mapUrl}
          containerElement={<div style={{ height: "400px" }} />}
          mapElement={<div style={{ height: "400px" }} />}
          loadingElement={<p>cargando</p>}
        />
        <div>
          <SearchBar />
        </div>
      </div>
    );
  }
}
