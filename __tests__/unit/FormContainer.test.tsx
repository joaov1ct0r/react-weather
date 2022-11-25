import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FormContainer from "../../src/components/FormContainer";

describe("form container", () => {
  it("should initialize form input with empty string", () => {
    render(<FormContainer />);

    const cityInput = screen.getByPlaceholderText("Localização");

    expect(cityInput).toBeInTheDocument();
    expect(cityInput.textContent).toBe("");
  });

  it("should initialize form input with button", () => {
    render(<FormContainer />);

    const buttonInput = screen.getByRole("button");

    expect(buttonInput).toBeInTheDocument();
    expect(buttonInput).toHaveAttribute("type", "submit");
  });
});
