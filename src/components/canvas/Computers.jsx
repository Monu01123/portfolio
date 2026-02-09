import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Computers = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#915EFF"
        attach="material"
        distort={0.5}
        speed={2}
      />
    </Sphere>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      className="cursor-pointer"
      frameloop="always"
      camera={{ position: [5, 5, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />
        <Computers />
        <OrbitControls
          enableZoom={false}
          autoRotate
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
