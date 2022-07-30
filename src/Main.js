import {
  Grid,
  Typography,
  Button,
  Checkbox,
  TextField,
  Container,
  FormControlLabel,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import Image from "./MainImage.jpg";
import { blueGrey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import isEmail from "validator/lib/isEmail";
import Axios from "axios";

const ColorButton = styled(Button)(({ bgcolor }) => ({
  backgroundColor: bgcolor[600],
  color: bgcolor[50],
  width: "100%",
  height: "50px",
  fontSize: "15px",
  fontWeight: "400",
  fontFamily: "'Lato', sans-serif",
  "&:hover": {
    backgroundColor: bgcolor[900],
  },
}));

const Main = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [data,setData] = useState({
    email:"",
    password:""
  });
  const handle = (e)=>{
    const newData = {...data}
    newData[e.target.id] = e.target.value;
    if(isEmail(newData.email)){
      setIsValidEmail(true);
    }else{
      setIsValidEmail(false);
    }
    setData(newData);
  }
  const url = "https://reqres.in/api/login";
  const handleSubmit = (e)=>{
    e.preventDefault();
    Axios.post(url,{
      email:data.email,
      password:data.password
    }).then(response =>{
      console.log(response.data);
    }).catch(error =>{
      console.log(error);
    })
    setData({
      email:"",
      password:""
    })
  }
  

  return (
    <Grid container component="main" sx={{ height: "89vh" ,display:'block',  justifyContent:'center',}}>
      <Grid item xs = {12}  md={5} p = {3}>
        <Box
          sx={{
            my: {lg:8,xs:10},
            mx: 'auto',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width:{
              lg:'80%',
              md:'75%',
              sm:'85%'
            }
          }}
        >
          <Grid item sm={12}>
            <Typography variant="h3" sx={{ fontWeight: "bolder", my: 1 }}>
              Welcome Back
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography varient="subtitle1" sx={{ mb: 2 }}>
              Expore the new things
            </Typography>
          </Grid>

          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email Address"
            type="email"
            id="email"
            value={data.email}
            autoComplete="email"
            autoFocus
            onChange={(e) => {handle(e)}}
            helperText={isValidEmail ? "email is valid" : "enter valid email"}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={data.password}
            id="password"
            autoComplete="current-password"
            onChange={(e) => { handle(e)}}/>
          <ColorButton fullWidth bgcolor={blueGrey} sx={{ my: 3 }} onClick = {(e)=>handleSubmit(e)}>
            Login
          </ColorButton>
          <Container sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Typography variant="subtitle1">Forgot password?</Typography>
          </Container>
        </Box>
      </Grid>
      <Grid
        item
        sm={0}
        md={7}
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover",
          backgroundColor: "rgb(13, 16, 23)",
        }}
      />
    </Grid>
  );
};
export default Main;