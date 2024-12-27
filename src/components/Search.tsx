import React from 'react';

const Search: React.FC = () => {
  return (
    <div className="relative flex items-center">
      <input 
        type="text" 
        placeholder="Search" 
        className="
          h-10
          w-32 lg:w-64
          px-4
          text-sm lg:text-lg
          bg-transparent
          border-2 border-secondary
          rounded-full
          outline-none
          transition-all
          focus:border-pink-500
          placeholder:text-gray-500
        "
      />
      {/* Optional search icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 absolute right-3 text-gray-400" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
        />
      </svg>
    </div>
  );
}

export default Search;
