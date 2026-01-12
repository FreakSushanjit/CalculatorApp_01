import React from "react";

const TextBox = ({ value }) => {
  let subValue = "";
  
  try {
    subValue = value !== "" && value !== "0" ? String(eval(value)) : "";
  } 
  
  catch{
    subValue = "";
  }

  return (
    <div className="w-full h-24 bg-gray-200 rounded-md flex flex-col justify-end px-4 py-1">
      {/* Sub box */}
      <div className="text-gray-500 text-right text-sm mb-1">
        {subValue}
      </div>

      <input
        type="text"
        value={value}
        disabled
        className="bg-transparent w-full h-12 text-right pr-4 outline-none text-3xl"
      />
    </div>
  );
};

export default TextBox;
