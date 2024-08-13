"use client";

import React from 'react';

const QuoteDisplay = ({ title, quote }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold">{title}</h1>
        {quote ? (
          <p className="mt-4 text-lg text-gray-700">{quote}</p>
        ) : (
          <p className="mt-4 text-lg text-gray-500">Loading...</p>
        )}
      </div>
    </main>
  );
};

export default QuoteDisplay;
