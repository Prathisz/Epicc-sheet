import React from 'react'
import Navbarr from './webnav/webnav';
import OverviewBar from './Overview/Overview';
import BoxOverviewwith from './boxoverview/boxslideprogress';
import BoxOverviewwithtwo from './boxoverview/boxslideprogresstwo';
import BoxOverviewwiththree from './boxoverview/boxslideprogreethree';
import Faq from '../FAQ/FAQ';
import { Typography } from '@mui/material';
import BoxOverviewwithfour from './boxoverview/boxslideprogressfour';
import BoxOverviewwithfive from './boxoverview/boxslideprogressfive';

function Sdemain() {
  return (
    <div>
      {/* <Navbarr/> */}
      <h1 style={{display:'flex',justifyContent:'center', marginLeft:'20px'}}>EPICC Pratice Sheet – Top Coding Interview Problems</h1>
      
<OverviewBar/>


<BoxOverviewwith/>
< br></br>
<BoxOverviewwithtwo/>
<br></br>
<BoxOverviewwiththree/>
<br></br>
<BoxOverviewwithfour/>
<br></br>
<BoxOverviewwithfive/>
{/* <Faq/> */}


    </div>
  )
}

export default Sdemain

