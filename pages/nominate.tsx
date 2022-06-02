import Link from "next/link";
import Head from "next/head";
import {
  Box,
  Container,
  Divider,
  Heading,
  Link as ChakraLink,
  Text,
  Center,
} from "@chakra-ui/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans, useTranslation } from "react-i18next";

import constants from "../lib/constants";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

function Nominate() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>{t("nominate-bwd")}</title>
      </Head>
      <Layout>
        <Sidebar />
        <Center>
          <Container paddingY="4">
            <Box as="section">
              <Heading mb="2">{t("nominate")}</Heading>
              <Text>
                <Trans i18nKey="if-you-know-bh-whose-voice-is-valuable">
                  If you know a Bosnian or Herzegovinian whose voice is valuable
                  to the design industry, please fill out the
                  <ChakraLink
                    href={constants.DESIGNER_FORM_LINK}
                    color="blue.400"
                    isExternal
                  >
                    form
                  </ChakraLink>
                  with their Twitter handle and a few words about why
                  you&apos;re nominating them.
                </Trans>
              </Text>
            </Box>
            <Divider marginY="4" />
            <Box textAlign="center">
              <Link href="/">
                <a>{t("back-to-directory")}</a>
              </Link>
            </Box>
          </Container>
        </Center>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Nominate;
