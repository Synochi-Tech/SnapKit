import { render, screen } from "@testing-library/react";
import InlineOverflowList from "./InlineOverflowList";

describe("happy flow", () => {
  it("renders correctly", () => {
    render(
      <InlineOverflowList
        items={[]}
        itemRenderer={() => (
          <div
            style={{
              width: 50,
              height: 20,
              background: "gray",
            }}
          />
        )}
        showMoreRenderer={() => {
          return (
            <div data-testid="show-more">Show more</div>
          );
        }}
      />
    );
    expect(
      screen.getByTestId("inline-overflow-list-container")
    ).toBeInTheDocument();
  });
});
