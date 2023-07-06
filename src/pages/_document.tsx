import { useRouter } from "next/router";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Html, Head, Main, NextScript } from "next/document";
import { IntlProvider } from "react-intl";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
