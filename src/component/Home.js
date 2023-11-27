import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
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
         
          
         
       

<div class="content" style={{marginLeft:"0%"}}>
  <h1 class="slogan" style={{marginRight:"-10%"}}>         KEEP CALM AND UNWIND WITH SHOPEASY</h1>
</div>




<div class="card bg-dark text-white">
  <img src="https://img.freepik.com/free-photo/close-up-apples-being-arranged-shop_23-2150713390.jpg?ga=GA1.1.1896474171.1700991198&semt=ais_ai_generated" class="card-img" alt="" style={{width:"100%",height:"600px"}}/>
  
</div>




	
		







<Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%'}}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
            
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>


   
  


    

    

    
    









<div class="content1">
  <h1 class="slogan1">SHOP BY CATEGORY:</h1>
</div>

<ImageList sx={{ width: 1200, height: 800,marginTop:"-7%",marginLeft:"12%"}}>
      
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>

  
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

const images = [
  {
    url: 'https://tse1.mm.bing.net/th?id=OIP.Hq35JoRTVGF56Nv-zLVgDgHaEQ&pid=Api&P=0&h=180',
    title: 'Exciting Deals',
    width: '35%',
   
  },
  {
    url: 'https://tse3.mm.bing.net/th?id=OIP.WprlZUoDzBCSozK7nzhFvAHaFZ&pid=Api&P=0&h=180',
    title: 'Organic',
    width: '35%',
  },
  {
    url: 'https://tse4.mm.bing.net/th?id=OIP.-VscErwodHAwYlintYZyOgHaGW&pid=Api&P=0&h=180',
    title: 'Weekly Offers!',
    width: '30%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));






const itemData = [
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.dXZQikN314T_kqBwCS-XMgHaEn&pid=Api&P=0&h=180',
    title: 'DAIRY & BREAD',
     
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://tse1.mm.bing.net/th?id=OIP.22XOhxYrd_Pu__NkrGadMgHaEo&pid=Api&P=0&h=180',
    title: <Button component={RouterLink} to="/f&g" style={{color:"white",fontSize:"17px"}}>FRUITS & VEGGIES</Button>,
    
    
           
  },
  {
    img: 'https://tse2.mm.bing.net/th?id=OIP.ExDPhL5wie25Z9e-MLeumAHaEK&pid=Api&P=0&h=180',
    title: <Button component={RouterLink} to="/cho" style={{color:"white",fontSize:"17px"}}>CHOCOLATES</Button>,
  
  },
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.AvXD1DvhW0Y5hU-1gB_3tAHaE8&pid=Api&P=0&h=180',
    title: 'INSTANT FOOD',
   
    cols: 2,
  },
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.fOxt4yve0inGc51nL2lM3gHaE7&pid=Api&P=0&h=180',
    title: 'RICE & FLOUR',
 
    cols: 2,
  },
  {
    img: 'https://images.labroots.com/content_article_profile_image_428f023aa9d7ce0b3518db0aa54d5b4af5612ca4_9302_855x575.jpg',
    title: 'EGG & MEAT',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://tse1.mm.bing.net/th?id=OIP.kuracX94mSl_VY0wKQydCQHaE7&pid=Api&P=0&h=180',
    title: 'CLEANING & HOUSEHOLD',
  
  },
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.FgBvjceqoVDfTRr9BqQF3gHaHa&pid=Api&P=0&h=180',
    title: 'KITCHEN & HOME',
  
  },
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.ZOq6TbErE2m1uW1hZF9S0gHaE8&pid=Api&P=0&h=180',
    title: 'TEA & COFFEE',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://tse1.mm.bing.net/th?id=OIP.EYP_acQsEeA_Rtf65ROiHQHaE7&pid=Api&P=0&h=180',
    title: 'BABY CARE',
   
  },
  {
    img: 'https://tse2.mm.bing.net/th?id=OIP.cUeIYKEahucS536FwpQowAHaEu&pid=Api&P=0&h=180',
    title: 'PET SUPPLIES',
   
  },
  {
    img: 'https://tse2.mm.bing.net/th?id=OIP.MlqJ9Oo4dZRJrhvwy3_-QwHaFj&pid=Api&P=0&h=180',
    title: 'ICECREAM',
    cols: 2,
  },
];














