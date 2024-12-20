import { defenseOil } from "../../../Utils/colors-defense-oil";
import styles from "./color-buttons.module.scss";
import { facadeOil } from "../../../Utils/colors-facade-oil";
import { beeswax } from "../../../Utils/beeswax";
import { newColors } from "../../../Utils/new-colors";

interface ColorButtonsProps {
  onColorClick: (colorType: string, colorNum: string) => void;
}

interface Color {
  id: number;
  hsl: string;
  colorNum: string;
}

export const ColorButtons = ({ onColorClick }: ColorButtonsProps) => {
  const handleColorClick = (colorParam: string, colorNum: string) => {
    onColorClick(colorParam, colorNum);
  };
  return (
    <>
      <div className={styles.colorButtons_container}>
        <div className={styles.color_title}>
          280 Защитное масло для внешних работ
        </div>
        <div className={styles.hr_line}></div>
        {defenseOil.map((color1: Color) => (
          <button
            className={styles.color_button}
            onClick={() => handleColorClick(color1.hsl, color1.colorNum)}
            key={color1.id}
            style={{ backgroundColor: color1.hsl }}
          >
            {color1.colorNum}
          </button>
        ))}
        <div className={styles.color_title}>285 Масло для фасада</div>
        <div className={styles.hr_line}></div>
        {facadeOil.map((color2) => (
          <button
            className={styles.color_button}
            onClick={() => handleColorClick(color2.hsl, color2.colorNum)}
            key={color2.id}
            style={{ backgroundColor: color2.hsl }}
          >
            {color2.colorNum}
          </button>
        ))}
        <div className={styles.color_title}>470 Лазурь с пчелиным воском</div>
        <div className={styles.hr_line}></div>
        {beeswax.map((color3) => (
          <button
            className={styles.color_button}
            onClick={() => handleColorClick(color3.hsl, color3.colorNum)}
            key={color3.id}
            style={{ backgroundColor: color3.hsl }}
          >
            {color3.colorNum}
          </button>
        ))}
      </div>
      <div className={styles.colorButtons_container}>
        <div className={styles.color_title}>Новинки сезона!</div>
        <div className={styles.hr_line}></div>
        {newColors.map((color4) => (
          <button
            className={styles.color_button}
            onClick={() => handleColorClick(color4.hsl, color4.colorNum)}
            key={color4.id}
            style={{ backgroundColor: color4.hsl }}
          >
            {color4.colorNum}
          </button>
        ))}

      </div>
    </>
  );
};
