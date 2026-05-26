import type { NewsArticle } from "@/features/news";

import { Badge } from "@/components/ui/shadcn/badge";
import { Button } from "@/components/ui/shadcn/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";

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
