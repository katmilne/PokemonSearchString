"use client"; // Ensure this is present

import React, { useState, useEffect } from 'react';
import SearchBuilder from './components/SearchBuilder';
import Button from './components/Button';

const typeOptions = [
  { text: "Normal", value: "normal" },
  { text: "Fire", value: "fire" },
  { text: "Water", value: "water" },
  { text: "Grass", value: "grass" },
  { text: "Electric", value: "electric" },
  { text: "Ice", value: "ice" },
  { text: "Fighting", value: "fighting" },
  { text: "Poison", value: "poison" },
  { text: "Ground", value: "ground" },
  { text: "Flying", value: "flying" },
  { text: "Psychic", value: "psychic" },
  { text: "Bug", value: "bug" },
  { text: "Rock", value: "rock" },
  { text: "Ghost", value: "ghost" },
  { text: "Dragon", value: "dragon" },
  { text: "Dark", value: "dark" },
  { text: "Steel", value: "steel" },
  { text: "Fairy", value: "fairy" },
];

const searchCriteriaOptions = [
  { text: "Legendary", value: "legendary" },
  { text: "Mythical", value: "mythical" },
  { text: "Shiny", value: "shiny" },
  { text: "Weather Boosted", value: "weather_boosted" },
  { text: "IV > 80%", value: "iv>80" },
  { text: "Perfect IVs", value: "perfect_iv" },
  { text: "Shadow", value: "shadow" },
  { text: "Purified", value: "purified" },
  { text: "Candy XL", value: "candy_xl" },
  { text: "Evolved", value: "evolved" },
  { text: "Mega Evolved", value: "mega_evolved" },
  { text: "Hatchable", value: "hatchable" },
];

export default function HomePage() {
  const [searchString, setSearchString] = useState('');
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
  const [cpLower, setCpLower] = useState<string>(''); // State for cp<
  const [cpUpper, setCpUpper] = useState<string>(''); // State for cp>
  const [cpEqual, setCpEqual] = useState<string>(''); // State for cp=

  // Update searchString whenever cp inputs change or selected buttons change
  useEffect(() => {
    let newSearchString = '';
    
    // Add CP filters to searchString
    if (cpLower) newSearchString += `cp<${cpLower}&`;
    if (cpUpper) newSearchString += `cp>${cpUpper}&`;
    if (cpEqual) newSearchString += `cp=${cpEqual}&`;

    // Add selected button filters to searchString
    if (selectedButtons.length > 0) {
      newSearchString += selectedButtons.join('&') + '&';
    }

    // Remove the trailing '&' if it exists
    newSearchString = newSearchString.replace(/&$/, '');

    setSearchString(newSearchString);
  }, [cpLower, cpUpper, cpEqual, selectedButtons]); // Dependency array for useEffect

  const toggleSearchString = (text: string) => {
    setSelectedButtons(prev => {
      const isSelected = prev.includes(text);
      const newSelectedButtons = isSelected 
        ? prev.filter(item => item !== text) // Remove if already selected
        : [...prev, text]; // Add if not selected
      return newSelectedButtons;
    });
  };

  const clearAll = () => {
    setSearchString('');
    setSelectedButtons([]);
    setCpLower('');
    setCpUpper('');
    setCpEqual('');
  };

  return (
    <div className="p-6">
      <SearchBuilder searchString={searchString} />
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-8 mt-4 justify-center">
          
          {/* Types Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Types</h3>
            <div className="flex gap-4 flex-wrap">
              {typeOptions.map(option => (
                <Button 
                  key={option.value} 
                  text={option.text} 
                  onClick={() => toggleSearchString(option.value)} 
                  selected={selectedButtons.includes(option.value)} // Pass selected state
                />
              ))}
            </div>
          </div>

          {/* Search Criteria Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Search Criteria</h3>
            <div className="flex gap-4 flex-wrap">
              {searchCriteriaOptions.map(option => (
                <Button 
                  key={option.value} 
                  text={option.text} 
                  onClick={() => toggleSearchString(option.value)} 
                  selected={selectedButtons.includes(option.value)} // Pass selected state
                />
              ))}
            </div>
          </div>

          {/* CP Input Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">CP Filters</h3>
            <div className="flex gap-4 items-center mt-2">
              <input 
                type="number"
                value={cpLower}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === '' || parseInt(value) > 0) {
                    setCpLower(value);
                    // Clear cpEqual when cpLower changes
                    if (cpEqual) setCpEqual('');
                  }
                }}
                placeholder="CP &lt;"
                className="border p-2 rounded"
              />
              <span className="text-lg"> &lt; cp &lt; </span>
              <input 
                type="number"
                value={cpUpper}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === '' || parseInt(value) > 0) {
                    setCpUpper(value);
                    // Clear cpEqual when cpUpper changes
                    if (cpEqual) setCpEqual('');
                  }
                }}
                placeholder="CP &gt;"
                className="border p-2 rounded"
              />
            </div>
            <div className="flex items-center mt-2">
              <span className="text-lg"> cp = </span>
              <input 
                type="number"
                value={cpEqual}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === '' || parseInt(value) > 0) {
                    setCpEqual(value);
                    // Clear cpLower and cpUpper when cpEqual changes
                    setCpLower('');
                    setCpUpper('');
                  }
                }}
                placeholder="CP ="
                className="border p-2 rounded mx-2"
              />
            </div>
          </div>
        </div>

        {/* Search Controls */}
        <div className="flex gap-4 mt-6">
          <button 
            onClick={clearAll} 
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
