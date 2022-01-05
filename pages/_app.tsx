import React from "react";
import { load } from "fathom-client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const FATHOM_SITE_ID = "TIILVVCO";
const THEME = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#f7f6f3",
      },
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    load(FATHOM_SITE_ID, {
      url: "https://warbler.resumebuilder.dev/script.js",
      includedDomains: ["bosnianswho.design", "www.bosnianswho.design"],
    });
  }, []);
  return (
    <ChakraProvider theme={THEME}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
