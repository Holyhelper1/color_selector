// почти всё работает, протестировать
import { useEffect, useState } from "react";
import styles from "./cover-buttons.module.scss";

interface CoverButtonsProps {
  onButtonClick: (buttonType: string) => void;
  currentColor: string;
  currentColorNum: string;
}

export const CoverButtons = ({
  onButtonClick,
  currentColor,
  currentColorNum,
}: CoverButtonsProps) => {
  const [activeButton, setActiveButton] = useState("");
  const [incomeColorNum, setIncomeColorNum] = useState("");

  const [wallsColor, setWallsColor] = useState({
    color: "",
    colorNum: "",
  });
  const [floorColor, setFloorColor] = useState({
    color: "",
    colorNum: "",
  });
  const [facingColor, setFacingColor] = useState({
    color: "",
    colorNum: "",
  });

  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);
    onButtonClick(buttonType);
  };

  useEffect(() => {
    setIncomeColorNum(currentColorNum);

    if (activeButton === "walls") {
      setWallsColor({
        color: currentColor,
        colorNum: currentColorNum,
      });
      setIncomeColorNum("");
    }
    if (activeButton === "floor") {
      setFloorColor({
        color: currentColor,
        colorNum: currentColorNum,
      });
      setIncomeColorNum("");
    }
    if (activeButton === "facing") {
      setFacingColor({
        color: currentColor,
        colorNum: currentColorNum,
      });
      setIncomeColorNum("");
    }
  }, [currentColorNum, currentColor, incomeColorNum]);

  return (
    <div className={styles.coverButtons_container}>
      <div
        className={`${styles.coverButtons_none_active} ${
          activeButton === "walls" ? styles.active : ""
        }`}
        onClick={() => handleButtonClick("walls")}
      >
        <div className={styles.coverButtons_layer_name}>Стены</div>
        <div className={styles.coverButtons_button_text_box}>
          <div
            className={`${styles.coverButtons_mover} ${
              activeButton === "walls" ? styles.activeMover : ""
            }`}
          ></div>
          <div
            className={styles.coverButtons_square}
            style={{
              display: wallsColor.color !== "" ? "block" : "none",
              backgroundColor: wallsColor.color !== "" ? wallsColor.color : "",
              border: wallsColor.color !== "" ? "1px solid black" : "none",
            }}
          ></div>
          <div>{wallsColor.colorNum !== "" && <>{wallsColor.colorNum}</>}</div>
        </div>
      </div>
      <div
        className={`${styles.coverButtons_none_active} ${
          activeButton === "floor" ? styles.active : ""
        }`}
        onClick={() => handleButtonClick("floor")}
      >
        <div>Пол</div>
        <div className={styles.coverButtons_button_text_box}>
          <div
            className={`${styles.coverButtons_mover} ${
              activeButton === "floor" ? styles.activeMover : ""
            }`}
          ></div>
          <div
            className={styles.coverButtons_square}
            style={{
              display: floorColor.color !== "" ? "block" : "none",
              backgroundColor: floorColor.color !== "" ? floorColor.color : "",
            }}
          ></div>
          <div>{floorColor.colorNum !== "" && <>{floorColor.colorNum}</>}</div>
        </div>
      </div>
      <div
        className={`${styles.coverButtons_none_active} ${
          activeButton === "facing" ? styles.active : ""
        }`}
        onClick={() => handleButtonClick("facing")}
      >
        <div>Наличники</div>
        <div className={styles.coverButtons_button_text_box}>
          <div
            className={`${styles.coverButtons_mover} ${
              activeButton === "facing" ? styles.activeMover : ""
            }`}
          ></div>
          <div
            className={styles.coverButtons_square}
            style={{
              display: facingColor.color !== "" ? "block" : "none",
              backgroundColor:
                facingColor.color !== "" ? facingColor.color : "",
            }}
          ></div>
          <div>
            {facingColor.colorNum !== "" && <>{facingColor.colorNum}</>}
          </div>
        </div>
      </div>
    </div>
  );
};
