/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 .\public\model\BossChairTwo.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three"
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'


const BossChairTwo = (props)=> {
  const { nodes, materials } = useGLTF('model/BossChairTwo.glb')
  const chairTexMap = useLoader(TextureLoader, ["texture/chairTexmap.jpg", "/texture/BL_1.jpg"])
  const chairTexNormal = useLoader(TextureLoader, "texture/chairTexmapNormal.jpg")
  const chairtexRoughness = useLoader(TextureLoader, "texture/chairTexRoughness.jpg")

  const chairTex = materials['Material #7']

  chairTex.map = chairTexMap[1]
  chairTex.normalMap = chairTexNormal
  chairTex.roughnessMap = chairtexRoughness
  
  chairTex.metalness = .5

  // chairTex.wrapS = THREE.RepeatWrapping;
  // chairTex.wrapT = THREE.RepeatWrapping
  // chairTex.minFilter = THREE.LinearFilter;
  // chairTex.magFilter = THREE.LinearFilter;

  const ChairRoue = materials['Material #2144254887']
  // ChairRoue.color="black"
  ChairRoue.metalness = 1
  ChairRoue.roughness = 0
  return (
    <group {...props} dispose={null} position={[0,0,-12]}>
      <group position={[-0.931, 0.55, 9.575]}>
        <mesh geometry={nodes['Chair-Boss1-Material_#117'].geometry} material={chairTex} />
        <mesh geometry={nodes['Chair-Boss1-PLASTICPVC_Foam_BoardBlack'].geometry} material={materials['PLASTIC::PVC Foam Board::Black']} />
        <mesh geometry={nodes['Chair-Boss1-Black_Plasric'].geometry} material={materials.Black_Plasric} />
        <mesh geometry={nodes['Chair-Boss1-Material_#7'].geometry} material={materials['Material #7']} />
        <mesh geometry={nodes['Chair-Boss1-Material_#2144254853'].geometry} material={materials['Material #2144254853']} />
        <mesh geometry={nodes['Chair-Boss1-METALSmoothBlack_Nickel_Satin'].geometry} material={materials['METAL::Smooth::Black Nickel Satin']} />
        <mesh geometry={nodes['Chair-Boss1-METALSmoothChrome_Polished'].geometry} material={materials['METAL::Smooth::Chrome Polished']} />
        <mesh geometry={nodes['Chair-Boss1-Material_#2144254887'].geometry} material={materials['Material #2144254887']} />
        <mesh geometry={nodes['Chair-Boss1-Material_#2144254887_1'].geometry} material={materials['Material #2144254887']} />
        <mesh geometry={nodes['Chair-Boss1-METALSmoothChrome_Polished_1'].geometry} material={materials['METAL::Smooth::Chrome Polished']} />
      </group>
    </group>
  )
}

useGLTF.preload('model/BossChairTwo.glb')
export default BossChairTwo
