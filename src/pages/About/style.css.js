import styled from "styled-components";
import img from '../../assets/aboutImage.jpg'
import wallpaper from '../../assets/wallpaper.jpg'

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
background-image: url(${wallpaper});
background-position: 30% 50%;
background-size: cover;
background-attachment: fixed;
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
`

export const SectionAbout = styled.div`
position: fixed;
width: 40vw;
height: 40vw;
right: 0;
background-color: #262626;
opacity: 0.8;
padding: 35px;
`

export const FakeBackground = styled.div`
position: relative;
width: 35vw;
height: 20vw;
background-color: #262626;
right: 17%;
top: 18%;
opacity: 0.8;
`

export const Title = styled.h1`
color: red;
font-size: 60px;
`

export const Paragraph = styled.p`
font-size: 30px;
color: white;
`
