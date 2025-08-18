import Container from "./Container";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Happy flow", () => {
  it("Render with content", () => {
    render(<Container id="testPage">Test</Container>);
    expect(
      screen.getByTestId("testPage_container")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Test")
    ).toBeInTheDocument();
  });
});
describe("Edge Case", () => {
  it("What if didn't pass ID", () => {
    // @ts-ignore
    render(<Container>Test</Container>);
    expect(
      screen.getByTestId("undefined_container")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Test")
    ).toBeInTheDocument();
  });
});
