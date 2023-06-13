import { styled } from "styled-components";

type SectionItemProps = {
  isActive: boolean;
};


export const Sections = styled.div`
margin-top: 6vh;
`

export const SectionItem = styled.span<SectionItemProps>`
color: ${(props) => (props.isActive ? 'black' : 'white')};
font-size: 1.2rem;
font-weight: bold;
display: block;
span:first-child {
    margin-right: 5vw;
  }
  margin-top: 5px;

`