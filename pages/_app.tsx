import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import Navbar from "../components/Navbar";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    background: #575656;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}
