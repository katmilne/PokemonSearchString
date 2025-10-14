"use client"; // need this for somereason

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
  { text: "Kanto", value: "kanto" },
  { text: "Johto", value: "johto" },
  { text: "Heonn", value: "heonn" },
  { text: "Sinnoh", value: "sinnoh" },
  { text: "Unova", value: "unova" },
  { text: "Kalos", value: "kalos" },
  { text: "Alola", value: "alola" },
  { text: "Galar", value: "galar" },
  { text: "Hisui", value: "hisui" },
  { text: "Paldea", value: "paldea" }
]

const appraisal = [
  { text: "0 Stars", value: "0*", color: "bg-amber-300" },
  { text: "1 Stars", value: "1*", color: "bg-amber-300" },
  { text: "2 Stars", value: "2*", color: "bg-amber-300" },
  { text: "3 Stars", value: "3*", color: "bg-amber-300" },
  { text: "Perfect", value: "4*", color: "bg-red-400"},
];

const AcquirementFilters = [
  { text: "GO Battle League", value: "gbl" },
  { text: "Hatched", value: "hatched" },
  { text: "Eggs Only (Baby Pokémon)", value: "eggsonly" },
  { text: "Raid Battle", value: "raid" },
  { text: "Research Task", value: "research" },
  { text: "Team GO Rocket", value: "rocket" },
  { text: "Traded", value: "traded" }
];

const SizeFilters = [
  { text: "XXS", value: "xxs" },
  { text: "XS", value: "xs" },
  { text: "XL", value: "xl" },
  { text: "XXL", value: "xxl" }
];

const GenderFilters = [
  { text: "Female ♀", value: "female" },
  { text: "Male ♂", value: "male" },
  { text: "Unknown", value: "genderunknown" }
];

const StatusFilters = [
  { text: "Legendary", value: "legendary", color: "bg-purple-200" },
  { text: "Lucky", value: "lucky", color: "bg-yellow-300" },
  { text: "Mythical", value: "mythical", color: "bg-rose-100" },
  { text: "Purified", value: "purified", color: "bg-slate-200" },
  { text: "Shadow", value: "shadow", color: "bg-[#B57EDC]" },
  { text: "Shiny", value: "shiny", color: "bg-[#b6fffd]" },
  { text: "XL Candy Powered", value: "candyxl", color: "bg-gray-300" },
  { text: "Event Pokémon", value: "costume", color: "bg-gray-300" },
  { text: "Currently Defending Gyms", value: "defender", color: "bg-gray-300" },
  { text: "Ultra Beast", value: "ultra beasts", color: "bg-gray-300" },
  { text: "Location Background", value: "locationbackground", color: "bg-gray-300" },
  { text: "Special Background", value: "specialbackground", color: "bg-gray-300" },
  { text: "Any Background", value: "background", color: "bg-gray-300", extraText: "Location or Special Backgrounds" },
  { text: "Adventure Effect Move", value: "adventureeffect", color: "bg-gray-300" },
  { text: "Weather Boosted", value: "weather_boosted", color: "bg-gray-300" },
];

const BuddyLevelFilters = [
  { text: "None", value: "buddy0", addedText: "No Buddy History"},
  { text: "Level 1", value: "buddy1", addedText: "Never reached Good Buddies"},
  { text: "Level 2 (❤)", value: "buddy2", addedText: "Good Buddies"},
  { text: "Level 3 (❤❤)", value: "buddy3", addedText: "Great Buddies"},
  { text: "Level 4 (❤❤❤)", value: "buddy4", addedText: "Ultra Buddies"},
  { text: "Level 5 (❤❤❤❤)", value: "buddy5", addedText: "Best Buddies"},
];

const EvolutionFilters = [
  { text: "Can Evolve", value: "evolve" },
  { text: "New Dex Entry on Evolution", value: "evolvenew" },
  { text: "Evolution Requires Item", value: "item" },
  { text: "Eligible for Trade Evolution", value: "tradeevolve" },
  { text: "Buddy Task Evolution", value: "evolvequest" },
  { text: "Can Fuse", value: "fusion", extraText: "(e.g., Necrozma)"},
  { text: "Can Mega Evolve", value: "megaevolve" },
  { text: "Mega Evolution Base Level", value: "mega1" },
  { text: "Mega Evolution High Level", value: "mega2" },
  { text: "Mega Evolution Max Level", value: "mega3" },
  { text: "Can Dynamax", value: "dynamax" },
  { text: "Can Gigantamax", value: "gigantamax" }
];


export default function HomePage() {
  const [searchString, setSearchString] = useState('');
  const [currentOperator, setCurrentOperator] = useState<'&' | ','>('&');
  const [isNegate, setIsNegate] = useState(false);
  const [cpEqualValue, setCpEqualValue] = useState<string | number>('');
  const [cpLower, setCpLower] = useState<string | number>('');
  const [cpHigher, setCpHigher] = useState<string | number>('');
  const [pokeNameInput, setPokeNameInput] = useState('');
  const [pokedexInput, setPokedexInput] = useState<string | number>('');
    
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

  const removeLast = () => {
    setSearchString(prev => {
      if (!prev) return '';
      
      // Find the last operator (& or ,) and remove everything after it
      const lastAmpersand = prev.lastIndexOf('&');
      const lastComma = prev.lastIndexOf(',');
      const lastOperatorIndex = Math.max(lastAmpersand, lastComma);
      
      // If no operator found, clear the entire string (it's the first/only filter)
      if (lastOperatorIndex === -1) {
        return '';
      }
      
      // Remove everything from the last operator onwards
      return prev.substring(0, lastOperatorIndex);
    });
  };



  return (
  <div className="px-4 md:px-6 lg:px-8"> {/* Add reasonable margins */}

    {/* Combined Sticky Container for Mobile */}
    <div className="sticky top-0 z-10 sm:static">
      <SearchBuilder searchString={searchString} onClear={clearAll} onRemoveLast={removeLast} />
      
      {/* Options Button */}
      <div className="sm:static flex justify-center w-[95%] sm:w-full mb-2 bg-gray-100 sm:bg-transparent py-2 sm:py-0 mx-auto rounded-b-lg sm:rounded-none sm:mt-2"> 
        <div className="flex flex-wrap gap-2 justify-center">
          {/* AND Button */}
          <Button
            onClick={setAndOperator}
            text={isNegate ? "Exclude ALL" : "Must Have ALL"}
            className={`${currentOperator === '&' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} text-xs sm:text-sm`}
            tooltip={isNegate ? "Pokemon must NOT have ALL selected filters" : "Pokemon must have ALL selected filters (Fire AND Legendary)"}
          />

          {/* OR Button */}
          <Button
            onClick={setOrOperator}
            text={isNegate ? "Exclude Any" : "Any Of These"}
            className={`${currentOperator === ',' ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'} text-xs sm:text-sm`}
            tooltip={isNegate ? "Pokemon must NOT have ANY of the selected filters" : "Pokemon can have ANY of the selected filters (Fire OR Water)"}
          />

          {/* NOT Button */}
          <Button
            onClick={toggleNegation}
            text={`Exclude Mode ${!isNegate ? 'OFF' : 'ON'}`}
            className={`${isNegate ? 'bg-rose-500 text-white' : 'bg-gray-300 text-black'} text-xs sm:text-sm`}
            tooltip={isNegate ? "Currently excluding Pokemon - click to include instead" : "Currently including Pokemon - click to exclude instead"}
          />
        </div>
      </div>
    </div>

    <div className="flex flex-col w-full max-w-7xl mx-auto">
      {/* ---Input Sections at Top--- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full mb-2">
        
        {/* Pokemon Name & Number Input */}
        <div className="flex flex-col items-center border border-gray-200 rounded-lg p-2 bg-gray-50">
          <h3 className="text-xs sm:text-sm font-semibold mb-1 text-center">Pokemon Search</h3>
          
          {/* Pokemon Name Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-2 w-full">
            <input
              className="text-center w-full sm:w-40 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition duration-200 ease-in-out placeholder:text-gray-400 placeholder:italic"
              placeholder="Pokemon name/tag"
              value={pokeNameInput}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[a-zA-Z]*$/.test(value)) {
                  setPokeNameInput(value);
                }
              }}
            />
            <div className="flex gap-2 w-full sm:w-auto justify-center">
              <Button
                text="ADD"
                onClick={() => {
                  addToSearchString(pokeNameInput.toLocaleLowerCase())
                  setPokeNameInput('');
                }} 
                className="bg-gray-300 text-black flex-1 sm:flex-none"
              />
              <Button
                text="+ Evos"
                onClick={() => {
                  addToSearchString("+" + pokeNameInput.toLocaleLowerCase())
                  setPokeNameInput('');
                }} 
                className="bg-gray-300 text-black flex-1 sm:flex-none"
              />
            </div>
          </div>

          {/* Pokedex Number Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
            <input
              className="text-center w-full sm:w-40 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition duration-200 ease-in-out placeholder:text-gray-400 placeholder:italic"
              placeholder="Pokedex Number"
              type='number'
              value={pokedexInput}
              onChange={(e) => {
                const val = e.target.value;
                setPokedexInput(Number(val) > 0 ? val : '');                                 
              }}
            />
            <Button
              text="ADD"
              onClick={() => {
                addToSearchString("" + pokedexInput)
                setPokedexInput('');
              }} 
              className="bg-gray-300 text-black w-full sm:w-auto"
            />
          </div>
        </div>

        {/* Combat Power Input */}
        <div className="flex flex-col items-center border border-gray-200 rounded-lg p-2 bg-gray-50">
          <h3 className="text-xs sm:text-sm font-semibold mb-1 text-center">Combat Power</h3>
          
          {/* CP = */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-2 w-full">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">CP =</span>
              <input
                className="text-center w-24 sm:w-20 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition duration-200 ease-in-out placeholder:text-gray-400 placeholder:italic"
                type="number"
                placeholder="Value > 0"
                min="1"
                value={cpEqualValue}
                onChange={(e) => {
                  const input = Number(e.target.value)
                  setCpEqualValue(input >= 1 ? input : '');
                }}
              />
            </div>
            <Button
              text="ADD"
              onClick={handleActionCpEqual}
              className="bg-gray-300 text-black w-full sm:w-auto"
            />
          </div>
          
          {/* < CP < */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
            <div className="flex items-center gap-1 sm:gap-2">
              <input
                  className="text-center w-16 sm:w-20 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition duration-200 ease-in-out placeholder:text-gray-400 placeholder:italic"
                  type="number"
                  placeholder="Min"
                  min="0"
                  value={cpLower}
                  onChange={(e) => {
                    const input = Number(e.target.value)
                    setCpLower(input >= 0 ? input : '');
                  }}
              />
              <span className="text-xs sm:text-sm font-bold">&lt; CP &lt;</span>
              <input
                className="text-center w-16 sm:w-20 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition duration-200 ease-in-out placeholder:text-gray-400 placeholder:italic"
                type="number"
                placeholder="Max"
                min="0"
                value={cpHigher}
                onChange={(e) => {
                  const input = Number(e.target.value)
                  setCpHigher(input >= 0 ? input : '');
                }}
              />
            </div>
            <Button
              text="ADD"
              onClick={handleActionCpLessMoreThan}
              className="bg-gray-300 text-black w-full sm:w-auto"
            />
          </div>
        </div>
      </div>

      


      
      {/* ---All Filter Categories Grid--- */}
      <hr className="my-2 mx-20 border-t-1 border-gray-300" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full px-4 mb-2">
        
        {/* Types Section */}
        <div className="flex flex-col items-center border border-gray-200 rounded-lg p-2 h-fit min-h-[140px] bg-gray-50">
          <h3 className="text-sm sm:text-xs font-semibold mb-1 text-center">Types</h3>
          <div className="flex gap-1 flex-wrap justify-center">
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

        {/* Status Filters */}
        <div className="flex flex-col items-center border border-gray-200 rounded-lg p-2 h-fit min-h-[140px] bg-gray-50">
          <h3 className="text-sm sm:text-xs font-semibold mb-1 text-center">Status</h3>
          <div className="flex gap-1 flex-wrap justify-center">
            {StatusFilters.map(option => (
                <Button 
                    key={option.value} 
                    text={option.text} 
                    onClick={() => addToSearchString(option.value)} 
                    className={`${option.color} text-black`} 
                    tooltip={option.extraText}
                />
            ))}
          </div>
        </div>

        {/* Evolution Filters */}
        <div className="flex flex-col items-center border border-gray-200 rounded-lg p-2 h-fit min-h-[140px] bg-gray-50">
          <h3 className="text-sm sm:text-xs font-semibold mb-1 text-center">Evolution</h3>
          <div className="flex gap-1 flex-wrap justify-center">
            {EvolutionFilters.map(option => (
                <Button 
                    key={option.value} 
                    text={option.text} 
                    onClick={() => addToSearchString(option.value)} 
                    className="bg-gray-300 text-black" 
                    tooltip={option.extraText}
                />
            ))}
          </div>
        </div>

        {/* Regions Section */}
        <div className="flex flex-col items-center border border-gray-200 rounded-lg p-2 h-fit min-h-[140px] bg-gray-50">
          <h3 className="text-sm sm:text-xs font-semibold mb-1 text-center">Region</h3>
          <div className="flex gap-1 flex-wrap justify-center">
            {regions.map(option => (
                <Button 
                    key={option.value} 
                    text={option.text} 
                    onClick={() => addToSearchString(option.value)} 
                    className="bg-amber-600 text-black" 
                />
            ))}
          </div>
        </div>

        {/* Appraisal Section */}
        <div className="flex flex-col items-center border border-gray-200 rounded-lg p-2 h-fit min-h-[140px] bg-gray-50">
          <h3 className="text-sm sm:text-xs font-semibold mb-1 text-center">Appraisal</h3>
          <div className="flex gap-1 flex-wrap justify-center">
            {appraisal.map(option => (
                <Button 
                    key={option.value} 
                    text={option.text} 
                    onClick={() => addToSearchString(option.value)} 
                    className={`${option.color} text-black`} 
                />
            ))}
          </div>
        </div>

        {/* Method of Acquirement Section */}
        <div className="flex flex-col items-center border border-gray-200 rounded-lg p-2 h-fit min-h-[140px] bg-gray-50">
          <h3 className="text-sm sm:text-xs font-semibold mb-1 text-center">Method of Acquirement</h3>
          <div className="flex gap-1 flex-wrap justify-center">
            {AcquirementFilters.map(option => (
                <Button 
                    key={option.value} 
                    text={option.text} 
                    onClick={() => addToSearchString(option.value)} 
                    className="bg-gray-300 text-black" 
                />
            ))}
          </div>
        </div>

        {/* Buddy Level Section */}
        <div className="flex flex-col items-center border border-gray-200 rounded-lg p-2 h-fit min-h-[140px] bg-gray-50">
          <h3 className="text-sm sm:text-xs font-semibold mb-1 text-center">Buddy Level</h3>
          <div className="flex gap-1 flex-wrap justify-center">
            {BuddyLevelFilters.map(option => (
                <Button 
                    key={option.value} 
                    text={option.text} 
                    onClick={() => addToSearchString(option.value)} 
                    className="bg-gray-300 text-black" 
                    tooltip={option.addedText}
                />
            ))}
          </div>
        </div>

        {/* Size, Gender combined box */}
        <div className="flex flex-col items-center border border-gray-200 rounded-lg p-2 h-fit min-h-[140px] bg-gray-50">
          <div className="w-full">
            <h3 className="text-sm sm:text-xs font-semibold mb-1 text-center">Size</h3>
            <div className="flex gap-1 flex-wrap justify-center mb-3">
              {SizeFilters.map(option => (
                  <Button 
                      key={option.value} 
                      text={option.text} 
                      onClick={() => addToSearchString(option.value)} 
                      className="bg-blue-300 text-black" 
                  />
              ))}
            </div>
            <h3 className="text-sm sm:text-xs font-semibold mb-1 text-center">Gender</h3>
            <div className="flex gap-1 flex-wrap justify-center">
              {GenderFilters.map(option => (
                  <Button 
                      key={option.value} 
                      text={option.text} 
                      onClick={() => addToSearchString(option.value)} 
                      className="bg-gray-300 text-black" 
                  />
              ))}
            </div>
          </div>
        </div>

      </div>




      
    </div>
  </div>
);

}
