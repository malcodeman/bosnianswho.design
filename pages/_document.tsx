import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Main, NextScript, Head } from "next/document";

const DESCRIPTION =
  "A directory of inspiring Bosnians and Herzegovinians in the IT industry.";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta charSet="utf-8" />
          <meta property="og:title" content="Bosnians Who Design" />
          <meta name="og:description" content={DESCRIPTION} />
          <meta name="description" content={DESCRIPTION} />
          <meta property="og:image" content="opengraph.png" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="https://bosnianswho.design" />
          <meta property="og:type" content="website" />
          <meta property="og:determiner" content="a" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://bosnianswho.design" />
          <meta name="twitter:title" content="Bosnians Who Design" />
          <meta name="twitter:description" content={DESCRIPTION} />
          <meta name="twitter:image" content="opengraph.png" />
        </Head>
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
