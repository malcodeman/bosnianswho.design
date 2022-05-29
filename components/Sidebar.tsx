import { Box, Flex } from "@chakra-ui/layout";

import Navigation from "./Navigation";

type props = {
  children?: React.ReactNode;
};

function Sidebar(props: props) {
  const { children } = props;
  return (
    <Flex
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
