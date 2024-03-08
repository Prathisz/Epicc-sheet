// Testimonial.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Testimonial = () => {
  return (
    <Container>
      <Typography variant="h4">What Our Users Say</Typography>
      <Typography>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
        fermentum quam."
      </Typography>
      {/* Add more testimonials as needed */}
    </Container>
  );
};

export default Testimonial;
