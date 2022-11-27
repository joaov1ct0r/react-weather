import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DataContainer from "../../src/components/DataContainer";

describe("data container", () => {
  it("should render fragment-div if ApiData is null", () => {
    render(<DataContainer />);

    const fragmentDiv = screen.getByTestId("fragment-div");

    expect(fragmentDiv).toBeInTheDocument();
  });
});
