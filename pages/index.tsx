import React from "react";
import Head from "next/head";
import { Grid } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  map,
  replace,
  filter,
  includes,
  any,
  length,
  toLower,
  split,
  intersection,
} from "ramda";
import { Filter } from "react-feather";

import { listTwitterDesigners, listTwitterFollowings } from "../lib/api";
import utils from "../lib/utils";
import constants from "../lib/constants";

import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import FilterModal from "../components/FilterModal";

import { Designer, Position } from "../types";

type props = {
  designers: Designer[];
  positions: Position[];
};

function Home(props: props) {
  const { designers, positions } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPositions, setSelectedPositions] = React.useState<string[]>(
    []
  );
  const filteredDesigners = filter((designer) => {
    if (length(selectedPositions)) {
      const tags = filter(
        (item) => includes(item.id, selectedPositions),
        positions
      )
        .map((item) => item.value)
        .flat();
      return any(
        (position) => Boolean(includes(position, designer.position)),
        tags
      );
    }
    return true;
  }, designers);

  return (
    <>
      <Head>
        <title>Bosnians Who Design</title>
      </Head>
      <Grid gridTemplateColumns={["1fr", "1fr", "312px 1fr"]}>
        <Sidebar
          positions={positions}
          selectedPositions={selectedPositions}
          setSelectedPositions={setSelectedPositions}
        />
        <Grid
          gridGap="4"
          height={["initial", "initial", "100vh"]}
          overflowY="auto"
          padding="4"
          gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gridAutoRows="max-content"
        >
          {map((item) => {
            const profile = replace("_normal", "", item.profile_image_url);
            return (
              <Profile
                key={item.id}
                profile={profile}
                name={item.name}
                location={item.location}
                website={item.url}
                description={item.description}
                username={item.username}
              />
            );
          }, filteredDesigners)}
        </Grid>
      </Grid>
      <Button
        onClick={onOpen}
        display={["initial", "initial", "none"]}
        position="fixed"
        left="50%"
        bottom="64px"
        transform="translateX(-50%)"
        colorScheme="blue"
        leftIcon={<Filter size={16} />}
      >
        Filter
      </Button>
      <FilterModal
        isOpen={isOpen}
        onClose={onClose}
        count={length(filteredDesigners)}
        positions={positions}
        selectedPositions={selectedPositions}
        setSelectedPositions={setSelectedPositions}
      />
    </>
  );
}

export async function getStaticProps() {
  const followings = await listTwitterFollowings();
  const usernames = map((item) => item.username, followings);
  const twitterDesigners = await listTwitterDesigners(usernames);
  const designers = map((item) => {
    const description = split(" ", toLower(item.description));
    const positions = map((item) => item.value, constants.POSITIONS).flat();
    const inter = intersection(description, positions);
    return {
      ...item,
      position: inter,
    };
  }, twitterDesigners);
  return {
    props: {
      designers: utils.fisherYates(designers),
      positions: constants.POSITIONS,
    },
  };
}

export default Home;
