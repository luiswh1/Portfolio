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

        <h1>
          Fullstack <br />
          Developer
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corporis
          culpa quaerat repudiandae eligendi consequatur quasi dicta rem,
          architecto vitae iure harum itaque molestiae sunt omnis quas atque a
          ducimus!
        </p>
      </InnerContainer>
    </Container>
  );
};

export default Home;
