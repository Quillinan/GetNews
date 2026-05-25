import type { NewsArticle, NewsSource, NewsTopic } from "@/features/news";

export const newsTopicsMock: NewsTopic[] = [
  { id: "technology", label: "Tecnologia" },
  { id: "business", label: "Negócios" },
  { id: "sports", label: "Esportes" },
];

export const newsSourcesMock: NewsSource[] = [
  { id: "g1", name: "G1", url: "https://g1.globo.com" },
  { id: "bbc", name: "BBC News", url: "https://www.bbc.com" },
  { id: "cnn", name: "CNN Brasil", url: "https://www.cnnbrasil.com.br" },
];

export const newsArticlesMock: NewsArticle[] = [
  {
    id: "1",
    title: "GetNews inicia sua base de componentes",
    summary:
      "Projeto começa com React, TypeScript, Vite e Storybook para documentação visual.",
    source: newsSourcesMock[0],
    url: "https://example.com/news/1",
    publishedAt: "2026-05-21T12:00:00.000Z",
    topicIds: ["technology"],
  },
];
