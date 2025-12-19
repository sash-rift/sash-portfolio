import { Layout } from "@/components/Layout";
import content from "@/data/content.json";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const { hero, projects, writing } = content;
  const featuredProjects = projects.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <h1 className="font-editorial text-6xl md:text-8xl leading-[1.1] mb-8 text-balance">
            {hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
            {hero.subheadline}
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href={hero.cta_primary.link} className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-bold uppercase tracking-wide hover:bg-primary transition-colors">
              {hero.cta_primary.label} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href={hero.cta_secondary.link} className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-4 font-bold uppercase tracking-wide hover:bg-card hover:border-primary hover:text-primary transition-colors">
              {hero.cta_secondary.label}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="border-t border-border">
        <div className="container mx-auto px-6 py-8">
          <h2 className="text-xs uppercase tracking-widest font-bold mb-8 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-foreground"></span>
            Selected Works
          </h2>
        </div>
        <div>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="container mx-auto px-6 py-12 flex justify-center">
          <Link href="/work" className="font-editorial text-xl italic hover:text-primary underline decoration-1 underline-offset-4 decoration-muted-foreground hover:decoration-primary transition-colors">
            View All Projects
          </Link>
        </div>
      </section>

      {/* Latest Writing Teaser */}
      <section className="bg-foreground text-background py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-editorial text-5xl mb-6">Latest Thinking</h2>
              <p className="text-white/60 text-lg max-w-md mb-8">
                Musings on the intersection of media, automation, and the future of work.
              </p>
              <Link href="/writing" className="text-white border-b border-white pb-1 hover:text-primary hover:border-primary transition-colors uppercase text-sm tracking-widest">
                Read the Archive
              </Link>
            </div>
            <div className="space-y-8">
              {writing.slice(0, 2).map((article) => (
                <div key={article.id} className="group cursor-pointer">
                  <span className="text-primary text-xs uppercase tracking-widest mb-2 block">{article.date}</span>
                  <h3 className="font-editorial text-2xl mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-white/60 text-sm">{article.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
