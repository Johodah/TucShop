import React from "react";
import Header from "../Components/Header";
import Logo from "../Components/Modules/Logo";
import { describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
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

describe("Routing Tests", () => {
  test("should render the Homepage", () => {
    render(<HomePage />);
    fireEvent.click(screen.getByAltText("Home"));
    expect(window.location.pathname).toBe("/");
  });
});
