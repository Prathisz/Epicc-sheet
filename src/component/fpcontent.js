import React from 'react'
import { Button , Box} from '@mui/material';
import './/fpcontent.css';
function Fpcontent() {
  return (
    <Box flex={1}>
      <section className='hero'>
    <h1 id=''>EPICC is a code management platform,</h1>
    


  
          <h5>🏆 Challenge Yourself:
        Take on coding challenges that will ignite your problem-solving skills and foster a growth mindset. Our interactive coding playground is your arena to experiment, learn, and conquer new coding heights.</h5>
        </section>

        {/* <Button variant='contained' sx={{position:'fixed',top:'40%',right:'12'}}>Get Started</Button> */}
        
        <button class="animated-button">
  <span class="text">Get Started</span>
  <span class="circle"></span>
</button>


</Box>

  );
}

export default Fpcontent
