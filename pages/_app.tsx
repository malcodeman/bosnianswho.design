import React from "react";
import { ThemeProvider } from "styled-components";
import { load } from "fathom-client";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import DarkTheme from "../styles/DarkTheme";

const FATHOM_SITE_ID = "TIILVVCO";

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    load(FATHOM_SITE_ID, {
      url: "https://warbler.resumebuilder.dev/script.js",
      includedDomains: ["bosnianswho.design", "www.bosnianswho.design"],
    });
  }, []);
  return (
    <ThemeProvider theme={DarkTheme}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
