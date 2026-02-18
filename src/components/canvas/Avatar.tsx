import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Initialize GLTF usage so it's ready when user uncomments
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Avatar = ({ isMobile }: { isMobile: boolean }) => {
    // -------------------------------------------------------------
    // INSTRUCTIONS FOR USER:
    // 1. Place your 'avatar.glb' file in the 'public' folder.
    // 2. Uncomment the following lines and remove the placeholder mesh.
    // -------------------------------------------------------------

    // const model = useGLTF("./avatar.glb");
    // return (
    //   <primitive
    //     object={model.scene}
    //     scale={isMobile ? 0.7 : 0.75}
    //     position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
    //     rotation={[-0.01, -0.2, -0.1]}
    //   />
    // );

    // Placeholder Mesh (Remove this when you have the model)
    return (
        <mesh scale={isMobile ? 0.8 : 1}>
            <boxGeometry args={[2, 2, 2]} />
            {/* @ts-ignore */}
            <meshStandardMaterial color="#a3b1c6" wireframe />
        </mesh>
    );
};

const AvatarCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Avatar isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default AvatarCanvas;
