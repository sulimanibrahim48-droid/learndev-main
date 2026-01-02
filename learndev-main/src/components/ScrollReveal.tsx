import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
  delay?: number;
}

const ScrollReveal = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-left":
        return "scroll-fade-left";
      case "fade-right":
        return "scroll-fade-right";
      case "scale":
        return "scroll-scale";
      default:
        return "scroll-hidden";
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${isVisible ? "scroll-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
