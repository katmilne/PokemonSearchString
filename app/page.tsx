// app/page.tsx
"use client"; // Don't forget this directive

import React, { useState } from 'react';
import SearchBuilder from './components/SearchBuilder';
import Button from './components/Button';

const buttonOptions = [
  { text: "Fire Type", value: "fire" },
  { text: "Legendary", value: "legendary" },
  { text: "CP > 1000", value: "cp>1000" },
  { text: "Shiny", value: "shiny" },
  // Add more button options as needed
];

export default function HomePage() {
  const [searchString, setSearchString] = useState('');
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const addToSearchString = (text: string) => {
    setSearchString(prev => (prev ? `${prev}&${text}` : text).trim());
    setSelectedButtons(prev => [...prev, text]); // Add selected text to the state
  };

  const removeLastFromSearchString = () => {
    // Remove the last string from the searchString
    const lastString = selectedButtons[selectedButtons.length - 1];
    if (lastString) {
      setSearchString(prev => {
        const newString = prev.replace(`&${lastString}`, '').replace(`${lastString}`, '').trim();
        return newString;
      });
      setSelectedButtons(prev => prev.slice(0, -1)); // Remove the last selected string
    }
  };

  return (
    <div>
        <div className='flex mx-[20%]'>
            <SearchBuilder searchString={searchString} />
    
            {/* Arrow back button next to search string */}
            {selectedButtons.length > 0 && (
            <div className="flex items-center mx-4 justify-center">
                <button 
                onClick={removeLastFromSearchString} 
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                Undo
                </button>
            </div>
            )}
        </div>
  
      {/* Button options */}
      <div className="flex gap-4 mt-4 justify-center">
        {buttonOptions.map(option => (
          !selectedButtons.includes(option.value) && (
            <Button 
              key={option.value} 
              text={option.text} 
              onClick={() => addToSearchString(option.value)} 
            />
          )
        ))}
      </div>
    </div>
  );
  
}
