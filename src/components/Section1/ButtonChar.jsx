import React from "react";

const ButtonChar = ({ char, setDisplay }) => {
  const handleClick = () => {
    setDisplay(prev => prev + char);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-orange-500 h-16 w-16 rounded-full flex items-center justify-center m-2 hover:bg-orange-600 cursor-pointer text-2xl font-bold hover:scale-105 transition-all hover:shadow-lg"
    >
      {char}
    </div>
  );
};

export default ButtonChar;
