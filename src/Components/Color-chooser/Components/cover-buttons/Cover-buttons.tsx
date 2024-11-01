import { useState } from "react";
import styles from "./cover-buttons.module.scss";

interface CoverButtonsProps {
  onButtonClick: (buttonType: string) => void;
}

export const CoverButtons = ({ onButtonClick }: CoverButtonsProps) => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);
    onButtonClick(buttonType);
  };

  console.log('activeButton?', activeButton);
  

  return (
    <div className={styles.coverButtons_container}>
      <button
        className={`${styles.coverButtons_none_active} ${
          activeButton === "walls" ? styles.active : ""
        }`}
        onClick={() => handleButtonClick("walls")}
      >
        Стены
      </button>
      <button
        className={`${styles.coverButtons_none_active} ${
          activeButton === "floor" ? styles.active : ""
        }`}
        onClick={() => handleButtonClick("floor")}
      >
        Пол
      </button>
      <button
        className={`${styles.coverButtons_none_active} ${
          activeButton === "facing" ? styles.active : ""
        }`}
        onClick={() => handleButtonClick("facing")}
      >
        Наличники
      </button>
    </div>
  );
};
