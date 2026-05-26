import type { NewsArticle } from "@/features/news";

type NewsCardShadcnProps = {
  article: NewsArticle;
};

export function NewsCardShadcn({ article }: NewsCardShadcnProps) {
  return (
    <Card>
      <CardHeader>
        <Badge variant="secondary" className="w-fit">
          {article.source.name}
        </Badge>

        <CardTitle>{article.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">{article.summary}</p>
      </CardContent>

      <CardFooter>
        <Button asChild variant="outline">
          <a href={article.url} target="_blank" rel="noreferrer">
            Ler notícia
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
