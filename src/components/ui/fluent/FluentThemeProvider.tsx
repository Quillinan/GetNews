import {
  FluentProvider,
  webLightTheme,
  type FluentProviderProps,
} from "@fluentui/react-components";

type Props = {
  children: React.ReactNode;
} & Partial<FluentProviderProps>;

export function FluentThemeProvider({ children, ...props }: Props) {
  return (
    <FluentProvider theme={webLightTheme} {...props}>
      {children}
    </FluentProvider>
  );
}
