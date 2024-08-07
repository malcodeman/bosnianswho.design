import NextLink from "next/link";
import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  Text,
  Divider,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "next-i18next";
import { or } from "ramda";

import constants from "../lib/constants";

import Sidebar from "../components/Sidebar";

function About() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("about-bwd")}</title>
      </Head>
      <Sidebar />
      <Container paddingY="4">
        <Box as="section" mb="4">
          <Heading mb="2">{t("about-this-project")}</Heading>
          <Text>
            {t("bwd-is-a-directory-of-accomplished-bh-in-the-it-industry")}
          </Text>
        </Box>
        <Box as="section" mb="4">
          <Heading mb="2">{t("source-code")}</Heading>
          <Text>
            <Trans i18nKey="feel-free-to-check-out-the-project">
              Feel free to check out the project on
              <ChakraLink
                href="https://github.com/malcodeman/bosnianswho.design"
                isExternal
                color="blue.400"
              >
                GitHub
              </ChakraLink>
              .
            </Trans>
          </Text>
        </Box>
        <Box as="section" mb="4">
          <Heading mb="2">{t("further-reading")}</Heading>
          <Text>
            <Trans i18nKey="the-inspiration-for-this-site">
              <ChakraLink
                href="https://womenwho.design/"
                isExternal
                color="blue.400"
              >
                Women Who Design
              </ChakraLink>
              (the inspiration for this site) by Jules forrest
            </Trans>
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
        <Box as="section" mb="4">
          <Heading mb="2">{t("opt-out")}</Heading>
          <Text>
            <Trans i18nKey="if-you-ve-been-featured-in-the-directory">
              If you&apos;ve been featured in the directory and you&apos;d
              rather not be, please send a DM to
              <ChakraLink
                href="https://twitter.com/bosniansdesign"
                isExternal
                color="blue.400"
              >
                @bosniansdesign
              </ChakraLink>
              on Twitter or email at
              <ChakraLink href={`mailto:${constants.EMAIL}`} color="blue.400">
                {constants.EMAIL}
              </ChakraLink>
              and you will be removed.
            </Trans>
          </Text>
        </Box>
        <Divider marginY="4" />
        <Box textAlign="center">
          <NextLink href="/">{t("back-to-directory")}</NextLink>
        </Box>
      </Container>
    </>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(or(locale, "en"), ["common"])),
  },
});

export default About;
