import React from "react";
import Head from "next/head";
import { Grid, Button, useDisclosure, Center, Spinner } from "@chakra-ui/react";
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
  flatten,
  or,
  count,
} from "ramda";
import { Filter } from "react-feather";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { listTwitterDesigners, listTwitterFollowings } from "../lib/api";
import utils from "../lib/utils";
import constants from "../lib/constants";
import devDesigners from "../lib/devDesigners.json";

import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import FilterModal from "../components/FilterModal";
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
  const [visibleDesigners, setVisibleDesigners] = React.useState<Designer[]>(
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
  }, visibleDesigners);
  const isLoading = equals(length(filteredDesigners), 0);
  const { t } = useTranslation("common");

  React.useEffect(() => {
    setVisibleDesigners(utils.fisherYates(designers));
  }, [designers]);

  return (
    <>
      <Head>
        <title>Bosnians Who Design</title>
      </Head>
      <Grid gridTemplateColumns={["1fr", "1fr", "312px 1fr"]}>
        <Sidebar height={["initial", "initial", "100vh"]}>
          <Filters
            positions={positions}
            selectedPositions={selectedPositions}
            setSelectedPositions={setSelectedPositions}
          />
        </Sidebar>
        {isLoading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <Grid
            gridGap="4"
            height={["initial", "initial", "100vh"]}
            overflowY="auto"
            padding="4"
            gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            gridAutoRows="max-content"
            sx={utils.getScrollbarStyle()}
          >
            {map((item) => {
              const profile = replace("_normal", "", item.profile_image_url);
              return (
                <Profile
                  key={item.id}
                  profile={profile}
                  name={item.name}
                  location={item.location}
                  website={item.entities?.url?.urls[0]}
                  description={item.description}
                  username={item.username}
                />
              );
            }, filteredDesigners)}
          </Grid>
        )}
        <Button
          onClick={onOpen}
          display={["initial", "initial", "none"]}
          position="fixed"
          left="50%"
          bottom="64px"
          transform="translateX(-50%)"
          colorScheme="blue"
          size="lg"
          leftIcon={<Filter size={16} />}
        >
          {t("filter")}
        </Button>
        <FilterModal
          isOpen={isOpen}
          onClose={onClose}
          count={length(filteredDesigners)}
          positions={positions}
          selectedPositions={selectedPositions}
          setSelectedPositions={setSelectedPositions}
        />
      </Grid>
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

async function getDesigners() {
  const followings = await listTwitterFollowings();
  const usernames = splitEvery(
    100,
    map((item) => item.username, followings)
  );
  return await getTwitterDesigners(usernames, 0, []);
}

export async function getStaticProps({ locale }) {
  const twitterDesigners = constants.IS_PROD
    ? await getDesigners()
    : devDesigners;
  const designers = map((item) => {
    const description = split(" ", toLower(item.description));
    const positions = flatten(map((item) => item.value, constants.POSITIONS));
    const inter = intersection(description, positions);
    return {
      ...item,
      position: inter,
    };
  }, twitterDesigners);
  const positions = map((position) => {
    return {
      ...position,
      count: count(
        (designer) =>
          any((item) => includes(item, position.value), designer.position),
        designers
      ),
    };
  }, constants.POSITIONS);
  return {
    props: {
      ...(await serverSideTranslations(or(locale, "en"), ["common"])),
      designers,
      positions,
    },
  };
}

export default Home;
