import { Box, Flex, Text } from "@chakra-ui/layout";
import { Checkbox } from "@chakra-ui/checkbox";

import Navigation from "./Navigation";

function Sidebar(props) {
  const {
    locations,
    selectedLocations,
    setSelectedLocations,
    positions,
    selectedPositions,
    setSelectedPositions,
  } = props;

  function handleLocation(selected, id) {
    if (selected) {
      return setSelectedLocations(
        selectedLocations.filter((element) => element !== id)
      );
    }
    return setSelectedLocations([...selectedLocations, id]);
  }

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
        <Text mb="2">Filter by</Text>
        <Box mb="2">
          <Text>Locations</Text>
          {locations.map((item) => {
            const isChecked = Boolean(
              selectedLocations.find((element) => element === item.id)
            );
            return (
              <Flex key={item.id} justifyContent="space-between">
                <Checkbox
                  isChecked={isChecked}
                  onChange={() => handleLocation(isChecked, item.id)}
                >
                  {item.fields.name}
                </Checkbox>
                <Text opacity="0.6">{item.fields.count}</Text>
              </Flex>
            );
          })}
        </Box>
        <Box mb="2">
          <Text>Positions</Text>
          {positions.map((item) => {
            const isChecked = Boolean(
              selectedPositions.find((element) => element === item.id)
            );
            return (
              <Flex key={item.id} justifyContent="space-between">
                <Checkbox
                  isChecked={isChecked}
                  onChange={() => handlePosition(isChecked, item.id)}
                >
                  {item.fields.name}
                </Checkbox>
                <Text opacity="0.6">{item.fields.count}</Text>
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
