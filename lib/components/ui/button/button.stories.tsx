import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { sizeOptions, variantOptions } from "./variants";

const meta = {
  title: "Example/Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },

      options: variantOptions,
    },
    size: {
      control: {
        type: "select",
      },
      options: sizeOptions,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    variant: "default",
    children: "Default",
  },
};

export const LoggedOut: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};
