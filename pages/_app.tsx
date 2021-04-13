import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";

import GlobalStyle from "../styles/GlobalStyle";
import DarkTheme from "../styles/DarkTheme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
