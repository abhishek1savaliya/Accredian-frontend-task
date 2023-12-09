import React, { useEffect } from 'react';
import { Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('token') !== null;

    if (loggedIn) {
      navigate('/home');
    }
  }, [navigate]);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Logout
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Hello, Abhishek Savaliya!
        </Typography>
        <Typography variant="body1" align="center">
          Thank you for visiting. Please come back again!
        </Typography>
      </Paper>
    </Container>
  );
};

export default Logout;
