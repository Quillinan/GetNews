import type { Meta, StoryObj } from "@storybook/react-vite";

import { FluentThemeProvider } from "@/components/ui/fluent/FluentThemeProvider";
import { newsArticlesMock } from "@/features/news";
import { NewsCardFluent } from "./NewsCardFluent";

const meta = {
  title: "GetNews/Fluent/NewsCardFluent",
  component: NewsCardFluent,
  decorators: [
    (Story) => (
      <FluentThemeProvider>
        <div style={{ maxWidth: 420, padding: 24 }}>
          <Story />
        </div>
      </FluentThemeProvider>
    ),
  ],
  args: {
    article: newsArticlesMock[0],
  },
} satisfies Meta<typeof NewsCardFluent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
