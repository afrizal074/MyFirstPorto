import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// PERUBAHAN: Menambahkan Sparkles dari @react-three/drei
import { OrbitControls, Sphere, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.4}>
      <MeshDistortMaterial
        color="#38bdf8"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export const Scene3D = () => {
  return (
    // PERUBAHAN: Mengubah class menjadi fixed, inset-0 (full screen), dan pointer-events-none
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#a855f7" />
        
        {/* Bola 3D Utama */}
        <AnimatedSphere />

        {/* TAMBAHAN: Efek partikel cahaya yang tersebar merata di layar */}
        <Sparkles 
          count={150}        // Jumlah titik cahaya
          scale={15}         // Area sebaran partikel (semakin besar semakin menyebar)
          size={2.5}         // Ukuran partikel
          speed={0.4}        // Kecepatan melayang
          opacity={0.6}      // Tingkat transparansi partikel
          color="#38bdf8"    // Warna partikel (biru muda)
        />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};