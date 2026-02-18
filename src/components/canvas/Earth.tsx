import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

const Earth = () => {
    // Since we don't have a GLTF model, we'll use a Sphere with texture or just a wireframe sphere
    return (
        <mesh>
            <sphereGeometry args={[2.5, 32, 32]} />
            <meshStandardMaterial color="#4b0082" wireframe />
        </mesh>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />

                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 0, 5]} intensity={1} />

                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
