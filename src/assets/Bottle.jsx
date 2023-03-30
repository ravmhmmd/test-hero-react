/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 bottle.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/bottle.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.95, 0.73, 2]} rotation={[Math.PI / 2, 0, -2.98]} scale={0}>
        <mesh geometry={nodes['aesop-VLHB'].geometry} material={materials['default.003']} />
        <mesh geometry={nodes['aesop-VLHB_1'].geometry} material={materials['default.004']} />
        <mesh geometry={nodes['aesop-VLHB_2'].geometry} material={materials['default.005']} />
      </group>
      <group position={[0.9, 0.73, 1.99]} rotation={[Math.PI / 2, 0, -3.1]} scale={0}>
        <mesh geometry={nodes['aesop-PSFC'].geometry} material={materials['default']} />
        <mesh geometry={nodes['aesop-PSFC_1'].geometry} material={materials['default.001']} />
        <mesh geometry={nodes['aesop-PSFC_2'].geometry} material={materials['default.002']} />
      </group>
      <group position={[0.7, 0.73, 1.95]} rotation={[Math.PI / 2, 0, 2.91]} scale={0}>
        <mesh geometry={nodes['aesop-PSAOH'].geometry} material={materials['default.016']} />
        <mesh geometry={nodes['aesop-PSAOH_1'].geometry} material={materials['default.017']} />
        <mesh geometry={nodes['aesop-PSAOH_2'].geometry} material={materials['default.018']} />
      </group>
      <group position={[0.83, 0.73, 1.99]} rotation={[Math.PI / 2, 0, 3.07]} scale={0}>
        <mesh geometry={nodes['aesop-GLBC'].geometry} material={materials['default.006']} />
        <mesh geometry={nodes['aesop-GLBC_1'].geometry} material={materials['default.007']} />
        <mesh geometry={nodes['aesop-GLBC_2'].geometry} material={materials['Material.010']} />
        <mesh geometry={nodes['aesop-GLBC_3'].geometry} material={materials['Material.011']} />
      </group>
      <group position={[0.73, 0.73, 1.96]} rotation={[Math.PI / 2, 0, -0.91]} scale={0}>
        <mesh geometry={nodes['aesop-GFT'].geometry} material={materials['default.013']} />
        <mesh geometry={nodes['aesop-GFT_1'].geometry} material={materials['default.014']} />
        <mesh geometry={nodes['aesop-GFT_2'].geometry} material={materials['default.015']} />
      </group>
      <group position={[0.77, 0.73, 1.97]} rotation={[Math.PI / 2, 0, -3.13]} scale={0}>
        <mesh geometry={nodes['aesop-AFC'].geometry} material={materials['Material.008']} />
        <mesh geometry={nodes['aesop-AFC_1'].geometry} material={materials.cap} />
        <mesh geometry={nodes['aesop-AFC_2'].geometry} material={materials['default.012']} />
      </group>
    </group>
  )
}

useGLTF.preload('/bottle.gltf')