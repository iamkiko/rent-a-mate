import React from "react";
import PropTypes from "prop-types";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import {
  GlobalStyle,
  ProfileContainer,
  ProfileTitle,
  ProfileImage,
  Name,
  Subtitle,
  ContactDetails,
} from "../../../components/styles";
import { LocationOn, Phone } from "@material-ui/icons";
const UserProfile = () => {
  const specificUser = JSON.parse(Cookie.get("selectedPerson"));

  return (
    <Layout>
      <GlobalStyle />
      <ProfileContainer>
        <ProfileTitle>
          {specificUser.name.title} {specificUser.name.first}{" "}
          {specificUser.name.last}
        </ProfileTitle>
        <ProfileImage src={specificUser.picture.large} />
        <Subtitle>
          <LocationOn />
          {specificUser.location.city}, {specificUser.location.country}
        </Subtitle>
        <Subtitle>Contact Details:</Subtitle>
        <ContactDetails>
          <li>
            <Phone />
            Mobile: {specificUser.cell}
          </li>
          <li>
            <Phone />
            Office number: {specificUser.phone}
          </li>
        </ContactDetails>
        <Subtitle>Additional Info:</Subtitle>
        <ContactDetails>
          <li>Age: {specificUser.dob.age}</li>
          <li>Member for {specificUser.registered.age} years</li>
        </ContactDetails>

        <Subtitle>Full Address:</Subtitle>
        <p>
          {specificUser.location.street.number},{" "}
          {specificUser.location.street.name}, {specificUser.location.city},{" "}
          {specificUser.location.state}, {specificUser.location.country}
        </p>
      </ProfileContainer>
    </Layout>
  );
};

export default UserProfile;
