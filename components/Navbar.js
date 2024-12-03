'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#fff5e1] text-black p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <Image src={"/logo.png"} alt="logo" width="200" height="20"/>
        
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className="hidden lg:flex space-x-4 font-light text-md">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/#services">SERVICES</Link></li>
          <li><Link href="/#faq">FAQ</Link></li>
          <li><Link href="/about">ABOUT</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>
          <li><Link href="/blog">BLOG</Link></li>
        </ul>

        <Link href="/contact" className="hidden lg:block">
          <button className="bg-yellow-400 text-black text-lg tracking-tight font-bold p-4 mx-4 rounded-sm">
            Get a free quote!
          </button>
        </Link>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col space-y-4 mt-4">
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/#services">SERVICES</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/contact">CONTACT</Link></li>
            <li><Link href="/blog">BLOG</Link></li>
          </ul>
          <Link href="/contact" className="hidden lg:block">
            <button className="mt-4 w-full bg-yellow-500 text-black p-2 rounded">
              Get a free quote!
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;