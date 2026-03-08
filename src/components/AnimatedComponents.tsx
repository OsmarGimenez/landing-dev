import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform, useInView } from 'motion/react';

interface BaseProps {
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
}


// --- Counter Component ---
export const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = (totalMiliseconds / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

// --- Noise Component ---
export const Noise = () => (
  <div className="fixed inset-0 w-full h-full noise pointer-events-none z-[9999]" />
);

// --- Reveal Text Component ---
export const RevealText = ({ text, className = "" }: { text: string, className?: string, key?: React.Key }) => {
  const words = text.split(" ");
  
  return (
    <div className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: i * 0.05,
            ease: [0.2, 0.65, 0.3, 0.9]
          }}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

// --- Spotlight Card Component ---
export const SpotlightCard = ({ children, className = "" }: BaseProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isMobile) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const CardContent = (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isMobile && setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`spotlight-card group/card h-full ${className}`}
      style={{
        '--mouse-x': `${position.x}px`,
        '--mouse-y': `${position.y}px`,
      } as React.CSSProperties}
    >
      {!isMobile && <div className="spotlight-glow" style={{ opacity }} />}
      {!isMobile && <div className="border-glow" style={{ opacity }} />}
      <div className="relative z-20 h-full w-full">
        {children}
      </div>
    </div>
  );

  if (isMobile) return CardContent;

  return (
    <TiltCard className="h-full">
      {CardContent}
    </TiltCard>
  );
};

// --- Mouse Follower Background ---
export const MouseFollower = ({ theme }: { theme: 'light' | 'dark' }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [mouseX, mouseY]);

  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => theme === 'dark' 
      ? `radial-gradient(1200px circle at ${x}px ${y}px, rgba(30, 41, 59, 0.4), transparent 80%)`
      : `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 255, 255, 0.05), transparent 80%)`
  );

  if (isMobile) return null;

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background }}
    />
  );
};

// --- Grid Background ---
export const GridBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg" />
    </div>
  );
};

// --- Floating Shapes ---
export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[10%] left-[5%] w-32 h-32 border border-brand-border rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[40%] right-[10%] w-64 h-64 border border-brand-border rounded-3xl"
      />
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[20%] left-[15%] w-48 h-48 border border-brand-border rotate-45"
      />
    </div>
  );
};

// --- Magnetic Button Component ---
export const MagneticButton = ({ children, className = "" }: BaseProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Tilt Card Component ---
export const TiltCard = ({ children, className = "" }: BaseProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
