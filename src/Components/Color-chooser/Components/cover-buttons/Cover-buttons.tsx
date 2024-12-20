import { useEffect, useState } from "react";
import styles from "./cover-buttons.module.scss";

interface Layer {
  name: string;
  image: string;
  buttonName: string;
}

interface CoverButtonsProps {
  onButtonClick: (layerName: string) => void;
  currentColor: string;
  currentColorNum: string;
  layers: Layer[];
  onDoublePaintClick: (double: boolean) => void;
}

export const CoverButtons = ({
  onButtonClick,
  currentColor,
  currentColorNum,
  layers,
  onDoublePaintClick,
}: CoverButtonsProps) => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  const [doublePaint, setDoublePaint] = useState<boolean>(false);

  const [layerColors, setLayerColors] = useState<{
    [key: string]: { color: string; colorNum: string };
  }>({});

  const handleButtonClick = (layerName: string) => {
    setActiveLayer(layerName);

    onButtonClick(layerName);
  };

  const handlerDoublePaint = () => {
    onDoublePaintClick(doublePaint);
    setDoublePaint(!doublePaint);
  };

  useEffect(() => {
    if (activeLayer) {
      setLayerColors((prev) => ({
        ...prev,
        [activeLayer]: { color: currentColor, colorNum: currentColorNum },
      }));
    }
  }, [currentColor, currentColorNum]);

  const filteredLayers = layers.filter(
    (layer) =>
      layer.name !== "inside" &&
      layer.name !== "outside" &&
      layer.name !== "inside2"
  );
  return (
    <div className={styles.coverButtons_container}>
      {filteredLayers.map(({ name, buttonName }) => (
        <div
          key={name}
          className={`${styles.coverButtons_none_active} ${
            activeLayer === name ? styles.active : ""
          }`}
          onClick={() => handleButtonClick(name)}
        >
          <div className={styles.coverButtons_layer_name}>{buttonName}</div>
          <div className={styles.coverButtons_button_text_box}>
            <div
              className={`${styles.coverButtons_mover} ${
                activeLayer === name ? styles.activeMover : ""
              }`}
            ></div>
            <div
              className={styles.coverButtons_square}
              onClick={() => handlerDoublePaint()}
              style={{
                display: layerColors[name]?.color !== "none" ? "block" : "none",
                backgroundColor: doublePaint ? "#ff0000" : "#6dbd8b",
                border: layerColors[name]?.color ? "1px solid black" : "none",
              }}
            >
              <div>&times;2</div>
            </div>
            <div
              className={styles.coverButtons_square}
              style={{
                display: layerColors[name]?.color !== "none" ? "block" : "none",
                backgroundColor: layerColors[name]?.color
                  ? layerColors[name].color
                  : "",
                border: layerColors[name]?.color ? "1px solid black" : "none",
              }}
            ></div>
            <div>
              {layerColors[name]?.colorNum &&
                (layerColors[name].color !== "none"
                  ? layerColors[name].colorNum
                  : "")}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
