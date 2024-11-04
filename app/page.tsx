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
    <div className='flex justify-center'>
        MAIN PAGE CONTENT
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