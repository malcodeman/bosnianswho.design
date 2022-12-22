import { Flex, Text, Box, Checkbox } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

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
        selectedPositions.filter((element) => element !== id)
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
                {t(item.translationKey)}
              </Checkbox>
              <Text display="none" opacity="0.6">
                {0}
              </Text>
            </Flex>
          );
        })}
      </Box>
    </Flex>
  );
}

export default Filters;
