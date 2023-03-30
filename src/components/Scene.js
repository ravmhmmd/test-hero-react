import React from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import * as THREE from "three";

export default function Scene() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const loader = new GLTFLoader();

  loader.load(
    "../assets/desk-setup.gltf",
    function (gltf) {
      scene.add(gltf.scene);
      console.log("bla",gltf.scene);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  return renderer.render(scene, camera);
}
