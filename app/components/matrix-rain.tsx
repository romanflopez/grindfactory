"use client";

import { useCallback, useEffect, useState } from "react";

type Character = {
  char: string;
  x: number;
  y: number;
  speed: number;
};

type Props = {
  charCount?: number;
  className?: string;
  activeColor?: string;
  minSpeed?: number;
  maxSpeed?: number;
};

export function MatrixRain({
  charCount = 300,
  className = "",
  activeColor = "#00ff00",
  minSpeed = 0.1,
  maxSpeed = 0.4,
}: Props) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set());

  const createCharacters = useCallback(() => {
    const allChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    const out: Character[] = [];
    for (let i = 0; i < charCount; i++) {
      out.push({
        char: allChars[Math.floor(Math.random() * allChars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: minSpeed + Math.random() * (maxSpeed - minSpeed),
      });
    }
    return out;
  }, [charCount, minSpeed, maxSpeed]);

  useEffect(() => {
    setCharacters(createCharacters());
  }, [createCharacters]);

  useEffect(() => {
    const update = () => {
      const next = new Set<number>();
      const n = Math.floor(Math.random() * 3) + 3;
      for (let i = 0; i < n; i++) {
        next.add(Math.floor(Math.random() * characters.length));
      }
      setActiveIndices(next);
    };
    const id = setInterval(update, 50);
    return () => clearInterval(id);
  }, [characters.length]);

  useEffect(() => {
    let raf: number;
    const allChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    const tick = () => {
      setCharacters((prev) =>
        prev.map((c) => ({
          ...c,
          y: c.y + c.speed,
          ...(c.y >= 100 && {
            y: -5,
            x: Math.random() * 100,
            char: allChars[Math.floor(Math.random() * allChars.length)],
          }),
        })),
      );
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      {characters.map((char, i) => {
        const isActive = activeIndices.has(i);
        return (
          <span
            key={i}
            className={`absolute text-xs transition-colors duration-100 ${
              isActive ? "text-base scale-125 z-10 font-bold animate-pulse" : "text-slate-600 font-light"
            }`}
            style={{
              left: `${char.x}%`,
              top: `${char.y}%`,
              color: isActive ? activeColor : undefined,
              transform: `translate(-50%, -50%) ${isActive ? "scale(1.25)" : "scale(1)"}`,
              textShadow: isActive
                ? "0 0 8px rgba(255,255,255,0.8), 0 0 12px rgba(255,255,255,0.4)"
                : "none",
              opacity: isActive ? 1 : 0.4,
              transition: "color 0.1s, transform 0.1s, text-shadow 0.1s",
              willChange: "transform, top",
              fontSize: "1.8rem",
            }}
          >
            {char.char}
          </span>
        );
      })}
    </div>
  );
}
