import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import Link from "next/link";
import PropTypes from "prop-types";
import Search from "./search";
import {
  Button,
  SubmitButton,
  CardContainer,
  CardInfo,
  Image,
  Location,
  Name,
  RightArrow,
  SubContainer,
} from "./styles";

const ProfileList = ({ profiles, initialSelectedPerson }) => {
  const [selectedPerson, setSelectedPerson] = useState(initialSelectedPerson);
  const [sortAlphabetical, setSortAlphabetical] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const [cardList, setCardList] = useState([...profiles]);

  // Set cookie for state to remember user on specific page
  useEffect(() => {
    Cookie.set("selectedPerson", selectedPerson);
  }, [selectedPerson]);

  // Gender select
  useEffect(() => {
    const getGender = () => {
      if (selectedGender === "male") {
        return setCardList(
          profiles.filter((person) => person.gender === "male")
        );
      } else if (selectedGender === "female") {
        return setCardList(
          profiles.filter((person) => person.gender === "female")
        );
      } else if (selectedGender === null) {
        return setCardList(profiles);
      }
    };

    getGender(); // To avoid async problems in useEffect()
  }, [selectedGender, setSelectedGender]);

  // Search function
  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  // Search filtering
  useEffect(() => {
    const searchTerm = () => {
      return setCardList(
        profiles.filter(
          (profile) =>
            profile.name.first.toLowerCase().includes(query.toLowerCase()) ||
            profile.name.last.toLowerCase().includes(query.toLowerCase())
        )
      );
    };
    searchTerm();
  }, [query, setQuery]);

  // Sorting helper function
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

  return (
    <>
      <SubContainer>
        <Search handleSearch={handleSearch} query={query} />
        <Button onClick={() => setSortAlphabetical(!sortAlphabetical)}>
          Sort alphabetically
        </Button>
        <Button onClick={() => setSelectedGender("male")}>
          Show only males
        </Button>
        <Button onClick={() => setSelectedGender("female")}>
          Show only females
        </Button>
        <Button onClick={() => setSelectedGender(null)}>
          Show males and females
        </Button>
      </SubContainer>
      <CardContainer>
        {sortAlphabetical
          ? cardList.sort(compare).map((profile) => {
              return (
                <CardInfo key={profile.login.uuid}>
                  <Image src={profile.picture.large} />
                  <Name>
                    {profile.name.title} {profile.name.first}{" "}
                    {profile.name.last}
                  </Name>
                  <Location>
                    {profile.location.city}, {profile.location.country}
                  </Location>
                  <Link
                    as={`person/${profile.name.first}-${profile.name.last}`}
                    href={`person/[profile]`}
                    passHref
                  >
                    <SubmitButton onClick={() => setSelectedPerson(profile)}>
                      View Profile <RightArrow />
                    </SubmitButton>
                  </Link>
                </CardInfo>
              );
            })
          : cardList.map((profile) => {
              return (
                <CardInfo key={profile.login.uuid}>
                  <Image src={profile.picture.large} />
                  <Name>
                    {profile.name.title} {profile.name.first}{" "}
                    {profile.name.last}
                  </Name>
                  <Location>
                    {profile.location.city}, {profile.location.country}
                  </Location>
                  <Link
                    as={`person/${profile.name.first}-${profile.name.last}`}
                    href={`person/[profile]`}
                    passHref
                  >
                    <SubmitButton onClick={() => setSelectedPerson(profile)}>
                      View Profile <RightArrow />
                    </SubmitButton>
                  </Link>
                </CardInfo>
              );
            })}
      </CardContainer>
    </>
  );
};

ProfileList.propTypes = {
  profiles: PropTypes.array.isRequired,
  initialSelectedPerson: PropTypes.object,
};

export const getServerSideProps = async ({ req }) => {
  const cookies = parseCookies(req);
  cookies.selectedPerson;
  return {
    selectedPerson: cookies.selectedPerson,
  };
};

export default ProfileList;
