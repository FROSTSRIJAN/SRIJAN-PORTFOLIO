import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

const OptimizedStars = () => {
  return (
    <Stars
      radius={150}
      depth={50}
      count={1000} // Reduced from 5000
      factor={4}
      saturation={0}
      fade
      speed={0.3} // Reduced speed
    />
  );
};

const SpaceScene = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
        performance={{ min: 0.5 }} // Enable performance scaling
      >
        <Suspense fallback={null}>
          {/* Minimal lighting */}
          <ambientLight intensity={0.3} />
          
          {/* Optimized Starfield */}
          <OptimizedStars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SpaceScene;