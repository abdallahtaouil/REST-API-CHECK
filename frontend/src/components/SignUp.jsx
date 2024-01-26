import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { Createusers } from '../Action';
import { useNavigate } from 'react-router-dom';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
    const [name,setname]=useState('')
    const [age,setage]=useState('')
    const [heigth,setheigth]=useState('')
    const [weigth,setweigth]=useState('')
    const [image,setimage]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();//notify the user that he has put a wrong input
  const data ={name,age,heigth,weigth,image}
  dispatch(Createusers(data))
  navigate('/UserList')
};
  

 
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  onChange={(e)=>setname(e.target.value)}
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={(e)=>setage(e.target.value)}
                  required
                  fullWidth
                  id="age"
                  label="age"
                  name="lastName"
                  type='number'
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 onChange={(e)=>setheigth(e.target.value)}
                 type='number'
                  required
                  fullWidth
                  id="heigth"
                  label="heigth"
                  name="heigth"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 onChange={(e)=>setweigth(e.target.value)}
                 type='number'
                  required
                  fullWidth
                  name="weigth"
                  label="weigth"
                
                  id="weigth"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="imageInput">Choose Profile Image:</label>
                <TextField
                  required
                  onChange={(e)=>setimage(e.target.value)}
                  fullWidth
                  type="text"
                  id="imageInput"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}