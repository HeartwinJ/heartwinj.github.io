/** Small seeded PRNG so rough edges render identically every time. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface RoughOptions {
  seed: number;
  width?: number;
  height?: number;
  /** Where the line sits, 0 (top) to 1 (bottom). */
  base?: number;
  /** Size of the slow swell, as a fraction of height. */
  amp?: number;
  /** Number of slow swells across the width. */
  waves?: number;
  /** Brushy jaggedness, as a fraction of height. */
  jitter?: number;
  /** Horizontal distance between points. */
  step?: number;
}

/**
 * A closed path whose top edge is a hand-cut, slightly wobbly line and
 * whose bottom fills to the base of the viewBox.
 */
export function roughPath({
  seed,
  width = 1200,
  height = 60,
  base = 0.5,
  amp = 0.14,
  waves = 1.5,
  jitter = 0.12,
  step = 9,
}: RoughOptions): string {
  const rand = mulberry32(seed);
  const phase = rand() * Math.PI * 2;
  const pts: string[] = [];

  for (let x = 0; x <= width; x += step * (0.6 + rand() * 0.8)) {
    const swell = Math.sin((x / width) * Math.PI * 2 * waves + phase) * amp;
    const y = height * (base + swell + (rand() - 0.5) * jitter);
    pts.push(`${x.toFixed(1)},${Math.max(0, Math.min(height, y)).toFixed(1)}`);
  }
  const last = height * (base + Math.sin(Math.PI * 2 * waves + phase) * amp);
  pts.push(`${width},${last.toFixed(1)}`);

  return `M0,${height} L${pts.join(" L")} L${width},${height} Z`;
}
