"use client";

import React, { useState, useEffect } from 'react';
import QuoteDisplay from '../components/QuoteDisplay';

const HomePage = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuoteOfTheDay = async () => {
      const res = await fetch('/api/quote-of-the-day');
      const data = await res.json();
      setQuote(data.content);
    };

    fetchQuoteOfTheDay();
  }, []);

  return <QuoteDisplay title="Quote of the Day" quote={quote} />;
};

export default HomePage;
