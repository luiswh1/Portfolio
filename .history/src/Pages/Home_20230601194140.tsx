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
        <div style={{width: '250px', height: '250px', backgroundColor: 'white', borderRadius: '50%', margin: 'auto', marginTop: '5vh'}}></div>
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
            I have expertise in both front-end and back-end technologies,
            including HTML, CSS, JavaScript, React, Typescript, Node.js, and
            Java. below it is possible to better check the tools that I have
            already used
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
            <Date>September - 2021 - Present</Date>
            <Description>
              As a professional at Meta company, I was responsible for
              developing new features and resolving bugs in web applications, as
              well as creating screens and interactive interfaces. I utilized
              the agile Scrum methodology for project management, ensuring
              high-quality deliveries. I conducted code reviews to ensure code
              excellence, leveraging my expertise in technologies such as React,
              Java, TypeScript, and Redux. Additionally, I maintained direct
              collaboration with clients, ensuring effective communication and
              delivering solutions that met their needs.
            </Description>
          </Experience>

          <Experience>
            <Company>Growdev</Company>
            <Date>October - 2020 - October - 2021</Date>
            <Description>
              I successfully completed a rigorous 1-year intensive full-stack
              web development course where I acquired extensive knowledge in the
              technologies essential to my current professional work, including
              JavaScript, React, Node.js, MySQL, and PostgreSQL. This
              comprehensive course provided me with a profound understanding of
              the entire development process, encompassing both front-end and
              back-end aspects, including the implementation of RESTful APIs and
              the structuring of database schemas.
            </Description>
          </Experience>

          <LabelTitle>
            <NumberIndex>03.</NumberIndex>
            <IndexTitle>CONTACT</IndexTitle>
          </LabelTitle>

          <About>
            If you would like to have a direct conversation with me to get to
            know me better, I have provided all of my contact information and
            social media profiles below for ease of communication. I look
            forward to hearing from you, and thank you for visiting my
            professional portfolio.
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
