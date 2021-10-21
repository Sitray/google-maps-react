import React, { useState } from "react";
import { useDispatch } from "react-redux";

import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { markers } from "../actions/markers";

export const SearchBar = () => {
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();

  const handleSelect = async (place) => {
    const result = await geocodeByAddress(place);
    const latAndLng = await getLatLng(result[0]);
    const getAaddress = result[0].formatted_address;
    setAddress(place);

    const { lat, lng } = latAndLng;

    dispatch(markers(getAaddress, lat, lng));
    setAddress("");
  };

  const styles = {
    boxSizing: `border-box`,
    border: `1px solid transparent`,
    width: `240px`,
    height: `32px`,
    padding: `0 12px`,
    borderRadius: `3px`,
    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
    fontSize: `14px`,
    outline: `none`,
    textOverflow: `ellipses`,
  };

  const places = ({
    getInputProps,
    suggestions,
    getSuggestionItemProps,
    loading,
  }) => (
    <div>
      <input
        style={styles}
        {...getInputProps({
          placeholder: "Busca la dirección",
          required: true,
        })}
      />
      {loading && <div>loading...</div>}

      {suggestions.map((suggestion, i) => {
        const style = {
          backgroundColor: suggestion.active ? "#2596be" : " #fff",
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        };

        const regex = new RegExp(address, "gi");
        const newText = suggestion.description.replace(
          regex,
          `<mark class="highlight">$&</mark>`
        );

        return (
          <div
            key={i++}
            dangerouslySetInnerHTML={{ __html: newText }}
            {...getSuggestionItemProps(suggestion, { style })}
          />
        );
      })}
    </div>
  );

  return (
    <div>
      <PlacesAutoComplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        highlightFirstSuggestion={true}
      >
        {places}
      </PlacesAutoComplete>
    </div>
  );
};
