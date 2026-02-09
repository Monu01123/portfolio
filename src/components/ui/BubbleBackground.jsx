import React, { useMemo } from 'react';

const BubbleBackground = () => {
  const bubbles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      size: Math.random() * 80 + 20, // 20px to 100px
      left: Math.random() * 100, // 0% to 100%
      delay: Math.random() * 20, // 0s to 20s delay
      duration: Math.random() * 10 + 10, // 10s to 20s duration
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
            opacity: Math.random() * 0.3 + 0.1, // Random opacity
          }}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;
