import React, { useEffect, useRef, useState } from 'react';

const WaveRipple = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ripples = useRef([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const addRipple = (x, y) => {
      ripples.current.push({
        x, y,
        radius: 5,
        maxRadius: 150,
        alpha: 0.8,
        life: 1,
        speed: 3
      });
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      addRipple(e.clientX, e.clientY);
    };
    
    const handleClick = (e) => {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          addRipple(e.clientX + (Math.random() - 0.5) * 50, e.clientY + (Math.random() - 0.5) * 50);
        }, i * 100);
      }
    };
    
    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background wave grid
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 10) {
          const y = Math.sin(x * 0.005 + Date.now() * 0.002) * 20 + Math.sin(x * 0.01) * 10;
          if (x === 0) ctx.moveTo(x, canvas.height / 2 + y + i % canvas.height);
          else ctx.lineTo(x, canvas.height / 2 + y + i % canvas.height);
        }
        ctx.stroke();
      }
      
      // Draw and update ripples
      ripples.current = ripples.current.filter(ripple => {
        ripple.radius += ripple.speed;
        ripple.alpha -= 0.01;
        ripple.life -= 0.02;
        
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(16, 185, 129, ${ripple.alpha * 0.6})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius * 0.6, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(6, 182, 212, ${ripple.alpha * 0.4})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        return ripple.life > 0;
      });
      
      animationId = requestAnimationFrame(drawWaves);
    };
    
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    resize();
    drawWaves();
    
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
      style={{ opacity: 0.4 }}
    />
  );
};

export default WaveRipple;