import React from "react";
import ButtonNumber from "./ButtonNumber";
import ButtonChar from "./ButtonChar";
import ButtonUtility from "./ButtonUtility";
import ButtonNumber0 from "./ButtonNumber0";

const Lower = ({ display, setDisplay }) => {
  return (
    <div className="flex flex-wrap justify-center mt-4">
      <ButtonUtility type="AC" setDisplay={setDisplay} display={display}/>
      <ButtonUtility type="Sq" setDisplay={setDisplay} display={display}/>
      <ButtonChar char="%" setDisplay={setDisplay} />
      <ButtonChar char="/" setDisplay={setDisplay} />

      <ButtonNumber number="7" setDisplay={setDisplay} />
      <ButtonNumber number="8" setDisplay={setDisplay} />
      <ButtonNumber number="9" setDisplay={setDisplay} />
      
      <ButtonChar char="*" setDisplay={setDisplay} />

      <ButtonNumber number="4" setDisplay={setDisplay} />
      <ButtonNumber number="5" setDisplay={setDisplay} />
      <ButtonNumber number="6" setDisplay={setDisplay} />

      <ButtonChar char="-" setDisplay={setDisplay} />

      <ButtonNumber number="1" setDisplay={setDisplay} />
      <ButtonNumber number="2" setDisplay={setDisplay} />
      <ButtonNumber number="3" setDisplay={setDisplay} />
      
      <ButtonChar char="+" setDisplay={setDisplay} />

      <ButtonNumber0 number="0" setDisplay={setDisplay} />
      <ButtonNumber number="." setDisplay={setDisplay} />

      <ButtonUtility type="=" setDisplay={setDisplay} display={display}/>
    </div>
  );
};

export default Lower;
