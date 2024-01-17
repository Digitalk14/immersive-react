import React from "react";
import { Box, useMatcapTexture } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

export const Cube = ({ position, args = [0.06, 0.06, 0.06] }) => {
  const [boxRef] = useBox(() => ({ position, mass: 1, args }));
  const [tex] = useMatcapTexture("C7C0AC_2E181B_543B30_6B6270");

  return (
    <Box ref={boxRef} args={args} castShadow>
      <meshMatcapMaterial attach="material" matcap={tex} />
    </Box>
  );
};
