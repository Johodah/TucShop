import React from "react";
import Header from "../Components/Header";
import HomePage from "../HomePage";
import Checkout from "../Checkout";
import {
  MemoryRouter,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
import Cart from "../Components/Modules/Cart";
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
    render(<Logo />);
    fireEvent.click(screen.getByRole("button"));
    expect(window.location.pathname).toBe("/");
  });

  test("should trigger and navigate to the Checkout page", () => {
    render(<Cart />);
    fireEvent.click(screen.getByRole("button"));
    expect(window.location.pathname).toBe("/checkout");
  });

  test("should render the Checkout page", () => {
    render(<Checkout />);
    expect(screen.getByText("Checkout")).toBeInTheDocument();
  });
});
