import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function Model() {
  const { scene } = useGLTF('/src/asset/coreveil.gltf');
  
  return (
    <primitive 
      object={scene} 
      scale={1.2}
      rotation={[0, 0, 0]}
      position={[0, 0, 0]}
    />
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
