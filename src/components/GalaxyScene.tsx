"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import type { Group } from "three";

function GalaxyModel() {
  const { scene } = useGLTF("/galaxy.glb");
  const ref = useRef<Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
    }
  });

  return <primitive ref={ref} object={scene} scale={1} />;
}

export default function GalaxyScene({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, 2, -3]} intensity={0.8} color="#8b5cf6" />
        <Suspense fallback={null}>
          <GalaxyModel />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
