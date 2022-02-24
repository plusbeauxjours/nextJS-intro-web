import type { AppProps } from "next/app";

import "../styles/globals.css";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log(Component, pageProps);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
