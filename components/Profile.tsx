import { MapPin, Link } from "react-feather";
import { Text, Link as ChakraLink, Flex, Grid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

type props = {
  profile: { large: { url: string } };
  name: string;
  location: string;
  website: string;
  description: string;
};

function Profile(props: props) {
  const { profile, name, location, website, description } = props;
  return (
    <Grid>
      <Image src={profile.large.url} alt="" loading="lazy" borderRadius="md" />
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
      <Text>{description}</Text>
    </Grid>
  );
}

export default Profile;
