import { Text, VStack, Heading, Flex, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import NavLink from "./misc/NavLink";

function Navigation() {
  const { t } = useTranslation("common");
  return (
    <VStack align="flex-start">
      <NavLink href="/">
        <Heading fontSize="2xl">
          <Flex alignItems="center">
            <Text>Bosnians</Text>
            <Image
              src="flag.png"
              alt=""
              ml="2"
              maxHeight="36px"
              maxWidth="36px"
            />
          </Flex>
          <Text>Who</Text>
          <Text>Design</Text>
        </Heading>
      </NavLink>
      <NavLink href="/about">{t("about-this-project")}</NavLink>
      <NavLink href="/nominate">{t("nominate")}</NavLink>
    </VStack>
  );
}
export default Navigation;
