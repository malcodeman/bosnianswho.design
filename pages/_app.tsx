import React from "react";
import { load } from "fathom-client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import constants from "../lib/constants";
import type { AppProps } from "next/app";

const THEME = extendTheme({
  styles: {
    global: {
      html: {
        scrollbarWidth: "thin",
      },
      "html::-webkit-scrollbar": {
        width: "8px",
      },
      "html::-webkit-scrollbar-thumb": {
        backgroundColor: "#72757b",
      },
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    load(constants.FATHOM_ANALYTICS.siteId, {
      url: constants.FATHOM_ANALYTICS.url,
      includedDomains: constants.FATHOM_ANALYTICS.includedDomains,
    });
  }, []);
  return (
    <ChakraProvider theme={THEME}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(App);
