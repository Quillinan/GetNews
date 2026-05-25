import type { Meta, StoryObj } from "@storybook/react-vite";

import { FluentThemeProvider } from "@/components/ui/fluent/FluentThemeProvider";
import { newsArticlesMock } from "@/features/news";
import { NewsListFluent } from "./NewsListFluent";

const meta = {
  title: "GetNews/Fluent/NewsListFluent",
  component: NewsListFluent,
  decorators: [
    (Story) => (
      <FluentThemeProvider>
        <div style={{ padding: 24 }}>
          <Story />
        </div>
      </FluentThemeProvider>
    ),
  ],
  args: {
    articles: newsArticlesMock,
  },
} satisfies Meta<typeof NewsListFluent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    articles: [],
  },
};
