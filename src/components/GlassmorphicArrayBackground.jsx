import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Premium Glass/Glossy Material used for colored spheres
const glassMaterial = new THREE.MeshPhysicalMaterial({
    roughness: 0.1,
    transmission: 0.9, // Add glass-like transparency
    thickness: 1.5, // Refraction thickness
    ior: 1.5, // Index of refraction
    clearcoat: 1, // Glossy outer layer
    clearcoatRoughness: 0.1,
});

// Premium Metallic Gold Material for the Torus Rings
const goldMaterial = new THREE.MeshStandardMaterial({
    color: "#FFD700", // Gold base
    roughness: 0.2,
    metalness: 1, // Fully metallic
    envMapIntensity: 2, // Highly reflective of environment
});

const FloatingObjects = () => {
    const groupRef = useRef(null);

    useFrame((state) => {
        if (!groupRef.current) return;

        const scrollY = window.scrollY;

        // Add subtle parallax wave vertical shift as user scrolls down the page so they don't scroll out of view
        groupRef.current.position.y = Math.sin(scrollY * 0.001) * 2;

        // Slow continuous rotation of the entire group to feel dynamic
        groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
        groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    });

    return (
        <group ref={groupRef}>

            {/* Neon Green Glass Sphere */}
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2} position={[-4, 3, -5]}>
                <mesh material={glassMaterial.clone()} material-color="#10B981">
                    <sphereGeometry args={[1.2, 64, 64]} />
                </mesh>
            </Float>

            {/* Deep Purple Glass Sphere */}
            <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5} position={[5, 1, -2]}>
                <mesh material={glassMaterial.clone()} material-color="#8B5CF6">
                    <sphereGeometry args={[1.5, 64, 64]} />
                </mesh>
            </Float>

            {/* Vibrant Pink/Red Glass Sphere */}
            <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2.5} position={[2, -4, 1]}>
                <mesh material={glassMaterial.clone()} material-color="#EC4899">
                    <sphereGeometry args={[2, 64, 64]} />
                </mesh>
            </Float>

            {/* Small Blue Detail Sphere */}
            <Float speed={2.5} rotationIntensity={2} floatIntensity={1} position={[-3, -2, 3]}>
                <mesh material={glassMaterial.clone()} material-color="#3B82F6">
                    <sphereGeometry args={[0.5, 64, 64]} />
                </mesh>
            </Float>

            {/* Large Gold Metallic Ring (Torus) */}
            <Float speed={1} rotationIntensity={1.5} floatIntensity={1} position={[4, 4, -4]}>
                <mesh material={goldMaterial} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                    <torusGeometry args={[2, 0.4, 32, 100]} />
                </mesh>
            </Float>

            {/* Medium Gold Metallic Ring */}
            <Float speed={1.2} rotationIntensity={2} floatIntensity={1.5} position={[-5, -1, -2]}>
                <mesh material={goldMaterial} rotation={[-Math.PI / 6, Math.PI / 3, 0]}>
                    <torusGeometry args={[1.5, 0.3, 32, 100]} />
                </mesh>
            </Float>

            {/* Small Gold Metallic Detail Ring */}
            <Float speed={2} rotationIntensity={3} floatIntensity={1} position={[6, -3, 2]}>
                <mesh material={goldMaterial} rotation={[Math.PI / 2, 0, Math.PI / 4]}>
                    <torusGeometry args={[0.8, 0.2, 32, 100]} />
                </mesh>
            </Float>

        </group>
    );
};

const GlassmorphicArrayBackground = () => {
    return (
        /* The container fills the w and h available from parent */
        <div className="relative h-full w-full overflow-hidden bg-[#050510]">
            {/* Dark gradient overlay to blend seamlessly with the Hero section above it */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510] z-20 pointer-events-none" />

            <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
                {/* Environmental lighting for reflections on Glass and Gold */}
                <Environment preset="city" />

                {/* Ambient base lighting */}
                <ambientLight intensity={0.5} />

                {/* Dramatic directional lighting to highlight the glossy edges */}
                <directionalLight position={[10, 10, 10]} intensity={3} color="#FFFFFF" />
                <spotLight position={[-10, 10, 5]} intensity={2} color="#A78BFA" angle={0.5} penumbra={1} />
                <spotLight position={[10, -10, 5]} intensity={2} color="#10B981" angle={0.5} penumbra={1} />

                <FloatingObjects />
            </Canvas>
        </div>
    );
};

export default GlassmorphicArrayBackground;
