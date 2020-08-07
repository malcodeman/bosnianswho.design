import styled from "styled-components";
import Link from "next/link";

import constants from "../lib/constants";

import {
  ParagraphSmall,
  HeadingLarge,
  ParagraphLarge,
  HeadingMedium,
} from "../components/Typography";
import Navigation from "../components/Navigation";

const Body = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

const Header = styled.header`
  padding: 1rem;
`;

const Main = styled.main`
  padding: 1rem;
`;

const Content = styled.div`
  max-width: 32rem;
  width: 100%;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 1rem;
`;

const StyledLink = styled.a`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.accent};
`;

const Footer = styled.footer`
  padding: 1rem;
  text-align: center;
  ${ParagraphSmall} {
    text-transform: uppercase;
  }
`;

function About() {
  return (
    <Body>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Content>
          <Section>
            <HeadingLarge>About this project</HeadingLarge>
            <ParagraphLarge>
              Bosnians Who Design is a directory of accomplished Bosnians in the
              IT industry.
            </ParagraphLarge>
          </Section>
          <Section>
            <HeadingMedium>Source code</HeadingMedium>
            <ParagraphLarge>
              Feel free to check out the project on{" "}
              <StyledLink
                href="https://github.com/malcodeman/bosnianswho.design"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </StyledLink>
              .
            </ParagraphLarge>
          </Section>
          <Section>
            <HeadingMedium>Further reading</HeadingMedium>
            <ParagraphLarge>
              <StyledLink
                href="https://womenwho.design/"
                target="_blank"
                rel="noopener"
              >
                Women Who Design
              </StyledLink>{" "}
              (the inspiration for this site) by Jules forrest
            </ParagraphLarge>
            <ParagraphLarge>
              <StyledLink
                href="https://latinxswhodesign.com/"
                target="_blank"
                rel="noopener"
              >
                Latinxs Who Design
              </StyledLink>
            </ParagraphLarge>
            <ParagraphLarge>
              <StyledLink
                href="https://blackswho.design"
                target="_blank"
                rel="noopener"
              >
                Blacks Who Design
              </StyledLink>
            </ParagraphLarge>
          </Section>
          <Section>
            <HeadingMedium>Opt out</HeadingMedium>
            <ParagraphLarge>
              If you've been featured in the directory and you'd rather not be,
              please send a DM to{" "}
              <StyledLink
                href="https://twitter.com/bosniansdesign"
                target="_blank"
                rel="noopener"
              >
                @bosniansdesign
              </StyledLink>{" "}
              on Twitter or email at{" "}
              <StyledLink href={`mailto:${constants.EMAIL}`}>
                {constants.EMAIL}
              </StyledLink>{" "}
              and you will be removed.
            </ParagraphLarge>
          </Section>
        </Content>
      </Main>
      <Footer>
        <Link href="/">
          <a>
            <ParagraphSmall>Back to directory</ParagraphSmall>
          </a>
        </Link>
      </Footer>
    </Body>
  );
}

export default About;
