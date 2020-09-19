import React from "react";
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
            {/* <Name>
        {title} {first} {last}
      </Name>
      <Location>
        {city}, {country}
      </Location> */}
          </CardInfo>
        );
      })}
    </CardContainer>
  );
};

export default Card;
