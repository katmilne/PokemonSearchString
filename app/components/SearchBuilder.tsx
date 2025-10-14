// app/components/SearchBuilder.tsx
import React, { useState, useEffect } from 'react';

interface SearchBuilderProps {
  searchString: string;
  onClear: () => void;
  onRemoveLast: () => void;
}

const SearchBuilder: React.FC<SearchBuilderProps> = ({ searchString, onClear, onRemoveLast }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(searchString)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Hide after 2 seconds
      })
      .catch(err => console.error("Failed to copy text: ", err));
  };

  return (
    <div className="flex justify-center p-2 bg-gray-100 rounded-lg shadow-sm w-[50%] my-3 mx-auto">

      <div className='flex-1 pl-2 overflow-x-auto'>
        <p className={`text-sm whitespace-nowrap ${searchString ? 'text-gray-800' : 'text-gray-500 italic text-center'}`}>
          {searchString || "Click buttons to build your search!"}
        </p>
      </div>

      <div className='flex justify-end pr-2 gap-1'>
        {/* Remove Last Button */}
        <button
          onClick={onRemoveLast}
          className={`px-2 py-1 text-xs rounded-md font-bold transition-colors ${
            searchString 
              ? 'bg-orange-300 hover:bg-orange-400 cursor-pointer' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
          title="Remove Last Added Filter"
          disabled={!searchString}
        >
          ↶
        </button>
        {/* Clear Button */}
        <button
          onClick={onClear}
          className="bg-red-300 px-2 py-1 text-xs rounded-md hover:bg-red-400 font-bold"
          title="Clear All"
        >
          ×
        </button>
        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className={`px-2 py-1 text-xs rounded-md transition-colors ${
            copySuccess 
              ? 'bg-green-300 text-green-800' 
              : 'bg-slate-300 hover:bg-slate-400'
          }`}
        >
          {copySuccess ? 'Copied!' : 'Copy'}
        </button>
      </div>
      

    </div>
  );
};

export default SearchBuilder;
