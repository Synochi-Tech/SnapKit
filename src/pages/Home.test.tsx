import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./Home";

describe("HomePage", () => {
  it("renders the main heading", () => {
    render(<HomePage />);
    const heading = screen.getByText(/Welcome to SnapKit/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(
      "text-3xl",
      "font-bold",
      "underline"
    );
  });

  it("renders the subtitle span", () => {
    render(<HomePage />);
    const span = screen.getByText(
      /Get Snapped with each project/i
    );
    expect(span.tagName).toBe("SPAN");
  });

  it("Container has correct id", () => {
    render(<HomePage />);
    const container = screen.getByTestId("home_container");
    expect(container).toBeInTheDocument();
  });
});

// We recommend installing an extension to run vitest tests.
