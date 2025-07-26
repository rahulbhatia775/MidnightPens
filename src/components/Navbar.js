import React, { useState } from 'react';
import Contactus from './Contactus';
import Footer from './Footer';
import Features from './Feature';
import BlogWriting from './Writing';


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-6 py-4 shadow-md fixed top-0 z-50 border-b border-orange-200 flex justify-between items-center">

      <div className="text-2xl font-bold text-orange-800"><a href="/">MidnightPens</a></div>

      <ul className="hidden md:flex items-center space-x-6 text-orange-800 font-medium ml-auto">
        <li><a href="#features" className="hover:text-orange-600">Features</a></li>
        <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
        <li>
          <a
            href="/write"
            className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition"
          >
            Start Writing
          </a>
        </li>
      </ul>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-orange-800 text-2xl"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-orange-200 shadow-md py-6 flex flex-col items-center space-y-5 animate-slideDown md:hidden">
          <a href="#features" className="text-orange-800 hover:text-orange-600">Features</a>
          <a href="#contact" className="text-orange-800 hover:text-orange-600">Contact</a>
          <a href="/write" className="text-orange-600 font-semibold">Start Writing</a>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-10%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
