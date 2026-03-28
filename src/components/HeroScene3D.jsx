import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Environment } from '@react-three/drei';
import * as THREE from 'three';

/* ── Floating browser mockup (centre piece) ── */
function BrowserMockup({ mouse }) {
  const group = useRef();

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouse.current.x * 0.25, 0.04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -mouse.current.y * 0.15, 0.04);
  });

  return (
    <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.6} floatingRange={[-0.08, 0.08]}>
      <group ref={group} position={[0, 0, 0]}>
        {/* Screen bezel */}
        <RoundedBox args={[3.6, 2.4, 0.08]} radius={0.06} smoothness={4} position={[0, 0, 0]}>
          <meshPhysicalMaterial
            color="#0e1120"
            roughness={0.15}
            metalness={0.6}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
          />
        </RoundedBox>
        {/* Screen surface (glow) */}
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[3.3, 2.1]} />
          <meshBasicMaterial color="#0f172a" />
        </mesh>
        {/* Screen gradient overlay */}
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[3.3, 2.1]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.04} />
        </mesh>
        {/* Fake UI lines on screen */}
        {[0.55, 0.25, -0.05, -0.35, -0.65].map((y, i) => (
          <mesh key={i} position={[-0.5, y, 0.055]}>
            <planeGeometry args={[1.6 - i * 0.15, 0.06]} />
            <meshBasicMaterial
              color={i === 0 ? '#818cf8' : '#1e293b'}
              transparent
              opacity={i === 0 ? 0.6 : 0.5}
            />
          </mesh>
        ))}
        {/* Sidebar */}
        <mesh position={[1.2, 0, 0.055]}>
          <planeGeometry args={[0.7, 2.1]} />
          <meshBasicMaterial color="#0a0e1a" transparent opacity={0.7} />
        </mesh>
        {/* Browser top bar */}
        <mesh position={[0, 1.12, 0.055]}>
          <planeGeometry args={[3.3, 0.16]} />
          <meshBasicMaterial color="#080b16" transparent opacity={0.8} />
        </mesh>
        {/* Dots */}
        {[-1.45, -1.35, -1.25].map((x, i) => (
          <mesh key={`d${i}`} position={[x, 1.12, 0.06]}>
            <circleGeometry args={[0.025, 16]} />
            <meshBasicMaterial color={['#ef4444', '#fbbf24', '#22c55e'][i]} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

/* ── Floating Glass Card ── */
function GlassCard({ position, rotation, scale = 1, color = '#818cf8', delay = 0 }) {
  const ref = useRef();
  const startTime = useMemo(() => delay, [delay]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() + startTime;
    ref.current.position.y = position[1] + Math.sin(t * 0.8) * 0.12;
    ref.current.rotation.z = rotation[2] + Math.sin(t * 0.5) * 0.04;
  });

  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      <RoundedBox args={[1.1, 0.7, 0.04]} radius={0.03} smoothness={4}>
        <meshPhysicalMaterial
          color="#0e1628"
          roughness={0.1}
          metalness={0.3}
          transparent
          opacity={0.6}
          clearcoat={1}
          clearcoatRoughness={0.05}
          emissive={color}
          emissiveIntensity={0.03}
        />
      </RoundedBox>
    </group>
  );
}

/* ── Geometric accent shapes ── */
function AccentShapes({ mouse }) {
  const torusRef = useRef();
  const icoRef = useRef();
  const octRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.15;
      torusRef.current.rotation.y = t * 0.2;
      torusRef.current.position.y = -1.2 + Math.sin(t * 0.6) * 0.15;
    }
    if (icoRef.current) {
      icoRef.current.rotation.x = t * 0.12;
      icoRef.current.rotation.z = t * 0.18;
      icoRef.current.position.y = 1.5 + Math.sin(t * 0.7 + 1) * 0.1;
    }
    if (octRef.current) {
      octRef.current.rotation.y = t * 0.2;
      octRef.current.rotation.x = t * 0.1;
      octRef.current.position.x = 2.5 + Math.sin(t * 0.5) * 0.08;
    }
  });

  return (
    <>
      {/* Torus — bottom left */}
      <mesh ref={torusRef} position={[-2.4, -1.2, -0.8]}>
        <torusGeometry args={[0.5, 0.15, 16, 40]} />
        <meshPhysicalMaterial
          color="#818cf8"
          roughness={0.15}
          metalness={0.8}
          transparent
          opacity={0.25}
          emissive="#818cf8"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Icosahedron — top right */}
      <mesh ref={icoRef} position={[2.8, 1.5, -1]}>
        <icosahedronGeometry args={[0.45, 0]} />
        <meshPhysicalMaterial
          color="#06b6d4"
          roughness={0.2}
          metalness={0.7}
          transparent
          opacity={0.2}
          wireframe
          emissive="#06b6d4"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Octahedron — mid right */}
      <mesh ref={octRef} position={[2.5, -0.2, -0.5]}>
        <octahedronGeometry args={[0.35, 0]} />
        <meshPhysicalMaterial
          color="#a78bfa"
          roughness={0.1}
          metalness={0.6}
          transparent
          opacity={0.2}
          emissive="#a78bfa"
          emissiveIntensity={0.12}
        />
      </mesh>
    </>
  );
}

/* ── Ambient particles ── */
function Particles({ count = 80 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 7;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#818cf8" transparent opacity={0.35} sizeAttenuation />
    </points>
  );
}

/* ── Camera rig that follows mouse ── */
function CameraRig({ mouse }) {
  useFrame(({ camera }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.current.x * 0.6, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.current.y * 0.4 + 0.2, 0.03);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ── Main export ── */
export default function HeroScene3D({ mouse }) {
  return (
    <Canvas
      camera={{ position: [0, 0.2, 5.5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <SceneContent mouse={mouse} />
    </Canvas>
  );
}

function SceneContent({ mouse }) {
  const mouseRef = useRef({ x: 0, y: 0 });

  useFrame(() => {
    mouseRef.current.x = mouse.x;
    mouseRef.current.y = mouse.y;
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} color="#e0e7ff" />
      <pointLight position={[-3, 2, 3]} intensity={0.8} color="#818cf8" distance={12} />
      <pointLight position={[3, -2, 2]} intensity={0.5} color="#06b6d4" distance={10} />
      <pointLight position={[0, 3, 1]} intensity={0.3} color="#a78bfa" distance={8} />

      <CameraRig mouse={mouseRef} />

      {/* Centre browser mockup */}
      <BrowserMockup mouse={mouseRef} />

      {/* Floating glass cards */}
      <GlassCard position={[-2.3, 0.8, 0.5]} rotation={[0.05, 0.3, 0.08]} delay={0} color="#818cf8" scale={0.75} />
      <GlassCard position={[2.1, -0.9, 0.3]} rotation={[-0.05, -0.2, -0.06]} delay={1.5} color="#06b6d4" scale={0.65} />
      <GlassCard position={[-1.8, -1.3, 0.2]} rotation={[0.03, 0.15, 0.04]} delay={3} color="#34d399" scale={0.55} />

      {/* Abstract geometric accents */}
      <AccentShapes mouse={mouseRef} />

      {/* Ambient particles */}
      <Particles count={80} />

      <Environment preset="night" />
    </>
  );
}
