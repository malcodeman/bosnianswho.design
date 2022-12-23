import { Flex, Text, Box, Checkbox } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { filter, map, find, equals } from "ramda";

import { Position } from "../types";

type props = {
  positions: Position[];
  selectedPositions: string[];
  setSelectedPositions: (positions: string[]) => void;
};

function Filters(props: props) {
  const { positions, selectedPositions, setSelectedPositions } = props;
  const { t } = useTranslation("common");

  function handlePosition(selected: boolean, id: string) {
    if (selected) {
      return setSelectedPositions(
        filter((element) => element !== id, selectedPositions)
      );
    }
    return setSelectedPositions([...selectedPositions, id]);
  }

  return (
    <Flex flexDirection="column">
      <Text mb="2" fontWeight="bold">
        {t("filter-by")}
      </Text>
      <Box>
        {map((item) => {
          const isChecked = Boolean(
            find((element) => equals(element, item.id), selectedPositions)
          );
          return (
            <Flex key={item.id} justifyContent="space-between">
              <Checkbox
                isChecked={isChecked}
                onChange={() => handlePosition(isChecked, item.id)}
              >
                {t(item.translationKey)}
              </Checkbox>
              <Text opacity="0.6">{item.count}</Text>
            </Flex>
          );
        }, positions)}
      </Box>
    </Flex>
  );
}

export default Filters;
