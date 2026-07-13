"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => {
    const count = 850;
    const positionArray = new Float32Array(count * 3);
    const colorArray = new Float32Array(count * 3);
    const green = new THREE.Color("#00a651");
    const gold = new THREE.Color("#c9a84c");
    for (let index = 0; index < count; index += 1) {
      positionArray[index * 3] = (Math.random() - 0.5) * 18;
      positionArray[index * 3 + 1] = (Math.random() - 0.5) * 11;
      positionArray[index * 3 + 2] = (Math.random() - 0.5) * 8;
      const color = Math.random() > 0.82 ? gold : green;
      colorArray[index * 3] = color.r;
      colorArray[index * 3 + 1] = color.g;
      colorArray[index * 3 + 2] = color.b;
    }
    return { positions: positionArray, colors: colorArray };
  }, []);

  useFrame(({ clock }) => {
    if (points.current) points.current.rotation.y = clock.getElapsedTime() * 0.018;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} vertexColors transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}
