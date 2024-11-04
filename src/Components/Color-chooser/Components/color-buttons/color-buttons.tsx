import { useState } from "react";
// import { colors } from "../../../Utils/colors";
import styles from "./color-buttons.module.scss";
import { colorsExtra } from "../../../Utils/colorsExtra";

interface ColorButtonsProps {
  onColorClick: (colorType: string, colorNum: string) => void
}

export const ColorButtons = ({onColorClick}: ColorButtonsProps) => {
const [chosenColor, setChosenColor] = useState('');
const [activeColorNum, setActiveColorNum] = useState('');

const handleColorClick = (colorParam: string, colorNum: string) => {
  setChosenColor(colorParam)
  onColorClick(colorParam, colorNum)
  setActiveColorNum(colorNum)
}


  return (
    <>
    
    {/* <div className={styles.colorButtons_container}>
      {colors.map((color) => (
        <button 
        onClick={() => setChosenColor(color.hex)}
        key={color.id}
        style={{ backgroundColor: color.hex }}
      >
        {color.colorNum}
      </button>
      ))}
  </div> */}
  <div>Дополнительные цвета</div>
<div className={styles.colorButtons_container}>

      {colorsExtra.map((color2) => (
        <button 
        onClick={() => handleColorClick(color2.hsl, color2.colorNum)}
        key={color2.id}
        style={{ backgroundColor: color2.hsl }} 

      >
        {color2.colorNum}
      </button>
      ))}
</div>
    </>
  );
};
