import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/GlobalStyle";
import DarkTheme from "../styles/DarkTheme";

function App(props) {
  const { Component, pageProps } = props;

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
