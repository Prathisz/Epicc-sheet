import { Stack } from '@mui/material'
import React from 'react'
import Advhome from './advhome'
import Sdeframe from '../sdecom/sdeframe/sdeframe'

function AdvExport() {
  return (
    <div>
      <Stack direction='row'>
        <Advhome/>
        <Sdeframe/>
      </Stack>
    </div>
  )
}

export default AdvExport
