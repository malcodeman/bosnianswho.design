import Head from "next/head";
import styled, { ThemeProvider } from "styled-components";
import Link from "next/link";

import LightTheme from "../styles/LightTheme";

import { ParagraphSmall } from "../components/Typography";
import Navigation from "../components/Navigation";

const Body = styled.div`
  min-height: 100vh;
`;

const Header = styled.header`
  padding: 1rem;
`;

const Footer = styled.footer`
  text-align: center;
  ${ParagraphSmall} {
    text-transform: uppercase;
  }
`;

function Nominate() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Head>
        <script
          async
          src="https://static.airtable.com/js/embed/embed_snippet_v1.js"
        />
      </Head>
      <Header>
        <Navigation />
      </Header>
      <Body>
        <iframe
          className="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shrRmFE90GYwkLv9j?backgroundColor=blue"
          frameBorder="0"
          width="100%"
        />
        <Footer>
          <Link href="/">
            <a>
              <ParagraphSmall>Back to directory</ParagraphSmall>
            </a>
          </Link>
        </Footer>
      </Body>
    </ThemeProvider>
  );
}

export default Nominate;
