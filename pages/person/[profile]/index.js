import React from "react";
import PropTypes from "prop-types";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
// import { Container, Title } from "../components/styles";

const UserProfile = () => {
  const specificUser = JSON.parse(Cookie.get("selectedPerson"));
  console.log("specificUser on next page", specificUser);

  const router = useRouter(); // neeeded?
  const { profile } = router.query; // needed?

  const convertDate = () => new Date().toISOString().slice(0, 10);
  const personDOB = convertDate(specificUser.dob.date);
  return (
    <>
      <h2>
        {specificUser.name.title} {specificUser.name.first}{" "}
        {specificUser.name.last}
      </h2>
      <img src={specificUser.picture.large} />
      <h3>
        {specificUser.location.city}, {specificUser.location.country}
      </h3>
      <h3>Contact Details:</h3>
      <ul>
        <li>Mobile: {specificUser.cell}</li>
        <li>Office number: {specificUser.phone}</li>
      </ul>
      <h3>Additional Info:</h3>
      <h4>
        Age: {specificUser.dob.age}, born on {personDOB}
      </h4>
      <h4>Member for {specificUser.registered.age} years</h4>
      <h4>Address:</h4>
      <p>
        {specificUser.location.street.number},{" "}
        {specificUser.location.street.name}, {specificUser.location.city},{" "}
        {specificUser.location.state}, {specificUser.location.country}
      </p>
      {/* <ProfileContainer>
        <Heading1>
          {profile.name.title} {profile.name.first} {profile.name.last}
        </Heading1>
      </ProfileContainer> */}
    </>
  );
};
// export const getServerSideProps = async () => {
//   const req = await fetch(`https://randomuser.me/api/?${login.uuid}`);
//   const data = await req.json();

//   return {
//     props: {
//       profiles: data.results,
//     },
//   };
// };
//prop-types here

export default UserProfile;
