import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import SocialLink from "./SocialLink";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-foreground/3 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-t from-foreground/2 to-transparent blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 flex max-w-2xl flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p
          className="mb-8 text-sm font-medium tracking-widest text-muted-foreground uppercase"
          variants={itemVariants}
        >
          Welcome, glad you're here
        </motion.p>

        {/* Name */}
        <motion.h1
          className="mb-6 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl"
          variants={itemVariants}
        >
          Alex Chen
        </motion.h1>

        {/* Role */}
        <motion.p
          className="mb-8 text-lg text-muted-foreground sm:text-xl"
          variants={itemVariants}
        >
          Backend & Cloud Engineer
        </motion.p>

        {/* Quote */}
        <motion.blockquote
          className="mb-12 max-w-md border-l-2 border-border/50 pl-6 text-left"
          variants={itemVariants}
        >
          <p className="text-base leading-relaxed text-muted-foreground/80 italic">
            "Build systems that are boring to operate. The best infrastructure is
            the one you never have to think about."
          </p>
        </motion.blockquote>

        {/* Social Links */}
        <motion.div
          className="flex items-center gap-4"
          variants={itemVariants}
        >
          <SocialLink
            href="https://github.com"
            icon={<Github size={20} />}
            label="GitHub"
          />
          <SocialLink
            href="https://linkedin.com"
            icon={<Linkedin size={20} />}
            label="LinkedIn"
          />
          <SocialLink
            href="https://x.com"
            icon={<Twitter size={20} />}
            label="X (Twitter)"
          />
        </motion.div>

        {/* Subtle scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="h-8 w-5 rounded-full border border-border/30"
            initial={{ opacity: 0.5 }}
          >
            <motion.div
              className="mx-auto mt-2 h-2 w-1 rounded-full bg-muted-foreground/50"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
