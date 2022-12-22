import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ButtonGroup,
  IconButton,
  Text,
  Wrap,
  Flex,
} from "@chakra-ui/react";
import { X } from "react-feather";
import { useTranslation } from "react-i18next";
import { or, filter, map, find, equals } from "ramda";

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

  function handlePosition(selected: Boolean, id: string) {
    if (selected) {
      return setSelectedPositions(
        filter((element) => element !== id, selectedPositions)
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
              {map((item) => {
                const isActive = Boolean(
                  find((element) => equals(element, item.id), selectedPositions)
                );
                return (
                  <Button
                    key={item.id}
                    isActive={Boolean(
                      find(
                        (element) => equals(element, item.id),
                        selectedPositions
                      )
                    )}
                    onClick={() => handlePosition(isActive, item.id)}
                  >
                    {t(item.translationKey)}
                  </Button>
                );
              }, positions)}
            </Wrap>
          </ButtonGroup>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose} width="full">
            {or(equals(count, 0), count > 1)
              ? t("view-designers", { count })
              : t("view-designer")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default FilterModal;
