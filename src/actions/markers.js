import { types } from "../types/types";

export const markers = (latitude, longitude) => {
  return {
    type: types.coordinates,
    payload: {
      latitude,
      longitude,
    },
  };
};
