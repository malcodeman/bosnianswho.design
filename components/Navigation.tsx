import Link from "next/link";
import { Text, Wrap, WrapItem, Box, Heading, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

function Navigation() {
  return (
    <Box>
      <Box mb="4">
        <Link href="/">
          <a>
            <Heading fontSize="2xl">
              <Flex alignItems="center">
                <Text>Bosnians</Text>
                <Image src="flag.png" height="36px" ml="2" alt="" />
              </Flex>
              <Text>Who</Text>
              <Text>Design</Text>
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
