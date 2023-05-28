import React from "react";
import { Container, Sections, SectionItem } from "./homeStyles";

const Home = () => {
    return (
        <Container>
            <Sections>
                <SectionItem>00 ABOUT</SectionItem>
                <SectionItem>01 SKILLS</SectionItem>
                <SectionItem>02 EXP</SectionItem>
                <SectionItem>03 CONTACT</SectionItem>
            </Sections>
        </Container>
    )
}

export default Home