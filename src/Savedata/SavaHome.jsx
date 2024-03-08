import React from 'react';
import { FaPlus } from 'react-icons/fa';
import './Save.css'; // Create this CSS file

const SavaHome = () => {
  const handleClick = () => {
    // Your custom logic goes here
    console.log('Button clicked!');
  };
  
  return (
    <div className='ca'>
    <div className="cardd">
      <h2>Add Code</h2>
      {/* <p>Here</p> */}
      <button className="plus-button" onClick={handleClick}>
        <FaPlus />
      </button>
    </div>
    </div>
  );
};


export default SavaHome;

