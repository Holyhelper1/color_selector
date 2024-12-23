import React, { useState } from "react";
import "./App.css";
import inside from "./Components/Color-chooser/Components/Assets/inside2/inside.jpg";
import inside3 from "./Components/Color-chooser/Components/Assets/inside4/inside.jpg";
import Beams from "./Components/Color-chooser/Components/Assets/inside4/Beams.png";
import walls from "./Components/Color-chooser/Components/Assets/inside2/inside-covering-green-walls.png";
import walls3 from "./Components/Color-chooser/Components/Assets/inside4/Walls.png";
import floor from "./Components/Color-chooser/Components/Assets/inside2/inside-covering-green-floor.png";
import floor3 from "./Components/Color-chooser/Components/Assets/inside4/Floor.png";
import ceiling from "./Components/Color-chooser/Components/Assets/inside2/inside-covering-green-ceiling.png";
import ceiling3 from "./Components/Color-chooser/Components/Assets/inside4/Ceiling.png";
import outside from "../src/Components/Color-chooser/Components/Assets/outside/House-main-layer.jpg";
import balcony from "../src/Components/Color-chooser/Components/Assets/outside/balcony-green.png";
import outsideWalls from "../src/Components/Color-chooser/Components/Assets/outside/outside-walls-green.png";
import roof from "../src/Components/Color-chooser/Components/Assets/outside/Roof-green.png";
import roofLining from "../src/Components/Color-chooser/Components/Assets/outside/Roof-lining-green.png";
import { MainLayers } from "./Components/Color-chooser/Components/main-layers/main-layers";

const interiorLayers = [
  { name: "inside", buttonName: "", image: inside },
  { name: "walls", buttonName: "Стены", image: walls },
  { name: "floor", buttonName: "Пол", image: floor },
  { name: "ceiling", buttonName: "Потолок", image: ceiling },
];

const interiorLayersTwo = [
  { name: "inside", buttonName: "", image: inside3 },
  { name: "Beams", buttonName: "Балки", image: Beams },
  { name: "walls", buttonName: "Стены", image: walls3 },
  { name: "floor", buttonName: "Пол", image: floor3 },
  { name: "ceiling", buttonName: "Потолок", image: ceiling3 },
];



const exteriorLayers = [
  { name: "outside", buttonName: "", image: outside },
  { name: "balcony", buttonName: "Окна", image: balcony },
  { name: "outside_walls", buttonName: "Стены", image: outsideWalls },
  { name: "roof", buttonName: "Крыша", image: roof },
  { name: "roof_lining", buttonName: "Подшивы", image: roofLining },
];

function App() {
  const [interiorSelected, setInteriorSelected] = useState<string>("1");
  
  return (
    <div className="App">
      <MainLayers layers={exteriorLayers} title="Наружные работы" />
     <select className="interior-select" name="interior" value={interiorSelected} onChange={(e) => setInteriorSelected(e.target.value)}>
       <option value="1">Вариант интерьера 1</option>
       <option value="2">Вариант интерьера 2</option>
   
     </select>
    {(() => {
      switch (interiorSelected) {
        case "1":
          return <MainLayers layers={interiorLayers} title="Внутренние работы" />
          case "2":
            return <MainLayers layers={interiorLayersTwo} title="Внутренние работы" />
               
        default:
          return null;
      }
    })()}
       </div>
  );
}

export default App;
