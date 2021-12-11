import { MapPin, Link } from "react-feather";
import { Text, Link as ChakraLink, Flex, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

type props = {
  profile: string;
  name: string;
  location: string;
  website: string;
  description: string;
};

function Profile(props: props) {
  const { profile, name, location, website, description } = props;
  return (
    <Grid>
      <Image
        src={profile}
        alt=""
        loading="lazy"
        borderRadius="md"
        height="100%"
        width="100%"
        objectFit="cover"
      />
      <Text>{name}</Text>
      <Flex>
        <MapPin size={16} />
        <Text>{location}</Text>
      </Flex>
      <Flex>
        <Link size={16} />
        {website ? (
          <ChakraLink href={website} isExternal>
            {website}
          </ChakraLink>
        ) : (
          <Text>N/A</Text>
        )}
      </Flex>
      <Text opacity="0.6">{description}</Text>
    </Grid>
  );
}

export default Profile;
