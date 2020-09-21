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
  const [sortAlphabetical, setSortAlphabetical] = useState(false);

  useEffect(() => {
    Cookie.set("selectedPerson", selectedPerson);
  }, [selectedPerson]);
  console.log("persons", persons);

  // sort the data
  const compare = (a, b) => {
    const nameA = a.name.last.toLowerCase();
    const nameB = b.name.last.toLowerCase();

    let comparison = 0;

    if (nameA > nameB) {
      comparison = -1;
    } else if (nameA < nameB) {
      comparison = 1;
    }
    return comparison * -1;
  };

  // const sortedData = [...persons.sort(compare)];

  // console.log("sortedData", sortedData);
  return (
    <CardContainer>
      <Button onClick={() => setSortAlphabetical(!sortAlphabetical)}>
        Sort alphabetically
      </Button>
      {sortAlphabetical
        ? persons.sort(compare).map((profile) => {
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
          })
        : persons.map((profile) => {
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
