import { Box, Flex, Text } from "@chakra-ui/layout";
import { Checkbox } from "@chakra-ui/checkbox";

import Navigation from "./Navigation";

import { Position } from "../types";

type props = {
  positions: Position[];
  selectedPositions: string[];
  setSelectedPositions: (positions: string[]) => void;
};

function Sidebar(props: props) {
  const { positions, selectedPositions, setSelectedPositions } = props;

  function handlePosition(selected, id) {
    if (selected) {
      return setSelectedPositions(
        selectedPositions.filter((element) => element !== id)
      );
    }
    return setSelectedPositions([...selectedPositions, id]);
  }

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
      <Flex display={["none", "none", "flex"]} flexDirection="column" mb="4">
        <Text mb="4" fontWeight="bold">
          Filter by
        </Text>
        <Box>
          {positions.map((item) => {
            const isChecked = Boolean(
              selectedPositions.find((element) => element === item.value)
            );
            return (
              <Flex key={item.value} justifyContent="space-between">
                <Checkbox
                  isChecked={isChecked}
                  onChange={() => handlePosition(isChecked, item.value)}
                >
                  {item.label}
                </Checkbox>
                <Text display="none" opacity="0.6">
                  {0}
                </Text>
              </Flex>
            );
          })}
        </Box>
      </Flex>
      <Box />
    </Flex>
  );
}

export default Sidebar;
