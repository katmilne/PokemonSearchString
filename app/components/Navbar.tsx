// app/components/Navbar.tsx

import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-rose-300 text-white px-4">
        <div className='flex items-center justify-end px-10'>
            <div className='flex flex-col px-4'>
                <div className='text-3xl font-bold text-right'>
                    PokéString 
                </div>
                <div className='text-black text-sm font-light text-right'>
                    Pokémon Go Search 
                </div>
                <div className='text-black text-sm font-light text-right'>
                    String Builder
                </div>
            </div>
            <Image
                src="/favicon.png"
                alt="Pixel chansey"
                width={120}               // Width in pixels
                height={200}              // Height in pixels
            />
        </div>
        {/* Add more links as needed */}
    </nav>
  );
}
