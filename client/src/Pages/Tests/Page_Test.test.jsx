import React from "react";
import Cart from "../Components/Modules/Cart";
import HomePage from "../../Pages/HomePage";
import Product from "../../Pages/Product";
import Checkout from "../Checkout";
import Header from "../Components/Header";
import Logo from "../Components/Modules/Logo";
import { describe, test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  test("should render the Header component", () => {
    render(<Header />);
    expect(screen.getByAltText("Home")).toBeInTheDocument();
    expect(screen.getByAltText("cart")).toBeInTheDocument();
    expect(screen.getByAltText("user")).toBeInTheDocument();
    expect(screen.queryAllByRole("button")).toBeTruthy();
  });

  test("should render the Cart component", () => {
    render(<Cart />);
    expect(screen.getByAltText("cart")).toBeInTheDocument();
    expect(screen.queryByRole("button")).toBeTruthy();
  });
});

describe("Routing Tests", () => {
  test("should render the Homepage when logo button ckicked", () => {
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

  test("should render the product page when a product is clicked", () => {
    render(<Product />);
    expect(screen.getByText("Product")).toBeInTheDocument();
  });
});
