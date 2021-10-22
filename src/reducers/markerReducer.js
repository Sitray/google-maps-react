import { types } from "../types/types";

export const markerReducer = (state = [], action) => {
  switch (action.type) {
    case types.coordinates:
      state = state.slice();
      state.push({
        address: action.payload.address,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      });

      return state;

    default:
      return state;
  }
};
