import React, { useCallback } from "react";
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import { Container, Image, SectionAbout, FakeBackground, Title, Paragraph } from './style.css'


const About = () => {
    const history = useNavigate()

    const handleClickButton = useCallback(() => {
        history('/projects')
    }, [history])
    return (
    <>
    <Container>
        <FakeBackground />
        <Image />
        <SectionAbout>
            <Title>About me</Title>
            <Paragraph>
            A technology lover since I was a child, I always knew I wanted to work in the IT field, in the first months of the pandemic, I started studying HTML, CSS and JavaScript as an experimental test, no surprise to anyone, I immediately loved programming my first lines in vscode.
            I took an intensive fullstack development course at growdev between 2020 and 2021 which allowed me to enter the job market.
            </Paragraph>
            <Paragraph style={{color: 'red'}}>Wanna discover more about my skills?</Paragraph>
        <Button variant="contained" color='error' onClick={ handleClickButton }>Check my projects</Button>
        </SectionAbout>
    </Container>
    </>
    )
}

export default About
