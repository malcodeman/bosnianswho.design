import Link from "next/link";
import {
  Text,
  Link as ChakraLink,
  Wrap,
  WrapItem,
  Box,
} from "@chakra-ui/layout";

import constants from "../lib/constants";

function Navigation() {
  return (
    <>
      <Box mb="1">
        <Link href="/">
          <a>
            <Text>
              Bosnians{" "}
              <span role="img" aria-label="emoji">
                🇧🇦
              </span>{" "}
              <br /> Who
              <br /> Design
            </Text>
          </a>
        </Link>
      </Box>
      <Wrap>
        <WrapItem>
          <Link href="/about">
            <a>
              <Text>About</Text>
            </a>
          </Link>
        </WrapItem>
        <WrapItem>
          <ChakraLink href={constants.DESIGNER_FORM_LINK} isExternal>
            Join us
          </ChakraLink>
        </WrapItem>
        <WrapItem>
          <ChakraLink href={constants.COMPANY_FORM_LINK} isExternal>
            Add a company
          </ChakraLink>
        </WrapItem>
      </Wrap>
    </>
  );
}

export default Navigation;
