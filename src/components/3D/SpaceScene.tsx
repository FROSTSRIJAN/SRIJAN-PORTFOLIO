import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.5, 32, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          transparent
          opacity={0.3}
          distort={0.4}
          speed={2}
          roughness={0.4}
        />
      </Sphere>
    </Float>
  );
};

const NebulaCloud = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    const material = meshRef.current.material as THREE.MeshBasicMaterial;
    if (material && 'opacity' in material) {
      material.opacity = 0.1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <Sphere ref={meshRef} args={[3, 16, 16]} position={position}>
      <meshBasicMaterial
        color="#ec4899"
        transparent
        opacity={0.1}
        blending={THREE.AdditiveBlending}
      />
    </Sphere>
  );
};

const SpaceScene = () => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Ambient lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#8b5cf6" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
          
          {/* Starfield */}
          <Stars
            radius={300}
            depth={60}
            count={5000}
            factor={7}
            saturation={0}
            fade
            speed={0.5}
          />
          
          {/* Floating Geometries */}
          <FloatingGeometry />
          
          {/* Nebula Clouds */}
          <NebulaCloud position={[-8, 4, -5]} />
          <NebulaCloud position={[8, -4, -8]} />
          <NebulaCloud position={[0, 8, -10]} />
          
          {/* Additional floating spheres */}
          <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
            <Sphere args={[0.5, 16, 16]} position={[4, 2, -3]}>
              <meshStandardMaterial
                color="#06b6d4"
                transparent
                opacity={0.4}
                emissive="#06b6d4"
                emissiveIntensity={0.2}
              />
            </Sphere>
          </Float>
          
          <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
            <Sphere args={[0.3, 16, 16]} position={[-5, -3, -2]}>
              <meshStandardMaterial
                color="#10b981"
                transparent
                opacity={0.5}
                emissive="#10b981"
                emissiveIntensity={0.3}
              />
            </Sphere>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SpaceScene;