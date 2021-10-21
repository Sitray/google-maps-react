import { types } from "../types/types";

export const markers = (address, latitude, longitude) => {
  return {
    type: types.coordinates,
    payload: {
      address,
      latitude,
      longitude,
    },
  };
};
