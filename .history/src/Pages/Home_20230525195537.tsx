import React from "react";
import {
  Container,
  NameSection,
  StyledName,
  InnerContainer,
} from "./HomeStyles";
import IndexList from "../Components/IndexList/IndexList";

const Home = () => {
  return (
    <Container>
      <InnerContainer>
        <IndexList />
        <NameSection>
          <StyledName>LUIS</StyledName>
          <StyledName>WEBER</StyledName>
        </NameSection>
      </InnerContainer>
    </Container>
  );
};

export default Home;
