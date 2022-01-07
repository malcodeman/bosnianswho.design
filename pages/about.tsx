import Link from "next/link";
import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  Link as ChakraLink,
  Text,
  Divider,
  Center,
} from "@chakra-ui/layout";

import constants from "../lib/constants";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

function About() {
  return (
    <>
      <Head>
        <title>About | Bosnians Who Design</title>
      </Head>
      <Layout>
        <Sidebar />
        <Center>
          <Container paddingY="4">
            <Box as="section" mb="4">
              <Heading mb="2">About this project</Heading>
              <Text>
                Bosnians Who Design is a directory of accomplished Bosnians and
                Herzegovinians in the IT industry.
              </Text>
            </Box>
            <Box as="section" mb="4">
              <Heading mb="2">Source code</Heading>
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
            <Box as="section" mb="4">
              <Heading mb="2">Further reading</Heading>
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
            <Box as="section">
              <Heading mb="2">Opt out</Heading>
              <Text>
                If you&apos;ve been featured in the directory and you&apos;d
                rather not be, please send a DM to{" "}
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
            <Divider marginY="4" />
            <Box textAlign="center">
              <Link href="/">
                <a>
                  <Text>Back to directory</Text>
                </a>
              </Link>
            </Box>
          </Container>
        </Center>
      </Layout>
    </>
  );
}

export default About;
