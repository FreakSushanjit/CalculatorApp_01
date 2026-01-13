import { useState } from "react";
import Upper from "./Upper";
import Lower from "./Lower";

const Body = () => {
  // central display state
  const [display, setDisplay] = useState("0");

  return (
    <div className="bg-blue-700 min-h-screen flex items-center justify-center">
       <div className="bg-black w-full max-w-sm p-4 rounded-lg shadow-xl">
          <Upper display={display} />
          <Lower display={display} setDisplay={setDisplay} />
      </div>
  </div>


  );
};

export default Body;
