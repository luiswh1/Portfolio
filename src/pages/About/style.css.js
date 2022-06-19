import styled from "styled-components";
import img from '../../assets/aboutImage.jpg'
import wallpaper from '../../assets/wallpaper.jpg'
import { Button } from '@mui/material';

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
background-image: url(${wallpaper});
background-position: 30% 50%;
background-size: cover;
background-attachment: fixed;
`

export const ButtonStyled = styled(Button)`
  && {
    position: absolute;
    bottom: 2%;
  }

  && {
    @media (max-width: 1680px) {
        position: absolute;
        top: 90%;
        width: 200px;
        height: 30px;
}

  && {
    @media (max-width: 1440px) {
        position: absolute;
        top: 88%;
}

 && {
    @media (max-width: 1118px) {
    bottom: 35%;
 }

 && {
    @media (max-width: 740px) {
    bottom: 33%;
}
 && {
    @media (max-width: 656px) {
    bottom: 30%;
    }
 }
}
`

export const Image = styled.div`
position: absolute;
background-image: url(${img});
background-position: 30% 50%;
background-size: cover;
width: 30vw;
height: 30vw;
right: 43%;
top: 18%;
z-index: 1;

@media (max-width: 1680px) {
    position: relative;
    width: 28vw;
    height: 24vw;
    top: 2%;
    right: 35%;
}
@media (max-width: 1440px) {
    width: 25vw;
    height: 22vw;
    }

@media (max-width: 1118px) {
    width: 22vw;
    height: 18vw;
}

@media (max-width: 988px) {
    width: 20vw;
    height: 16vw;
}
@media (max-width: 656px) {
    width: 18vw;
    height: 14vw;
}
`

export const SectionAbout = styled.div`
position: fixed;
width: 40vw;
height: 40vw;
right: 0;
background-color: #262626;
opacity: 0.8;
padding: 35px;

@media (max-width: 1680px) {
    padding: 15px;
    width: 35vw;
    height: 28vw;

}
@media (max-width: 1440px) {
    padding: 25px;
    width: 35vw;
    height: 28vw;
    }

@media (max-width: 1118px) {
    padding: 22px;
    height: 28vw;

}

@media (max-width: 988px) {
    padding: 18px;
}
@media (max-width: 656px) {
    padding: 16px;
}
`

export const FakeBackground = styled.div`
position: relative;
width: 35vw;
height: 20vw;
background-color: #262626;
right: 17%;
top: 18%;
opacity: 0.8;

@media (max-width: 1680px) {
    position: relative;
    width: 32vw;
    height: 14vw;
    top: 15%;
    right: 1%;
}
@media (max-width: 1440px) {
    position: relative;
    width: 30vw;
    height: 17vw;
    top: 10%;
    }

@media (max-width: 1118px) {
    position: relative;
    width: 28vw;
    height: 14vw;
    right: 3%;
}

@media (max-width: 988px) {
    position: relative;
    width: 26vw;
    height: 11vw;
    right: 5%;
}
`

export const Title = styled.h1`
color: red;
font-size: 60px;

@media (max-width: 1680px) {
    font-size: 40px;
}
@media (max-width: 1440px) {
    font-size: 30px;
    }

@media (max-width: 1118px) {
   font-size: 25px
}

@media (max-width: 740px) {
    font-size: 25px;
}
@media (max-width: 656px) {
    font-size: 22px;
}
`

export const Paragraph = styled.p`
font-size: 25px;
color: white;

@media (max-width: 1680px) {
    font-size: 16px;
}
@media (max-width: 1440px) {
    font-size: 12px;
    }

@media (max-width: 1118px) {
   font-size: 11px
}

@media (max-width: 740px) {
    font-size: 10px;
}
@media (max-width: 656px) {
    font-size: 8px;
}
`
