// src/components/QuoteCard.js
import React from 'react';
import './Quotes.css';

const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className="quote-card">
      <p>{quote}</p>
      <button onClick={() => onSave(quote)}>Save to List</button>
    </div>
  );
};

export default QuoteCard;