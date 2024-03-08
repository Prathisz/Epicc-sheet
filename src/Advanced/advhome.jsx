import React from 'react'
import OverviewAdv from './advOverview'
import BoxAdv from './advBox'
import BoxAdv2 from './advBox2'
import BoxAdv3 from './advBox3'

function Advhome() {
  return (
    <div style={{marginLeft:'20px'}}>
      <h1 style={{marginTop:'20px', marginLeft:'60px'}}>EPICC sheet for Advanced Level</h1>
      <OverviewAdv/>
      <BoxAdv/>
      <BoxAdv2/>
      <BoxAdv3/>
    </div>
  )
}

export default Advhome
