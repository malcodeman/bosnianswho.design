import styled from "styled-components";
import { Square, CheckSquare } from "react-feather";

import constants from "../lib/constants";

import { ParagraphLarge, ParagraphMedium } from "./Typography";
import Navigation from "./Navigation";

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: auto;
`;

const Filters = styled.div`
  display: none;
  @media (min-width: ${constants.BREAKPOINTS.LARGE_DEVICES}) {
    display: initial;
    margin: auto 0;
  }
`;

const Filter = styled.div`
  margin-bottom: 1rem;
`;

const FilterItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    ${ParagraphMedium} {
      text-decoration: underline;
    }
  }
  svg {
    margin-right: 0.5rem;
    color: ${(props) => props.theme.colors.contentPrimary};
  }
`;

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
    <StyledSidebar>
      <Navigation />
      <Filters>
        <Filter>
          <ParagraphLarge>Locations</ParagraphLarge>
          {locations.map((item) => {
            const selected =
              selectedLocations.find((element) => element === item.id) || false;

            return (
              <FilterItem
                key={item.id}
                onClick={() => handleLocation(selected, item.id)}
              >
                {selected ? <CheckSquare size={16} /> : <Square size={16} />}
                <ParagraphMedium>{item.fields.name}</ParagraphMedium>
              </FilterItem>
            );
          })}
        </Filter>
        <Filter>
          <ParagraphLarge>Positions</ParagraphLarge>
          {positions.map((item) => {
            const selected =
              selectedPositions.find((element) => element === item.id) || false;

            return (
              <FilterItem
                key={item.id}
                onClick={() => handlePosition(selected, item.id)}
              >
                {selected ? <CheckSquare size={16} /> : <Square size={16} />}
                <ParagraphMedium>{item.fields.name}</ParagraphMedium>
              </FilterItem>
            );
          })}
        </Filter>
      </Filters>
    </StyledSidebar>
  );
}

export default Sidebar;
