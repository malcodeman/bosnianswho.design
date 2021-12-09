import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/modal";
import { Button, ButtonGroup, IconButton } from "@chakra-ui/button";
import { Box, Text, Wrap, Flex } from "@chakra-ui/layout";
import { X } from "react-feather";

type props = {
  isOpen: boolean;
  onClose: () => void;
  count: number;
  locations: {
    id: string;
    fields: {
      name: string;
    };
  }[];
  selectedLocations: string[];
  setSelectedLocations: (locations: string[]) => void;
  positions: {
    id: string;
    fields: {
      name: string;
    };
  }[];
  selectedPositions: string[];
  setSelectedPositions: (positions: string[]) => void;
};

function FilterModal(props: props) {
  const {
    isOpen,
    onClose,
    count,
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

  function handleClear() {
    setSelectedLocations([]);
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
          <Box mb="2">
            <Text>Locations</Text>
            <ButtonGroup size="sm">
              {locations.map((item) => {
                const isActive = Boolean(
                  selectedLocations.find((element) => element === item.id)
                );
                return (
                  <Button
                    id={item.id}
                    isActive={isActive}
                    onClick={() => handleLocation(isActive, item.id)}
                  >
                    {item.fields.name}
                  </Button>
                );
              })}
            </ButtonGroup>
          </Box>
          <Box mb="2">
            <Text>Positions</Text>
            <ButtonGroup size="sm">
              <Wrap>
                {positions.map((item) => {
                  const isActive = Boolean(
                    selectedPositions.find((element) => element === item.id)
                  );
                  return (
                    <Button
                      id={item.id}
                      isActive={Boolean(
                        selectedPositions.find((element) => element === item.id)
                      )}
                      onClick={() => handlePosition(isActive, item.id)}
                    >
                      {item.fields.name}
                    </Button>
                  );
                })}
              </Wrap>
            </ButtonGroup>
          </Box>
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
