import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { FuturisticBackground } from "./FuturisticBackground";

const projects = [
  {
    title: "Nova Design System",
    description:
      "Built a scalable design system for B2B SaaS, reducing design-to-dev handoff time by 40%",
    metric: "+40% efficiency",
    image:
      "https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2MjE2NjA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "FinTech Mobile App",
    description:
      "Redesigned mobile banking experience, improving user satisfaction by 35%",
    metric: "+35% satisfaction",
    image:
      "https://images.unsplash.com/photo-1758411898471-fa144c487c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYyMTMyNDQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Enterprise Dashboard",
    description:
      "Created intuitive analytics platform that increased daily active users by 28%",
    metric: "+28% DAU",
    image:
      "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzYyMDc3MzY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "E-commerce Redesign",
    description:
      "Led complete UX overhaul resulting in 45% increase in conversion rates",
    metric: "+45% conversion",
    image:
      "https://images.unsplash.com/photo-1761305135173-616efff573b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjIxNzExOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <FuturisticBackground variant="mixed" intensity="medium" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-white mb-4">Featured Work</h2>
          <p className="text-[#B3B3B3]">
            Selected projects that demonstrate impact and design excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00B2FF] to-[#7B61FF] rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/[0.08] group-hover:border-[#00B2FF]/50 transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Metric badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#00B2FF]/30">
                    <span className="text-[#00B2FF]">{project.metric}</span>
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white">{project.title}</h3>
                    <ArrowRight className="w-5 h-5 text-[#00B2FF] transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <p className="text-[#B3B3B3]">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
