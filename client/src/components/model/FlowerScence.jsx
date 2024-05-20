import { useGLTF } from "@react-three/drei";
import React from "react";

export default function FlowerScence() {
  const { scene } = useGLTF("/model/flower.glb");

  return (
    <>
      <ambientLight />
      <hemisphereLight intensity={0.15} />
      <directionalLight />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive position-y={2} object={scene} />
    </>
  );
}
