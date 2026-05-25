// src/features/news/components/fluent/NewsListFluent/NewsListFluent.tsx

import { makeStyles, Text, tokens } from "@fluentui/react-components";

import type { NewsArticle } from "@/features/news";
import { NewsCardFluent } from "@/features/news/components/fluent/NewsCardFluent";

type NewsListFluentProps = {
  articles: NewsArticle[];
};

const useStyles = makeStyles({
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: tokens.spacingHorizontalL,
  },
  empty: {
    padding: tokens.spacingVerticalXL,
    textAlign: "center",
  },
});

export function NewsListFluent({ articles }: NewsListFluentProps) {
  const styles = useStyles();

  if (articles.length === 0) {
    return (
      <section className={styles.empty}>
        <Text>Nenhuma notícia encontrada.</Text>
      </section>
    );
  }

  return (
    <section className={styles.list}>
      {articles.map((article) => (
        <NewsCardFluent key={article.id} article={article} />
      ))}
    </section>
  );
}
