import { Button, Card, Text, Title3 } from "@fluentui/react-components";

import type { NewsArticle } from "@/features/news";

type NewsCardFluentProps = {
  article: NewsArticle;
};

export function NewsCardFluent({ article }: NewsCardFluentProps) {
  return (
    <Card>
      <Text size={200}>{article.source.name}</Text>

      <Title3>{article.title}</Title3>

      <Text>{article.summary}</Text>

      <Button
        appearance="secondary"
        as="a"
        href={article.url}
        target="_blank"
        rel="noreferrer"
      >
        Ler notícia
      </Button>
    </Card>
  );
}
