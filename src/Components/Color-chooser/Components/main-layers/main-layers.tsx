import styles from "./main-layers.module.scss";
import { CoverButtons } from "../cover-buttons/Cover-buttons";
import { ColorButtons } from "../color-buttons/color-buttons";
import { useEffect, useRef, useState } from "react";
import { calculateHslDifference } from "../../../Utils/color-converter";

interface Layer {
  name: string;
  image: string;
  buttonName: string;
}

export const MainLayers = ({
  layers,
  title,
}: {
  layers: Layer[];
  title: string;
}) => {
  const [activeLayer, setActiveLayer] = useState<string>("");
  const [activeColor, setActiveColor] = useState<string>("hsl(0, 0%, 74%)");
  const [currentColor, setCurrentColor] = useState<string>("none");
  const [currentColorNum, setCurrentColorNum] = useState<string>("none");
  const [animatePulse, setAnimatePulse] = useState<boolean>(false);
  const [doublePaint, setDoublePaint] = useState<boolean>(false);
  const [stylesState, setStylesState] = useState<{ [key: string]: string }>({
    walls: "none",
    floor: "none",
    facing: "none",
    balcony: "none",
    outside_walls: "none",
    roof: "none",
    roof_lining: "none",
    ceiling: "none",
    Beams: "none",
    ceiling2: "none",
    doors: "none",
    windows: "none",
  });

  const prevActiveLayerRef = useRef<string>(activeLayer);

  const handlerLayerChange = (layer: string) => {
    setActiveLayer(layer);
  };

  const handlerDoublePaint = () => {
    setDoublePaint(!doublePaint);
  };

  const handColorChange = (color: string, colorNum: string) => {
    setActiveColor(color);
    setCurrentColor(color);
    setCurrentColorNum(colorNum);
  };

  useEffect(() => {
    const newColor = calculateHslDifference(activeColor, doublePaint);

    if (activeColor !== "hsl(0, 0%, 74%)") {
      setStylesState((prev) => ({
        ...prev,
        [activeLayer]: newColor,
      }));
      setActiveColor("hsl(0, 0%, 74%)");
    }

    if (prevActiveLayerRef.current !== activeLayer) {
      setAnimatePulse(true);
    } else {
      setAnimatePulse(false);
    }

    prevActiveLayerRef.current = activeLayer;
  }, [activeColor, activeLayer, doublePaint]);

  const clearColors = () => {
    setActiveLayer("");
    setActiveColor("hsl(0, 0%, 74%)");
    setStylesState({
      walls: "none",
      floor: "none",
      facing: "none",
      balcony: "none",
      outside_walls: "none",
      roof: "none",
      roof_lining: "none",
      ceiling: "none",
      Beams: "none",
      ceiling2: "none",
      doors: "none",
      windows: "none",
    });
  };

  return (
    <div className={styles.mainLayers_wrapper}>
      <div className={styles.mainLayers_block}>
        <div className={styles.mainLayers_text}>
          <h2>{title}</h2>
          <p>
            <span className={styles.green_text}>Шаг 1</span> Выберите объект для
            покраски
          </p>
          <p className={styles.double_paint}>
            Для покраски в 2 слоя нажмите на кнопку <span className={styles.red_text}>"&times;2" </span> и выберите цвет
          </p>
          <CoverButtons
            onButtonClick={handlerLayerChange}
            currentColor={currentColor}
            currentColorNum={currentColorNum}
            layers={layers}
            onDoublePaintClick={handlerDoublePaint}
          />
          <button
            onClick={clearColors}
            className={styles.mainLayers_button_clear}
          >
            Очистить цвета
          </button>
        </div>
        <div className={styles.mainLayers_container}>
          {layers.map(({ name, image }) => {
            let layerClass = "green-layer";

            if (name === "inside" || name === "outside") {
              layerClass = "base-layer";
            }

            return (
              <img
                key={name}
                className={`${styles[layerClass]} ${
                  activeLayer === name && animatePulse
                    ? styles.animate_pulse
                    : ""
                }`}
                src={image}
                alt={name}
                style={{
                  zIndex: stylesState[name] !== "none" ? 3 : 1,
                  filter:
                    stylesState[name] !== "none" ? stylesState[name] : "none",
                  transition: !animatePulse ? "all 0.5s ease-in-out" : "none",
                }}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.mainLayers_button_block}>
        <h2>
          <span className={styles.green_text}>Шаг 2</span> Выберите тип и цвет
          краски
        </h2>
        <ColorButtons onColorClick={handColorChange} />
      </div>
    </div>
  );
};
