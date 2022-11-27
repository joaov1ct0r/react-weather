import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../../src/App";

describe("App", () => {
  it("should render formContainer component", () => {
    render(<App />);

    expect(screen.getByTestId("form-div")).toBeInTheDocument();
  });
});
