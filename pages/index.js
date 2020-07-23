import styled from "styled-components";
import Head from "next/head";
import { Filter } from "react-feather";

import constants from "../lib/constants";

import {
  listDesigners,
  listLocations,
  listPositions,
  listCompanies,
} from "../lib/api";

import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import { Button } from "../components/button";
import FilterModal from "../components/FilterModal";

const Body = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

const FilterButton = styled(Button)`
  display: flex;
  align-items: center;
  position: fixed;
  left: 50%;
  bottom: 64px;
  transform: translateX(-50%);
  svg {
    margin-right: 0.5rem;
  }
  @media (min-width: ${constants.BREAKPOINTS.LARGE_DEVICES}) {
    display: none;
  }
`;

const Layout = styled.div`
  @media (min-width: ${constants.BREAKPOINTS.LARGE_DEVICES}) {
    display: grid;
    grid-template-columns: 312px 1fr;
    height: 100vh;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  padding: 1rem;
  overflow-y: auto;
`;

function Home(props) {
  const { designers, locations, positions, companies } = props;
  const [isOpen, setIsOpen] = React.useState(true);
  const [selectedLocations, setSelectedLocations] = React.useState([]);
  const [selectedPositions, setSelectedPositions] = React.useState([]);
  const [selectedCompanies, setSelectedCompanies] = React.useState([]);
  const filteredDesigners = designers.filter((designer) => {
    const location = designer.fields.location && designer.fields.location[0];
    const position = designer.fields.position;
    const company = designer.fields.company && designer.fields.company[0];
    const filterByLocation = selectedLocations.length;
    const filterByPosition = selectedPositions.length;
    const filterByCompany = selectedCompanies.length;

    if (filterByLocation && filterByPosition && filterByCompany) {
      return selectedLocations.find((element) => element === location) &&
        selectedPositions.some(
          (element) => position && position.includes(element)
        ) &&
        selectedCompanies.find((element) => element === company)
        ? designer
        : null;
    }
    if (filterByLocation && filterByCompany) {
      return selectedLocations.find((element) => element === location) &&
        selectedCompanies.find((element) => element === company)
        ? designer
        : null;
    }
    if (filterByPosition && filterByCompany) {
      return selectedPositions.some(
        (element) => position && position.includes(element)
      ) && selectedCompanies.find((element) => element === company)
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
    if (filterByCompany) {
      return selectedCompanies.find((element) => element === company)
        ? designer
        : null;
    }
    return designer;
  });

  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      <Head>
        <title>Bosnians Who Design</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="og:description"
          content="Directory of Bosnians in IT industry."
        />
        <meta property="og:image" content="opengraph.png"></meta>
      </Head>
      <Body>
        <Layout>
          <Sidebar
            locations={locations}
            selectedLocations={selectedLocations}
            setSelectedLocations={setSelectedLocations}
            positions={positions}
            selectedPositions={selectedPositions}
            setSelectedPositions={setSelectedPositions}
            companies={companies}
            selectedCompanies={selectedCompanies}
            setSelectedCompanies={setSelectedCompanies}
          />
          <Grid>
            {filteredDesigners.map((item) => {
              return (
                <Profile
                  key={item.id}
                  url={
                    item.fields.profile &&
                    item.fields.profile[0] &&
                    item.fields.profile[0].url
                  }
                  name={item.fields.name}
                  location={item.fields.locationName}
                  website={item.fields.website}
                  description={item.fields.description}
                />
              );
            })}
          </Grid>
        </Layout>
        <FilterButton onClick={() => setIsOpen(true)}>
          <Filter size={16} />
          Filter
        </FilterButton>
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
          companies={companies}
          selectedCompanies={selectedCompanies}
          setSelectedCompanies={setSelectedCompanies}
        />
      </Body>
    </>
  );
}

export async function getStaticProps() {
  const designers = (await listDesigners()) || [];
  const locations = (await listLocations()) || [];
  const positions = (await listPositions()) || [];
  const companies = (await listCompanies()) || [];

  return {
    props: { designers, locations, positions, companies },
  };
}

export default Home;
