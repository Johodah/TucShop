import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import CartItem from "../Components/Modules/CartItem";

vi.mock("../../../../public/trash-can.png", () => "/public/trash-can.png");

const mockOnClick = vi.fn();

const mockItem = {
  productId: 1,
  productName: "Sample Product",
  price: 100,
};

describe("CartItem Component", () => {
  test("renders product name, price, and stock", () => {
    render(<CartItem item={mockItem} clicked={null} onClick={mockOnClick} stock={5} />);
    
    expect(screen.getByText("Sample Product")).toBeInTheDocument();
    expect(screen.getByText("100 kr")).toBeInTheDocument();
    expect(screen.getByText("5 left in stock")).toBeInTheDocument();
  });

  test("renders the default image", () => {
    render(<CartItem item={mockItem} clicked={null} onClick={mockOnClick} stock={5} />);
    
    const image = screen.getByAltText("Sample Product");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://via.placeholder.com/150");
  });

  test("renders the trash can image with correct attributes", () => {
    render(<CartItem item={mockItem} clicked={null} onClick={mockOnClick} stock={5} />);
    
    const trashCan = screen.getByAltText("Remove item");
    expect(trashCan).toBeInTheDocument();
    expect(trashCan).toHaveAttribute("src", "/public/trash-can.png");
    expect(trashCan).toHaveClass("cart-item-trash-can");
  });

  test("applies the 'clicked' class when clicked prop matches the product ID", () => {
    render(<CartItem item={mockItem} clicked={1} onClick={mockOnClick} stock={5} />);
    
    const trashCan = screen.getByAltText("Remove item");
    expect(trashCan).toHaveClass("clicked");
  });

  test("does not apply the 'clicked' class when clicked prop does not match the product ID", () => {
    render(<CartItem item={mockItem} clicked={2} onClick={mockOnClick} stock={5} />);
    
    const trashCan = screen.getByAltText("Remove item");
    expect(trashCan).not.toHaveClass("clicked");
  });

  test("calls onClick with correct product ID when trash can is clicked", () => {
    render(<CartItem item={mockItem} clicked={null} onClick={mockOnClick} stock={5} />);
    
    const trashCan = screen.getByAltText("Remove item");
    fireEvent.click(trashCan);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith(1);
  });
});
