import { Box, Flex } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";

import Navigation from "./Navigation";

type props = {
  children?: React.ReactNode;
};

function Sidebar(props: props) {
  const { children } = props;
  const backgroundColor = useColorModeValue("#f7f6f3", "#373c3f");
  return (
    <Flex
      backgroundColor={backgroundColor}
      flexDirection="column"
      padding="4"
      overflowY="auto"
      justifyContent="space-between"
      height={["initial", "initial", "100vh"]}
    >
      <Box mb="4">
        <Navigation />
      </Box>
      <Box display={["none", "none", "initial"]} mb="4">
        {children}
      </Box>
      <Box />
    </Flex>
  );
}

export default Sidebar;
