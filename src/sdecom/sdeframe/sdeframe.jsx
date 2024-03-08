import React from 'react'
import { Box, Container, Stack } from '@mui/material'
import YourComponent from '../../Search/searchre'
import BasicAccordion from './Accordiation/accor'
// import Cfunc from '../../Course/CardFunc'
import BasicCard from '../../commanage/rightcourses'
import CardRow from '../../webfront/Popcourse'

function Sdeframe() {
  return (
    <Container sx={{marginTop:'90px'}}>
        <YourComponent/>
        <Stack  gap='80px' sx={{direction:'column' , marginTop:'20px',marginLeft:'40px'}}>
      <iframe width="400" height="315" src="https://www.youtube.com/embed/H3XIJYEPdus?si=HNJEDwLDQ1f_-dPi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen  style={{marginTop:'50px'}} ></iframe>


      <iframe width="400" height="315" src="https://www.youtube.com/embed/vEQ8CXFWLZU?si=NFuMqN_iAZJehBnL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      <BasicAccordion/>
     <CardRow/>
      </Stack>
    </Container>
  )
}


export default Sdeframe
