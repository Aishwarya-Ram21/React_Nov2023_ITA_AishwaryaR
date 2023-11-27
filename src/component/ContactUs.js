import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Home()
{
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
    };
  
  const [anchorEl, setAnchorEl] = React.useState(null);
return (
        <div>
       
       <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
       
      <div class="logo" style={{marginTop:"-4.5%"}}></div>
     
       <br></br>
      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1000}}
      style={{marginLeft:"15%",marginTop:"-7%"}}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1}}
        placeholder="                  Search Groceries"
        
      />
       <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
     
    
    </Paper>
   
    
   
    
    <div style={{marginLeft:"88%",marginTop:"-5%",height:"70px",width:"70px"}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle style={{height:"50px",width:"50px"}}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}  component={RouterLink} to="/login">LOGOUT</MenuItem>
                <MenuItem onClick={handleClose}>MY PROFILE</MenuItem>
              </Menu>
            </div>
     
               
     
     
        
          <ul class="nav" style={{marginTop:"2.5%"}}>
           <Button component={RouterLink} to="/" style={{color:"black",fontSize:"20px"}} > <li>Home</li></Button>
           <Button component={RouterLink} to="/About" style={{color:"black",fontSize:"20px"}} > <li>About us</li></Button>
           <Button  style={{color:"black",fontSize:"20px"}}> <li>Today's Deals</li></Button>
           <Button  style={{color:"black",fontSize:"20px"}}>  <li>New Release</li></Button>
           <Button  style={{color:"black",fontSize:"20px"}}> <li>Best Sellers</li></Button>
           <Button  style={{color:"black",fontSize:"20px"}}>  <li>Deals of the Week</li></Button>
           <Button  component={RouterLink} to="/contact" style={{color:"black",fontSize:"20px"}}>  <li>Contact Us</li></Button>
           
          </ul>
         
         

          
         



         
      <div class="ct">
      <div className="container">
        <div className="content" style={{marginLeft:"10%"}}>
          <div className="left-side">
            <div className="address details">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <div className="topic">Address</div>
              <div className="text-one">Surkhet, NP12</div>
              <div className="text-two">Birendranagar 06</div>
            </div>
            <div className="phone details">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <div className="topic">Phone</div>
              <div className="text-one">+0098 9893 5647</div>
              <div className="text-two">+0096 3434 5678</div>
            </div>
            <div className="email details">
              <FontAwesomeIcon icon={faEnvelope} />
              <div className="topic">Email</div>
              <div className="text-one">codinglab@gmail.com</div>
              <div className="text-two">info.codinglab@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>If you have any work for me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.</p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                {/* You can add a textarea here for the message */}
                <textarea placeholder="Enter your message"></textarea>
              </div>
              <div className="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
   

      </div>















    

  
        <Box
      component="footer"
      sx={{
        backgroundColor:"black",
        marginTop:"10%"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="white">
              A wonderful online shopping platform dedicated to provide the best quality products to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="white">
              SKCET, Coimbatore,TamilNadu
            </Typography>
            <Typography variant="body2" color="white">
              Email: SHOPEASY54@Gmail.com
            </Typography>
            <Typography variant="body2" color="white">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Follow Us on
              Social Media:
            </Typography>
            <Link href="https://www.facebook.com/" >
              <Facebook />
              
            </Link>
            <Link
              href="https://www.instagram.com/"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" >
              <Twitter />
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
             FAQ
            
            </Typography>
            
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
             TERMS & CONDITIONS
            
            </Typography>
            
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
            SUPPORT
            
            </Typography>
            
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              SHOPEASY
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  </div>



);
}


















