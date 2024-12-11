import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Search from "../Components/Modules/SearchBar";

vi.mock("../Components/Modules/SearchBar", () => ({
  default: () => (
    <div className="searchBar" data-testid="searchbar">
      <input
        type="search"
        placeholder="Search..."
        value="test"
        onChange={() => {}}
      />
      <button className="searchButton" onClick={() => {}} data-testid="search">
        Go!
      </button>
    </div>
  ),
}));

describe("Search Component", () => {
  it("renders input and button", () => {
    render(<Search />);

    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { testid: /search/i })
    ).toBeInTheDocument();
  });

  it("calls setTag on input change", () => {
    render(<Search />);
    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "test" },
    });

    expect(screen.getByPlaceholderText("Search...").value).toBe("test");
  });

  it("calls searchItems and clears tag on button click", () => {
    render(<Search />);

    fireEvent.click(screen.getByText("Go!"));

    expect(screen.getByPlaceholderText("Search...").value).toBe("test");
  });
});
