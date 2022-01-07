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
  inc,
  splitEvery,
  equals,
  concat,
} from "ramda";
import { Filter } from "react-feather";

import { listTwitterDesigners, listTwitterFollowings } from "../lib/api";
import utils from "../lib/utils";
import constants from "../lib/constants";

import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import FilterModal from "../components/FilterModal";
import Layout from "../components/Layout";
import Filters from "../components/Filters";

import { Designer, Position, TwitterDesigner } from "../types";

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
      <Layout>
        <Sidebar>
          <Filters
            positions={positions}
            selectedPositions={selectedPositions}
            setSelectedPositions={setSelectedPositions}
          />
        </Sidebar>
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
      </Layout>
    </>
  );
}

async function getTwitterDesigners(
  usernames: string[][],
  index: number,
  designers = []
): Promise<TwitterDesigner[]> {
  if (equals(index, length(usernames))) {
    return designers;
  }
  return getTwitterDesigners(
    usernames,
    inc(index),
    concat(await listTwitterDesigners(usernames[index]), designers)
  );
}

export async function getStaticProps() {
  const followings = await listTwitterFollowings();
  // Username split is required because of users lookup limit
  const usernames = splitEvery(
    100,
    map((item) => item.username, followings)
  );
  const twitterDesigners = await getTwitterDesigners(usernames, 0, []);
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
