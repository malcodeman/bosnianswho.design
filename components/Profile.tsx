import { MapPin, Link } from "react-feather";
import {
  Text,
  Flex,
  AspectRatio,
  Image,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { siTwitter } from "simple-icons/icons";
import { motion } from "framer-motion";

import constants from "../lib/constants";

import SimpleIcon from "./misc/SimpleIcon";

type props = {
  profile: string;
  name: string;
  location: string;
  website: { display_url: string; expanded_url: string };
  description: string;
  username: string;
};

function Profile(props: props) {
  const { profile, name, location, website, description, username } = props;
  return (
    <Flex flexDirection="column">
      <AspectRatio ratio={1} mb="1">
        <Image
          src={profile}
          alt=""
          loading="lazy"
          borderRadius="md"
          objectFit="cover"
        />
      </AspectRatio>
      <Text mb="2">{name}</Text>
      <Flex alignItems="center" mb="2">
        <MapPin size={16} />
        {location ? (
          <Text ml="1" fontSize="small">
            {location}
          </Text>
        ) : (
          <Text fontSize="small" ml="1">
            N/A
          </Text>
        )}
      </Flex>
      <Flex alignItems="center" mb="4">
        <Link size={16} />
        {website ? (
          <ChakraLink
            href={website.expanded_url}
            isExternal
            fontSize="small"
            ml="1"
          >
            {website.display_url}
          </ChakraLink>
        ) : (
          <Text fontSize="small" ml="1">
            N/A
          </Text>
        )}
      </Flex>
      <Text opacity="0.6" mb="4">
        {description}
      </Text>
      <ChakraLink
        marginTop="auto"
        href={`${constants.TWITTER_URL}/${username}`}
        isExternal
      >
        <Button
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          colorScheme="twitter"
          width={"full"}
          leftIcon={<SimpleIcon size={16} path={siTwitter.path} />}
        >
          Twitter
        </Button>
      </ChakraLink>
    </Flex>
  );
}

export default Profile;
