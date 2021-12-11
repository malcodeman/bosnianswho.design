import Link from "next/link";
import {
  Text,
  Link as ChakraLink,
  Wrap,
  WrapItem,
  Box,
  Heading,
} from "@chakra-ui/layout";

import constants from "../lib/constants";

function Navigation() {
  return (
    <Box>
      <Box mb="1">
        <Link href="/">
          <a>
            <Heading fontSize="lg">
              Bosnians{" "}
              <span role="img" aria-label="emoji">
                🇧🇦
              </span>{" "}
              <br /> Who
              <br /> Design
            </Heading>
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
          <ChakraLink
            href={constants.DESIGNER_FORM_LINK}
            color="blue.400"
            isExternal
          >
            Join us
          </ChakraLink>
        </WrapItem>
      </Wrap>
    </Box>
  );
}

export default Navigation;
