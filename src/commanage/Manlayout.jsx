import { Box, Stack } from '@mui/material'
import React from 'react'
import YourTableComponent from './YourTableComponent'
import Text from './text'
import ResponsiveAppBar from '../component/Nav'
import Rightside from './rightside'
import BasicCard from './rightcourses'
import BasicCardd from './rightcoursetwo'
function Manlayout() {
  return (
   <>
   <ResponsiveAppBar/>
   <Stack direction='row'>
<Box flex={1}>
    <Text/>
    <YourTableComponent/>
</Box>

<Box flex={1}>
<Rightside/>
<BasicCardd/> 
<BasicCard/>

</Box>
   </Stack>
   </>
  )
}

export default Manlayout
