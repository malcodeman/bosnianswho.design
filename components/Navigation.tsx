import Link from "next/link";
import { Text, Wrap, WrapItem, Box, Heading } from "@chakra-ui/layout";

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
          <Link href="/nominate">
            <a>
              <Text>Nominate</Text>
            </a>
          </Link>
        </WrapItem>
      </Wrap>
    </Box>
  );
}

export default Navigation;
