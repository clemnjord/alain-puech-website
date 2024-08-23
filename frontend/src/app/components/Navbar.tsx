"use client";

import React, { useState } from "react";
import "./Navbar.css";

export const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <nav className="bg-black">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">
                <a href="/" className="flex items-center">
                    <span className="text-2xl font-semibold text-white dark:text-white text-nowrap">
                        Alain PUECH<br />Artiste/Plasticien
                    </span>
                </a>
                <button
                    className="lg:hidden flex items-center text-white ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden lg:flex space-x-4 ml-auto">
                    <a href="#" className="text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4">Autoportraits</a>
                    <a href="#" className="text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4">Autres oeuvres</a>
                    <a href="#" className="text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4">Histoires et techniques</a>
                    <a href="/biography" className="text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4">Biographie</a>
                    <a href="#" className="text-gray-100 font-semibold hover:bg-gray-100 hover:text-black rounded py-2 px-4">Galerie</a>
                </div>
            </div>
            <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} bg-gray-800 p-4`}>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded">Autoportraits</a>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded">Autres oeuvres</a>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded">Histoires et techniques</a>
                <a href="/biography" className="block py-2 px-3 text-white bg-blue-700 rounded">Biographie</a>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded">Galerie</a>
            </div>
        </nav>
    );
};
