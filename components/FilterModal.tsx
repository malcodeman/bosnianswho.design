import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/modal";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { Text, Wrap, Flex } from "@chakra-ui/layout";
import { X } from "react-feather";
import { useTranslation } from "react-i18next";
import { or } from "ramda";

import { Position } from "../types";

type props = {
  isOpen: boolean;
  onClose: () => void;
  count: number;
  positions: Position[];
  selectedPositions: string[];
  setSelectedPositions: (positions: string[]) => void;
};

function FilterModal(props: props) {
  const {
    isOpen,
    onClose,
    count,
    positions,
    selectedPositions,
    setSelectedPositions,
  } = props;
  const { t } = useTranslation("common");

  function handlePosition(selected, id) {
    if (selected) {
      return setSelectedPositions(
        selectedPositions.filter((element) => element !== id)
      );
    }
    return setSelectedPositions([...selectedPositions, id]);
  }

  function handleClear() {
    setSelectedPositions([]);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex justifyContent="space-between">
            <IconButton
              size="sm"
              onClick={onClose}
              aria-label="close"
              icon={<X size={16} />}
            />
            <Text>{t("filter")}</Text>
            <Button size="sm" onClick={handleClear}>
              {t("clear")}
            </Button>
          </Flex>
        </ModalHeader>
        <ModalBody>
          <Text mb="4" fontWeight="bold">
            {t("positions")}
          </Text>
          <ButtonGroup size="sm">
            <Wrap>
              {positions.map((item) => {
                const isActive = Boolean(
                  selectedPositions.find((element) => element === item.id)
                );
                return (
                  <Button
                    key={item.id}
                    isActive={Boolean(
                      selectedPositions.find((element) => element === item.id)
                    )}
                    onClick={() => handlePosition(isActive, item.id)}
                  >
                    {t(item.translationKey)}
                  </Button>
                );
              })}
            </Wrap>
          </ButtonGroup>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose} width="full">
            {or(count === 0, count > 1)
              ? t("view-designers", { count })
              : t("view-designer")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default FilterModal;
