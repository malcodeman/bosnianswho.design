import styled from "styled-components";
import { MapPin, Link } from "react-feather";

import constants from "../lib/constants";

import { ParagraphLarge, ParagraphSmall, ParagraphXSmall } from "./Typography";

const StyledProfile = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0 1rem;
  @media (min-width: ${constants.BREAKPOINTS.LARGE_DEVICES}) {
    display: initial;
    grid-template-columns: initial;
    grid-gap: initial;
  }
`;

const ImageWrapper = styled.div`
  padding-bottom: 100%;
  position: relative;
  grid-column: 1/2;
  grid-row: 1/2;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

const Name = styled(ParagraphLarge)`
  grid-column: 2/5;
  grid-row: 1/2;
  align-self: center;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.accent};
`;

const Location = styled.div`
  grid-column: 1/5;
  display: flex;
  margin-bottom: 0.5rem;
  svg {
    color: ${(props) => props.theme.colors.accent};
    margin-right: 0.5rem;
  }
`;

const Website = styled.div`
  grid-column: 1/5;
  word-break: break-all;
  display: flex;
  margin-bottom: 0.5rem;
  svg {
    color: ${(props) => props.theme.colors.accent};
    margin-right: 0.5rem;
  }
`;

const Description = styled(ParagraphSmall)`
  grid-column: 1/5;
`;

function Profile(props) {
  const { profile, name, location, website, description } = props;

  return (
    <StyledProfile>
      <ImageWrapper>
        <picture>
          <source
            media={`(min-width: ${constants.BREAKPOINTS.EXTRA_LARGE_DEVICES})`}
            srcSet={profile.full.url}
          />
          <source
            media={`(min-width: ${constants.BREAKPOINTS.LARGE_DEVICES})`}
            srcSet={profile.large.url}
          />
          <source src={profile.small.url} />
          <ProfileImage src={profile.small.url} alt="" loading="lazy" />
        </picture>
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
      <Description>{description}</Description>
    </StyledProfile>
  );
}

export default Profile;
