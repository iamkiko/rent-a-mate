import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import ProfileList from "../components/profile-list.js";
import { GlobalStyle, Container, Title } from "../components/styles";

const Home = ({ profiles }) => {
  return (
    <Layout>
      <Container>
        <GlobalStyle />
        {/* <Navbar/> */}
        <Title>Find your superhero.</Title>
        <ProfileList profiles={profiles} />
      </Container>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const req = await fetch(`https://randomuser.me/api/?results=50`);
  const data = await req.json();

  return {
    props: {
      profiles: data.results,
    },
  };
};
export default Home;
