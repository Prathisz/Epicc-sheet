import React from 'react'
// import CardApp from '../cardcompon/cardapp'
// import { Stack } from '@mui/material'
// import BegCardApp from '../cardcompon/begcardApp'
// import IntCardApp from '../cardcompon/intcard'
import { Stack } from '@mui/material'
import CarddApp from '../cardcompon/cardcom/carddApp'
// import IntCardApp from '../cardcompon/intcard/'
import ResponsiveAppBar from '../component/Nav'
function Level() {
  return (
    <>
    <ResponsiveAppBar/>

    <h1 style={{textAlign:'center'}}>Choose Your Level..</h1>
    <Stack sx={{direction:'row',justifyContent:'space-around'}}>
    <CarddApp/>

    </Stack>
    {/* <IntCardApp/> */}
    </>
  )
}

export default Level
