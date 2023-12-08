import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const Logout = () => {
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
