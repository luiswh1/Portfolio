import  styled  from "styled-components";
import img from '../../assets/wallpaper.jpg'
import { Button } from '@mui/material';

export const BackgroundImageContainer = styled.div`
background-image: url(${img});
  background-repeat: no-repeat;
  background-position: 30% 50%;
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  top:  0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
export const ButtonStyled = styled(Button)`
  && {
    position: relative;
    left: 43%;
  }

  && {
    @media (max-width: 1440px) {
    left: 38%;
 }

 && {
    @media (max-width: 1037px) {
    left: 35%;
 }

 && {
    @media (max-width: 740px) {
    left: 33%;
}
 && {
    @media (max-width: 656px) {
    left: 30%;
    }
 }
}
`

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
position: relative;
top: 7%;
`
export const MainTitle = styled.h1`
position: absolute;
font-size: 60px;
color: #FF3333;
top: 3%;
left: 10%;

@media (max-width: 1680px) {
    font-size: 45px;
}
@media (max-width: 1440px) {
    font-size: 40px;
    }

@media (max-width: 1037px) {
   font-size: 28px
}

@media (max-width: 740px) {
    font-size: 25px;
}
@media (max-width: 656px) {
    font-size: 22px;
}
`

export const Paragraph = styled.p`
color: white;
font-size: 25px;

@media (max-width: 1680px) {
    font-size: 23px;
}

@media (max-width: 1440px) {
    font-size: 20px;
    }

@media (max-width: 1037px) {
   font-size: 17px
}

@media (max-width: 740px) {
    font-size: 15px;
}

@media (max-width: 656px) {
    font-size: 12px;
}
`
export const FakeBackground = styled.div`
position: relative;
bottom: 5%;
left: 3%;
width: 65vw;
height: 38vh;
background-color: #262626;
opacity: 0.8;

@media (max-width: 1680px) {
width: 55vw;
height: 34vh;
left: 5%;
}

@media (max-width: 1440px) {
    width: 55vw;
    height: 30vh;
    left: 12%;
    }

@media (max-width: 1037px) {
    height: 25vh;
    left: 16%;
}

@media (max-width: 740px) {
    width: 55vw;
    height: 23vh;
    left: 16%;
}
@media (max-width: 656px) {
    width: 55vw;
    height: 19vh;
    left: 20%;
}
`
