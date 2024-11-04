// app/components/Button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  selected: boolean; // New prop to indicate if the button is selected
}

const Button: React.FC<ButtonProps> = ({ text, onClick, selected }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded transition duration-300 ${
        selected 
          ? 'bg-blue-600 text-white' // Darker color when selected
          : 'bg-blue-400 text-white hover:bg-blue-500' // Original color
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
