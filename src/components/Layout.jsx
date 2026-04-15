import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo/logo.png';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-patoo-white text-patoo-black font-fredoka">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-8 bg-patoo-white border-b border-gray-100">
        <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
          <span className="sr-only">Patoo</span>
          <img src={logo} alt="Patoo" className="h-12 md:h-14 w-auto" />
        </Link>
        <nav className="flex items-center gap-6 font-medium text-[15px]">
          <a href="#" className="hover:text-patoo-medium transition-colors">À propos</a>
          <div className="relative group cursor-pointer flex items-center gap-1">
            Nos projets 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
          <a href="#" className="ml-2 bg-patoo-medium text-white px-5 py-2.5 rounded-full hover:bg-orange-500 transition-colors">
            Télécharger l'app
          </a>
          <a href="#" className="border-2 border-patoo-black text-patoo-black px-5 py-2 rounded-full hover:bg-patoo-black hover:text-white transition-colors">
            Nous contacter
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-patoo-medium text-patoo-black py-8 px-12 flex justify-between items-center mt-20">
        <h2 className="text-4xl font-bold">Contact</h2>
        <a href="mailto:contact-patoo@gmail.com" className="font-bold hover:underline">
          contact-patoo@gmail.com
        </a>
      </footer>
    </div>
  );
};

export default Layout;
