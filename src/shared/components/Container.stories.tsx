import Container from "./Container";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Container> = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
};

export default meta;

export const DefaultOrFixedMode: StoryObj<
  typeof Container
> = {
  args: {
    id: "storybook",
    children: (
      <div className="bg-gray-200 p-4 text-center">
        This is a Container have Fixed 1440 width
      </div>
    ),
  },
  storyName: "Default (fixed) Mode",
};
export const Stretch: StoryObj<typeof Container> = {
  args: {
    id: "storybook",
    mode: "stretch",
    children: (
      <div className="bg-gray-200 p-4 text-center">
        This is a has no max width
      </div>
    ),
  },
};
export const custom: StoryObj<typeof Container> = {
  args: {
    id: "storybook",
    mode: "custom",
    className: "max-w-[400px]",
    children: (
      <div className="bg-gray-200 p-4 text-center">
        You can provide mode as "custom" and set your own max-width using className
      </div>
    ),
  },
};
