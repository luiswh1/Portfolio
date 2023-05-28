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

        <h3>
          Fullstack <br />
          Developer
        </h3>
      </InnerContainer>
    </Container>
  );
};

export default Home;
