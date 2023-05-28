import React from "react";
import { Container } from "./HomeStyles";
import IndexList from "../Components/IndexList/IndexList";

const Home = () => {
  return (
    <Container>
      <IndexList />
      <h1>Luis Weber</h1>
    </Container>
  );
};

export default Home;
