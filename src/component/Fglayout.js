import { Stack } from '@mui/material'
import React from 'react'
import Fpcontent from './fpcontent'
import Fpimage from './fpimage'
import ResponsiveAppBar from './Nav'

function Fglayout() {
  return (
    <div>
        <ResponsiveAppBar/>
      <Stack direction='row' position='fixed' sx={{backgroundColor:'#B6C4B6',height:'708px'}}>
        <Fpcontent/>
        <Fpimage/>
      </Stack>
    </div>
  )
}

export default Fglayout
