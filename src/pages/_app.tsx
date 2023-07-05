import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;
  return (
    <IntlProvider locale={locale ?? "en"}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
