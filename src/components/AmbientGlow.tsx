import { motion } from "framer-motion";

const AmbientGlow = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Top center glow */}
      <motion.div
        className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div 
          className="h-full w-full rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(220 60% 50% / 0.08) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Bottom accent glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
      >
        <div 
          className="h-full w-full rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(280 60% 50% / 0.05) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Animated floating orb - very subtle */}
      <motion.div
        className="absolute left-[20%] top-[30%] h-[300px] w-[300px]"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div 
          className="h-full w-full rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle at center, hsl(200 70% 50% / 0.04) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Right side orb */}
      <motion.div
        className="absolute right-[15%] top-[50%] h-[250px] w-[250px]"
        animate={{
          y: [0, 15, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div 
          className="h-full w-full rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle at center, hsl(260 60% 50% / 0.03) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Grid overlay - extremely subtle */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(0 0% 100%) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(0 0% 100%) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
};

export default AmbientGlow;