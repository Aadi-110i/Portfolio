import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

useGLTF.preload('/assets/emo-robot.glb')

// Fits camera to show the whole model
function CameraRig({ target }: { target: THREE.Box3 }) {
    const { camera } = useThree()
    useEffect(() => {
        const size = new THREE.Vector3()
        const center = new THREE.Vector3()
        target.getSize(size)
        target.getCenter(center)
        const maxDim = Math.max(size.x, size.y, size.z)
        const fov = (camera as THREE.PerspectiveCamera).fov * (Math.PI / 180)
        const camZ = Math.abs(maxDim / Math.sin(fov / 2)) * 0.85
        camera.position.set(center.x, center.y + size.y * 0.05, camZ)
        camera.lookAt(center)
        camera.updateProjectionMatrix()
    }, [camera, target])
    return null
}

function Model({ onReady }: { onReady: (box: THREE.Box3) => void }) {
    const { scene } = useGLTF('/assets/emo-robot.glb')
    const modelRef = useRef<THREE.Group>(null)
    const readyCalled = useRef(false)

    useEffect(() => {
        if (!readyCalled.current && scene) {
            const box = new THREE.Box3().setFromObject(scene)
            onReady(box)
            readyCalled.current = true
        }
    }, [scene, onReady])

    // Only gentle float — no auto-rotation
    useFrame((state) => {
        if (modelRef.current) {
            modelRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.2) * 0.06
        }
    })

    return (
        <group ref={modelRef} dispose={null}>
            <primitive object={scene} />
        </group>
    )
}

const RobotCanvas = () => {
    const [bbox, setBbox] = useState<THREE.Box3 | null>(null)

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                background: 'transparent',
                cursor: 'grab',
            }}
        >
            <Canvas
                camera={{ fov: 50, near: 0.01, far: 1000 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    preserveDrawingBuffer: false,
                }}
                style={{ background: 'transparent' }}
            >
                {/* Lighting */}
                <ambientLight intensity={2} />
                <directionalLight position={[3, 8, 5]} intensity={3} />
                <directionalLight position={[-3, 4, -5]} intensity={1.2} />
                <pointLight position={[0, 5, 0]} intensity={2} />

                <Suspense fallback={null}>
                    <Model onReady={setBbox} />
                    {bbox && <CameraRig target={bbox} />}
                </Suspense>

                {/* Drag to rotate freely — no auto spin, no zoom, no pan */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={false}
                    rotateSpeed={1.2}
                    minPolarAngle={Math.PI / 6}
                    maxPolarAngle={Math.PI / 1.5}
                />
            </Canvas>
        </div>
    )
}

export default RobotCanvas
