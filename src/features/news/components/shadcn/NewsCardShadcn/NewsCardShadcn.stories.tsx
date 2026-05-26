import type { Meta, StoryObj } from "@storybook/react-vite";

import { newsArticlesMock } from "@/features/news";
import { NewsCardShadcn } from "./NewsCardShadcn";

const meta = {
  title: "GetNews/Shadcn/NewsCardShadcn",
  component: NewsCardShadcn,
  decorators: [
    (Story) => (
      <div className="max-w-md p-6">
        <Story />
      </div>
    ),
  ],
  args: {
    article: newsArticlesMock[0],
  },
} satisfies Meta<typeof NewsCardShadcn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongTitle: Story = {
  args: {
    article: {
      ...newsArticlesMock[0],
      title:
        "Título muito grande para testar como o card do shadcn se comporta com várias linhas de texto dentro do componente",
    },
  },
};
