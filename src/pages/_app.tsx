import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import Twemoji from "react-twemoji";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;
  return (
    <IntlProvider locale={locale ?? "en"}>
      <Twemoji options={{ className: "twemoji" }}>
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
          <Component {...pageProps} />
        </ThemeProvider>
      </Twemoji>
    </IntlProvider>
  );
}
