import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";

interface ProjectProps {
  project: {
    id: string;
    title: string;
    category: string;
    description: string;
    year: string;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectProps) {
  const displayIndex = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative border-b border-border py-12 md:py-16 hover:bg-[#0a0a0a] transition-colors duration-500 px-4 overflow-hidden"
    >
      {/* Technical Hover Reveal Background - Now Dark Mode with Gold Grid */}
      <div className="absolute inset-0 bg-[#0a0a0a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      <div className="absolute inset-0 grid-lines-dark opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
        <div className="md:col-span-3 flex flex-col gap-2">
           <span className="font-technical text-xs text-primary/80 group-hover:text-gold transition-colors">FIG. {displayIndex}</span>
           <span className="font-technical text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-white/40 transition-colors">
             {project.year} — {project.category}
           </span>
        </div>
        
        <div className="md:col-span-6">
          <h3 className="font-editorial text-4xl md:text-6xl font-normal mb-4 group-hover:text-white transition-colors cursor-pointer">
            {project.title}
          </h3>
          <p className="text-lg text-muted-foreground max-w-xl font-light group-hover:text-white/60 transition-colors">
            {project.description}
          </p>
        </div>
        
        <div className="md:col-span-3 flex justify-end">
          <div className="relative">
            <div className="w-16 h-16 border border-foreground/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
              <ArrowUpRight className="w-6 h-6" />
            </div>
            {/* Decorative crosshairs */}
            <Plus className="absolute -top-1.5 -left-1.5 w-3 h-3 text-foreground/30 group-hover:text-gold transition-colors" />
            <Plus className="absolute -bottom-1.5 -right-1.5 w-3 h-3 text-foreground/30 group-hover:text-gold transition-colors" />
          </div>
        </div>
      </div>
      
      <Link href="/work" className="absolute inset-0 z-20" aria-label={`View ${project.title}`}></Link>
    </motion.div>
  );
}
