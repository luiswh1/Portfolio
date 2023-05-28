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
          <StyledName>
            LUIS <br />
            WEBER
          </StyledName>
        </NameSection>

        <h2>
          Fullstack <br />
          Developer
        </h2>
      </InnerContainer>
    </Container>
  );
};

export default Home;
