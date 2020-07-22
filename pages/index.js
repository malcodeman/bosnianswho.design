import styled from "styled-components";
import Head from "next/head";

import constants from "../lib/constants";

import { listDesigners, listLocations, listPositions } from "../lib/api";

import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";

const Body = styled.div`
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.92);
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
  const { designers, locations, positions } = props;
  const [selectedLocations, setSelectedLocations] = React.useState([]);
  const [selectedPositions, setSelectedPositions] = React.useState([]);
  const filteredDesigners = designers.filter((designer) => {
    const location = designer.fields.location[0];
    const position = designer.fields.position;

    if (selectedLocations.length && selectedPositions.length) {
      return selectedLocations.find((element) => element === location) &&
        selectedPositions.some(
          (element) => position && position.includes(element)
        )
        ? designer
        : null;
    }
    if (selectedLocations.length) {
      return selectedLocations.find((element) => element === location)
        ? designer
        : null;
    }
    if (selectedPositions.length) {
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
      </Body>
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
