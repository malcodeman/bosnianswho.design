import styled from "styled-components";
import { MapPin, Link } from "react-feather";

import { ParagraphLarge, ParagraphSmall, ParagraphXSmall } from "./Typography";

const StyledProfile = styled.div``;

const ImageWrapper = styled.div`
  padding-bottom: 100%;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
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
      <ImageWrapper>
        <ProfileImage src={url} alt={name} />
      </ImageWrapper>
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
