import React, { useState } from "react";
import { useDispatch } from "react-redux";

import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { markers } from "../actions/markers";

export const SearchBar = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });
  const dispatch = useDispatch();

  const handleSelect = async (place) => {
    const result = await geocodeByAddress(place);
    const latAndLng = await getLatLng(result[0]);
    setAddress(place);
    setCoordinates(latAndLng);
    console.log("address");
    console.log(address);

    const { lat, lng } = latAndLng;

    dispatch(markers(lat, lng));
  };

  return (
    <div>
      <PlacesAutoComplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>longitude: {coordinates.lng}</p>
            <input {...getInputProps({ placeholder: "Busca la dirección" })} />
            {loading ? <div>loading...</div> : null}

            {suggestions.map((suggestion, i) => {
              const style = {
                backgroundColor: suggestion.active ? "#2596be" : " #fff",
              };

              return (
                <div
                  key={i++}
                  {...getSuggestionItemProps(suggestion, { style })}
                >
                  {suggestion.description}{" "}
                </div>
              );
            })}
          </div>
        )}
      </PlacesAutoComplete>
    </div>
  );
};
