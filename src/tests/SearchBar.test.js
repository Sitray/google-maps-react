import React from "react";

import { shallow } from "enzyme";
import { SearchBar } from "../components/SearchBar";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";

describe("test on <SearchBar />", () => {
  const initialState = { id: 1 };
  const mockStore = configureStore();

  const wrapper = shallow(
    <Provider store={mockStore(initialState)}>
      <SearchBar />
    </Provider>
  );
  test("should display the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
