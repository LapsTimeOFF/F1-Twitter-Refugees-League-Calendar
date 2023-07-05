import { useRouter } from "next/router";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Html, Head, Main, NextScript } from "next/document";
import { IntlProvider } from "react-intl";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider
          theme={createTheme({
            palette: {
              mode: "dark",
              primary: {
                main: "#ff0000",
              },
            },
          })}
        >
          <CssBaseline />
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
