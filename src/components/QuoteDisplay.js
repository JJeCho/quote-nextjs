"use client";

import React, { useState, useEffect } from 'react';
const QuoteDisplay = ({ title, quote }) => {

  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    if (quote && quote.content) {
      const fetchImage = async () => {
        const encodedPrompt = encodeURIComponent(quote.content);
        const imageResponse = `https://image.pollinations.ai/prompt/${encodedPrompt}`;
        setImageUrl(imageResponse);
      };

      fetchImage();     }
  }, [quote]);

  if (!quote) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center bg-slate-50">
        <div className="bg-slate-400 p-8 rounded-lg shadow-lg max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-rich-black mb-6">{title}</h1>
          <p className="text-xl text-ash-gray">No quote provided.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-slate-50">
      <div className="bg-slate-400 p-8 rounded-lg shadow-lg max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-rich-black mb-6">{title}</h1>
        <p className="text-2xl font-light text-teal leading-relaxed mb-4">{quote.content}</p>
        {quote.author && (
          <p className="text-lg font-medium text-rich-black">- {quote.author}</p>
        )}
        {quote.tags && quote.tags.length > 0 && (
          <p className="text-sm text-ash-gray mt-2">Tags: {quote.tags.join(', ')}</p>
        )}
        {quote.dateAdded && (
          <p className="text-xs text-ash-gray mt-2">Added on: {new Date(quote.dateAdded).toLocaleDateString()}</p>
        )}
        {imageUrl && (
          <div className="mt-6">
            <img src={imageUrl} alt="Generated visual" className="rounded-lg shadow-lg max-w-full" />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteDisplay;
