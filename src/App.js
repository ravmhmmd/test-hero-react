import "./App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./assets/Hero-scene";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function App() {
  return (
    <div className="h-screen">
      <Canvas class="h-screen">
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={(-2, 5, 2)} intensity={1} />
        <Model />
      </Canvas>
    </div>
  );
}

export default App;
