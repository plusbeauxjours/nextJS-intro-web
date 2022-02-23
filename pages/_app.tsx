import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import { NextComponentType, NextPageContext } from "next";

interface IProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log(Component, pageProps);
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
