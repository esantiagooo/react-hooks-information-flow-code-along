import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {

  const handleClick = () =>{
    const newColor = getRandomColor()
    onChangeColor(newColor)
    // onChangeColor is invoked when the function is clicked on, which renders a random color.
    // It is also used to point back to the parent component which references back to our handleChangeColor function.
    // which serves as a way to change both the parent and child components. 
  }
  return <div 
  onClick={handleClick}
  className="child" 
  style={{ backgroundColor: color }} />;
}

export default Child;
