import { Stack } from '@mui/material'
import React from 'react'
import Arrlayout from './Arrlayout'
import Sdeframe from '../sdecom/sdeframe/sdeframe'
import Faq from '../FAQ/FAQ'
import Quotes from '../Quotes/Quotes'

function ArrExport() {
  return (
    <div>
      <Stack direction='row'>
        <Arrlayout/>
        <Sdeframe/>
        

      </Stack>
    </div>
  )
}

export default ArrExport
