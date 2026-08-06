// Original animated hero background — pure CSS, no video.
// Perspective grid floor + drifting orange glow. Respects prefers-reduced-motion.
export function HeroBg() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow hero-bg-glow-1" />
      <div className="hero-bg-glow hero-bg-glow-2" />
      <div className="hero-bg-scan" />
    </div>
  );
}
