// Navbar.js
import React, { useState } from 'react';
// import BoltIcon from '@mui/icons-material/Bolt';
import './Firstnav.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDarkMode } from '../Dark/userDarkMode';
import { Link } from 'react-router-dom';

// import IMG from './coding.png';
// import IMGG from './epicc.png';
import IMGGG from './epiccc.png';
import moo from './moon.png';
import moop from './moonop.png';
const FNavbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
 

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
    <div className="navbar-container">
      <div className="logo">
        <img src={IMGGG} alt="Logo" />
      </div>
      <div className="company-name">
        <h2 style={{fontFamily:"monospace",color:'white'}}>LEARN & BUILD</h2>
      </div>
      <div className="nav-buttons">
        <Link to="/Login">
          <button className='login-button'>Log In</button>
        </Link>
        <button className="icon-button" onClick={toggleDarkMode}>
  {darkMode ? (
    <img src={moo} alt="Light Mode" style={{ width: '20px', height: '20px' }} />
  ) : (
    <img src={moop} alt="Dark Mode" style={{ width: '20px', height: '20px' }} />
  )}
 </button>
         

      </div>
    </div>
    </ThemeProvider>
  
    
  );
};

export default FNavbar;


// className="dark-theme-button"