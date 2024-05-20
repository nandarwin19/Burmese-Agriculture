import { Suspense } from "react";
import FlowerScence from "../model/FlowerScence";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Preload,
} from "@react-three/drei";

export default function Scene() {
  return (
    <>
      <OrbitControls />
      <Environment background files="./envMap/2.hdr" />

      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />

      <CubeCamera resolution={1024} frames={1}>
        {(texture) => (
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
              envMap={texture}
              roughness={0}
              metalness={0.9}
            />
          </mesh>
        )}
      </CubeCamera>
      {/* <ambientLight />
      <directionalLight /> */}

      {/* <Suspense fallback={null}>
        <FlowerScence />
      </Suspense> */}
      <Preload all />
    </>
  );
}
