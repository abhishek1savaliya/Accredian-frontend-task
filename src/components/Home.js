import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const storedToken = JSON.parse(localStorage.getItem('token'));
    if (storedToken && new Date().getTime() < storedToken.expiresAt) {
      localStorage.removeItem('token');
      navigate('/logout');
    } else {
      navigate('/logout');
    }
  };

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedToken = JSON.parse(localStorage.getItem('token'));
        if (storedToken && new Date().getTime() < storedToken.expiresAt) {
          const response = await axios.get('https://sqlnode.onrender.com/user/alluser', {
            headers: {
              'token': storedToken.token
            }
          });
          setData(response.data.data)
        } else {
          console.error('Invalid or missing token');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>Hello, Welcome to home page</h1>
      
      <div>
      <h1>Total Users: {data?.length}</h1>
      <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center"><strong>Username</strong></TableCell>
            <TableCell align="center"><strong>Password</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user, index) => (
            <TableRow key={index}>
              <TableCell align="center">{user.username}</TableCell>
              <TableCell align="center">{user.password}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </div>

      <div>
        <Button onClick={handleLogout} variant="contained" color="primary" style={{ marginTop: 20, marginBottom : 50 }}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Home;
