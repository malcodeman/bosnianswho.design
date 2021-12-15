import Link from "next/link";
import Head from "next/head";
import {
  Box,
  Container,
  Divider,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/layout";

import constants from "../lib/constants";

import Navigation from "../components/Navigation";

function Nominate() {
  return (
    <>
      <Head>
        <title>Nominate | Bosnians Who Design</title>
      </Head>
      <Box>
        <Box padding="4">
          <Navigation />
        </Box>
        <Container>
          <Box as="section">
            <Heading mb="2">Nominate</Heading>
            <Text>
              If you know a Bosnian or Herzegovinian whose voice is valuable to
              the design industry, please fill out the{" "}
              <ChakraLink
                href={constants.DESIGNER_FORM_LINK}
                color="blue.400"
                isExternal
              >
                form
              </ChakraLink>{" "}
              with their Twitter handle and a few words about why you&apos;re
              nominating them.
            </Text>
          </Box>
          <Divider marginY="4" />
          <Box textAlign="center">
            <Link href="/">
              <a>
                <Text>Back to directory</Text>
              </a>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Nominate;
