"use client";
import { useState, useEffect } from "react";

const AnimatedBackground = () => {
  // 1. Use state for particles, initialize as an empty array
  const [particles, setParticles] = useState([]);
  
  // Ripple state
  const [ripples, setRipples] = useState([]);

  // 2. Generate particles only on the client after the component mounts
  useEffect(() => {
    const generatedParticles = [...Array(20)].map(() => ({
      left: `${(Math.random() * 100).toFixed(2)}%`,
      top: `${(Math.random() * 100).toFixed(2)}%`,
      delay: `${(Math.random() * 3).toFixed(2)}s`,
      duration: `${(3 + Math.random() * 3).toFixed(2)}s`,
      moveX: `${(Math.random() * 20 - 10).toFixed(2)}px`,
      moveY: `${(Math.random() * 20 - 10).toFixed(2)}px`,
    }));
    setParticles(generatedParticles);
  }, []); // Empty dependency array ensures this runs only once on mount

  // This effect for ripples is already correct
  useEffect(() => {
    const handleMouseMove = (e) => {
      const newRipple = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };
      setRipples((prev) => [...prev, newRipple]);

      // remove after animation ends
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        @keyframes floatMove {
          0% { transform: translate(0, 0); opacity: 0.2; }
          50% { transform: translate(var(--move-x), var(--move-y)); opacity: 0.5; }
          100% { transform: translate(0, 0); opacity: 0.2; }
        }

        @keyframes ripple {
          0% { transform: scale(0.2); opacity: 0.6; }
          100% { transform: scale(3); opacity: 0; }
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Particles */}
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            style={{
              left: p.left,
              top: p.top,
              animationName: "floatMove",
              animationDuration: p.duration,
              animationDelay: p.delay,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDirection: "alternate",
              boxShadow: "0 0 6px 2px rgba(59, 130, 246, 0.7)",
              "--move-x": p.moveX,
              "--move-y": p.moveY,
            }}
          />
        ))}

        {/* Cursor Ripples */}
        {ripples.map((r) => (
          <span
            key={r.id}
            className="absolute w-10 h-10 border border-blue-400 rounded-full"
            style={{
              left: r.x - 20,
              top: r.y - 20,
              animation: "ripple 1s ease-out forwards",
              boxShadow: "0 0 12px rgba(59,130,246,0.7)",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default AnimatedBackground;