// ─────────────────────────────────────────────────────────────────
// FadeIn.tsx  –  Scroll-triggered fade-in animation wrapper
// ─────────────────────────────────────────────────────────────────
import React from "react";
import { useInView } from "../hooks/hooks";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  style = {},
}: FadeInProps) {
  const [ref, visible] = useInView<HTMLDivElement>(0.1);

  const getTransform = () => {
    if (visible) return "translate(0, 0)";
    switch (direction) {
      case "left":
        return "translate(50px, 0)";
      case "right":
        return "translate(-50px, 0)";
      case "none":
        return "translate(0, 0)";
      default:
        return "translate(0, 44px)";
    }
  };

  const transition: string = `opacity 0.95s ease ${delay}s, transform 0.95s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: getTransform(),
        transition,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
