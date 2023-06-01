import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const InnerContainer = styled.div`
  margin-left: 8vw;
  margin-right: 8vw;
`;

export const NameSection = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 6vh;
`;

export const StyledName = styled.h1`
  font-size: 5em;
  color: gray;
`;

export const Profession = styled.h1`
margin-top: 5vh;
`

export const About = styled.p`
margin-top: 3vh;
color: white;
font-weight: bold;
`
export const LabelTitle = styled.div`
margin-top: 5vh;
display: flex;
align-items: flex-end;
`

export const NumberIndex = styled.span`
  font-size: 2em;
  color: gray;
  margin-right: 3vw;
`;

export const IndexTitle = styled.span`
  font-size: 3em;
  color: white;
  margin-left: 3vw;
  font-weight: bold;
`;


export const ListSkills = styled.div`
margin-top: 8vh;
display: flex;
  flex-wrap: wrap;
`;

export const SkillItem = styled.div`
flex-basis: 50%;
margin-bottom: 3vh;
color: white;
display: flex;
`;

export const StyledSpanExp = styled.span`
font-size: 3em;
color: white;
font-weight: bold;
margin-left: 3vw;
`

export const Experience = styled.section`
margin-top: 5vh;
color: gray;
`

export const Company = styled.h5`
font-size: 1.8em;
`

export const Date = styled.h6`
font-size: 1em;
`

export const Description = styled.p`
color: white;
font-weight: bold;
margin-top: 2vh;
`

export const SectionContacts = styled.p`
margin-top: 5vh;
display: flex;
flex-wrap: wrap;
`

export const ContactItem = styled.span`
flex-basis: 100%;
color: white;
font-weight: bold; 
`

export const FooterSection = styled.section`
margin-top: 12vh;
color: white;
font-weight: bold;
display: flex;
justify-content: center;
`