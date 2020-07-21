import styled from "styled-components";
import Head from "next/head";

import { listRecords } from "../lib/api";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  grid-gap: 2rem;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Name = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

function Home(props) {
  const { records } = props;

  return (
    <>
      <Head>
        <title>Bosnians Who Design</title>
      </Head>
      <main>
        <h1>Bosnians Who Design</h1>
        <Grid>
          {records.map((item) => {
            return (
              <div key={item.id}>
                <Name>{item.fields.name}</Name>
                <ProfileImage src={item.fields.profile[0].url} alt="" />
              </div>
            );
          })}
        </Grid>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const records = (await listRecords()) || [];

  return {
    props: { records },
  };
}

export default Home;
