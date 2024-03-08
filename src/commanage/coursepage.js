import { Box, Card, CardContent, Container, Typography } from '@mui/material'
import React from 'react'
import {CardMedia} from '@mui/material'

function Coursepage() {
  return (
    <div>

       
      <Card sx={{ maxWidth: 600 , marginTop:'40px', marginLeft:'100px'}}>
      <CardMedia
        sx={{ height: 500 }}
        image="https://cdncr.cyberchimps.com/lms/wp-content/uploads/sites/60/2020/05/lms1.jpg"
        
      />
      <CardContent>
        <h2>Advanced Data Science</h2>
      <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Typography>

      </CardContent>
      
        
        </Card>
       
          
      
      
      
    </div>
  )
}

export default Coursepage
