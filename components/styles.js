import styled from "styled-components";
import { KeyboardArrowRight } from "@material-ui/icons";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

export const Title = styled.h1`
  color: #f8b24b;
  font-size: 4.2rem;
  -webkit-text-stroke: 2px black;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const CardInfo = styled.div`
  display: flex;
  background: #fff;
  max-width: 20rem;
  flex-flow: column wrap;
  flex-basis: 33%;
  border: 1px solid #fff2de;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px 1px rgba(130, 166, 194, 1);
  margin: 1.6rem;
  padding: 1.6rem;
  align-items: center;
`;

export const Image = styled.img`
  margin-top: 1rem;
  max-width: 6.8rem;
  width: 100%;
  border-radius: 50%;
  border: 1px solid #fff2de;
`;

export const Name = styled.h2`
  margin-bottom: 0;
  font-weight: 300;
  color: #403f5c;
`;

export const Location = styled.h3`
  font-weight: 300;
  color: #403f5c;
`;

export const Button = styled.button`
  background: #268508;
  font-family: "Poppins", sans-serif;
  color: #fff;
  max-width: 10rem;
  width: 100%;
  padding: 0.6rem 0.6rem 0.6rem 2.5rem;
  border-radius: 0.6rem;
  margin-bottom: 1rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const RightArrow = styled(KeyboardArrowRight)``;
