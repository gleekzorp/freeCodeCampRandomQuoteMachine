import React, { useState } from "react";

import { ColorContext } from "../contexts/ColorContext";
import { randomHex } from "../helpers/randomizer";

const ColorContextProvider = (props) => {
  const [color, setColor] = useState(randomHex());

  // useEffect(() => {
  //   setColor(randomHex())
  // },[])

  const setRandomHex = () => {
    setColor(randomHex());
  };

  return (
    <ColorContext.Provider value={{ color, setRandomHex }}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
