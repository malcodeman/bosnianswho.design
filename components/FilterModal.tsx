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

import { NotionPosition } from "../types";

type props = {
  isOpen: boolean;
  onClose: () => void;
  count: number;
  positions: NotionPosition[];
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
            <Text>Filter</Text>
            <Button size="sm" onClick={handleClear}>
              Clear
            </Button>
          </Flex>
        </ModalHeader>
        <ModalBody>
          <Text>Positions</Text>
          <ButtonGroup size="sm">
            <Wrap>
              {positions.map((item) => {
                const isActive = Boolean(
                  selectedPositions.find((element) => element === item.name)
                );
                return (
                  <Button
                    key={item.id}
                    isActive={Boolean(
                      selectedPositions.find((element) => element === item.name)
                    )}
                    onClick={() => handlePosition(isActive, item.name)}
                  >
                    {item.name}
                  </Button>
                );
              })}
            </Wrap>
          </ButtonGroup>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose} isFullWidth>
            View {count} {count === 0 || count > 1 ? "Designers" : "Designer"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default FilterModal;
