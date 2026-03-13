/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Group, Mesh, Vector2 } from "three";
import ParticleField from "../components/ParticleField";

const FloatingShapes: React.FC = () => {
  const groupRef = useRef<Group>(null);
  const icoRef = useRef<Mesh>(null);
  const torusRef = useRef<Mesh>(null);
  const mouse = useRef(new Vector2(0, 0));
  const lerpTarget = useRef(new Vector2(0, 0));
  const { viewport } = useThree();

  useFrame((state, delta) => {
    const pointer = state.pointer;
    lerpTarget.current.set(
      pointer.x * viewport.width * 0.3,
      pointer.y * viewport.height * 0.3
    );
    mouse.current.lerp(lerpTarget.current, 0.03);

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.position.x += (mouse.current.x - groupRef.current.position.x) * 0.02;
      groupRef.current.position.y += (mouse.current.y - groupRef.current.position.y) * 0.02;
    }

    if (icoRef.current) {
      icoRef.current.rotation.x += delta * 0.3;
      icoRef.current.rotation.z += delta * 0.15;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.2;
      torusRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
        <mesh ref={icoRef} position={[-4, 1.5, -5]}>
          <icosahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial
            color="#7928ca"
            emissive="#7928ca"
            emissiveIntensity={0.4}
            wireframe
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
        <mesh ref={torusRef} position={[5, -1.5, -6]}>
          <torusKnotGeometry args={[0.6, 0.2, 64, 16]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.3}
            wireframe
            transparent
            opacity={0.5}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.2}>
        <mesh position={[3, 2.5, -8]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial
            color="#ff0080"
            emissive="#ff0080"
            emissiveIntensity={0.3}
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.8}>
        <mesh position={[-5, -2, -7]}>
          <dodecahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.25}
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>
      </Float>
    </group>
  );
};

const HeroScene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#00d4ff" />
      <pointLight position={[-10, -10, -5]} intensity={0.2} color="#7928ca" />

      <Stars
        radius={50}
        depth={80}
        count={2500}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      <ParticleField count={400} spread={30} size={0.03} color="#00d4ff" />
      <ParticleField count={200} spread={25} size={0.025} color="#7928ca" />

      <FloatingShapes />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          intensity={0.8}
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
};

export default HeroScene;
