import type { Meta, StoryObj } from "@storybook/react";

import { NewsPageFluent } from "./NewsPageFluent";

const meta = {
  title: "GetNews/Fluent/NewsPageFluent",
  component: NewsPageFluent,
} satisfies Meta<typeof NewsPageFluent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
