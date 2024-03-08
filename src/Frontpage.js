// App.js
import React from 'react';
//  have the NavbarMui component
import ResponsiveAppBar from './component/Nav';
import img from './component/frontimg.png';
import { Button } from '@mui/material';

const Home = () => (
  <div>
    <h1>EPICC is a code management platform,</h1>
    </div>
    );

    const Home2 = () => (
        <div>
          <h5>🏆 Challenge Yourself:
Take on coding challenges that will ignite your problem-solving skills and foster a growth mindset. Our interactive coding playground is your arena to experiment, learn, and conquer new coding heights.</h5>
          </div>
          );
    
  


const Frontpage = () => {
  return (
    <>
    <div>
      <ResponsiveAppBar/>

      {/* Content on the home page */}
      <div style={{ margin: '20px', textAlign: 'left',color:'blue' }}>
        <Home />
        
      </div>

      <div style={{ margin: '20px', textAlign: 'left',color:'black' }}>
        <Home2 />
        
      </div>

      {/* Image on the right side */}
      <div style={{ position: 'fixed', top: '50%', right: '20px', transform: 'translateY(-40%)' }}>
        <img
          src={img} // Replace with the path to your image
          alt="Right Side Image"
          style={{ height: '500px', width: '200px', borderRadius: '50%' }}
        />
      </div>
    </div>
    <Button variant='contained' sx={{position:'fixed',top:'40%',right:'12'}}>Get Started</Button>
    </>
  );
};

export default Frontpage;

