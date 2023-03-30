import "./App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./assets/Scene";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
// import Scene from "./components/Scene";

function App() {
  return (
    <div className="h-screen">
        <Model />
    </div>
  );
}

export default App;
