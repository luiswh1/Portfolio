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
                <SectionItem> <span>01</span> 
                    <span>SKILLS</span></SectionItem>
                <SectionItem> <span>02</span> 
                    <span>EXP</span></SectionItem>
                <SectionItem> <span>03</span> 
                    <span>CONTACT</span></SectionItem>
            </Sections>
        </Container>
    )
}

export default Home