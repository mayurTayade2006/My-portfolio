import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Stars } from '@react-three/drei';

const ParticleScene = () => {
    const groupRef = useRef(null);
    const sparklesRef = useRef(null);

    useFrame((state) => {
        if (!groupRef.current) return;

        const time = state.clock.elapsedTime;
        const scrollY = window.scrollY;

        // Base slow rotation for a breathing, living feel
        groupRef.current.rotation.y = time * 0.05;
        groupRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;

        // Dynamic scroll effect: slowly pull the particles up/down and slightly scale/rotate
        groupRef.current.position.y = scrollY * 0.003;

        // Add subtle camera tilt based on scroll
        state.camera.position.y = 2 - (scrollY * 0.002);
        state.camera.lookAt(0, 0, 0);
    });

    return (
        <group ref={groupRef}>
            {/* Deep space stars for depth */}
            <Stars radius={50} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />

            {/* Vibrant flowing dust/sparkles layers */}

            {/* Bright Pink Layer */}
            <Sparkles
                ref={sparklesRef}
                count={800}
                scale={[20, 20, 20]}
                size={4}
                speed={0.4}
                opacity={0.8}
                color="#EC4899"
            />
            {/* Deep Purple Layer */}
            <Sparkles
                count={1000}
                scale={[25, 25, 25]}
                size={3}
                speed={0.3}
                opacity={0.6}
                color="#A855F7"
            />
            {/* Bright Blue Layer */}
            <Sparkles
                count={600}
                scale={[15, 15, 15]}
                size={5}
                speed={0.6}
                opacity={0.9}
                color="#60A5FA"
            />
            {/* Intense cyan scattered points */}
            <Sparkles
                count={200}
                scale={[30, 30, 30]}
                size={6}
                speed={0.8}
                opacity={1}
                color="#22D3EE"
            />
        </group>
    );
};

const VibrantDustBackground = () => {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/50 via-transparent to-[#050510] z-10 pointer-events-none" />

            <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
                {/* Fog helps blend the edges of the particle field into the void */}
                <fog attach="fog" args={['#050510', 10, 25]} />
                <ambientLight intensity={1} />
                <ParticleScene />
            </Canvas>
        </div>
    );
};

export default VibrantDustBackground;
