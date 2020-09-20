import React from "react";
import Link from "next/link";
import { CardContainer, Image, Location, Name, CardInfo } from "./styles";

const Card = ({ persons, city, country, first, last, picture, title }) => {
  //   console.log("persons in Card", persons);
  return (
    <CardContainer>
      {persons.map((profile) => {
        console.log("profile mapping", profile);
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
              as={`person/${profile.login.uuid}`}
              href={`person/[profile]`}
              passHref
            >
              <button>View Profile</button>
            </Link>
          </CardInfo>
        );
      })}
    </CardContainer>
  );
};

export default Card;
