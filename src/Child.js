import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {

  const handleClick = () =>{
    const newColor = getRandomColor()
    onChangeColor(newColor)
    // listens for when the function is clicked on and generates a new color at random
  }
  return <div 
  onClick={handleClick}
  className="child" 
  style={{ backgroundColor: color }} />;
}

export default Child;
