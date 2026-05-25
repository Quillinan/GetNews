import { useState } from "react";

import { Card, Text, Title1 } from "@fluentui/react-components";

import { FluentThemeProvider } from "@/components/ui/fluent/FluentThemeProvider";
import { newsArticlesMock } from "@/features/news";
import { NewsFiltersFluent } from "@/features/news/components/fluent/NewsFiltersFluent";
import { NewsListFluent } from "@/features/news/components/fluent/NewsListFluent";

export function NewsPageFluent() {
  const [shouldShowNews, setShouldShowNews] = useState(false);

  function handleSearch() {
    setShouldShowNews(true);
  }

  return (
    <FluentThemeProvider>
      <main style={{ padding: 24 }}>
        <Card>
          <Title1>GetNews com Fluent UI</Title1>

          <Text>
            Página inicial para testar componentes do Fluent UI no GetNews.
          </Text>
        </Card>

        <div style={{ marginTop: 24 }}>
          <NewsFiltersFluent onSearch={handleSearch} />
        </div>

        {shouldShowNews && (
          <div style={{ marginTop: 24 }}>
            <NewsListFluent articles={newsArticlesMock} />
          </div>
        )}
      </main>
    </FluentThemeProvider>
  );
}
