import React from "react";
import {
  Container,
  NameSection,
  StyledName,
  InnerContainer,
  Profession,
  About,
  LabelTitle,
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

        <Profession>
          FULLSTACK <br />
          DEVELOPER
        </Profession>

        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corporis
          culpa quaerat repudiandae eligendi consequatur quasi dicta rem,
          architecto vitae iure harum itaque molestiae sunt omnis quas atque a
          ducimus!
        </About>

      <LabelTitle>
        <span>01</span>
        <span>SKILLS</span>
      </LabelTitle>

      </InnerContainer>
    </Container>
  );
};

export default Home;
