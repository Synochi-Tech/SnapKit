import Container from "./Container";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Happy flow", () => {
  beforeEach(() => {
    render(<Container id="testPage">Test</Container>);
    expect(
      screen.getByTestId("testPage_container")
    ).toBeInTheDocument()
  });
  it("Render with content", () => {});
});
