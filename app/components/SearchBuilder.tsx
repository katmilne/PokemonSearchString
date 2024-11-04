// app/components/SearchBuilder.tsx
import React from 'react';

interface SearchBuilderProps {
  searchString: string;
}

const SearchBuilder: React.FC<SearchBuilderProps> = ({ searchString }) => {
  return (
    <div>
      <h2>Search String:</h2>
      <p>{searchString || "Click buttons to build your search!"}</p>
    </div>
  );
};

export default SearchBuilder;