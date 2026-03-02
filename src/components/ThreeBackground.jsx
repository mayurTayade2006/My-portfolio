import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Object3D } from 'three';

const ParticleWave = () => {
    const meshRef = useRef(null);
    const count = 400; // 20x20 grid
    const dummy = useMemo(() => new Object3D(), []);

    // Generate particle grid positions
    const particles = useMemo(() => {
        const temp = [];
        let i = 0;
        // Creating a grid on the XZ plane
        for (let x = -20; x < 20; x += 2) {
            for (let z = -20; z < 20; z += 2) {
                temp.push({ x, y: 0, z, id: i });
                i++;
            }
        }
        return temp;
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.elapsedTime;
        // Inject fast, non-state scroll reading for smooth parallax effect
        const scrollY = window.scrollY;

        // Animate each instance
        particles.forEach((particle, i) => {
            const { x, z } = particle;
            // create a sine wave fluid motion based on time
            // Add scrollY to the Y position to push the wave up/down when scrolling
            const baseY = Math.sin((x + time) * 0.3) * 2 +
                Math.cos((z + time) * 0.4) * 2 - 8;

            // Dynamic scroll effect: push particles up higher and faster as you scroll
            const y = baseY + (scrollY * 0.015);

            dummy.position.set(x, y, z);

            // Tumbling rotation - make it spin faster when scrolling
            const scrollSpin = scrollY * 0.002;
            dummy.rotation.x = (time * 0.5) + x + scrollSpin;
            dummy.rotation.y = (time * 0.3) + z + scrollSpin;
            dummy.rotation.z = (time * 0.2) + scrollSpin;

            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;

        // Also subtly shift the entire camera based on scroll for deep parallax
        state.camera.position.y = 2 - (scrollY * 0.005);
        state.camera.lookAt(0, -3, 0);
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            {/* 20-sided polygons (Icosahedron) or Dodecahedron */}
            <dodecahedronGeometry args={[0.9, 0]} />
            <meshStandardMaterial
                color="#A855F7" // More vibrant purple
                emissive="#4C1D95" // Subtle internal glow
                emissiveIntensity={0.5}
                roughness={0.1} // Shinier
                metalness={0.9} // More metallic/reflective
            />
        </instancedMesh>
    );
};

const ThreeBackground = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 2, 12], fov: 60 }}>
                {/* Dark fog to fade geometry out in the distance */}
                <fog attach="fog" args={['#050510', 5, 25]} />
                <ambientLight intensity={0.8} />
                {/* Cinematic dramatic lighting from multiple angles - increased vibrancy */}
                <directionalLight position={[10, 10, 5]} intensity={4} color="#3B82F6" />
                <directionalLight position={[-10, 10, -5]} intensity={3} color="#D946EF" />
                <spotLight position={[-10, 5, -5]} intensity={4} color="#A78BFA" />
                <spotLight position={[0, -10, 5]} intensity={3} color="#60A5FA" />
                <spotLight position={[0, 10, 0]} intensity={2} color="#FFFFFF" />

                <ParticleWave />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
