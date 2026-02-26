"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Group } from "three";

function Galaxy() {
  const meshRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      <mesh>
        <torusGeometry args={[1.2, 0.15, 16, 100]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#7c3aed"
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh rotation={[0.5, 0.3, 0]}>
        <torusGeometry args={[1.6, 0.08, 16, 100]} />
        <meshStandardMaterial
          color="#c4b5fd"
          emissive="#8b5cf6"
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>
      <mesh rotation={[1, 0.8, 0.2]}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial
          color="#4c1d95"
          emissive="#7c3aed"
          emissiveIntensity={0.4}
          transparent
          opacity={0.4}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#c4b5fd"
          emissive="#8b5cf6"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
}

export default function GalaxyModel() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
        className="pointer-events-auto"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-3, 2, 4]} intensity={0.6} color="#8b5cf6" />
        <pointLight position={[3, -2, -4]} intensity={0.4} color="#c4b5fd" />

        <Galaxy />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
          minDistance={2}
          maxDistance={10}
          rotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}
