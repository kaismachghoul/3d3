import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { Color } from 'three';

const EmissiveSphere = ({setLightOn,lightOn}) => {
  const sphereRef = useRef();
  
  // Animate the emissive intensity
  useFrame((state, delta) => {
    if (sphereRef.current) {
      const material = sphereRef.current.material;
    //   material.emissiveIntensity = Math.sin(state.clock.elapsedTime) * 0.5 + 0.5; // Adjust the intensity range
    }
  });
  
  return (
    <mesh onClick={()=>setLightOn(!lightOn)}>
    <Sphere ref={sphereRef} args={[.1, 32, 32]} position={[1.09,2,0]} >
      <meshStandardMaterial
        emissive={new Color("red")}
        emissiveIntensity={.8} // Initial emissive intensity
        color={new Color(0x222222)}
        roughness={0.2}
        metalness={0.5}
      />
    </Sphere>
    </mesh>
  );
};



export default EmissiveSphere;
