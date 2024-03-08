// HeroSection.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import SVGAnimation from './Svg';
const HeroSection = () => {
  return (
    <Container>
      <Typography variant="h3">Welcome to Our Website</Typography>
      <Typography variant="subtitle1">
        Discover the amazing features of our product.
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  );
};

export default HeroSection;
