// Import React and CSS for styling
import React from 'react';
import './Card.css'; // Create a CSS file for styling

// Card component
const Card = ({ title, level, image, link }) => {
  return (
    <div className={`card ${level}`}>
      <img src={image} alt={`${level} level`} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{`Skill Level: ${level}`}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
};

// App component
const CarddApp = () => {
  return (
    <div className="app">
      <Card
        title="Beginner"
        level="beginner"
        image="https://cdn1.vectorstock.com/i/1000x1000/68/45/full-stack-developer-working-on-computer-vector-39256845.jpg" // Replace with the actual image URL
        link=""
      />
      <Card
        title="Intermediate"
        level="intermediate"
        image="https://twtv3.ams3.digitaloceanspaces.com/posts/master.jpeg" // Replace with the actual image URL
        link=""
      />
      <Card
        title="Advanced"
        level="advanced"
        image="https://blog.testproject.io/wp-content/uploads/2021/05/Why-a-QA-should-learn-programming.jpg" // Replace with the actual image URL
        link=""
      />
    </div>
  );
};

export default CarddApp;
