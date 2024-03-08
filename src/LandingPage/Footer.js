// Footer.js
import React from 'react';
import { Typography, Container, Divider } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Divider />
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          &copy; 2023 Your Company Name. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};


export default Footer;
