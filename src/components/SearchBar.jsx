import React, { useState } from "react";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export const SearchBar = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });

  const handleSelect = async () => {};
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

            {suggestions.map((suggestion) => {
              const style = {
                backgroundColor: suggestion.active ? "#2596be" : " #fff",
              };

              return (
                <div
                  key={suggestion}
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
