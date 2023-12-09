import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { TextField, Button, Container, Paper, Typography } from '@mui/material';
const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password === confirmPassword) {
      try {
        const response = await axios.post('https://sqlnode.onrender.com/user/signup', {
          username: username,  
          password: password  
        });
        if(response){
          navigate('/login');
        }
        
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Please provide a valid confirm password');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5">Sign-up</Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 20 }}>
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confirm password"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="password" 
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
               Sign up
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default Signup;
