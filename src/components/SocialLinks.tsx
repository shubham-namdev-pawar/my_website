import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative flex h-12 w-12 items-center justify-center"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-full bg-foreground/5"
        initial={{ scale: 0.8, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Border */}
      <div className="absolute inset-0 rounded-full border border-border/40 transition-colors duration-300 group-hover:border-foreground/20" />
      
      {/* Icon */}
      <span className="relative z-10 text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
        {icon}
      </span>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-[-2px] rounded-full bg-gradient-to-b from-foreground/10 to-transparent blur-sm" />
      </div>
    </motion.a>
  );
};

const SocialLinks = () => {
  const links = [
    { href: "https://github.com/Shubhtistic", icon: <Github size={18} strokeWidth={1.5} />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/shubhtistic/", icon: <Linkedin size={18} strokeWidth={1.5} />, label: "LinkedIn" },
    { href: "https://www.instagram.com/shubhtistic", icon: <Instagram size={18} strokeWidth={1.5} />, label: "Instagram" },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.2 + index * 0.1,
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <SocialLink {...link} />
        </motion.div>
      ))}
    </div>
  );
};

export default SocialLinks;
