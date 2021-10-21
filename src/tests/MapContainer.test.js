import React from "react";

import { shallow } from "enzyme";
import { MapContainer } from "../components/MapContainer";

describe("test on <MapContainer />", () => {
  test("should display the component", () => {
    const wrapper = shallow(<MapContainer />);

    expect(wrapper).toMatchSnapshot();
  });
});
