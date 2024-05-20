import "./css/PlantModel.css";
import { Canvas } from "@react-three/fiber";
import Scene from "../model/Scene";
import {
  AdaptiveDpr,
  AdaptiveEvents,
  Environment,
  Preload,
} from "@react-three/drei";
import { Suspense } from "react";

export default function PlantModel() {
  return (
    <div
      id="plant-model"
      className="w-screen hidden h-[90vh] mt-[10vh] md:block fixed top-0 z-10 bg-transparent duration-100 ease-linear transition-all"
    >
      <Canvas camera={{ fov: 14 }}>
        <ambientLight intensity={1.25} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={FallbackImage}>
          <Scene />
        </Suspense>
        <Environment preset="night" />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        {/* <OrbitControls /> */}
        <Preload all />
      </Canvas>
    </div>
  );
}

const FallbackImage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <img src="/img/p1.png" alt="Fallback" className="h-auto w-auto" />
    </div>
  );
};
