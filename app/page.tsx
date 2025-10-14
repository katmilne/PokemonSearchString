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
  <div > {/* Prevent horizontal scroll */}

    <SearchBuilder searchString={searchString} onClear={clearAll} onRemoveLast={removeLast} />

    <div className="flex flex-col w-full"> 
      
      {/* Options Button */}
      <div className="flex justify-center w-full mb-2"> 
        <div className="flex gap-2">
          {/* AND Button */}
          <Button
            onClick={setAndOperator}
            text="AND"
            className={`${currentOperator === '&' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
            tooltip="Pokemon has both these attributes"
          />

          {/* OR Button */}
          <Button
            onClick={setOrOperator}
            text="OR"
            className={`${currentOperator === ',' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
            tooltip="Pokemon has one of these attributes"
          />

          {/* NOT Button */}
          <Button
            onClick={toggleNegation}
            text={`Not ${!isNegate ? '(OFF)' : '(ON)'}`}
            className={`${isNegate ? 'bg-rose-500 text-white' : 'bg-gray-300 text-black'}`}
            tooltip="Pokemon doesn't have this attribute"
          />
        </div>
      </div>

      

      {/* TODO - add a search by pokemon name??? maybe by api? if possible so that it shows all that are in pokemon go and autofill as they type and then select the pokemon
               - could also allow a button to add all evolutionary levels of that pokemon that they select (think it is like Pikachu+ or something) 
               - also we didnt add the by pokedex number in so that can be another line of stuff
      */}

      {/* Pokemon name input w/evolutions */}
      <hr className="my-2 mx-20 border-t-1 border-gray-300" />
      <div className="my-2 mx-auto flex flex-col items-center gap-2">
        {/* Pokedex Name Search Bar */}
        <div className="flex items-center gap-2">
          <input
            className="text-center w-48 border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition duration-200 ease-in-out placeholder:text-gray-400 placeholder:italic"
            placeholder="Pokemon name/tag"
            value={pokeNameInput}
            onChange={(e) => {
              const value = e.target.value;
              if (/^[a-zA-Z]*$/.test(value)) {
                setPokeNameInput(value);
              }
            }}
          />
          <Button
            text="ADD"
            onClick={() => {
              addToSearchString(pokeNameInput.toLocaleLowerCase())
              setPokeNameInput('');
            }} 
            className="bg-gray-300 text-black"
          />
          <Button
            text="+ Evos"
            onClick={() => {
              addToSearchString("+" + pokeNameInput.toLocaleLowerCase())
              setPokeNameInput('');
            }} 
            className="bg-gray-300 text-black"
          />
        </div>

        {/* Pokedex Number Search Bar */}
        <div className="flex items-center gap-2">
          <input
            className="text-center w-48 border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition duration-200 ease-in-out placeholder:text-gray-400 placeholder:italic"
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
            className="bg-gray-300 text-black"
          />
        </div>
      </div>
      
      {/* ---Types Section--- */}
      <hr className="my-2 mx-20 border-t-1 border-gray-300" />
      <div className="flex flex-col items-center w-full">
        <h3 className="text-sm font-semibold mb-1">Types</h3>
        <div className="flex gap-1 flex-wrap w-full justify-center max-w-4xl mx-auto">
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

      {/* ---Status Filters--- */}
      <hr className="my-2 mx-20 border-t-1 border-gray-300" />
      <div className="flex flex-col items-center w-full">
        <h3 className="text-sm font-semibold mb-1">Status</h3>
        <div className="flex gap-1 flex-wrap w-full justify-center max-w-5xl mx-auto">
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

      {/* ---Regions Section--- */}
      <hr className="my-2 mx-20 border-t-1 border-gray-300" />
      <div className="flex flex-col items-center w-full">
        <h3 className="text-sm font-semibold mb-1">Region</h3>
        <div className="flex gap-1 flex-wrap w-full justify-center max-w-3xl mx-auto">
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

      {/* ---Appraisal Section--- */}
      <hr className="my-2 mx-20 border-t-1 border-gray-300" />
      <div className="flex flex-col items-center w-full">
        <h3 className="text-sm font-semibold mb-1">Appraisal</h3>
        <div className="flex gap-1 flex-wrap w-full justify-center max-w-2xl mx-auto">
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

      {/* ---Size Section--- */}
      <hr className="my-2 mx-20 border-t-1 border-gray-300" />
      <div className="flex flex-col items-center w-full">
        <h3 className="text-sm font-semibold mb-1">Size</h3>
        <div className="flex gap-1 flex-wrap w-full justify-center">
          {SizeFilters.map(option => (
              <Button 
                  key={option.value} 
                  text={option.text} 
                  onClick={() => addToSearchString(option.value)} 
                  className="bg-blue-300 text-black" 
              />
          ))}
        </div>
      </div>

      {/* ---Gender Section--- */}
      <hr className="my-2 mx-20 border-t-1 border-gray-300" />
      <div className="flex flex-col items-center w-full">
        <h3 className="text-sm font-semibold mb-1">Gender</h3>
        <div className="flex gap-1 flex-wrap w-full justify-center">
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

      {/* ---Buddy Level Section--- */}
      <hr className="my-2 mx-20 border-t-1 border-gray-300" />
      <div className="flex flex-col items-center w-full">
        <h3 className="text-sm font-semibold mb-1">Buddy Level</h3>
        <div className="flex gap-1 flex-wrap w-full justify-center max-w-3xl mx-auto">
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

      {/* ---Method of Acquirement Section--- */}
      <hr className="my-2 mx-20 border-t-1 border-gray-300" />
      <div className="flex flex-col items-center w-full">
        <h3 className="text-sm font-semibold mb-1">Method of Acquirement</h3>
        <div className="flex gap-1 flex-wrap w-full justify-center max-w-4xl mx-auto">
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

      {/* ---Evolution Filters Section--- */}
      <hr className="my-2 mx-20 border-t-1 border-gray-300" />
      <div className="flex flex-col items-center w-full">
        <h3 className="text-sm font-semibold mb-1">Evolution and Max Ability</h3>
        <div className="flex gap-1 flex-wrap w-full justify-center max-w-5xl mx-auto">
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

      {/* ---CP Section--- */}
      <hr className="my-2 mx-20 border-t-1 border-gray-300" />
      <div className="flex flex-col items-center mx-auto w-full">
        <h3 className="text-sm font-semibold mb-1">Combat Power</h3>
        <div className="flex flex-col items-center w-full gap-2">

          {/* CP = */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">CP =</span>
            <input
              className="text-center w-32 border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition duration-200 ease-in-out placeholder:text-gray-400 placeholder:italic"
              type="number"
              placeholder="Value > 0"
              min="1"
              value={cpEqualValue}
              onChange={(e) => {
                const input = Number(e.target.value)
                setCpEqualValue(input >= 1 ? input : '');
              }}
            />
            <Button
              text="ADD"
              onClick={handleActionCpEqual}
              className="bg-gray-300 text-black"
            />
          </div>
          
          {/* < CP < */}
          <div className="flex items-center gap-2">
            <input
                className="text-center w-24 border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition duration-200 ease-in-out placeholder:text-gray-400 placeholder:italic"
                type="number"
                placeholder="Min"
                min="0"
                value={cpLower}
                onChange={(e) => {
                  const input = Number(e.target.value)
                  setCpLower(input >= 0 ? input : '');
                }}
            />
            <span className="text-sm font-bold">&lt; CP &lt;</span>
            <input
              className="text-center w-24 border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition duration-200 ease-in-out placeholder:text-gray-400 placeholder:italic"
              type="number"
              placeholder="Max"
              min="0"
              value={cpHigher}
              onChange={(e) => {
                const input = Number(e.target.value)
                setCpHigher(input >= 0 ? input : '');
              }}
            />
            <Button
              text="ADD"
              onClick={handleActionCpLessMoreThan}
              className="bg-gray-300 text-black"
            />
          </div>
        </div>
      </div>
      
    </div>
  </div>
);

}
