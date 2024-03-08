import { Stack } from '@mui/material'
import React from 'react'
import Rmap from './rmap'
import Sdeframe from '../sdecom/sdeframe/sdeframe'
import Roadmap from './Roadmap'

function Roadmaplayout() {
  return (
    <div style={{marginRight:'20px'}}>
      <Stack direction='column'>
        
        {/* <Roadmap/> */}
        <Rmap/>
      </Stack>
    </div>
  )
}

export default Roadmaplayout
