import styled from "styled-components";
import { MapPin, Link } from "react-feather";

import { ParagraphLarge, ParagraphSmall, ParagraphXSmall } from "./Typography";

const StyledProfile = styled.div``;

const ProfileImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled(ParagraphLarge)`
  color: ${(props) => props.theme.colors.accent};
`;

const Location = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  svg {
    color: ${(props) => props.theme.colors.accent};
    margin-right: 0.5rem;
  }
`;

const Website = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  svg {
    color: ${(props) => props.theme.colors.accent};
    margin-right: 0.5rem;
  }
`;

function Profile(props) {
  const { url, name, location, website, description } = props;

  return (
    <StyledProfile>
      <div>
        <ProfileImage src={url} alt={name} />
      </div>
      <Name>{name}</Name>
      <Location>
        <MapPin size={16} />
        <ParagraphXSmall>{location}</ParagraphXSmall>
      </Location>
      <Website>
        <Link size={16} />
        {website ? (
          <a href={website} target="_blank" rel="noopener">
            <ParagraphXSmall>{website}</ParagraphXSmall>
          </a>
        ) : (
          <ParagraphXSmall>N/A</ParagraphXSmall>
        )}
      </Website>
      <ParagraphSmall>{description}</ParagraphSmall>
    </StyledProfile>
  );
}

export default Profile;
