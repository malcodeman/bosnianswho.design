import React from "react";
import { load } from "fathom-client";
import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import constants from "../lib/constants";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    load(constants.FATHOM_ANALYTICS.siteId, {
      url: constants.FATHOM_ANALYTICS.url,
      includedDomains: constants.FATHOM_ANALYTICS.includedDomains,
    });
  }, []);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default appWithTranslation(App);
