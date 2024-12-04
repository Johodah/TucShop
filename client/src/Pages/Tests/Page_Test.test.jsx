import React from "react";
import HomePage from "../../Pages/HomePage";
import Checkout from "../Checkout";
import Header from "../Components/Header";
import Logo from "../Components/Modules/Logo";
import { describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  test("should render the Logo component", () => {
    render(<Logo />);
    expect(screen.getByAltText("Home")).toBeInTheDocument();
    expect(screen.queryByRole("button")).toBeTruthy();
  });

  test("should render the Header component", () => {
    render(<Header />);
    expect(screen.getByAltText("Home")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument();
    expect(screen.queryAllByRole("button")).toBeTruthy();
  });
});

describe("Routing Tests", () => {
  test("should render the Homepage", () => {
    render(<Logo />);
    render(<HomePage />);
    fireEvent.click(screen.getByRole("button"));
    expect(window.location.pathname).toBe("/");
    expect(screen.queryAllByRole("button")).toBeTruthy();
  });

  test("should render the Checkout page", () => {
    render(<Checkout />);
    expect(screen.getByText("Checkout")).toBeInTheDocument();
  });
});
