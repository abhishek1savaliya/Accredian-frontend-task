import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const Privateroute = () => {
  const loggedIn = localStorage.getItem('token') !== null;

  return loggedIn ? <Outlet /> : <Navigate to='/login' />;
};

export default Privateroute;
