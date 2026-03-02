import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function PolygonSwarm({ count = 400 }) {
    const mesh = useRef();

    const dummy = useMemo(() => new THREE.Object3D(), []);
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            // Distribute particles horizontally along a twisted cylinder
            const x = (Math.random() - 0.5) * 80;
            const radius = Math.random() * 2 + 3; // Keep them clustered in a tube
            const angleOffset = Math.random() * Math.PI * 2;

            const scale = Math.random() * 1.5 + 0.3;
            const rotationSpeedX = Math.random() * 0.03 - 0.015;
            const rotationSpeedY = Math.random() * 0.03 - 0.015;

            temp.push({
                x,
                radius,
                angleOffset,
                scale,
                rotationSpeedX,
                rotationSpeedY,
                initialRotationX: Math.random() * Math.PI,
                initialRotationY: Math.random() * Math.PI
            });
        }
        return temp;
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        particles.forEach((p, i) => {
            // DNA Twist factor
            const twistFactor = p.x * 0.15;
            const timeFactor = time * 0.8;

            const angle = p.angleOffset + twistFactor + timeFactor;

            // Helix position
            const y = Math.sin(angle) * p.radius;
            let z = Math.cos(angle) * p.radius;

            // Global swooping wave
            const globalWaveY = Math.sin(time * 0.5 + p.x * 0.1) * 4;

            z -= 10; // Push backwards slightly

            dummy.position.set(p.x, y + globalWaveY, z);
            dummy.rotation.x = p.initialRotationX + time * p.rotationSpeedX;
            dummy.rotation.y = p.initialRotationY + time * p.rotationSpeedY;
            dummy.scale.setScalar(p.scale);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;

        // Slow tilt of the entire swarm for depth
        mesh.current.rotation.y = Math.sin(time * 0.1) * 0.1;
        mesh.current.rotation.z = Math.cos(time * 0.1) * 0.05;
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
                color="#c084fc" // Bright purple core
                emissive="#06b6d4" // Cyan glowing edges
                emissiveIntensity={0.6}
                metalness={0.7}
                roughness={0.1}
                transparent={true}
                opacity={0.85}
            />
        </instancedMesh>
    );
}

const GeometricWaveBackground = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-90 mask-image-gradient">
            <Canvas camera={{ position: [0, 0, 25], fov: 60 }} dpr={[1, 2]}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={3} color="#ec4899" /> {/* Pink */}
                <pointLight position={[-10, -20, -10]} intensity={4} color="#3b82f6" /> {/* Blue */}
                <pointLight position={[0, 0, 10]} intensity={3} color="#ffffff" />

                <PolygonSwarm count={350} />
            </Canvas>

            {/* Fade out edges so it blends nicely into the site background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050510] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent pointer-events-none" />
        </div>
    )
}

export default GeometricWaveBackground;
