import { Suspense, useRef, useState } from "react";
import "./index.css";

import Scene from "./Scene/Scene";
import { Canvas, useStore } from "@react-three/fiber";
import DeskButton from "./Scene/DeskButton";
import DeskTwo from "./Scene/Desk21";
import DeskOne from "./Scene/Desk1";
import BossChairOne from "./Scene/BossChairOne";
import BossChairTwo from "./Scene/BossChairTwo";
import ListeMeubles from "./Scene/List/ListMeubles";
import MenuC from "./Scene/List/MenuC";

const App = () => {
  const [activeDeskIndex, setActiveDeskIndex] = useState(0);
  const [activeChairBossIndex, setActiveChairBossIndex] = useState(0);
  const deskOne = { objects: <DeskOne />, name: "Desk One", id: 0, description : "Desk One", price : 750};
  const deskTwo = { objects: <DeskTwo />, name: "Desk Two", id: 1,description : "Desk Two", price : 750 };
  const desk = [deskOne, deskTwo];
  const chairBossOne = {
    object: <BossChairTwo />,
    name: "chair One",
    id: 0,
    img: "texture/330.jpg",
    description : "Chair One",
     price : 250 
  };
  const chairBosstwo = {
    object: <BossChairOne />,
    name: "Chair LoftDesigne 2017 model",
    id: 1,
    img: "texture/331.jpg",
    description : (
      <>
      Length: 67 cm<br />
      Width: 72 cm<br />
      Height: 118-128 cm<br />
      Landing height: 45-55 cm<br />
      Depth: 48 cm<br />
      Material: metal, eco leather
    </>
    ),
    price : 270 
  };
  const chairBoss = [chairBossOne, chairBosstwo];
  const handleDeskIndex = () =>
    setActiveDeskIndex((previousIndex) => (previousIndex + 1) % desk.length);

  const handlBossChairIndex = () => {
    setActiveChairBossIndex(
      (previousIndex) => (previousIndex + 1) % chairBoss.length
    );
  };

  return (
    <>
      {/* <DeskButton onClick={handleDeskIndex} /> */}
      {/* <DeskButton onClick={handlBossChairIndex}/> */}
      <ListeMeubles
        chairBoss={chairBoss}
        handlBossChairIndex={handlBossChairIndex}
        setActiveDeskIndex={setActiveDeskIndex}
        desk={desk}
        activeChairBossIndex={activeChairBossIndex}
        setActiveChairBossIndex = {setActiveChairBossIndex}

      />
      {/* <MenuC/> */}
      <Suspense fallback={null}>
        <Canvas shadows camera={{ position: [10, 10, 10] }}>
          <Scene
            desk={desk}
            activeDeskIndex={activeDeskIndex}
            chairBoss={chairBoss}
            activeChairBossIndex={activeChairBossIndex}
          />

          <gridHelper args={[10, 20, "red", "gray"]} />
        </Canvas>
      </Suspense>
    </>
  );
};

export default App;
