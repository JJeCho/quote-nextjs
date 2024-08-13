import NodeCache from 'node-cache';

// Initialize the cache with a TTL of 24 hours (86400 seconds)
const cache = new NodeCache({ stdTTL: 86400 });

export async function GET(request) {
  let quote = cache.get('quoteOfTheDay');

  if (!quote) {
    // If no quote is cached, fetch a new one
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    quote = data.content;

    // Cache the quote for the next 24 hours
    cache.set('quoteOfTheDay', quote);
  }

  return new Response(JSON.stringify({ content: quote }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
