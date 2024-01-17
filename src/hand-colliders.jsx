import React from "react";
import { JointCollider } from "./joint-collider";

export const HandColliders = () => {
  [...Array(25)].map((_, i) => (
    <React.Fragment key={i}>
      <JointCollider index={i} hand={0} />
      <JointCollider index={i} hand={1} />
    </React.Fragment>
  ));
};
