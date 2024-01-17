import React from "react";
import { Hands } from "@react-three/xr";
import { OrbitControls, Plane, Sky } from "@react-three/drei";
import { usePlane } from "@react-three/cannon";
import { HandsReady } from "./utils";
import { HandColliders } from "./hand-colliders";
import { Cube } from "./cube";

export const Scene = () => {
  const [floorRef] = usePlane(() => ({
    args: [10, 10],
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 1, 0],
    type: "Static",
  }));
  return (
    <>
      <Sky />
      <Plane ref={floorRef} args={[10, 10]} receiveShadow>
        <meshStandardMaterial attach="material" color="#fff" />
      </Plane>
      <Hands />
      <HandsReady>
        <HandColliders />
      </HandsReady>
      {[...Array(7)].map((_, i) => (
        <Cube key={i} position={[0, 1.1 + 0.1 * i, -0.5]} />
      ))}
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[1, 8, 1]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
    </>
  );
};
