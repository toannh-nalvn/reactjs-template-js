import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button";

const meta = {
  title: "Shadcn/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "secondary",
        "destructive",
        "ghost",
        "link",
        "outline",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["default", "icon", "sm", "lg"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    variant: "default",
    children: "Button Default Shadcn",
  },
};

const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button Secondary Shadcn",
  },
};

const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Button Destructive Shadcn",
  },
};

const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button Ghost Shadcn",
  },
};

const Link: Story = {
  args: {
    variant: "link",
    children: "Button Link Shadcn",
  },
};

const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button Outline Shadcn",
  },
};

const SizeDefault: Story = {
  args: {
    size: "default",
    children: "ButtonShadcn",
  },
};

const SizeIcon: Story = {
  args: {
    size: "icon",
    children: "icon",
  },
};

const SizeLarge: Story = {
  args: {
    size: "lg",
    children: "ButtonShadcn",
  },
};

const SizeSmall: Story = {
  args: {
    size: "sm",
    children: "ButtonShadcn",
  },
};

export {
  Default,
  Secondary,
  Destructive,
  Ghost,
  Link,
  Outline,
  SizeDefault,
  SizeIcon,
  SizeLarge,
  SizeSmall,
};
