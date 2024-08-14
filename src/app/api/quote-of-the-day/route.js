import NodeCache from 'node-cache';

// Initialize the cache with a TTL of 24 hours (86400 seconds)
const cache = new NodeCache({ stdTTL: 86400 });

export async function GET(request) {
  let quote = cache.get('quoteOfTheDay');

  if (!quote) {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();

    cache.set('quoteOfTheDay', data);
    quote = data;
  }

  return new Response(JSON.stringify(quote), {
    headers: { 'Content-Type': 'application/json' },
  });
}
