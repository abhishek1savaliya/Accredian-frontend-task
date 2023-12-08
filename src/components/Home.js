import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/logout');
  };

  return (
    <div>
      <h1>Hello, this is the home page</h1>
      <div>
        <Button onClick={handleLogout} variant="contained" color="primary" style={{ marginTop: 20 }}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Home;
