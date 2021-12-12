import React from "react";
import Head from "next/head";
import { Grid } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { map, replace, zipWith } from "ramda";
import { Filter } from "react-feather";

import { listDesigners, listTwitterDesigners, listPositions } from "../lib/api";

import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import FilterModal from "../components/FilterModal";

import { Designer, NotionPosition } from "../types";

type props = {
  designers: Designer[];
  positions: NotionPosition[];
};

function Home(props: props) {
  const { designers, positions } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPositions, setSelectedPositions] = React.useState([]);
  const filteredDesigners = designers.filter((designer) => {
    const position = designer.position;
    const filterByPosition = selectedPositions.length;

    if (filterByPosition) {
      return selectedPositions.some(
        (element) => position && position.includes(element)
      )
        ? designer
        : null;
    }
    return designer;
  });

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
          {filteredDesigners.map((item) => {
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
          })}
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
        count={filteredDesigners.length}
        positions={positions}
        selectedPositions={selectedPositions}
        setSelectedPositions={setSelectedPositions}
      />
    </>
  );
}

export async function getStaticProps() {
  const notionDesigners = await listDesigners();
  const usernames = map((item) => item.username, notionDesigners);
  const twitterDesigners = await listTwitterDesigners(usernames);
  const positions = await listPositions();
  const designers = zipWith(
    (a, b) => {
      return {
        ...a,
        position: b.position,
      };
    },
    twitterDesigners,
    notionDesigners
  );
  return {
    props: { designers, positions },
  };
}

export default Home;
