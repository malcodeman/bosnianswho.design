import React from "react";
import { load } from "fathom-client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

import constants from "../lib/constants";

const THEME = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
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
    if (constants.IS_PROD) {
      load(constants.FATHOM_ANALYTICS.siteId, {
        url: constants.FATHOM_ANALYTICS.url,
        includedDomains: constants.FATHOM_ANALYTICS.includedDomains,
      });
    }
  }, []);
  return (
    <ChakraProvider theme={THEME}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(App);
