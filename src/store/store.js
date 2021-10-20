import { createStore, combineReducers } from "redux";

import { markerReducer } from "../reducers/markerReducer";

const reducers = combineReducers({
  marker: markerReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
