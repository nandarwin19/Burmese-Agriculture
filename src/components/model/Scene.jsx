import React, { useRef, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";

export default function Scene({ ...props }) {
  const group = useRef();
  const { scene } = useGLTF("/model/plant1.glb");
  let camera = useThree((state) => state.camera);
  let { scene: threeScene } = useThree((state) => state);

  useLayoutEffect(() => {
    camera.position.set(0, 2, 6);
    let fov = (1400 * 18) / window.innerWidth;
    camera.fov = fov;
    camera.updateProjectionMatrix();

    let mm = gsap.matchMedia();
    mm.add(
      {
        isDesktop: `(min-width: 48em)`,
        isMobile: `(max-width: 48em)`,
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions;
        let t1 = gsap.timeline({
          scrollTrigger: {
            trigger: "#plant-model",
            start: "top-=1500 top",
            endTrigger: "#blog",
            end: "top top",
            scrub: 1,
          },
        });

        t1.fromTo(
          camera.position,
          { y: 2, z: 6, x: isDesktop ? -1 : 0 },
          { y: 0 }
        )

          .to(threeScene.rotation, { y: 3 }, "key-1")
          // .to(threeScene.rotation, { y: 3, z: -3 }, "key0")
          .to(threeScene.scale, { x: 10, y: 10, z: 10 }, "key0")
          .to(camera.position, { z: -10, x: 2.1, y: 1 }, "key0")
          .to(threeScene.rotation, { z: 1.58 }, "key1")
          .to(camera.position, { z: -10 }, "key1")
          .to(threeScene.rotation, { y: 0, z: 0 }, "key2")
          .to(camera.position, { z: 6, x: isDesktop ? -1 : 0 }, "key2")
          .to(threeScene.scale, { x: 0.7, y: 0.7, z: 0.7 }, "key2")
          .to(threeScene.rotation, { z: 0, y: 6.3 }, "key3")
          // .to(threeScene.position, { x: -0.5 }, "key3")
          .to(threeScene.scale, { x: 0.2, y: 0.2, z: 0.2 }, "key3")
          .to(camera.position, { x: isDesktop ? 0.8 : 0, y: 0 }, "key3");

        if (isMobile) {
          camera.fov = 20;
          camera.updateProjectionMatrix();
        }

        return () => {
          if (t1) t1.kill();
        };
      }
    );
  }, []);

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group scale={100}>
              <primitive position-y={-0.3} object={scene} />
            </group>
          </group>
        </group>
      </group>
    </>
  );
}
useGLTF.preload("/model/plant1.glb");
