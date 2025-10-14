// app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white text-black border-b border-gray-200">
        <div className='flex items-center justify-between py-2 px-2 sm:px-4'>
            <div className="flex-1">
                <Link 
                    href="/about" 
                    className="bg-zinc-800 hover:bg-zinc-600 text-white text-xs sm:text-sm font-medium px-3 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 ml-2 sm:ml-8 lg:ml-24"
                >
                    About
                </Link>
            </div>
            
            <div className='flex flex-col px-1 sm:px-2'>
                <div className='text-lg sm:text-xl font-bold text-right'>
                    <Link href="/" className="hover:text-gray-700 transition-colors">
                        PokéString 
                    </Link>
                </div>
                <div className='text-black text-xs sm:text-sm font-light text-right'>
                    <span className="hidden sm:inline">Pokémon Go Search String Builder</span>
                    <span className="sm:hidden">PokéGo Builder</span>
                </div>
            </div>
        </div>
    </nav>
  );
}
