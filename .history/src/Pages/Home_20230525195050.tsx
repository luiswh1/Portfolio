import React from "react";
import { Container, NameSection, StyledName } from "./HomeStyles";
import IndexList from "../Components/IndexList/IndexList";

const Home = () => {
  return (
    <Container>
      <IndexList />
      <NameSection>
        <StyledName>LUIS</StyledName>
        <StyledName>WEBER</StyledName>
      </NameSection>
    </Container>
  );
};

export default Home;
