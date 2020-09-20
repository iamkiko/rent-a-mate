import React from "react";
import PropTypes from "prop-types";
import ProfileList from "../components/profile-list.js";
import { Container, Title } from "../components/styles";

const Home = ({ profiles, selectedPerson }) => {
  return (
    <Container>
      {/* <Navbar/> */}
      <Title>Find your superhero</Title>
      <ProfileList profiles={profiles} selectedPerson={selectedPerson} />
    </Container>
  );
};

export const getServerSideProps = async () => {
  const req = await fetch(`https://randomuser.me/api/?results=50`);
  const data = await req.json();

  return {
    props: {
      profiles: data.results,
      selectedPerson: selectedPerson,
    },
  };
};
export default Home;
