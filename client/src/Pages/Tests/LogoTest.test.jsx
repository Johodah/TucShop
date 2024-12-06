import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Logo from "../Components/Modules/Logo";

vi.mock("react", async () => {
  const actual = await vi.importActual("react");
  return {
    ...actual,
    useState: vi.fn(),
  };
});

vi.mock("../Componets/Modules/Logo", () => ({
  default: () => (
    <div>
      <button>
        <img
          src="/public/logo.png"
          alt="logo"
          width={200}
          data-testid="logo-image"
        />
      </button>
    </div>
  ),
}));

describe("Logo Component", () => {
  test("renders logo image", () => {
    render(<Logo />);
    const image = screen.getByTestId("logo-image");

    expect(image).toBeInTheDocument();
  });

  test("image has correct attributes", () => {
    render(<Logo />);
    const image = screen.getByTestId("logo-image");

    expect(image).toHaveAttribute("src", "/public/logo.png");
    expect(image).toHaveAttribute("alt", "Home");
    expect(image).toHaveAttribute("width", "200");
  });
});
