import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Floating Particles Galaxy
const ParticleGalaxy = () => {
  const pointsRef = useRef();
  const particleCount = 3000;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 6 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.05;
    }
  });
  
  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#10B981" size={0.02} transparent opacity={0.3} blending={THREE.AdditiveBlending} />
    </points>
  );
};

// Subtle Corner Ring with Irregular Movement
const CornerRing = ({ position, rotationAxis = 'y', speed = 0.002, color = '#10B981', size = 1.2 }) => {
  const ringRef = useRef();
  const geometry = useMemo(() => new THREE.TorusGeometry(size, 0.02, 64, 200), [size]);
  
  useFrame((state) => {
    if (ringRef.current) {
      // Irregular movement - different speeds on different axes
      ringRef.current.rotation.y += speed * (0.8 + Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2);
      ringRef.current.rotation.x += speed * 0.5 * (0.7 + Math.cos(state.clock.getElapsedTime() * 0.5) * 0.3);
      ringRef.current.rotation.z += speed * 0.3 * (0.9 + Math.sin(state.clock.getElapsedTime() * 0.4) * 0.2);
      
      // Slight position oscillation
      ringRef.current.position.x = position[0] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
      ringRef.current.position.y = position[1] + Math.cos(state.clock.getElapsedTime() * 0.6) * 0.05;
    }
  });
  
  return (
    <mesh ref={ringRef} position={position} geometry={geometry}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.15} metalness={0.8} transparent opacity={0.35} />
    </mesh>
  );
};

// Floating Orbs - Very Subtle
const SubtleOrb = ({ position, color, size = 0.08 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.8) * 0.08;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.getElapsedTime() * 1.2) * 0.05);
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} metalness={0.6} transparent opacity={0.4} />
    </mesh>
  );
};

const ThreeDSpace = () => {
  // Corner ring positions
  const cornerRings = [
    { position: [-4.5, 3.2, -3], color: '#10B981', size: 1.5, speed: 0.0015 },
    { position: [4.8, 3, -2.8], color: '#06B6D4', size: 1.4, speed: 0.002 },
    { position: [-4.2, -3, -2.5], color: '#F59E0B', size: 1.3, speed: 0.0018 },
    { position: [4.5, -3.2, -2.2], color: '#10B981', size: 1.4, speed: 0.0016 },
    { position: [0, 4.2, -3.5], color: '#06B6D4', size: 1.2, speed: 0.0022 },
    { position: [0, -4, -3.2], color: '#F59E0B', size: 1.2, speed: 0.0019 },
    { position: [-3.5, 0, -4], color: '#10B981', size: 1.3, speed: 0.0017 },
    { position: [3.8, 0, -3.8], color: '#06B6D4', size: 1.3, speed: 0.0021 },
  ];
  
  const orbPositions = [
    [-2.5, 1.8, -2], [2.6, 1.9, -1.8], [1.9, -2, -2.2], [-2, -2.1, -2.3],
    [0, 2.2, -2.5], [0, -2.3, -2.4], [2.2, 0, -2.6], [-2.3, 0, -2.7],
  ];
  
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 9], fov: 50 }} style={{ background: 'transparent' }} gl={{ alpha: true }}>
        <ambientLight intensity={0.25} />
        <pointLight position={[3, 3, 3]} intensity={0.4} />
        <pointLight position={[-3, -3, -3]} intensity={0.3} color="#10B981" />
        
        <Stars radius={120} depth={70} count={4000} factor={6} saturation={0} fade speed={0.2} />
        <Sparkles count={600} scale={12} size={0.08} speed={0.3} color="#10B981" opacity={0.2} />
        
        <ParticleGalaxy />
        
        {/* Corner Rings with Irregular Movement */}
        {cornerRings.map((ring, i) => (
          <CornerRing
            key={i}
            position={ring.position}
            color={ring.color}
            size={ring.size}
            speed={ring.speed}
          />
        ))}
        
        {/* Subtle Orbs */}
        {orbPositions.map((pos, i) => (
          <SubtleOrb key={i} position={pos} color={i % 3 === 0 ? "#10B981" : i % 3 === 1 ? "#06B6D4" : "#F59E0B"} size={0.07} />
        ))}
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} enableDamping dampingFactor={0.05} />
      </Canvas>
    </div>
  );
};

export default ThreeDSpace;