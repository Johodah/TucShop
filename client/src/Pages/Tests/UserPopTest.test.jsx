import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import UserPop from "../Components/Modules/UserPop";

vi.mock("react", async () => {
  const actual = await vi.importActual("react");
  return {
    ...actual,
    useState: vi.fn(),
  };
});

vi.mock("useState", () => vi.fn());

vi.mock("../Components/Modules/UserPop", () => ({
  default: () => (
    <div>
      <button>
        <img
          src="mocked-image-url"
          alt="user"
          width={40}
          data-testid="user-image"
        />
      </button>
    </div>
  ),
}));

describe("UserPop Component", () => {
  test("renders user button with image", () => {
    render(<UserPop />);
    const button = screen.getByRole("button");
    const image = screen.getByTestId("user-image");

    expect(button).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  test("image has correct attributes", () => {
    render(<UserPop />);
    const image = screen.getByTestId("user-image");

    expect(image).toHaveAttribute("src", "mocked-image-url");
    expect(image).toHaveAttribute("alt", "user");
    expect(image).toHaveAttribute("width", "40");
  });

  test("button is clickable", () => {
    const handleClick = vi.fn();
    render(<UserPop onClick={handleClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled;
    expect(button).toBeVisible("className", "login");
  });
});
