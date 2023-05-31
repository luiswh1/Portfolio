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
            I am a passionate and dedicated Full Stack Junior Developer with 2
            years of experience. , I have successfully contributed to the
            development of visually appealing, user-friendly web applications.
            Throughout my career, I have actively participated in the full
            software development lifecycle, collaborating effectively within
            teams and delivering projects on time. My portfolio showcases my
            technical skills, problem-solving abilities, and commitment to
            delivering high-quality solutions. I am eager to join a dynamic team
            and contribute my knowledge and enthusiasm to drive success.
          </About>

          <LabelTitle>
            <NumberIndex>01.</NumberIndex>
            <IndexTitle>SKILLS</IndexTitle>
          </LabelTitle>

          <About>
           I have expertise in both front-end and back-end technologies, including HTML, CSS, JavaScript, React, Typescript, Node.js, and Java.
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
