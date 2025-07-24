import React, { useState } from 'react';
import Contactus from './Contactus';
import Footer from './Footer';
import Features from './Feature';
import BlogWriting from './Writing';


export default function Heading() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-6 py-4 shadow-md fixed top-0 z-50 border-b border-orange-200 flex items-center justify-center">
      <div className="text-2xl font-bold text-orange-800"><a href="/">MidnightPens</a></div>

    </nav>
  );
}
