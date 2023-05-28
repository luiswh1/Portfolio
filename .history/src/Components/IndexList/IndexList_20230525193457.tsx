import React from "react";
import { Sections, SectionItem } from "./IndexListStyles";

const IndexList = () => {
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

export default IndexList();
