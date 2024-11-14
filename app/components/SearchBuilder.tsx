// app/components/SearchBuilder.tsx
import React from 'react';

interface SearchBuilderProps {
  searchString: string;
}

const SearchBuilder: React.FC<SearchBuilderProps> = ({ searchString }) => {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(searchString)
      .then(() => alert("Search string copied to clipboard!"))
      .catch(err => alert("Failed to copy text: " + err));
  };

  return (
    <div className="flex justify-center p-4 bg-gray-100 rounded-lg shadow-md w-[80%] my-6 mx-auto">

      <div className='w-full'>
        <p className={`text-xl ${searchString ? 'text-gray-800 text-center' : 'text-gray-500 italic text-center'}`}>
          {searchString || "Click buttons to build your search!"}
        </p>
      </div>

      <div className='flex justify-end pr-2'>
        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className="bg-slate-300 p-1 rounded-md hover:bg-slate-400 "
        >
          Copy
        </button>
      </div>
      

    </div>
  );
};

export default SearchBuilder;
