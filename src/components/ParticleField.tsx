/* eslint-disable react/no-unknown-property */
import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { BufferGeometry, Float32BufferAttribute, Points, Vector2 } from "three";

interface ParticleFieldProps {
  count?: number;
  spread?: number;
  size?: number;
  color?: string;
}

const ParticleField: React.FC<ParticleFieldProps> = ({
  count = 600,
  spread = 25,
  size = 0.04,
  color = "#00d4ff",
}) => {
  const pointsRef = useRef<Points>(null);
  const mouse = useRef(new Vector2(0, 0));
  const lerpTarget = useRef(new Vector2(0, 0));
  const { viewport } = useThree();

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
      speeds[i] = 0.2 + Math.random() * 0.8;
    }
    const geo = new BufferGeometry();
    geo.setAttribute("position", new Float32BufferAttribute(positions, 3));
    geo.setAttribute("speed", new Float32BufferAttribute(speeds, 1));
    return geo;
  }, [count, spread]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const pointer = state.pointer;
    lerpTarget.current.set(
      pointer.x * viewport.width * 0.5,
      pointer.y * viewport.height * 0.5
    );
    mouse.current.lerp(lerpTarget.current, 0.05);

    // Subtle mouse-reactive rotation offset
    pointsRef.current.rotation.y += delta * 0.02 + mouse.current.x * 0.0001;
    pointsRef.current.rotation.x += delta * 0.01 + mouse.current.y * 0.0001;

    const positions = geometry.attributes.position.array as Float32Array;
    const speeds = geometry.attributes.speed.array as Float32Array;
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime * 0.3 + i) * delta * 0.02 * speeds[i];
    }
    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
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

export default ParticleField;
