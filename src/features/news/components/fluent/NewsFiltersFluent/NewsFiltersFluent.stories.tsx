import type { Meta, StoryObj } from "@storybook/react-vite";

import { FluentThemeProvider } from "@/components/ui/fluent/FluentThemeProvider";
import { NewsFiltersFluent } from "./NewsFiltersFluent";

const meta = {
  title: "GetNews/Fluent/NewsFiltersFluent",
  component: NewsFiltersFluent,
  decorators: [
    (Story) => (
      <FluentThemeProvider>
        <div style={{ maxWidth: 960, padding: 24 }}>
          <Story />
        </div>
      </FluentThemeProvider>
    ),
  ],
  args: {
    onSearch: () => {
      console.log("Buscar notícias clicado");
    },
  },
} satisfies Meta<typeof NewsFiltersFluent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
