import React from "react";
import Head from "next/head";
import { Grid, SimpleGrid } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";

import { Filter } from "react-feather";

import { listDesigners, listLocations, listPositions } from "../lib/api";

import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import FilterModal from "../components/FilterModal";

function Home(props) {
  const { designers, locations, positions } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedLocations, setSelectedLocations] = React.useState([]);
  const [selectedPositions, setSelectedPositions] = React.useState([]);
  const filteredDesigners = designers.filter((designer) => {
    const location = designer.fields.location && designer.fields.location[0];
    const position = designer.fields.position;
    const filterByLocation = selectedLocations.length;
    const filterByPosition = selectedPositions.length;

    if (filterByLocation && filterByPosition) {
      return selectedLocations.find((element) => element === location) &&
        selectedPositions.some(
          (element) => position && position.includes(element)
        )
        ? designer
        : null;
    }
    if (filterByLocation) {
      return selectedLocations.find((element) => element === location)
        ? designer
        : null;
    }
    if (filterByPosition) {
      return selectedPositions.some(
        (element) => position && position.includes(element)
      )
        ? designer
        : null;
    }
    if (filterByLocation && filterByPosition) {
      return selectedLocations.find((element) => element === location) &&
        selectedPositions.some(
          (element) => position && position.includes(element)
        )
        ? designer
        : null;
    }
    if (filterByLocation) {
      return selectedLocations.find((element) => element === location)
        ? designer
        : null;
    }
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
          locations={locations}
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
          positions={positions}
          selectedPositions={selectedPositions}
          setSelectedPositions={setSelectedPositions}
        />
        <SimpleGrid
          minChildWidth="200px"
          spacing="4"
          height={["initial", "initial", "100vh"]}
          overflowY="auto"
          padding="4"
        >
          {filteredDesigners.map((item) => {
            const profile =
              item.fields.profile &&
              item.fields.profile[0] &&
              item.fields.profile[0].thumbnails;

            return (
              <Profile
                key={item.id}
                profile={profile}
                name={item.fields.name}
                location={item.fields.locationName}
                website={item.fields.website}
                description={item.fields.description}
              />
            );
          })}
        </SimpleGrid>
      </Grid>
      <Button
        onClick={onOpen}
        display={["initial", "initial", "none"]}
        position="fixed"
        left="50%"
        bottom="64px"
        transform="translateX(-50%)"
        leftIcon={<Filter size={16} />}
      >
        Filter
      </Button>
      <FilterModal
        isOpen={isOpen}
        onClose={onClose}
        count={filteredDesigners.length}
        locations={locations}
        selectedLocations={selectedLocations}
        setSelectedLocations={setSelectedLocations}
        positions={positions}
        selectedPositions={selectedPositions}
        setSelectedPositions={setSelectedPositions}
      />
    </>
  );
}

export async function getStaticProps() {
  const designers = (await listDesigners()) || [];
  const locations = (await listLocations()) || [];
  const positions = (await listPositions()) || [];
  return {
    props: { designers, locations, positions },
  };
}

export default Home;
