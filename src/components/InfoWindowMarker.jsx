import React, { useState } from "react";

import { InfoWindow, Marker } from "react-google-maps";

export const InfoWindowMarker = ({ position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    console.log("holaaa");
    isOpen ? setIsOpen(false) : setIsOpen(true);
    console.log(isOpen);
  };

  return (
    <div>
      <Marker position={position} onClick={handleToggle}>
        {isOpen && (
          <InfoWindow onCloseClick={handleToggle}>
            <p>hola</p>
          </InfoWindow>
        )}
      </Marker>
    </div>
  );
};
