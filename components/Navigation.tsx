import { Text, VStack, Heading, Flex, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { equals } from "ramda";
import { Globe } from "react-feather";
import { useTranslation } from "react-i18next";

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
            <Text>Bosnians</Text>
            <Image src="flag.png" alt="" ml="2" height="36px" width="36px" />
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
