import styles from "./main-layers.module.scss";
import inside from "../Assets/inside.jpeg";
import facing from "../Assets/inside-covering-green-facing.png";
import walls from "../Assets/inside-covering-green-walls.png";
import floor from "../Assets/inside-covering-green-floor.png";
import { CoverButtons } from "../cover-buttons/Cover-buttons";
import { ColorButtons } from "../color-buttons/color-buttons";
import { useState } from "react";
export const MainLayers = () => {
  const [activeLayer, setActiveLayer] = useState("");

  const handlerLayerChange = (layer: string) => {
    setActiveLayer(layer);
  };

  console.log("activeLayer?", activeLayer);
  

  return (
    <div className={styles.mainLayers_wrapper}>
      <div className={styles.mainLayers_block}>
        <div className={styles.mainLayers_text}>
          <h2>- Внутренние работы</h2>
          <p>
            <span className={styles.green_text}>Шаг 1</span> Выберите объект для
            покраски
          </p>
          <CoverButtons onButtonClick={handlerLayerChange} />
        </div>

        <div className={styles.mainLayers_container}>
          <img
            className={styles.mainLayers_inside}
            src={inside}
            alt="main-inside"
          />
          <img
            className={`${styles.mainLayers_facing} ${activeLayer === "facing" ? styles.animate_pulse : ""}`}
            src={facing}
            alt="main-facing"
          />
          <img
            className={`${styles.mainLayers_walls} ${activeLayer === "walls" ? styles.animate_pulse : ""}`}
            src={walls}
            alt="main-walls"
          />
          <img
            className={`${styles.mainLayers_floor} ${activeLayer === "floor" ? styles.animate_pulse : ""}`}
            src={floor}
            alt="main-floor"
          />
        </div>
      </div>
      <div className={styles.mainLayers_button_block}>
        <h2>
          <span className={styles.green_text}>Шаг 2 </span>Выберите тип и цвет
          краски
        </h2>
        <ColorButtons />
      </div>
    </div>
  );
};
