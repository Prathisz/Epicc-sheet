import React from 'react';
import './Quotes.css';
const quotesData = [
  {
    text: 'The only limit to our realization of tomorrow will be our doubts of today.',
    author: 'Franklin D. Roosevelt',
  },
  {
    text: 'Believe you can and you\'re halfway there.',
    author: 'Theodore Roosevelt',
  },
  {
    text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  // Add more quotes as needed
];

const Quotes = () => {
  return (
    <div>
      <h2>Inspirational Quotes</h2>
      <div className="quotes-container">
        {quotesData.map((quote, index) => (
          <div key={index} className="quote-card">
            <p className="quote-text">"{quote.text}"</p>
            <p className="quote-author">- {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
