import type { AppProps } from "next/app";
import "@/styles/html5reset-1.6.1.css";
import "@/styles/style.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
