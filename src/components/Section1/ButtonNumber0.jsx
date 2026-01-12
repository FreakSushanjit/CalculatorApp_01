import React from "react";

const ButtonNumber = ({ number, setDisplay }) => {
  const handleClick = () => {
    setDisplay(prev => (prev === "0" ? number : prev + number));
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gray-900 h-16 w-38 rounded-full text-amber-50 flex items-center justify-center m-2 hover:bg-gray-500 cursor-pointer text-2xl font-bold hover:scale-105 transition-all hover:shadow-lg"
    >
      {number}
    </div>
  );
};

export default ButtonNumber;
