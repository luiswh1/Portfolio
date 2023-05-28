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
  SectionContacts,
  ContactItem,
  FooterSection,
} from "./HomeStyles";
import IndexList from "../Components/IndexList/IndexList";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <Container>
        <Fade direction="down">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            corporis culpa quaerat repudiandae eligendi consequatur quasi dicta
            rem, architecto vitae iure harum itaque molestiae sunt omnis quas
            atque a ducimus!
          </About>

          <LabelTitle>
            <NumberIndex>01.</NumberIndex>
            <IndexTitle>SKILLS</IndexTitle>
          </LabelTitle>

          <About>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            corporis culpa quaerat repudiandae eligendi consequatur quasi dicta
            rem, architecto vitae iure harum itaque molestiae sunt omnis quas
            atque a ducimus!
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
            {/* TODO Ajustar o EXP em diferente resoluções de celular, pois está ficando desalinhado com o ERIENCE */}
            <StyledSpanExp>EXP-</StyledSpanExp>
            <NumberIndex>02.</NumberIndex>
            <IndexTitle>ERIENCE</IndexTitle>
          </LabelTitle>

          <Experience>
            <Company>Meta</Company>
            <Date>Setembto - 2021 - Present</Date>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              pariatur tempore similique obcaecati! Neque dolore distinctio
              fugiat doloremque vero vel, placeat provident perferendis. Impedit
              numquam ipsa tenetur quia recusandae incidunt.
            </Description>
          </Experience>

          <LabelTitle>
            <NumberIndex>03.</NumberIndex>
            <IndexTitle>CONTACT</IndexTitle>
          </LabelTitle>

          <About>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            corporis culpa quaerat repudiandae eligendi
          </About>

          <SectionContacts>
            <ContactItem>LinkedIn</ContactItem>
            <ContactItem>GitHub</ContactItem>
            <ContactItem>Whatsapp</ContactItem>
          </SectionContacts>

          <FooterSection>
            <h4>Developed by Luis Weber - 2023</h4>
          </FooterSection>
      </InnerContainer>
        </Fade>
    </Container>
  );
};

export default Home;
