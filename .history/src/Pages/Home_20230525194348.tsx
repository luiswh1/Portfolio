import React from "react";
import { Container, NameSection } from "./HomeStyles";
import IndexList from "../Components/IndexList/IndexList";

const Home = () => {
  return (
    <Container>
      <IndexList />

      <NameSection>
        <h1>LUIS</h1>
        <h1>WEBER</h1>
      </NameSection>
    </Container>
  );
};

export default Home;
