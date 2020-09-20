import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import Link from "next/link";
import {
  Button,
  CardContainer,
  CardInfo,
  Image,
  Location,
  Name,
  RightArrow,
} from "./styles";

const ProfileList = ({ profiles, initialSelectedPerson }) => {
  const [persons, setPersons] = useState(profiles);
  const [selectedPerson, setSelectedPerson] = useState(initialSelectedPerson);
  console.log("selectedPerson", selectedPerson);
  useEffect(() => {
    Cookie.set("selectedPerson", selectedPerson);
  }, [selectedPerson]);

  return (
    <CardContainer>
      {persons.map((profile) => {
        return (
          <CardInfo key={profile.login.uuid}>
            <Image src={profile.picture.large} />
            <Name>
              {profile.name.title} {profile.name.first} {profile.name.last}
            </Name>
            <Location>
              {profile.location.city}, {profile.location.country}
            </Location>

            <Link
              as={`person/${profile.name.first}-${profile.name.last}`}
              href={`person/[profile]`}
              passHref
            >
              <Button onClick={() => setSelectedPerson(profile)}>
                View Profile <RightArrow />
              </Button>
            </Link>
          </CardInfo>
        );
      })}
    </CardContainer>
  );
};

export const getServerSideProps = async ({ req }) => {
  const cookies = parseCookies(req);
  cookies.selectedPerson;
  console.log("cookies in gssp", cookies);
  return {
    selectedPerson: cookies.selectedPerson,
  };
};

export default ProfileList;
