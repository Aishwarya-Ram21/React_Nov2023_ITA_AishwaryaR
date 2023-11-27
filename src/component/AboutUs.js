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
         
          <br></br>
          <br></br>
          <br></br>
          <hr></hr>
       
        <div>
            <h1 style={{textAlign:"center"}}>ABOUT US</h1>
            <h2 style={{textAlign:"center",fontSize:"30px"}}>FRESH FROM FARM</h2>
          <pre style={{textAlign:"center",fontSize:"30px"}}>
          <div style={{display:"flex"}}>
            <div>
            <img src="https://img.freepik.com/free-photo/fresh-organic-vegetables-from-farm-healthy-feast-generated-by-artificial-intelligence_25030-60598.jpg?t=st=1701000583~exp=1701004183~hmac=f4e0d0d418903bd80144305abb1018d7f257d10e3a9cc872cd128aae6f7e5627&w=1060" alt="" style={{border:"1px solid black",borderRadius:"20%",height:"280px",marginLeft:"4%"}}/>
            </div>
            <div style={{marginTop:"10%"}}><h1> => </h1></div>
            <div>
            <img src="https://img.freepik.com/free-photo/delivery-man-is-loading-boxes-into-van_1340-37411.jpg?ga=GA1.1.1896474171.1700991198&semt=ais_ai_generated" alt=""  style={{border:"1px solid black",borderRadius:"20%",height:"350px"}}/>
            </div>
            <div style={{marginTop:"10%"}}><h1> => </h1></div>
            <div>
            <img src="https://img.freepik.com/free-photo/shopping-delivery-healthy-food-background-ai-generated-image_511042-1804.jpg?t=st=1701001065~exp=1701004665~hmac=64148ef21219daff44ec735d75580feaf877df037e051cdc6b9cc0f3c2e41ae5&w=1380" alt=""  style={{border:"1px solid black",borderRadius:"20%",height:"280px"}}/>
            </div>
          </div>
          <h3>What is SHOPEASY.com</h3>
         
SHOPEASY.com (Innovative Retail Concepts Private Limited) is India’s largest <br></br>
online food and grocery store. With over 18,000 products and over a 1000 <br></br>
brands in our catalogue you will find everything you are looking for. Right <br></br>
from fresh Fruits and Vegetables, Rice and Dals, Spices and Seasonings to <br></br>
Packaged products, Beverages, Personal care products, Meats – we have it all.<br></br>
Choose from a wide range of options in every category, exclusively <br></br>
handpicked to help you find the best quality available at the lowest prices. <br></br>
Select a time slot for delivery and your order will be delivered right to your <br></br>
doorstep, anywhere in Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, <br></br>
Noida, Mysore, Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar,<br></br>
 Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, <br></br>
 Nagpur, Patna, Indore and Chandigarh Tricity You can pay online using your <br></br>
 debit / credit card or by cash / sodexo on delivery.<br></br>
We guarantee on time delivery, and the best quality!<br></br>
<br></br><br></br>

<h3>Happy Shopping!!!</h3>
          <br></br><br></br>
          
          </pre>



          <p style={{textAlign:"center",fontSize:"30px"}}>
         <h3> Why should I use SHOPEASY.com?</h3><br></br>
SHOPEASY.com allows you to walk away from the drudgery of grocery<br></br>
shopping and welcome an easy relaxed way of browsing and shopping for <br></br>
groceries. Discover new products and shop for all your food and grocery<br>
</br>needs from the comfort of your home or office. No more getting stuck in<br>
</br>traffic jams, paying for parking, standing in long queues and carrying heavy<br>
</br> bags – get everything you need, when you need, right at your doorstep. Food <br>
</br>shopping online is now easy as every product on your monthly shopping list, is <br>
</br>now available online at SHOPEASY.com, India’s best online grocery store.<br></br><br></br><br></br>
          </p>
        </div>


       


  
        <Box
      component="footer"
      sx={{
        backgroundColor:"black"
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


















