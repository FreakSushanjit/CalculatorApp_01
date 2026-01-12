import React from "react";
import TextBox from "./TextBox";

const Upper = ({ display }) => {
  return (
    <div className="w-full h-24 bg-gray-200 rounded-md flex items-center px-4 mt-6">
      <TextBox value={display} />
    </div>
  );
};

export default Upper;
