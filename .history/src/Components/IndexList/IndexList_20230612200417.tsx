import React, { useCallback, useState } from "react";
import { Sections, SectionItem } from "./IndexListStyles";

const IndexList = () => {
  const [activeSpan, setActiveSpan] = useState(1);

  const scrollToTopico = useCallback((indice: number) => {
    const topicoElement = document.getElementById(`topico-${indice}`);
    if (topicoElement) {
      topicoElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleClick = useCallback(
    (indice: number) => {
      setActiveSpan(indice);
      scrollToTopico(indice);
    },
    [scrollToTopico]
  );

  const handleSectionClick = (indice: number) => (event: React.MouseEvent<HTMLSpanElement>) => {
    handleClick(indice);
  };

  return (
    <>
      <Sections>
        <SectionItem onClick={handleSectionClick(1)}>
          <span>00</span>
          <span>ABOUT</span>
        </SectionItem>
        <SectionItem onClick={handleSectionClick(2)}>
          <span>01</span>
          <span>SKILLS</span>
        </SectionItem>
        <SectionItem onClick={handleSectionClick(3)}>
          <span>02</span>
          <span>EXP</span>
        </SectionItem>
        <SectionItem onClick={handleSectionClick(4)}>
          <span>03</span>
          <span>CONTACT</span>
        </SectionItem>
      </Sections>
    </>
  );
};

export default IndexList;
