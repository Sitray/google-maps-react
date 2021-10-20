import { types } from "../types/types";

const initialState = {
  latitude: 41.40649793217181,
  longitude: 2.174371444383683,
};

export const markerReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case types.coordinates:
      return {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };

    default:
      return state;
  }
};
