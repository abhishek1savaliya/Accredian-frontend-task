import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const loggedIn = localStorage.getItem('token') !== null;

    if (loggedIn) {
      navigate('/home');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      setLoading(true)

      const response = await axios.post('https://sqlnode.onrender.com/user/login', {
        username: username,
        password: password
      });

      localStorage.setItem('token', JSON.stringify({ token: response.data.token, expiresAt: new Date().getTime() + 24 * 60 * 60 * 1000 }));

      navigate('/home')

    } catch (error) {
      setLoading(false)
      alert('Enter correct credentials')
    }
  };

  const navigation = () => {
    navigate('/signup')
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5">Login</Typography>
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
            <Button type="submit" variant="contained" color="primary" >
              {
                loading ? <Box sx={{ display: 'flex'}} >
                  <CircularProgress style={{ color: 'white' }} />
                </Box> : 'Login'
              }

            </Button>
            <Button variant="contained" onClick={navigation} color="secondary" style={{ marginLeft: 8 }}>
              sign-up
            </Button>

          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
