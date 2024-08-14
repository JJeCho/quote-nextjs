"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import QuoteDisplay from '../../components/QuoteDisplay';

const RandomQuotePage = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        const res = await fetch('https://api.quotable.io/random');
        const data = await res.json();
        setQuote(data);
      } catch (error) {
        console.error("Error fetching random quote:", error);
      }
    };

    fetchRandomQuote(); 
  }, []);
  return (
    <>
      <Navbar />
      <QuoteDisplay title="Random Quote" quote={quote} />
    </>
  );
};

export default RandomQuotePage;
