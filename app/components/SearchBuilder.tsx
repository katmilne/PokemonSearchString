// app/components/SearchBuilder.tsx
import React, { useState} from 'react';

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
    <div className="flex justify-center p-2 sm:p-3 bg-gray-100 rounded-t-lg sm:rounded-lg shadow-none sm:shadow-sm w-[95%] sm:w-[80%] lg:w-[60%] xl:w-[50%] mb-0 sm:my-4 mx-auto">

      <div className={`flex-1 overflow-x-auto ${searchString ? 'pl-2 sm:pl-4' : 'flex items-center justify-center'}`}>
        <p className={`text-sm sm:text-lg whitespace-nowrap ${searchString ? 'text-gray-800 text-left' : 'text-gray-500 italic text-center'}`}>
          {searchString || "Click buttons to build your search!"}
        </p>
      </div>

      <div className='flex justify-end pr-2 sm:pr-4 gap-1 sm:gap-2'>
        {/* Remove Last Button */}
        <button
          onClick={onRemoveLast}
          className={`px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm rounded-md font-bold transition-colors ${
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
          className="bg-red-300 px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm rounded-md hover:bg-red-400 font-bold"
          title="Clear All"
        >
          ×
        </button>
        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className={`px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm rounded-md transition-colors ${
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
