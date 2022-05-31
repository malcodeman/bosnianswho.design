import Link from "next/link";
import { Text, Wrap, WrapItem, Heading, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useTranslation } from "react-i18next";

function Navigation() {
  const { t } = useTranslation("common");
  return (
    <Wrap direction="column">
      <WrapItem>
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
      </WrapItem>
      <WrapItem>
        <Link href="/about">
          <a>
            <Text>{t("about-this-project")}</Text>
          </a>
        </Link>
      </WrapItem>
      <WrapItem>
        <Link href="/nominate">
          <a>
            <Text>{t("nominate")}</Text>
          </a>
        </Link>
      </WrapItem>
    </Wrap>
  );
}
export default Navigation;
