import { Box, Flex, Text } from "@chakra-ui/layout";
import { Checkbox } from "@chakra-ui/checkbox";

import Navigation from "./Navigation";

import { NotionPosition } from "../types";

type props = {
  positions: NotionPosition[];
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
      <Box mb="1">
        <Navigation />
      </Box>
      <Flex display={["none", "none", "flex"]} flexDirection="column">
        <Text mb="2" fontWeight="bold">
          Filter by
        </Text>
        <Box mb="2">
          {positions.map((item) => {
            const isChecked = Boolean(
              selectedPositions.find((element) => element === item.name)
            );
            return (
              <Flex key={item.id} justifyContent="space-between">
                <Checkbox
                  isChecked={isChecked}
                  onChange={() => handlePosition(isChecked, item.name)}
                >
                  {item.name}
                </Checkbox>
                <Text opacity="0.6">{item.count}</Text>
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
