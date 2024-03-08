import { Stack } from '@mui/material'
import React from 'react'
import Treeprblm from './Treeprblm'
import Sdeframe from '../sdecom/sdeframe/sdeframe'
import Treeright from './Treeright'
import Navbarr from '../sdecom/webnav/webnav'

function TreeExport() {
  return (
    <div>
      <Stack direction='row'>
    
       <Treeright/>
        <Sdeframe/>
      </Stack>
    </div>
  )
}

export default TreeExport
