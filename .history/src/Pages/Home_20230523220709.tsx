import React from "react";
import { Container, Sections, SectionItem } from "./homeStyles";

const Home = () => {
    return (
        <Container>
            <Sections>
                <SectionItem>
                    <span>00</span> 
                    <span>ABOUT</span>
                </SectionItem>
                <SectionItem>01 SKILLS</SectionItem>
                <SectionItem>02 EXP</SectionItem>
                <SectionItem>03 CONTACT</SectionItem>
            </Sections>
        </Container>
    )
}

export default Home