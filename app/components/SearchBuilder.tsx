// app/components/SearchBuilder.tsx
import React from 'react';

interface SearchBuilderProps {
  searchString: string;
}

const SearchBuilder: React.FC<SearchBuilderProps> = ({ searchString }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md w-[80%] my-6 mx-auto">
      <p className={`text-xl ${searchString ? 'text-gray-800 text-center' : 'text-gray-500 italic text-center'}`}>
        {searchString || "Click buttons to build your search!"}
      </p>
    </div>
  );
};

export default SearchBuilder;
