import {
  Button,
  Card,
  Dropdown,
  Field,
  Input,
  Option,
  makeStyles,
  tokens,
} from "@fluentui/react-components";

type NewsFiltersFluentProps = {
  onSearch: () => void;
};

const useStyles = makeStyles({
  card: {
    display: "grid",
    gap: tokens.spacingVerticalM,
    padding: tokens.spacingVerticalL,
  },

  fieldsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: tokens.spacingHorizontalM,
  },

  actions: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

export function NewsFiltersFluent({ onSearch }: NewsFiltersFluentProps) {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <div className={styles.fieldsGrid}>
        <Field label="Buscar notícia">
          <Input placeholder="Ex: tecnologia, economia..." />
        </Field>

        <Field label="Tema">
          <Dropdown placeholder="Selecione um tema">
            <Option value="technology">Tecnologia</Option>
            <Option value="business">Negócios</Option>
            <Option value="sports">Esportes</Option>
            <Option value="world">Mundo</Option>
          </Dropdown>
        </Field>

        <Field label="Fonte">
          <Dropdown placeholder="Selecione uma fonte">
            <Option value="g1">G1</Option>
            <Option value="bbc">BBC News</Option>
            <Option value="cnn">CNN Brasil</Option>
          </Dropdown>
        </Field>
      </div>

      <div className={styles.actions}>
        <Button appearance="primary" onClick={onSearch}>
          Buscar notícias
        </Button>
      </div>
    </Card>
  );
}
