// app/components/Button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  tooltip?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, tooltip }) => {
  return (
    <div className="relative inline-block group">
      {/* Button */}
      <button
        onClick={onClick}
        className={`py-2 px-4 rounded transition duration-300 ${className}`}
      >
        {text}
      </button>

      {/* Tooltip */}
      {tooltip && (
        <span
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded-md opacity-0 transition-opacity duration-300 
          group-hover:opacity-100 pointer-events-none z-10"
        >
          {tooltip}
        </span>
      )}
    </div>
  );
};

export default Button;
