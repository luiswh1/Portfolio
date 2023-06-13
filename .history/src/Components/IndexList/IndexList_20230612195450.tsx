import React, { useCallback, useState } from "react";
import { Sections, SectionItem } from "./IndexListStyles";

const IndexList = () => {
  const [activeSpan, setActiveSpan] = useState(1)

  const handleClick = useCallback((indice: number) => {
    setActiveSpan(indice);
    scrollToTopico(indice);
  },[]);

  const scrollToTopico = (indice: number) => {
    const topicoElement = document.getElementById(`topico-${indice}`);
    topicoElement.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <Sections>
        <SectionItem>
          <span>00</span>
          <span>ABOUT</span>
        </SectionItem>
        <SectionItem>
          <span>01</span>
          <span>SKILLS</span>
        </SectionItem>
        <SectionItem>
          <span>02</span>
          <span>EXP</span>
        </SectionItem>
        <SectionItem>
          <span>03</span>
          <span>CONTACT</span>
        </SectionItem>
      </Sections>
    </>
  );
};

export default IndexList;
