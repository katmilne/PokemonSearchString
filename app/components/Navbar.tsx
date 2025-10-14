// app/components/Navbar.tsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white text-black border-b border-gray-200">
        <div className='flex items-center justify-end py-1 px-4'>
            <div className='flex flex-col px-2'>
                <div className='text-xl font-bold text-right'>
                    PokéString 
                </div>
                <div className='text-black text-xs font-light text-right'>
                    Pokémon Go Search String Builder
                </div>
            </div>
        </div>
        {/* Add more links here */}
    </nav>
  );
}
