import styled from "styled-components";
import Link from "next/link";

import { ParagraphLarge, ParagraphSmall } from "./Typography";

const Logo = styled.div`
  margin-bottom: 1rem;
`;

const Links = styled.nav`
  ${ParagraphSmall} {
    text-transform: uppercase;
  }
`;

function Navigation() {
  return (
    <>
      <Logo>
        <Link href="/">
          <a>
            <ParagraphLarge>
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
        <Link href="/nominate">
          <a>
            <ParagraphSmall>Nominate</ParagraphSmall>
          </a>
        </Link>
      </Links>
    </>
  );
}

export default Navigation;
