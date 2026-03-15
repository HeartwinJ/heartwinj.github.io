/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { Points } from "three";

const SimpleParticles: React.FC<{
  count: number;
  spread: number;
  size: number;
  color: string;
}> = ({ count, spread, size, color }) => {
  const ref = useRef<Points>(null);

  const positions = useRef(
    Float32Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * spread)
  ).current;

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.005;
    }
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
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

const HeroScene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#00d4ff" />

      <Stars
        radius={50}
        depth={80}
        count={1500}
        factor={4}
        saturation={0}
        fade
        speed={0.3}
      />

      <SimpleParticles count={200} spread={30} size={0.03} color="#00d4ff" />
      <SimpleParticles count={100} spread={25} size={0.025} color="#7928ca" />
    </>
  );
};

export default HeroScene;
