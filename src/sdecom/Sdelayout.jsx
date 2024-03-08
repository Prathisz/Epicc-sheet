import { Stack } from '@mui/material'
import React from 'react'
import Sdemain from './sdemain'
import Sdeframe from './sdeframe/sdeframe'

function Sdelayout() {
  return (
    <div>
      <Stack direction='row'>
        <Sdemain/>
        <Sdeframe/>
        
      </Stack>
    </div>
  )
}

export default Sdelayout

