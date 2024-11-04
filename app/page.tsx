// app/page.tsx
import React, { useState } from 'react';
import Image from 'next/image';
// import SearchBuilder from './components/SearchBuilder';
// import Button from './components/Button';

export default function HomePage() {
//   const [searchString, setSearchString] = useState('');

//   const addToSearchString = (text: string) => {
//     setSearchString(prev => `${prev} ${text}`.trim());
//   };

  return (
    <div className='flex flex-col items-center '>
        <Image
            src="/favicon.png"
            alt="Pixel chansey"
            width={200}               // Width in pixels
            height={300}              // Height in pixels
        />
        <div className='size-30 text-2xl'>
            Pokémon Search String Builder
        </div>
    </div>
    


    // <div>
    //   <SearchBuilder searchString={searchString} />
    //   <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
    //     <Button text="Fire Type" onClick={() => addToSearchString("fire")} />
    //     <Button text="Legendary" onClick={() => addToSearchString("legendary")} />
    //     <Button text="CP > 1000" onClick={() => addToSearchString("cp>1000")} />
    //     <Button text="Shiny" onClick={() => addToSearchString("shiny")} />
    //     {/* Add more buttons as needed */}
    //   </div>
    // </div>
  );
}