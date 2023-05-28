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
  margin-top: 12vh;
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
`
export const LabelTitle = styled.div`
margin-top: 10vh;
`

export const NumberIndex = styled.span`
  font-size: 2.2em;
  color: gray;
  margin-right: 3vw;
`;

export const IndexTitle = styled.span`
  font-size: 3.3em;
  color: white;
  margin-left: 3vw;
`;

export const StyledSpanExp = styled.span`
font-size: 3.3em;
color: white;
margin-left: 3vw;
margin-right: 3vw;
`

export const ListSkills = styled.div`
margin-top: 3vh;
  display: flex;
  flex-wrap: wrap;
`;

export const SkillItem = styled.span`
  flex-basis: 50%;
  margin-bottom: 3vh;
  color: white;
`;