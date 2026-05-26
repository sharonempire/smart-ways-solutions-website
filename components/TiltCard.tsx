"use client";
import { useRef, useState, CSSProperties } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** max tilt degrees — default 8 */
  maxTilt?: number;
  /** perspective distance — default 700 */
  perspective?: number;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  perspective = 700,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current!.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -maxTilt, y: dx * maxTilt, scale: 1.03 });
  }

  function onMouseLeave() {
    setTilt({ x: 0, y: 0, scale: 1 });
  }

  const style: CSSProperties = {
    transform: `perspective(${perspective}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.scale})`,
    transition:
      tilt.x === 0 && tilt.y === 0
        ? "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)"
        : "transform 0.12s ease-out",
    willChange: "transform",
    transformStyle: "preserve-3d",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
