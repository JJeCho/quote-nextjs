"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="w-full p-3 bg-zinc-800">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <span className={`text-sm font-medium ${router.pathname === '/' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
            Quote of the Day
          </span>
        </Link>
        <Link href="/random">
          <span className={`text-sm font-medium ${router.pathname === '/random' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
            Random Quote
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
