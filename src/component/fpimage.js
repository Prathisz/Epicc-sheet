import React from 'react'
import img from './frontimg.png';
import { Box } from '@mui/material';

function Fpimage() {
  return (
    <Box flex={1}  >
       <img
          src={img} // Replace with the path to your image
          alt="Right Side Image"
          style={{ height: '500px', width: '200px', borderRadius: '50%', marginLeft:'300px', marginTop:'100px' }}
        />
    </Box>
  )
}

export default Fpimage
