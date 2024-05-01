import "./css/PlantModel.css";
import { Canvas } from "@react-three/fiber";
import Scene from "../model/Scene";
import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";
import { Suspense } from "react";

export default function PlantModel() {
  return (
    <div
      id="plant-model"
      className="w-screen h-screen fixed top-0 z-10 bg-transparent duration-100 ease-linear transition-all"
    >
      <Canvas camera={{ fov: 14 }}>
        <ambientLight intensity={1.25} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Environment preset="night" />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}
