import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

function Sun() {
    const ref = useRef();

    useFrame((state, delta) => {
        ref.current.rotation.y += delta * 0.5;
        ref.current.rotation.x += delta * 0.1;
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.6, 64, 64]} />
            <meshStandardMaterial
                emissive={"#facc15"}
                emissiveIntensity={2}
                color={"#fde047"}
                roughness={0.4}
            />
        </mesh>
    );
}

const SunCanvas = () => {
    return (
        <div className="w-full h-auto absolute inset-0 z-[-1] bg-white/90">
            <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={0.8} />
                <pointLight position={[5, 5, 5]} intensity={1.5} />
                <Suspense fallback={null}>
                    <Sun />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default SunCanvas;
