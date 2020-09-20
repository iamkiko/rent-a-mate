import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import getConfig from "next/config";

const UserProfile = () => {
  const router = useRouter();
  // console.log("router", router);
  // logs out the route we have 'hit'
  console.log(router.query);
  const { profile } = router.query;
  console.log(profile);
  // console.log("persons", persons);
  //   if (!persons) {
  //     return <NotFound />;
  //   }

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
export const getServerSideProps = async () => {
  const req = await fetch(`https://randomuser.me/api/?${login.uuid}`);
  const data = await req.json();

  return {
    props: {
      profiles: data.results,
    },
  };
};
//prop-types here

export default UserProfile;
