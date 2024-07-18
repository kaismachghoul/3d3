import {
  PointerLockControls,
  Environment,
  OrbitControls,
  useGLTF,
  PerspectiveCamera,
} from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import Model from "./Local";
import { AmbientLight, DirectionalLightHelper, PointLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { CameraHelper } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import EmissiveSphere from "./EmissiveSphere";

const FpsCamera = () => {
  const cameraRef = useRef();
  const controlsRef = useRef();
  useHelper(cameraRef, CameraHelper);

  const keys = useRef({});

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      keys.current[e.key] = true;
    };
    const handleKeyUp = (e) => {
      keys.current[e.key] = false;
    };

    const handleMouseMove = (e) => {
      if (!e.target.closest(".desk-button")) {
        // controlsRef.current.lock();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("mousedown", handleMouseMove);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("mousedown", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    const camera = cameraRef.current;

    const moveSpeed = 0.05;
    if (keys.current["z"]) {
      camera.position.z -= moveSpeed;
    }
    if (keys.current["s"]) {
      camera.position.z += moveSpeed;
    }
    if (keys.current["q"]) {
      camera.position.x -= moveSpeed;
    }
    if (keys.current["d"]) {
      camera.position.x += moveSpeed;
    }

    // console.log(controlsRef.current);
  });
  return (
    <>
      <PointerLockControls ref={controlsRef}>
        <PerspectiveCamera
          position={[0, 1.5, 4.4]}
          makeDefault={true}
          ref={cameraRef}
        />
      </PointerLockControls>
    </>
  );
};

const Scene = ({ desk, activeDeskIndex, activeChairBossIndex, chairBoss }) => {
  const sunRef = useRef();
  useHelper(sunRef, DirectionalLightHelper);



  const [lightOn, setLightOn] = useState(true);
  

  return (
    <>
      <FpsCamera />
      {/* <OrbitControls camera={cameraRef.current} /> */}
      <EmissiveSphere setLightOn={setLightOn} lightOn={lightOn} />
      <Model />
      {chairBoss[activeChairBossIndex].object}
      {desk[activeDeskIndex].objects}


      {lightOn ? <Light/> : null}

      <ambientLight position={[1, 1, 1]} shadow={true} intensity={0.5} />
      <Environment
        background={false}
        files={"/texture/christmas_photo_studio_01_4k.hdr"}
      />
      <directionalLight
        color="white"
        intensity={10}
        position={[10, 2, 15]} // Adjust position as needed
        castShadow
        shadow-mapBias={-0.005}
        ref={sunRef}
      />
    </>
  );
};

export default Scene;

const Light = () => {
  const pointLightRef = useRef();

  useHelper(pointLightRef, PointLightHelper, 0.1);
  return (
    <>
      <pointLight
        intensity={10}
        position={[-1, 3, -1.5]}
        ref={pointLightRef}
        castShadow
        shadow-mapBias={-0.005}
      />
      <pointLight
        intensity={10}
        position={[-1, 3, 2.5]}
        ref={pointLightRef}
        castShadow
      />
    </>
  );
};
