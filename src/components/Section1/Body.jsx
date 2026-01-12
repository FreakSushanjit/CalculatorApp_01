import { useState } from "react";
import Upper from "./Upper";
import Lower from "./Lower";

const Body = () => {
  // central display state
  const [display, setDisplay] = useState("0");

  return (
    <div className="bg-black h-1 m-10 flex items-center justify-center">
      <div className="bg-black w-full max-w-sm p-4 rounded-lg">
        <Upper display={display} />
        <Lower display={display} setDisplay={setDisplay} />
      </div>
    </div>
  );
};

export default Body;
