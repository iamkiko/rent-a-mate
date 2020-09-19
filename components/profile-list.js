import React, { useState } from "react";
import Card from "./card";
const ProfileList = ({ profiles }) => {
  const [persons, setPersons] = useState(profiles);
  return (
    <div>
      <Card persons={persons} />
    </div>
  );
};

export default ProfileList;
