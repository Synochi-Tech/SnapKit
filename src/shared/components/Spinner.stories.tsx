import type { Meta } from "@storybook/react";
import Spinner from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
};

export default meta;

export const Default = {
  args: {
    size: "sm",
  },
};
