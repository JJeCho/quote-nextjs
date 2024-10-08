"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import QuoteDisplay from '../components/QuoteDisplay';

const HomePage = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuoteOfTheDay = async () => {
      try {
        const res = await fetch('/api/quote-of-the-day');
        const data = await res.json();
        setQuote(data);
      } catch (error) {
        console.error("Error fetching quote of the day:", error);
      }
    };

    fetchQuoteOfTheDay();
  }, []);

  return (
    <>
      <Navbar />
      <QuoteDisplay title="Quote of the Day" quote={quote} />
    </>
  );
};

export default HomePage;
