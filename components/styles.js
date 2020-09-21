import styled from "styled-components";
import { KeyboardArrowRight } from "@material-ui/icons";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(to right, #eeeff6, #f1fcfd);
    font-family: "Poppins", sans-serif;
  }
`;

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  color: #4db3bf;
  font-size: 4.2rem;
  -webkit-text-stroke: 2px #c3ebee;
  margin-top: 0;
  margin-bottom: 1.2rem;
  @media (max-width: 1024px) {
    font-size: 2.6rem;
  }
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
  background: #2c85c9;
  font-family: "Poppins", sans-serif;
  color: #fff;
  max-width: 8rem;
  width: 100%;
  padding: 0.4rem;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    background: #4db3bf;
  }
`;

export const SubmitButton = styled.button`
  background: #268508;
  font-family: "Poppins", sans-serif;
  color: #fff;
  max-width: 8rem;
  width: 100%;
  padding: 0.5rem 0.4rem 0.5rem 1.2rem;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    background: #00aa66;
  }
`;

export const RightArrow = styled(KeyboardArrowRight)``;

// Profile Page styles

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50rem;
  margin: 0 auto;
  margin-top: 2.8rem;
  padding-bottom: 4rem;
  border: 1px solid #fff2de;
  border-radius: 1rem;
  box-shadow: 0px 13px 24px 1px rgba(130, 166, 194, 1);
  h4 {
    margin: 0.6rem;
    font-weight: 300;
  }
  p {
    color: #00355e;
    margin-top: 0;
  }
`;

export const ProfileTitle = styled.h1`
  margin-bottom: 0;
  font-weight: 300;
  color: #2c85c9;
  font-size: 2.4rem;
`;

export const Subtitle = styled.h3`
  font-weight: 300;
  text-decoration: underline;
  margin: 0.6rem;
  color: #00355e;
`;

export const ContactDetails = styled.ul`
  margin: 0;
  list-style: none;
  > li {
    color: #00355e;
  }
`;

export const ProfileImage = styled.img`
  margin-top: 1rem;
  max-width: 6.8rem;
  width: 100%;
  border-radius: 50%;
  border: 1px solid #fff2de;
`;

export const NavLink = styled.a`
  margin: 2.8rem;
  font-size: 2rem;
  color: #2c85c9;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    input {
      margin-bottom: 20px;
    }
  }
  p {
    margin: 0;
  }
`;
