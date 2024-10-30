import { useState } from "react";
import { colors } from "../../../Utils/colors";
import styles from "./color-buttons.module.scss";
import { hexToFilter } from "../../../Utils/color-converter";
import { colorsExtra } from "../../../Utils/colorsExtra";

export const ColorButtons = () => {
const [chosenColor, setChosenColor] = useState('');



console.log(hexToFilter(chosenColor));


    console.log(chosenColor);
  return (
    <>
    
    <div className={styles.colorButtons_container}>
      {colors.map((color) => (
        <button 
        onClick={() => setChosenColor(color.hex)}
        key={color.id}
        style={{ backgroundColor: color.hex }}
      >
        {color.colorNum}
      </button>
      ))}
  </div>
  <div>Дополнительные цвета</div>
<div className={styles.colorButtons_container}>

      {colorsExtra.map((color2) => (
        <button 
        onClick={() => setChosenColor(color2.hex)}
        key={color2.id}
        style={{ backgroundColor: color2.hex }}
      >
        {color2.colorNum}
      </button>
      ))}
</div>
    </>
  );
};
