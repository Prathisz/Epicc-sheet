import React from 'react';
import CourseCard from './Course';
const Cfunc = () => {
  const handleButtonClick = () => {
    // Add functionality for button click here
    console.log('Button clicked!');
  };

  return (
    <div>
      <CourseCard
        imageUrl="https://example.com/image.jpg" // Replace with your image URL
        title="Card Title"
        description="This is a sample card description."
        buttonText="Click Me"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default Cfunc;
