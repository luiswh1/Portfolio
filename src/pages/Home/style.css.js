import  styled  from "styled-components";
import img from '../../assets/background.png'

export const BackgroundImageContainer = styled.div`
background-image: url(${img});
  background-repeat: no-repeat;
  background-position: 30% 50%;
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  top:  0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
align-self: center;
position: relative;
top: 7%;
`
export const MainTitle = styled.h1`
position: absolute;
font-size: 60px;
color: #FF3333;
top: 25%;
left: 26%;
`

export const Paragraph = styled.p`
color: #ff3333;
font-size: 25px;
`
