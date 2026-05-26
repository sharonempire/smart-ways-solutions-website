"use client";
import { useEffect, useRef, useState, CSSProperties } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  /** delay in ms before starting the animation once visible */
  delay?: number;
  /** direction to slide from: up (default), left, right, none */
  from?: "up" | "left" | "right" | "none";
  /** threshold before triggering — 0 to 1 */
  threshold?: number;
}

const TRANSLATE: Record<string, string> = {
  up: "translateY(28px)",
  left: "translateX(-28px)",
  right: "translateX(28px)",
  none: "none",
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  from = "up",
  threshold = 0.15,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const hiddenStyle: CSSProperties = {
    opacity: 0,
    transform: TRANSLATE[from],
    transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
  };

  const visibleStyle: CSSProperties = {
    opacity: 1,
    transform: "none",
    transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
  };

  return (
    <div ref={ref} className={className} style={visible ? visibleStyle : hiddenStyle}>
      {children}
    </div>
  );
}
