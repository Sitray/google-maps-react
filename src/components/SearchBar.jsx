import React, { useState } from "react";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export const SearchBar = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: "41.40649793217181",
    lng: "2.174371444383683",
  });

  const handleSelect = async (place) => {
    const result = await geocodeByAddress(place);
    const latAndLng = await getLatLng(result[0]);
    setAddress(place);
    setCoordinates(latAndLng);
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
