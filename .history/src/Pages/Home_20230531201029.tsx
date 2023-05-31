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
      <InnerContainer>
        <Fade direction="down" triggerOnce>
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
            I am a Junior Full Stack Developer with 2 years of experience. I
            have expertise in both front-end and back-end technologies,
            including HTML, CSS, JavaScript, React, Node.js, Java and Typescript . I have
            collaborated on web development projects and I am ready to
            contribute my technical skills and enthusiasm to drive team success.
            My portfolio showcases my problem-solving ability and delivery of
            high-quality solutions.
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

          <LabelTitle id="parent">
            {/* TODO Ajustar o EXP em diferente resoluções de celular, pois está ficando desalinhado com o ERIENCE */}
            <div>
              <NumberIndex>02.</NumberIndex>
            </div>
            <div id="divhaha">
              <StyledSpanExp>EXP-</StyledSpanExp>
              <IndexTitle>ERIENCE</IndexTitle>
            </div>
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
            <h4 style={{ marginBottom: "3vh" }}>
              Developed by Luis Weber - 2023
            </h4>
          </FooterSection>
        </Fade>
      </InnerContainer>
    </Container>
  );
};

export default Home;
