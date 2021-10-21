import React from "react";

import { shallow } from "enzyme";
import { InfoWindowMarker } from "../components/InfoWindowMarker";

describe("test on <InfoWindowMarker />", () => {
  const position = { lat: "2", lng: "2" };
  const address = "barcelona";
  const i = 1;

  const wrapper = shallow(
    <InfoWindowMarker position={position} address={address} i={i} />
  );
  test("should display the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should have a <p></p> with a address", () => {
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(address);
  });
});
