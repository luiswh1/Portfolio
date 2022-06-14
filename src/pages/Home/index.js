import * as React from 'react';
import { Container, BackgroundImageContainer, MainTitle, Teste } from './style.css.js'

export default function Home() {
  return (
        <BackgroundImageContainer>
             <Container>
                 <MainTitle>
                     Sou Desenvolvedor de Software
                     <Teste>Desenvolvedor Web Fullstack com as linguagens Javascript e Java,<br />
                      utilizando frameworks como React e Springboot</Teste>
                 </MainTitle>
            </Container>
        </BackgroundImageContainer>
  );
}
