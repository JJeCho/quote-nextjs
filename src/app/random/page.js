"use client";

import React, { useState, useEffect } from 'react';
import QuoteDisplay from '../../components/QuoteDisplay';

const RandomQuotePage = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchRandomQuote = async () => {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      setQuote(data.content);
    };

    fetchRandomQuote();
  }, []);

  return <QuoteDisplay title="Random Quote" quote={quote} />;
};

export default RandomQuotePage;
