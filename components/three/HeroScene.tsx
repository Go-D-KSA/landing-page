"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import ParticleField from "./ParticleField";

function Shapes() {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const knot = useRef<THREE.Mesh>(null);
  const hex = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (group.current) group.current.rotation.y = elapsed * 0.09 + window.scrollY * 0.00012;
    if (ring.current) ring.current.rotation.x = elapsed * 0.2;
    if (knot.current) knot.current.rotation.x = elapsed * 0.14;
    if (hex.current) hex.current.rotation.z = elapsed * 0.12;
  });

  return (
    <group ref={group}>
      <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.45}>
        <mesh ref={ring} position={[-4, 1, -1]}>
          <torusGeometry args={[1.3, 0.07, 12, 64]} />
          <meshStandardMaterial color="#c9a84c" metalness={0.7} roughness={0.22} transparent opacity={0.45} />
        </mesh>
      </Float>
      <Float speed={1.25} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={knot} position={[4, -0.2, -0.5]}>
          <torusKnotGeometry args={[0.72, 0.12, 90, 12]} />
          <meshStandardMaterial color="#00a651" metalness={0.55} roughness={0.26} transparent opacity={0.55} />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={0.2} floatIntensity={0.35}>
        <mesh ref={hex} position={[-3.4, -2.6, -1.8]} rotation={[1.1, 0, 0]}>
          <cylinderGeometry args={[1, 1, 0.18, 6]} />
          <meshStandardMaterial color="#00a651" metalness={0.55} roughness={0.26} transparent opacity={0.55} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 55 }} dpr={[1, 1.7]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.75} />
      <pointLight color="#80ffb0" intensity={2} distance={30} position={[2, 3, 6]} />
      <Shapes />
      <ParticleField />
    </Canvas>
  );
}
