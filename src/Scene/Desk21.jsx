/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 .\public\model\Desk21.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as THREE from "three"

const DeskTwo =(props)=> {
  const { nodes, materials } = useGLTF('model/Desk21.glb')

  // console.log(nodes.plateform);

  const platformDeskTexturemap = useLoader(TextureLoader, "texture/desk_wood_map.jpg")
  const platformDeskTextureNormal = useLoader(TextureLoader, "texture/desk_wood_normal.jpg")



  platformDeskTexturemap.wrapS = THREE.RepeatWrapping;
  platformDeskTexturemap.wrapT = THREE.RepeatWrapping;
  platformDeskTexturemap.minFilter = THREE.LinearFilter;
  platformDeskTexturemap.magFilter = THREE.LinearFilter;

  platformDeskTextureNormal.wrapS = THREE.RepeatWrapping;
  platformDeskTextureNormal.wrapT = THREE.RepeatWrapping;
  platformDeskTextureNormal.minFilter = THREE.LinearFilter;
  platformDeskTextureNormal.magFilter = THREE.LinearFilter;


  const platformDesk = materials['Mat.16']
  platformDesk.map= platformDeskTexturemap
  platformDesk.normalMap = platformDeskTextureNormal
  platformDesk.metalness=.1


  return (
    <group {...props} dispose={null} position={[0,0,-12]}>
      <group position={[-1.432, 0.101, 9.808]}>
        <group position={[1.521, 0.949, 0.232]}>
          <mesh geometry={nodes['lampes-Mat'].geometry} material={materials.Mat} castShadow receiveShadow/>
          <mesh geometry={nodes['lampes-Material_#2862'].geometry} material={materials['Material #2862']} castShadow receiveShadow/>
          <mesh geometry={nodes['lampes-Material_#2102'].geometry} material={materials['Material #2102']} castShadow receiveShadow/>
        </group>
        <group position={[1.544, 0.74, -1.149]} rotation={[0, -1.571, 0]}>
          <mesh geometry={nodes['Flower_vase_Agnis,_21_cm,_mother-of-pearl-Leaf'].geometry} material={materials.Leaf} castShadow receiveShadow/>
          <mesh geometry={nodes['Flower_vase_Agnis,_21_cm,_mother-of-pearl-petal_flower'].geometry} material={materials.petal_flower} castShadow receiveShadow/>
          <mesh geometry={nodes['Flower_vase_Agnis,_21_cm,_mother-of-pearl-stem'].geometry} material={materials.stem}castShadow receiveShadow />
          <mesh geometry={nodes['Flower_vase_Agnis,_21_cm,_mother-of-pearl-Glass_Flower_vase_Agnis'].geometry} material={materials.Glass_Flower_vase_Agnis}castShadow receiveShadow />
        </group>
        <mesh geometry={nodes.Subdivision_Surface.geometry} material={materials['Mat.4']} position={[0.518, 0.65, 0.288]} castShadow receiveShadow/>
        <mesh geometry={nodes.wire_034034034.geometry} material={materials.wire_034034034} position={[0.526, -0.603, -0.849]} castShadow receiveShadow/>
        <mesh geometry={nodes.wire_000000000.geometry} material={materials.wire_000000000} position={[-1.273, -0.02, -0.286]} rotation={[0, -1.571, 0]} castShadow receiveShadow/>
      </group>
      <group position={[-1.274, 0.331, 10.252]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[1.274, 10.252, -0.331]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.plateform.geometry} material={materials['Mat.16']} castShadow receiveShadow/>
          {/* <mesh geometry={nodes['plateform-Mat16_1'].geometry} material={materials['Mat.16']} />
          <mesh geometry={nodes['plateform-Mat16_2'].geometry} material={materials['Mat.16']} /> */}
        </group>
        <group position={[-0.058, -0.119, -0.302]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes['desk-pied-Mat2'].geometry} material={materials['Mat.2']} castShadow receiveShadow/>
          <mesh geometry={nodes['desk-pied-Mat2_1'].geometry} material={materials['Mat.2']} castShadow receiveShadow/>
        </group>
        <group position={[0.381, 1.477, -0.144]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes['Arriere-Desk-bois-blanc'].geometry} material={materials['bois-blanc']} castShadow receiveShadow/>
          <mesh geometry={nodes['Arriere-Desk-bois-blanc_1'].geometry} material={materials['bois-blanc']} castShadow receiveShadow />
          <mesh geometry={nodes['Arriere-Desk-bois-blanc_2'].geometry} material={materials['bois-blanc']} castShadow receiveShadow/>
          <mesh geometry={nodes['Arriere-Desk-Mat16'].geometry} material={materials['Mat.16']} castShadow receiveShadow />
          <mesh geometry={nodes['Arriere-Desk-bois-blanc_3'].geometry} material={materials['bois-blanc']} castShadow receiveShadow />
          <mesh geometry={nodes['Arriere-Desk-Mat16_1'].geometry} material={materials['Mat.16']} castShadow receiveShadow />
        </group>
        <mesh geometry={nodes.LayerLayer32.geometry} material={materials['Mat.16']} position={[0.398, -0.429, 0.045]} castShadow receiveShadow/>
        <mesh geometry={nodes.LayerLayer3.geometry} material={nodes.LayerLayer3.material} position={[0.398, -0.429, 0.045]} castShadow receiveShadow/>
        <mesh geometry={nodes.LayerLayer1.geometry} material={materials['Mat.2']} position={[0.398, -0.46, 0.416]}castShadow receiveShadow />
        <mesh geometry={nodes.LayerLayer5.geometry} material={materials['Mat.16']} position={[0.451, -1.116, 0.115]}castShadow receiveShadow />
        <mesh geometry={nodes.LayerLayer4.geometry} material={materials['Mat.2']} position={[0.452, -1.116, -0.11]}castShadow receiveShadow />
      </group>
    </group>
  )
}

useGLTF.preload('model/Desk21.glb')
export default DeskTwo
