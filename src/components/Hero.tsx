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
          Shubham Pawar
        </motion.h1>

        {/* Role */}
        <motion.p
          className="mb-10 text-lg font-light tracking-wide text-muted-foreground sm:text-xl"
          variants={itemVariants}
        >
          Backend Engineer
        </motion.p>

        {/* Quote */}
        <motion.div
          className="mb-14 max-w-lg"
          variants={itemVariants}
        >
          <p className="text-base leading-relaxed text-muted-foreground/60 font-light italic">
            "There are two methods in software design: make it so simple that there are obviously no deficiencies, or make it so complicated that there are no obvious deficiencies."
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <SocialLinks />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;