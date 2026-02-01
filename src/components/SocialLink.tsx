import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/50 text-muted-foreground transition-all duration-300 hover:border-foreground/30 hover:bg-card hover:text-foreground"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-foreground/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.a>
  );
};

export default SocialLink;
