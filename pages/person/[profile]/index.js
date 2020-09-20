import React from "react";
import PropTypes from "prop-types";
import Cookie from "js-cookie";
import { useRouter } from "next/router";

const UserProfile = () => {
  const specificUser = JSON.parse(Cookie.get("selectedPerson"));
  console.log("specificUser on next page", specificUser);

  const router = useRouter();
  const { profile } = router.query;

  return (
    <>
      <h2>Test</h2>
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
