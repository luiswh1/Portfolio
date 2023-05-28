import {
  Container,
  NameSection,
  StyledName,
  InnerContainer,
  Profession,
  About,
  LabelTitle,
  NumberIndex,
  IndexTitle,
  ListSkills,
  SkillItem,
  StyledSpanExp,
  Experience,
  Company,
  Date,
  Description,
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
          <NumberIndex>01.</NumberIndex>
          <IndexTitle>SKILLS</IndexTitle>
        </LabelTitle>

        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corporis
          culpa quaerat repudiandae eligendi consequatur quasi dicta rem,
          architecto vitae iure harum itaque molestiae sunt omnis quas atque a
          ducimus!
        </About>

        <ListSkills>
          <SkillItem>React</SkillItem>
          <SkillItem>Javascript</SkillItem>
          <SkillItem>Java</SkillItem>
          <SkillItem>Typescript</SkillItem>
          <SkillItem>Node</SkillItem>
          <SkillItem>CSS</SkillItem>
        </ListSkills>

        <LabelTitle>
          <StyledSpanExp>EXP-</StyledSpanExp>
          <NumberIndex>02.</NumberIndex>
          <IndexTitle>ERIENCE</IndexTitle>
        </LabelTitle>

        <Experience>
          <Company>Meta</Company>
          <Date>Setembto - 2021 - Present</Date>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            pariatur tempore similique obcaecati! Neque dolore distinctio fugiat
            doloremque vero vel, placeat provident perferendis. Impedit numquam
            ipsa tenetur quia recusandae incidunt.
          </Description>
        </Experience>
      </InnerContainer>
    </Container>
  );
};

export default Home;
