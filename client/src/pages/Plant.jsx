import { Canvas } from "@react-three/fiber";
import Scene from "../components/common/Scene";

export default function Plant() {
  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 2, 7],
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
