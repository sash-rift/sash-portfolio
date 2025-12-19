import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative border-b border-border py-12 md:py-16 hover:bg-card/50 transition-colors px-4"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-3 text-xs uppercase tracking-widest text-muted-foreground font-medium">
          {project.year} — {project.category}
        </div>
        
        <div className="md:col-span-6">
          <h3 className="font-editorial text-4xl md:text-5xl font-medium mb-4 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-lg text-muted-foreground max-w-xl">
            {project.description}
          </p>
        </div>
        
        <div className="md:col-span-3 flex justify-end">
          <div className="w-12 h-12 rounded-full border border-foreground flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all transform group-hover:-rotate-45">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
      
      <Link href="/work" className="absolute inset-0 z-10" aria-label={`View ${project.title}`}></Link>
    </motion.div>
  );
}
