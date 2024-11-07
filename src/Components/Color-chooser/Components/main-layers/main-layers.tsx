//  тест версия для универсального компонента, по цветам стало лучше, проверить обновление данных в кнопках цвета и номера цвета, анимация моргания исправлена
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
  const [stylesState, setStylesState] = useState<{ [key: string]: string }>({
    walls: "none",
    floor: "none",
    facing: "none",
    balcony: "none",
    outside_walls: "none",
    roof: "none",
    roof_lining: "none",

  });

  const prevActiveLayerRef = useRef<string>(activeLayer);

  const handlerLayerChange = (layer: string) => {
    setActiveLayer(layer);
  };

  const handColorChange = (color: string, colorNum: string) => {
    setActiveColor(color);
    setCurrentColor(color);
    setCurrentColorNum(colorNum);
  };

  useEffect(() => {
    const newColor = calculateHslDifference(activeColor);

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
  }, [activeColor, activeLayer]);

  const clearButtons = () => {
    setActiveLayer("");
    setActiveColor("hsl(0, 0%, 74%)");
    setStylesState({ walls: "none", floor: "none", facing: "none", balcony: "none", outside_walls: "none", roof: "none", roof_lining: "none" });
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
          <CoverButtons
            onButtonClick={handlerLayerChange}
            currentColor={currentColor}
            currentColorNum={currentColorNum}
            layers={layers}
          />
          <button
            onClick={clearButtons}
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
                  filter: stylesState[name] !== "none" ? stylesState[name] : "none",
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

// //  тест версия, по цветам стало лучше, проверить обновление данных в кнопках цвета и номера цвета, анимация моргания исправлена
// import styles from "./main-layers.module.scss";
// import inside from "../Assets/inside/inside.jpeg";
// import facing from "../Assets/inside/inside-covering-green-facing.png";
// import walls from "../Assets/inside/inside-covering-green-walls.png";
// import floor from "../Assets/inside/inside-covering-green-floor.png";
// import { CoverButtons } from "../cover-buttons/Cover-buttons";
// import { ColorButtons } from "../color-buttons/color-buttons";
// import { useEffect, useRef, useState } from "react";
// import { calculateHslDifference } from "../../../Utils/color-converter";

// export const MainLayers = () => {
//   const [activeLayer, setActiveLayer] = useState("");
//   const [activeColor, setActiveColor] = useState("hsl(0, 0%, 74%)");
//   const [currentColor, setCurrentColor] = useState("none");
//   const [currentColorNum, setCurrentColorNum] = useState("none");
//   const [animatePulse, setAnimatePulse] = useState(false);

//   const [facingStyle, setFacingStyle] = useState("none");
//   const [wallsStyle, setWallsStyle] = useState("none");
//   const [floorStyle, setFloorStyle] = useState("none");

//   const prevActiveLayerRef = useRef(activeLayer);

//   const handlerLayerChange = (layer: string) => {
//     setActiveLayer(layer);
//   };

//   const handColorChange = (color: string, colorNum: string) => {
//     setActiveColor(color);
//     setCurrentColor(color);
//     setCurrentColorNum(colorNum);
//   };

//   useEffect(() => {
//     const newColor = calculateHslDifference(activeColor);

//     if (activeColor !== "hsl(0, 0%, 74%)") {
//       if (activeLayer === "facing") {
//         setFacingStyle(newColor);
//       } else if (activeLayer === "walls") {
//         setWallsStyle(newColor);
//       } else if (activeLayer === "floor") {
//         setFloorStyle(newColor);
//       }
//       setActiveColor("hsl(0, 0%, 74%)");
//     }

//     if (prevActiveLayerRef.current !== activeLayer) {
//       setAnimatePulse(true);
//     } else {
//       setAnimatePulse(false);
//     }

//     prevActiveLayerRef.current = activeLayer;
//   }, [activeColor, activeLayer]);

//   const clearButtons = () => {
//     setActiveLayer("");
//     setActiveColor("hsl(0, 0%, 74%)");
//     setFacingStyle("none");
//     setWallsStyle("none");
//     setFloorStyle("none");
//   };

//   return (
//     <div className={styles.mainLayers_wrapper}>
//       <div className={styles.mainLayers_block}>
//         <div className={styles.mainLayers_text}>
//           <h2>- Внутренние работы</h2>
//           <p>
//             <span className={styles.green_text}>Шаг 1</span> Выберите объект для
//             покраски
//           </p>
//           <CoverButtons
//             onButtonClick={handlerLayerChange}
//             currentColor={currentColor}
//             currentColorNum={currentColorNum}
//           />
//           <button
//             onClick={() => clearButtons()}
//             className={styles.mainLayers_button_clear}
//           >
//             Очистить цвета
//           </button>
//         </div>

//         <div className={styles.mainLayers_container}>
//           <img
//             className={styles.mainLayers_inside}
//             src={inside}
//             alt="main-inside"
//           />
//           <img
//             className={`${styles.mainLayers_facing} ${
//               activeLayer === "facing" && animatePulse
//                 ? styles.animate_pulse
//                 : ""
//             }`}
//             src={facing}
//             alt="main-facing"
//             style={{
//               zIndex: facingStyle !== "none" ? 2 : 0,
//               filter: facingStyle !== "none" ? facingStyle : "none",
//               transition: !animatePulse ? "all 0.5s ease-in-out" : "none",
//             }}
//           />
//           <img
//             className={`${styles.mainLayers_walls} ${
//               activeLayer === "walls" && animatePulse
//                 ? styles.animate_pulse
//                 : styles.new_color
//             }`}
//             src={walls}
//             alt="main-walls"
//             style={{
//               zIndex: wallsStyle !== "none" ? 2 : 0,
//               filter: wallsStyle !== "none" ? wallsStyle : "none",
//               transition: !animatePulse ? "all 0.5s ease-in-out" : "none",
//             }}
//           />
//           <img
//             className={`${styles.mainLayers_floor} ${
//               activeLayer === "floor" && animatePulse
//                 ? styles.animate_pulse
//                 : ""
//             }`}
//             src={floor}
//             alt="main-floor"
//             style={{
//               zIndex: floorStyle !== "none" ? 2 : 0,
//               filter: floorStyle !== "none" ? floorStyle : "none",
//               transition: !animatePulse ? "all 0.5s ease-in-out" : "none",
//             }}
//           />
//         </div>
//       </div>
//       <div className={styles.mainLayers_button_block}>
//         <h2>
//           <span className={styles.green_text}>Шаг 2 </span>Выберите тип и цвет
//           краски
//         </h2>
//         <ColorButtons onColorClick={handColorChange} />
//       </div>
//     </div>
//   );
// };
