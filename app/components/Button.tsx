// app/components/Button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void; // Function to be called when the button is clicked
  className?: string; // Allow className as an optional prop
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded transition duration-300 ${className}`} // Apply custom class
    >
      {text}
    </button>
  );
};

export default Button;
