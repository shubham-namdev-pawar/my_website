import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import GrainOverlay from "./GrainOverlay";
import AmbientGlow from "./AmbientGlow";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Ambient background effects */}
      <AmbientGlow />
      <GrainOverlay />

      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p
          className="mb-6 text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground/70"
          variants={itemVariants}
        >
          Welcome — glad you're here
        </motion.p>

        {/* Name */}
        <motion.h1
          className="mb-4 text-5xl font-semibold tracking-[-0.03em] text-foreground text-glow sm:text-6xl md:text-7xl lg:text-8xl"
          variants={itemVariants}
        >
          Alex Chen
        </motion.h1>

        {/* Role */}
        <motion.p
          className="mb-10 text-lg font-light tracking-wide text-muted-foreground sm:text-xl"
          variants={itemVariants}
        >
          Backend & Cloud Engineer
        </motion.p>

        {/* Quote */}
        <motion.div
          className="mb-14 max-w-lg"
          variants={itemVariants}
        >
          <p className="text-base leading-relaxed text-muted-foreground/60 font-light italic">
            "I build systems designed to be forgotten — infrastructure so reliable,
            you never think about it."
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <SocialLinks />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground/40">
            Scroll
          </span>
          <motion.div
            className="h-8 w-[1px] bg-gradient-to-b from-muted-foreground/30 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;