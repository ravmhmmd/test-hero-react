import React from "react";
import { meshLambertMaterial } from "three";

export default function Box() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}
