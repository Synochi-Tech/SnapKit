import type { Meta, StoryObj } from "@storybook/react";
import InlineOverflowList from "./InlineOverflowList";
import { users } from "../../data";

const meta: Meta<typeof InlineOverflowList> = {
  title: "Components/InlineOverflowList",
  component: InlineOverflowList,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof InlineOverflowList> =
  {
    args: {
      items: [...users],
      itemRenderer: (item: any) => (
        <div className="bg-gray-200 px-3 py-1 rounded-full whitespace-nowrap">
          {item.firstName} {item.lastName}
        </div>
      ),
      showMoreRenderer: ({
        onToggleShow,
        count,
        showingAll,
      }) => (
        <button
          className="cursor-pointer text-main text-xs"
          onClick={onToggleShow}
        >
          {!showingAll ? `... ${count} more` : "Hide"}
        </button>
      ),
    },
  };
export const WithChildren: StoryObj<
  typeof InlineOverflowList
> = {
  parameters: {
    docs: {
      description: {
        story:
          "This children JSX will always be shown at the end of the list. when you show more, it will be pushed to the end.",
      },
    },
  },
  args: {
    items: [...users],
    itemRenderer: (item: any) => (
      <div className="bg-gray-200 px-3 py-1 rounded-full whitespace-nowrap">
        {item.firstName} {item.lastName}
      </div>
    ),
    showMoreRenderer: ({
      onToggleShow,
      count,
      showingAll,
    }) => (
      <button
        className="cursor-pointer text-main text-xs"
        onClick={onToggleShow}
      >
        {!showingAll ? `... ${count} more` : "Hide"}
      </button>
    ),
    children: (
      <button className="bg-main text-white px-3 py-1 rounded-full whitespace-nowrap text-xs">
        Add
      </button>
    ),
  },
};
export const withMaxItems: StoryObj<
  typeof InlineOverflowList
> = {
  parameters: {
    docs: {
      description: {
        story:
          "This will limit the maximum number of items shown even if there is more space available. if space is reduced, it will still adjust accordingly.",
      },
    },
  },
  args: {
    items: [...users],
    maxItems: 4,
    itemRenderer: (item: any) => (
      <div className="bg-gray-200 px-3 py-1 rounded-full whitespace-nowrap">
        {item.firstName} {item.lastName}
      </div>
    ),
    showMoreRenderer: ({
      onToggleShow,
      count,
      showingAll,
    }) => (
      <button
        className="cursor-pointer text-main text-xs"
        onClick={onToggleShow}
      >
        {!showingAll ? `... ${count} more` : "Hide"}
      </button>
    ),
  },
};
