import { Stack } from '@mui/material'
import React from 'react'
import Graphlayout from './Graphlayout'
import Sdeframe from '../sdecom/sdeframe/sdeframe'

function GraphExport() {
  return (
    <div>
      <Stack direction='row'>
        <Graphlayout/>
        <Sdeframe/>
      </Stack>
    </div>
  )
}

export default GraphExport
