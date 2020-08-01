import styled from "styled-components";
import Link from "next/link";

import constants from "../lib/constants";

import { ParagraphLarge, ParagraphSmall } from "./Typography";

const Logo = styled.div`
  margin-bottom: 1rem;
`;

const Links = styled.nav`
  display: flex;
  ${ParagraphSmall} {
    margin-right: 0.5rem;
    text-transform: uppercase;
  }
`;

function Navigation() {
  return (
    <>
      <Logo>
        <Link href="/">
          <a>
            <ParagraphLarge as="h1">
              Bosnians{" "}
              <span role="img" aria-label="emoji">
                🇧🇦
              </span>{" "}
              <br /> Who
              <br /> Design
            </ParagraphLarge>
          </a>
        </Link>
      </Logo>
      <Links>
        <Link href="/about">
          <ParagraphSmall>About</ParagraphSmall>
        </Link>
        <a href={constants.SHAREABLE_FORM_LINK} target="_blank" rel="noopener">
          <ParagraphSmall>Join us</ParagraphSmall>
        </a>
      </Links>
    </>
  );
}

export default Navigation;
