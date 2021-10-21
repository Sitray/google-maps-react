import React from "react";

import { shallow } from "enzyme";
import { MapContainer } from "../components/MapContainer";

describe("test on <MapContainer />", () => {
  const wrapper = shallow(<MapContainer />);

  test("should display the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
