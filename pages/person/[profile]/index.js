import React from "react";
import dynamic from "next/dynamic";

const DynamicUserProfile = dynamic(
  () => import("../../../components/user-profile"),
  { ssr: false }
);

const PersonProfile = () => {
  return (
    <>
      <DynamicUserProfile />
    </>
  );
};

export default PersonProfile;
