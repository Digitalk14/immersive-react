import { useFrame, useThree } from "@react-three/fiber";
import React from "react";
import { useSphere } from "@react-three/cannon";
import { joints } from "./joints";
import { Sphere } from "three";

export const JointCollider = ({ index, hand }) => {
  const { gl } = useThree();
  const handObj = gl.xr.getHand(hand);
  const joint = handObj.joints[joints[index]];
  const size = joint.jointRadius ?? 0.0001;
  const [tipRef, api] = useSphere(() => ({ args: size, position: [-1, 0, 0] }));
  useFrame(() => {
    if (joint === undefined) return;
    api.position.set(joint.position.x, joint.position.y, joint.position.z);
  });

  return (
    <Sphere ref={tipRef} args={[size]}>
      <meshBasicMaterial transparent opacity={0} attach="material" />
    </Sphere>
  );
};
