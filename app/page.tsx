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

const regions = [
  { text: "Hoenn", value: "kanto" },
  { text: "Mythical", value: "johto" },
  { text: "Shiny", value: "kalos" },
  { text: "Weather Boosted", value: "weather_boosted" },
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
  const [cpEqualValue, setCpEqualValue] = useState<string | number>('');
  const [cpLower, setCpLower] = useState<string | number>('');
  const [cpHigher, setCpHigher] = useState<string | number>('');

  const addToSearchString = (value: string) => {
    const negationSymbol = isNegate ? '!' : '';
    setSearchString(prev => (prev ? `${prev}${currentOperator}${negationSymbol}${value}` : `${negationSymbol}${value}`));
  };

  const handleActionCpLessMoreThan = () => {
    const cpLowerVal = (cpLower == ''? '' : cpLower)
    const cpHigherVal = (cpHigher == ''? '' : cpHigher)
    if(cpLowerVal != ''|| cpHigherVal != '') {
      addToSearchString("cp" +cpLowerVal +"-"+ cpHigherVal);
    }
    
  };
  const handleActionCpEqual = () => {
    addToSearchString("cp" + cpEqualValue);
  };

  const toggleNegation = () => {
    setIsNegate(prev => !prev);
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
          <div className="flex flex-row gap-8 justify-center">
            <div className="mt-2 flex">
              <button
                onClick={setAndOperator}
                className={`py-2 px-4 ${currentOperator === '&' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
              >
                AND
              </button>
              <button
                onClick={setOrOperator}
                className={`py-2 px-4 ${currentOperator === ',' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
              >
                OR
              </button>
              <button
                onClick={toggleNegation}
                className={`mx-4 py-2 px-4 w rounded ${isNegate ? 'bg-rose-500 text-white' : 'bg-gray-300 text-black'}`}
              >
                Not {!isNegate ? '(OFF)' : '(ON)'}
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
            <h3 className="text-lg font-semibold mb-2">Attributes</h3>
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

          {/* CP */}
          <div className="flex flex-col items-center my-2 mx-auto">
            <h3 className="text-lg font-semibold">CP</h3>
            <div className='flex flex-col w-screen items-center'>

              {/* CP = */}
              <div className='my-4'>
                <span className='my-auto font-bold'> CP = </span>
                <input
                  className=' text-center w-60 
                    border 
                    border-gray-300 
                    rounded-md 
                    p-2 
                    focus:outline-none 
                    focus:border-slate-500 
                    focus:ring-1 
                    focus:ring-slate-500 
                    transition 
                    duration-200 
                    ease-in-out 
                    placeholder:text-gray-400
                    placeholder:italic
                    mx-2'
                  type="number"
                  placeholder='Enter value greater than 0'
                  min='1'
                  value={cpEqualValue}
                  onChange={(e) => {
                    const input = Number(e.target.value)
                    setCpEqualValue(input >= 1 ? input : '');
                  }}
                  
                />
                <Button
                  text="ADD"
                  onClick={handleActionCpEqual}
                  className='bg-gray-300 text-black'
                />
              </div>
              
              {/* < CP < */}
              <div className=''>
              <input
                  className=' text-center w-60 
                    border 
                    border-gray-300 
                    rounded-md 
                    p-2 
                    focus:outline-none 
                    focus:border-slate-500 
                    focus:ring-1 
                    focus:ring-slate-500 
                    transition 
                    duration-200 
                    ease-in-out 
                    placeholder:text-gray-400
                    placeholder:italic
                    mx-2'
                  type="number"
                  placeholder='Enter lower value'
                  min='0'
                  value={cpLower}
                  onChange={(e) => {
                    const input = Number(e.target.value)
                    setCpLower(input >= 0 ? input : '');
                  }}
                  
                />
                <span className='my-auto font-bold'> &lt; CP &lt; </span>
                <input
                  className=' text-center w-60 
                    border 
                    border-gray-300 
                    rounded-md 
                    p-2 
                    focus:outline-none 
                    focus:border-slate-500 
                    focus:ring-1 
                    focus:ring-slate-500 
                    transition 
                    duration-200 
                    ease-in-out 
                    placeholder:text-gray-400
                    placeholder:italic
                    mx-2'
                  type="number"
                  placeholder='Enter upper value'
                  min='0'
                  value={cpHigher}
                  onChange={(e) => {
                    const input = Number(e.target.value)
                    setCpHigher(input >= 0 ? input : '');
                  }}
                  
                />
                <Button
                  text="ADD"
                  onClick={handleActionCpLessMoreThan}
                  className='bg-gray-300 text-black'
                />
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
