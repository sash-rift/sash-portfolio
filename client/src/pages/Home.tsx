import { Layout } from "@/components/Layout";
import content from "@/data/content.json";
import { Link } from "wouter";
import { ArrowRight, Globe } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const { hero, projects, writing } = content;
  const featuredProjects = projects.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center container mx-auto px-6 py-20 relative">
        {/* Background typographic elements */}
        <div className="absolute top-20 right-6 font-technical text-xs text-muted-foreground/30 hidden md:block text-right">
          SYS.V.2025.12<br/>
          R_MODE: ON
        </div>

        <div className="max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
             <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
             <span className="font-technical text-xs tracking-widest uppercase">System Online</span>
          </div>
          
          <h1 className="font-editorial text-7xl md:text-9xl leading-[0.95] mb-8 text-balance -ml-1">
            {hero.headline}
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end gap-12 max-w-3xl">
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              {hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href={hero.cta_primary.link} className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 font-technical text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                {hero.cta_primary.label} 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="border-t border-border">
        <div className="container mx-auto px-6 py-6 border-b border-border/10">
          <div className="flex justify-between items-center">
             <h2 className="font-technical text-xs uppercase tracking-widest flex items-center gap-4">
              <span className="w-4 h-4 border border-foreground flex items-center justify-center text-[8px]">01</span>
              Selected Works
            </h2>
            <span className="font-technical text-[10px] text-muted-foreground">INDEX: 01—03</span>
          </div>
        </div>
        <div>
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="container mx-auto px-6 py-16 flex justify-center">
          <Link href="/work" className="group flex flex-col items-center gap-2">
            <span className="font-editorial text-2xl italic group-hover:text-primary transition-colors">View All Projects</span>
            <span className="w-full h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>
      </section>

      {/* Latest Writing Teaser */}
      <section className="bg-foreground text-background py-24 relative overflow-hidden">
        {/* Abstract shape */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <div className="mb-8 font-technical text-xs text-white/50 border border-white/20 inline-block px-2 py-1">
                SECTION 02 // THOUGHTS
              </div>
              <h2 className="font-editorial text-5xl mb-6 leading-tight">
                Latest<br/>Thinking
              </h2>
              <p className="text-white/60 text-lg mb-8 font-light">
                Musings on the intersection of media, automation, and the future of work.
              </p>
              <Link href="/writing" className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:text-primary hover:border-primary transition-colors font-technical text-xs tracking-widest uppercase">
                Read the Archive <Globe className="w-3 h-3" />
              </Link>
            </div>
            
            <div className="md:col-span-8 grid gap-8">
              {writing.slice(0, 2).map((article, i) => (
                <div key={article.id} className="group cursor-pointer border-t border-white/10 pt-8 hover:border-primary/50 transition-colors">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-primary font-technical text-xs tracking-widest block">{article.date}</span>
                    <span className="font-technical text-[10px] text-white/30">ART. 0{i+1}</span>
                  </div>
                  <h3 className="font-editorial text-3xl mb-3 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-white/60 text-sm max-w-xl font-light">{article.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
