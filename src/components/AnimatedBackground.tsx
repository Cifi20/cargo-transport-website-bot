import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }>
  >([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    const handleResize = () => {
      createParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: particle.x + particle.speedX,
          y: particle.y + particle.speedY,
          x:
            particle.x > window.innerWidth
              ? 0
              : particle.x < 0
                ? window.innerWidth
                : particle.x,
          y:
            particle.y > window.innerHeight
              ? 0
              : particle.y < 0
                ? window.innerHeight
                : particle.y,
        })),
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-blue-300 rounded-full animate-pulse"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transition: "all 0.05s linear",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/20 to-orange-50/20 animate-gradient-x"></div>
    </div>
  );
};

export default AnimatedBackground;
