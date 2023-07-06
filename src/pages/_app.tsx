import "@/styles/globals.css";
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
        <Component {...pageProps} />
      </Twemoji>
    </IntlProvider>
  );
}
