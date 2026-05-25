export type NewsSource = {
  id: string;
  name: string;
  url: string;
};

export type NewsTopic = {
  id: string;
  label: string;
};

export type NewsArticle = {
  id: string;
  title: string;
  summary: string;
  source: NewsSource;
  url: string;
  publishedAt: string;
  imageUrl?: string;
  topicIds: string[];
};
