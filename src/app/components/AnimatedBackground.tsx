import { motion } from "motion/react";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#0A0A0A] to-gray-800"></div>
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-[#FF6A00] rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-15"
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 106, 0, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 106, 0, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#FF6A00] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export function LightBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Light Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50"></div>
      
      {/* Animated Orbs */}
      <motion.div
        className="absolute -top-48 -left-48 w-96 h-96 bg-[#FF6A00] rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border-2 border-[#FF6A00]/20 rounded-2xl rotate-12"
        animate={{
          rotate: [12, 32, 12],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 border-2 border-blue-500/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle, #FF6A00 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>
    </div>
  );
}
