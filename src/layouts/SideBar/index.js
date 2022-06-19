import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

//Router
import { NavLink } from 'react-router-dom';

//CSS
import {
    Container,
    Image,
    Item,
    Name,
    SectionAvatar,
    SectionTopics,
    SectionIcons,
    SocialIcons,
    LinkTag,
    } from './styles.css';

const drawerWidth = 240;

export default function SideBar({children}) {

  return (
    <Box sx={{ display: 'flex', }}>
      <CssBaseline />
           <Drawer
           PaperProps={{
               sx: {
                   backgroundColor: "#262626",
               }
           }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
        }}
        variant="permanent"
        anchor="left"
      >
          <Container>
            <SectionAvatar>
                <Image src='https://media-exp2.licdn.com/dms/image/C4D03AQEa1jZJ4Qn_AQ/profile-displayphoto-shrink_800_800/0/1632834268080?e=1660176000&v=beta&t=BENs0Ul6KaTbqWkqHK0Dvzrv8yzjoZaoGHA9FNV1SKI'/>
                <Name>Luis Weber</Name>
            </SectionAvatar>
            <SectionTopics>
                <NavLink style={({ isActive }) => {return { textDecoration: 'none', color: isActive ? "#FF3333" : 'white'};}} to="/">
                    <Item>Home</Item>
                </NavLink >
                <NavLink style={({ isActive }) => { return { textDecoration: 'none', color: isActive ? "#FF3333" : 'white'};}} to="/about">
                    <Item>About</Item>
                </NavLink >
                <NavLink style={({ isActive }) => { return { textDecoration: 'none', color: isActive ? "#FF3333" : 'white', };}} to="/projects">
                    <Item>Projects</Item>
                </NavLink >
                <NavLink style={({ isActive }) => { return { textDecoration: 'none', color: isActive ? "#FF3333" : 'white',};}} to="/technologies">
                    <Item>Technologies</Item>
                </NavLink >
                <NavLink style={({ isActive }) => { return { textDecoration: 'none', color: isActive ? "#FF3333" : 'white',};}} to="/contact">
                    <Item>Contact</Item>
                </NavLink >
                <NavLink style={({ isActive }) => { return { textDecoration: 'none', color: isActive ? "#FF3333" : 'white',};}} to="/social">
                    <Item>Socials</Item>
                </NavLink >
            </SectionTopics>

            <SectionIcons>
                <SocialIcons>
                    <LinkTag href="https://www.facebook.com/luishenrique.macielweber/"
                    target='_blank'
                    rel="noreferrer"
                    >
                      <FacebookIcon />
                    </LinkTag>
                </SocialIcons>
                <SocialIcons>
                   <LinkTag href='https://twitter.com/luisw_h'
                    qtarget='_blank'
                    rel="noreferrer">
                     <TwitterIcon />
                    </LinkTag>
                </SocialIcons>
                <SocialIcons>
                    <LinkTag href='https://www.linkedin.com/in/luis-henrique-maciel-weber-9a41751b1/'
                      target='_blank'
                      rel="noreferrer">
                     <LinkedInIcon />
                     </LinkTag>
                </SocialIcons>
                <SocialIcons>
                      <LinkTag href='https://www.instagram.com/luiis_weber/'
                        target='_blank'
                        rel="noreferrer">
                    <InstagramIcon />
                     </LinkTag>
                </SocialIcons>
            </SectionIcons>
          </Container>
      </Drawer>
       {children}
    </Box>
  );
}
