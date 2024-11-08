import { colors } from "../../../Utils/colors";
import styles from "./color-buttons.module.scss";
import { colorsExtra } from "../../../Utils/colorsExtra";

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
        {colors.map((color: Color) => (
          <button
            onClick={() => handleColorClick(color.hsl, color.colorNum)}
            key={color.id}
            style={{ backgroundColor: color.hsl }}
          >
            {color.colorNum}
          </button>
        ))}
      </div>
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
