import React, { useCallback } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Container, BackgroundImageContainer, MainTitle, Paragraph,FakeBackground } from './style.css.js'

export default function Home() {
    const history = useNavigate()

    const handleButtonClick = useCallback(() => {
        history('/about')
    },[history])

  return (
        <BackgroundImageContainer>
             <Container>
                <FakeBackground>
                 <MainTitle>
                    I'am a Software Developer!
                     <Paragraph>i'm a full stack software developer with tools like  React, Typescript and Java/Springboot. <br />
                     Click below to get to know me better.
                      </Paragraph>
                    <Button
                    onClick={ handleButtonClick }
                     variant='contained'
                     color='error'
                     style={{position: 'relative', top: '4%', left:'40%', width: '7vw'}}
                     >About me</Button>
                 </MainTitle>
                </FakeBackground>
            </Container>
        </BackgroundImageContainer>
  );
}
