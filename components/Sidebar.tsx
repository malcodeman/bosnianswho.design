import { Box, Flex, FlexProps } from "@chakra-ui/react";

import utils from "../lib/utils";

import Navigation from "./Navigation";

type props = {
  children?: React.ReactNode;
} & FlexProps;

function Sidebar(props: props) {
  const { children, ...rest } = props;
  return (
    <Flex
      {...rest}
      flexDirection="column"
      padding="4"
      overflowY="auto"
      justifyContent="space-between"
      sx={utils.getScrollbarStyle()}
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
