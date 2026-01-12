const ButtonUtility = ({ type, setDisplay, display }) => {
  const handleClick = () => {
    if (type === "AC") {
      setDisplay("0");
    }
    else if( type === "Sq") {
      setDisplay(String(Math.sqrt(eval(display))));
    }
    else if (type === "=") {
      try {
        // Evaluate the current display value
        setDisplay(String(eval(display)));
      } catch {
        setDisplay("Error");
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gray-400 h-16 w-16 rounded-full flex items-center justify-center m-2 hover:bg-gray-600 cursor-pointer text-2xl font-bold hover:scale-105 transition-all hover:shadow-lg"
    >
      {type}
    </div>
  );
};

export default ButtonUtility;
