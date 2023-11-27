import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Login() {
  const[popUp,setPopup]=useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleEmail=(event)=>
  {
    setEmail(event.target.value);
  }
  const handlePassword=(event)=>
  {
    setPassword(event.target.value);
  }
  const fetch=async(event)=>{
    event.preventDefault();
    

    const response=await axios.get("http://localhost:3001/users");
    response.data.map((obj)=>{
      console.log(email);
      if(obj.email===email)
      {
       
        if(obj.password===password)
        {
          
          console.log("Success");
          navigate('/')
          
        }
        else
        setPopup(true);
        
        
      }
      else
      setPopup(true);
      
     
      
    })
    
    
  }

  return (
    <Container className="c1" component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://townsquare.media/site/959/files/2020/03/GettyImages-1152883263.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onSubmit={fetch}
            >
              <Typography component="h1" variant="h6">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={fetch}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleEmail}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handlePassword}
                />
                <FormControlLabel
                  
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained" color="success"
                  sx={{ mt: 3, mb: 2 }}
                  component={RouterLink} to="/"
                  onClick={fetch}
                >
                 Log In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link backgroundColor="white" href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item >
                   <Button component={RouterLink} to="/registration">
                   {"Don't have an account? Sign Up"}
                   </Button>
                   
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
