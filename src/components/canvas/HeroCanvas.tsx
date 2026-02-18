import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const CanvasLoader = () => {
    return (
        <span className='canvas-loader'></span>
    );
};

const HeroCanvas = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
            className="absolute inset-0 z-[-1]"
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Sphere args={[1, 100, 200]} scale={2.4}>
                    <MeshDistortMaterial
                        color='#915eff'
                        attach='material'
                        distort={0.5}
                        speed={2}
                    />
                </Sphere>
            </Suspense>
        </Canvas>
    );
};

export default HeroCanvas;
