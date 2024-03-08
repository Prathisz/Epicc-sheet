import React from 'react'
import Gbox1 from './Graphbox1'
import Gbox2 from './Graphbox2'
import Gbox3 from './Graphbox3'
import Gbox4 from './Graphbox4'

function Graphlayout() {
  return (
    <div>
        <h1 style={{display:'flex',justifyContent:'center'}}>EPICC Graph Series : Top Graph Interview Questions</h1><br></br>
      <Gbox1/> <br></br>
      <Gbox2/><br></br>
      <Gbox3/><br></br>
      <Gbox4/>
    </div>
  )
}

export default Graphlayout

