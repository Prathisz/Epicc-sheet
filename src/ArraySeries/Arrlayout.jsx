import React from 'react'
import ArrayOverviewBar from './ArrayOverwiew'
import ArrayBox1 from './arrboxslide'
import Faq from '../FAQ/FAQ'
import Quotes from '../Quotes/Quotes'
import Footer from '../Footer/Footer'
import ArrayBox2 from './arrboxslide2'
import ArrayBox3 from './arrboxslide3'
import ArrayBox4 from './arrboxslide4'
import Navbarr from '../sdecom/webnav/webnav'

function Arrlayout() {
  return (
    <div>
        {/* <Navbarr/> */}
        <h1 style={{display:'flex',justifyContent:'center'}}>EPICC Array Series : Top Graph Interview Questions</h1><br></br>
      <img src='https://takeuforward.org/wp-content/uploads/2022/02/array-1024x512.webp' style={{marginLeft:'40px'}}></img>
      <ArrayOverviewBar/>
      <ArrayBox1/>
      <br></br>
      <ArrayBox2/>
      <br></br>
      <ArrayBox3/>
      <br></br>
      <ArrayBox4/>
      {/* <Faq/>
      <Quotes/>
      <Footer/> */}
    </div>
  )
}

export default Arrlayout
