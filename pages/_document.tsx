import Document, { Html, Main, NextScript, Head } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <meta charSet="utf-8" />
          <meta
            name="og:description"
            content="Directory of Bosnians in IT industry."
          />
          <meta
            name="description"
            content="Directory of Bosnians in IT industry."
          />
          <meta property="og:image" content="opengraph.png"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
