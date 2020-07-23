import styled from "styled-components";
import { X } from "react-feather";
import dynamic from "next/dynamic";

const Modal = dynamic(
  () => import("@malcodeman/react-modal").then((o) => o.Modal),
  { ssr: false }
);

import constants from "../lib/constants";

import { ParagraphMedium, ParagraphLarge } from "./Typography";
import { Button, KIND, SIZE, SHAPE } from "./button";

const Dialog = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  @media (min-width: ${constants.BREAKPOINTS.LARGE_DEVICES}) {
    height: initial;
    max-width: 36rem;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  svg {
    cursor: pointer;
    color: ${(props) => props.theme.colors.contentPrimary};
  }
`;

const ClearText = styled(ParagraphMedium)`
  cursor: pointer;
`;

const Body = styled.div`
  padding: 1rem;
`;

const Filter = styled.div`
  margin-bottom: 1rem;
`;

const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Footer = styled.footer`
  padding: 1rem;
  margin-top: auto;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

function FilterModal(props) {
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
    companies,
    selectedCompanies,
    setSelectedCompanies,
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

  function handleCompany(selected, id) {
    if (selected) {
      return setSelectedCompanies(
        selectedCompanies.filter((element) => element !== id)
      );
    }
    return setSelectedCompanies([...selectedCompanies, id]);
  }

  function handleClear() {
    setSelectedLocations([]);
    setSelectedPositions([]);
    setSelectedCompanies([]);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Dialog>
        <Header>
          <X size={16} onClick={onClose} />
          <ParagraphMedium>Filter</ParagraphMedium>
          <ClearText onClick={handleClear}>Clear</ClearText>
        </Header>
        <Body>
          <Filter>
            <ParagraphLarge>Locations</ParagraphLarge>
            <Group>
              {locations.map((item) => {
                const isSelected =
                  selectedLocations.find((element) => element === item.id) ||
                  false;

                return (
                  <Button
                    id={item.id}
                    kind={KIND.secondary}
                    size={SIZE.compact}
                    shape={SHAPE.pill}
                    isSelected={isSelected}
                    onClick={() => handleLocation(isSelected, item.id)}
                  >
                    {item.fields.name}
                  </Button>
                );
              })}
            </Group>
          </Filter>
          <Filter>
            <ParagraphLarge>Positions</ParagraphLarge>
            <Group>
              {positions.map((item) => {
                const isSelected =
                  selectedPositions.find((element) => element === item.id) ||
                  false;

                return (
                  <Button
                    id={item.id}
                    kind={KIND.secondary}
                    size={SIZE.compact}
                    shape={SHAPE.pill}
                    isSelected={isSelected}
                    onClick={() => handlePosition(isSelected, item.id)}
                  >
                    {item.fields.name}
                  </Button>
                );
              })}
            </Group>
          </Filter>
          <Filter>
            <ParagraphLarge>Companies</ParagraphLarge>
            <Group>
              {companies.map((item) => {
                const isSelected =
                  selectedCompanies.find((element) => element === item.id) ||
                  false;

                return (
                  <Button
                    id={item.id}
                    kind={KIND.secondary}
                    size={SIZE.compact}
                    shape={SHAPE.pill}
                    isSelected={isSelected}
                    onClick={() => handleCompany(isSelected, item.id)}
                  >
                    {item.fields.name}
                  </Button>
                );
              })}
            </Group>
          </Filter>
        </Body>
        <Footer>
          <StyledButton onClick={onClose}>
            View {count} {count === 0 || count > 1 ? "Designers" : "Designer"}
          </StyledButton>
        </Footer>
      </Dialog>
    </Modal>
  );
}

export default FilterModal;
