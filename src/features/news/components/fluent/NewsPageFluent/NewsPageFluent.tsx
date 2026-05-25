import { Button, Card, Text, Title1 } from "@fluentui/react-components";

import { FluentThemeProvider } from "@/components/ui/fluent/FluentThemeProvider";

export function NewsPageFluent() {
  return (
    <FluentThemeProvider>
      <main style={{ padding: 24 }}>
        <Card>
          <Title1>GetNews com Fluent UI</Title1>

          <Text>
            Página inicial para testar componentes do Fluent UI no GetNews.
          </Text>

          <div style={{ marginTop: 16 }}>
            <Button appearance="primary">Buscar notícias</Button>
          </div>
        </Card>
      </main>
    </FluentThemeProvider>
  );
}
