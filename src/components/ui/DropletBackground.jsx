import React, { useEffect, useRef } from 'react';

const DropletBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let droplets = [];
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDroplets();
    };

    const initDroplets = () => {
      droplets = [];
      const count = Math.min(30, Math.floor(window.innerWidth / 50));
      for (let i = 0; i < count; i++) {
        droplets.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 30 + 10,
          opacity: Math.random() * 0.15 + 0.05,
          speed: Math.random() * 0.5 + 0.2,
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawDroplet = (droplet) => {
      ctx.beginPath();
      // Create teardrop/droplet shape
      ctx.moveTo(droplet.x, droplet.y - droplet.radius);
      ctx.quadraticCurveTo(
        droplet.x + droplet.radius * 0.8,
        droplet.y - droplet.radius * 0.5,
        droplet.x,
        droplet.y + droplet.radius * 0.8
      );
      ctx.quadraticCurveTo(
        droplet.x - droplet.radius * 0.8,
        droplet.y - droplet.radius * 0.5,
        droplet.x,
        droplet.y - droplet.radius
      );
      ctx.fillStyle = `rgba(16, 185, 129, ${droplet.opacity + Math.sin(droplet.pulse) * 0.05})`;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      droplets.forEach(droplet => {
        droplet.pulse += 0.02;
        droplet.y += droplet.speed;
        if (droplet.y - droplet.radius > canvas.height) {
          droplet.y = -droplet.radius;
          droplet.x = Math.random() * canvas.width;
        }
        drawDroplet(droplet);
      });
      
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-30" />;
};

export default DropletBackground;