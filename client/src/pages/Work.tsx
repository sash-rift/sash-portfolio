import { Layout } from "@/components/Layout";
import content from "@/data/content.json";
import { ProjectCard } from "@/components/ProjectCard";

export default function Work() {
  const { projects } = content;

  return (
    <Layout>
      <div className="bg-foreground text-background py-20">
        <div className="container mx-auto px-6">
          <h1 className="font-editorial text-6xl md:text-8xl">Selected Work</h1>
          <p className="text-white/60 mt-6 max-w-xl text-lg">
            A collection of ventures, products, and experiments at the intersection of AI, automation, and media.
          </p>
        </div>
      </div>
      
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Layout>
  );
}
