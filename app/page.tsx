"use client"; // Ensure this is present

import React, { useState } from 'react';
import SearchBuilder from './components/SearchBuilder';
import Button from './components/Button';

const typeOptions = [
  { text: "Normal", value: "normal", color: "bg-[#A8A77A]" },
  { text: "Fire", value: "fire", color: "bg-[#EE8130]" },
  { text: "Water", value: "water", color: "bg-[#6390F0]" },
  { text: "Grass", value: "grass", color: "bg-[#7AC74C]" },
  { text: "Electric", value: "electric", color: "bg-[#F7D02C]" },
  { text: "Ice", value: "ice", color: "bg-[#96D9D6]" },
  { text: "Fighting", value: "fighting", color: "bg-[#C22E28]" },
  { text: "Poison", value: "poison", color: "bg-[#A33EA1]" },
  { text: "Ground", value: "ground", color: "bg-[#E2BF65]" },
  { text: "Flying", value: "flying", color: "bg-[#A98FF3]" },
  { text: "Psychic", value: "psychic", color: "bg-[#F95587]" },
  { text: "Bug", value: "bug", color: "bg-[#A6B91A]" },
  { text: "Rock", value: "rock", color: "bg-[#B6A136]" },
  { text: "Ghost", value: "ghost", color: "bg-[#735797]" },
  { text: "Dragon", value: "dragon", color: "bg-[#6F35FC]" },
  { text: "Dark", value: "dark", color: "bg-[#705746]" },
  { text: "Steel", value: "steel", color: "bg-[#B7B7CE]" },
  { text: "Fairy", value: "fairy", color: "bg-[#D685AD]" },
];

const searchCriteriaOptions = [
  { text: "Legendary", value: "legendary" },
  { text: "Mythical", value: "mythical" },
  { text: "Shiny", value: "shiny" },
  { text: "Weather Boosted", value: "weather_boosted" },
];

export default function HomePage() {
  const [searchString, setSearchString] = useState('');
  const [currentOperator, setCurrentOperator] = useState<'&' | ','>('&');
  const [isNegate, setIsNegate] = useState(false);

  const addToSearchString = (value: string) => {
    const negationSymbol = isNegate ? '!' : '';
    setSearchString(prev => (prev ? `${prev}${currentOperator}${negationSymbol}${value}` : `${negationSymbol}${value}`));
  };

  const toggleNegation = () => {
    setIsNegate(prev => !prev); // Correctly toggle state
  };

  const setAndOperator = () => {
    setCurrentOperator('&');
  };

  const setOrOperator = () => {
    setCurrentOperator(',');
  };

  const clearAll = () => {
    setSearchString('');
  };

  return (
    <div className="p-6">
      <SearchBuilder searchString={searchString} />
      <div className='flex'>
        <div className="items-center mx-auto">
          <div className="flex flex-row gap-8 mt-4 justify-center my-2">
            <div className="mt-4 flex gap-4">
              <button
                onClick={setAndOperator}
                className={`py-2 px-4 rounded ${currentOperator === '&' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
              >
                AND (&)
              </button>
              <button
                onClick={setOrOperator}
                className={`py-2 px-4 rounded ${currentOperator === ',' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
              >
                OR (,)
              </button>
              <button
                onClick={toggleNegation}
                className={`py-2 px-4 rounded ${isNegate ? 'bg-rose-500 text-white' : 'bg-gray-300 text-black'}`}
              >
                Negate {!isNegate ? 'OFF' : 'ON'}
              </button>
              <button 
                onClick={clearAll} 
                className="bg-slate-500 text-white py-2 px-4 rounded hover:bg-rose-500 transition duration-300">
                Clear All
              </button>
            </div>
          </div>

          {/* Types Section */}
          <div className="flex flex-col items-center my-2">
            <h3 className="text-lg font-semibold mb-2">Types</h3>
            <div className="flex gap-4 flex-wrap">
              {typeOptions.map(option => (
                <Button 
                  key={option.value} 
                  text={option.text} 
                  onClick={() => addToSearchString(option.value)} 
                  className={`${option.color} text-black`} 
                />
              ))}
            </div>
          </div>

          {/* Search Criteria Section */}
          <div className="flex flex-col items-center my-2">
            <h3 className="text-lg font-semibold mb-2">Search Criteria</h3>
            <div className="flex gap-4 flex-wrap">
              {searchCriteriaOptions.map(option => (
                <Button 
                  key={option.value} 
                  text={option.text} 
                  onClick={() => addToSearchString(option.value)} 
                  className="bg-gray-300 text-black" // Default color for search criteria
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
