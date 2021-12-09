import Link from "next/link";
import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/layout";

import constants from "../lib/constants";

import Navigation from "../components/Navigation";

function About() {
  return (
    <>
      <Head>
        <title>About | Bosnians Who Design</title>
      </Head>
      <Box>
        <Box padding="4">
          <Navigation />
        </Box>
        <Container>
          <Box as="section">
            <Heading>About this project</Heading>
            <Text>
              Bosnians Who Design is a directory of accomplished Bosnians in the
              IT industry.
            </Text>
          </Box>
          <Box as="section" mb="2">
            <Heading>Source code</Heading>
            <Text>
              Feel free to check out the project on{" "}
              <ChakraLink
                href="https://github.com/malcodeman/bosnianswho.design"
                isExternal
                color="blue.400"
              >
                GitHub
              </ChakraLink>
              .
            </Text>
          </Box>
          <Box as="section" mb="2">
            <Heading>Further reading</Heading>
            <Text>
              <ChakraLink
                href="https://womenwho.design/"
                isExternal
                color="blue.400"
              >
                Women Who Design
              </ChakraLink>{" "}
              (the inspiration for this site) by Jules forrest
            </Text>
            <Text>
              <ChakraLink
                href="https://latinxswhodesign.com/"
                isExternal
                color="blue.400"
              >
                Latinxs Who Design
              </ChakraLink>
            </Text>
            <Text>
              <ChakraLink
                href="https://blackswho.design"
                isExternal
                color="blue.400"
              >
                Blacks Who Design
              </ChakraLink>
            </Text>
          </Box>
          <Box as="section" mb="2">
            <Heading>Opt out</Heading>
            <Text>
              If you've been featured in the directory and you'd rather not be,
              please send a DM to{" "}
              <ChakraLink
                href="https://twitter.com/bosniansdesign"
                isExternal
                color="blue.400"
              >
                @bosniansdesign
              </ChakraLink>{" "}
              on Twitter or email at{" "}
              <ChakraLink href={`mailto:${constants.EMAIL}`} color="blue.400">
                {constants.EMAIL}
              </ChakraLink>{" "}
              and you will be removed.
            </Text>
          </Box>
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

export default About;
