// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Quotes from './components/Quotes';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = (quote) => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="App">
      <h1>Ron Swanson Quotes</h1>
      <Quotes quote={quote} onSave={saveQuote} />
      <button onClick={fetchQuote}>Get New Quote</button>
      <h2>Saved Quotes</h2>
      {savedQuotes.map((quote, index) => (
        <Quotes key={index} quote={quote} />
      ))}
    </div>
  );
};

export default App;