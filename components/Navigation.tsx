import { Text, VStack, Heading, Flex, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { equals } from "ramda";
import { Globe } from "react-feather";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import NavLink from "./misc/NavLink";

function Navigation() {
  const { i18n, t } = useTranslation("common");
  const router = useRouter();

  function onChangeLang() {
    const { pathname, asPath, query } = router;
    const locale = equals(i18n.language, "en") ? "bs" : "en";
    router.push({ pathname, query }, asPath, { locale });
  }

  return (
    <VStack align="flex-start">
      <NavLink href="/">
        <Heading fontSize="2xl">
          <Flex alignItems="center">
            <Text mr="2">Bosnians</Text>
            <Image src="/flag.png" alt="" height={36} width={36} />
          </Flex>
          <Text>Who</Text>
          <Text>Design</Text>
        </Heading>
      </NavLink>
      <NavLink href="/about">{t("about-this-project")}</NavLink>
      <NavLink href="/nominate">{t("nominate")}</NavLink>
      <Button
        size="sm"
        leftIcon={<Globe size={16} />}
        onClick={() => onChangeLang()}
      >
        {equals(i18n.language, "en") ? "Bosanski" : "English"}
      </Button>
    </VStack>
  );
}

export default Navigation;
