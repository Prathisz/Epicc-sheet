import { Stack } from '@mui/material'
import React from 'react'
import Beghome from './Beghome'
import Sdeframe from '../sdecom/sdeframe/sdeframe'

function BegExport() {
  return (
    <div>
      <Stack direction='row'>
        <Beghome/>
        <Sdeframe/>
      </Stack>
    </div>
  )
}

export default BegExport
