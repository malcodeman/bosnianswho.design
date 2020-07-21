import styled from "styled-components";
import { Square, CheckSquare } from "react-feather";

import constants from "../lib/constants";

import { ParagraphLarge, ParagraphMedium } from "./Typography";

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  overflow-y: auto;
`;

const Logo = styled.div`
  margin-bottom: 1rem;
`;

const Locations = styled.div`
  display: none;
  @media (min-width: ${constants.BREAKPOINTS.LARGE_DEVICES}) {
    display: initial;
    margin: auto 0;
  }
`;

const Location = styled.div`
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
  const { locations, selectedLocations, setSelectedLocations } = props;

  function handleLocation(selected, id) {
    if (selected) {
      return setSelectedLocations(
        selectedLocations.filter((element) => element !== id)
      );
    }
    return setSelectedLocations([...selectedLocations, id]);
  }

  return (
    <StyledSidebar>
      <Logo>
        <ParagraphLarge>
          Bosnians{" "}
          <span role="img" aria-label="emoji">
            🇧🇦
          </span>{" "}
          <br /> Who
          <br /> Design
        </ParagraphLarge>
      </Logo>
      <Locations>
        <ParagraphLarge>Locations</ParagraphLarge>
        {locations.map((item) => {
          const selected =
            selectedLocations.find((element) => element === item.id) || false;

          return (
            <Location
              key={item.id}
              onClick={() => handleLocation(selected, item.id)}
            >
              {selected ? <CheckSquare size={16} /> : <Square size={16} />}
              <ParagraphMedium>{item.fields.name}</ParagraphMedium>
            </Location>
          );
        })}
      </Locations>
    </StyledSidebar>
  );
}

export default Sidebar;
