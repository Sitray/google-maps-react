import { types } from "../types/types";

const initialState = {
  address: "Barcelona, Spain",
  latitude: 41.40649793217181,
  longitude: 2.174371444383683,
};

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
