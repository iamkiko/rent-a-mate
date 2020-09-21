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
        <Title>RENT A MATE</Title>
        <ProfileList profiles={profiles} />
      </Container>
    </Layout>
  );
};

Home.propTypes = {
  profiles: PropTypes.array.isRequired,
};

export const getServerSideProps = async () => {
  const req = await fetch(`https://randomuser.me/api/?results=50`, {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json",
    },
  });
  const data = await req.json();

  return {
    props: {
      profiles: data.results,
    },
  };
};

export default Home;
