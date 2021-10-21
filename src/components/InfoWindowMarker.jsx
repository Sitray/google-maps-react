import React, { useState } from "react";

import { InfoWindow, Marker } from "react-google-maps";

export const InfoWindowMarker = ({ position, address, i }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <div key={i}>
      <Marker position={position} onClick={handleToggle}>
        {isOpen && (
          <InfoWindow onCloseClick={handleToggle}>
            <p>{address}</p>
          </InfoWindow>
        )}
      </Marker>
    </div>
  );
};
