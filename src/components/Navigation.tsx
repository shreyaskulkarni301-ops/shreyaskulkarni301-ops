import { motion } from "motion/react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-[#00B2FF]/10 shadow-[0_4px_20px_rgba(0,178,255,0.1)]"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Work", id: "projects" },
              { label: "About", id: "about" },
              { label: "Case Study", id: "case-study" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() =>
                  document
                    .getElementById(link.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-[#B3B3B3] hover:text-[#00B2FF] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            size="sm"
            className="bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] hover:shadow-[0_0_20px_rgba(0,178,255,0.4)] transition-all duration-300"
            onClick={() =>
              (window.location.href = "mailto:shreyas@example.com")
            }
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
