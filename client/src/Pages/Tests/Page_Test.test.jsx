import React from "react";
import Header from "../Components/Header";
import Logo from "../Components/Modules/Logo";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  test("should render the Logo component", () => {
    render(<Logo />);
    expect(screen.getByAltText("Home")).toBeInTheDocument();
  });

  test("should render the Header component", () => {
    render(<Header />);
    expect(screen.getByAltText("Home")).toBeInTheDocument();
  });
});
