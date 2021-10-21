import React, { Component } from "react";
import { useSelector } from "react-redux";

import Map from "./Maps";
import { SearchBar } from "./SearchBar";

const mapUrl = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDMqBNkJ3WeEsG7rt__v7W1If9mUPcxkNo`;
export class MapContainer extends Component {
  // const state = useSelector((state) => state);
  // console.log(state + "estado");
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
