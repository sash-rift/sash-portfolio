import { Layout } from "@/components/Layout";
import content from "@/data/content.json";
import { Link } from "wouter";
import { ArrowRight, Globe, Zap } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  const { hero, projects, writing } = content;
  const featuredProjects = projects.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section - DARK MODE STRATEGIC BLOCK */}
      <section className="min-h-[90vh] flex flex-col justify-center relative bg-foreground text-background overflow-hidden border-b border-gold/20">
        {/* Dark Mode Grid Overlay */}
        <div className="absolute inset-0 grid-lines-dark opacity-20 pointer-events-none"></div>
        
        {/* Gold Accent Blob */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gold/10 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          {/* Top Technical Metadata */}
          <div className="flex justify-between items-start mb-20 opacity-60">
             <div className="font-technical text-xs tracking-widest text-gold flex items-center gap-2">
                <Zap className="w-3 h-3 fill-gold" />
                <span>POWER_ON</span>
             </div>
             <div className="font-technical text-xs text-right hidden md:block">
               SYS.V.2025.12<br/>
               <span className="text-gold">DARK_MODE: ACTIVE</span>
             </div>
          </div>

          <div className="max-w-5xl">
            <h1 className="font-editorial text-6xl md:text-8xl leading-[0.95] mb-8 text-balance -ml-1 text-white">
              {hero.headline}
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-end gap-12 max-w-3xl">
              <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed border-l-2 border-gold pl-6">
                {hero.subheadline}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link href={hero.cta_primary.link} className="group inline-flex items-center justify-center gap-2 bg-gold text-foreground px-8 py-4 font-technical text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-foreground transition-all shadow-[0_0_20px_rgba(255,174,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                  {hero.cta_primary.label} 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ticker */}
        <div className="absolute bottom-0 w-full border-t border-white/10 py-3 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6 font-technical text-[10px] uppercase tracking-widest text-white/40 flex justify-between">
            <span>Scroll for Archive</span>
            <span className="text-gold animate-pulse">● Live System</span>
          </div>
        </div>
      </section>

      {/* Featured Work Preview - Light Mode Return */}
      <section className="border-t border-border bg-background">
        <div className="container mx-auto px-6 py-6 border-b border-border/10">
          <div className="flex justify-between items-center">
             <h2 className="font-technical text-xs uppercase tracking-widest flex items-center gap-4">
              <span className="w-4 h-4 bg-foreground text-background flex items-center justify-center text-[8px] font-bold">01</span>
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
            <span className="font-editorial text-2xl italic group-hover:text-gold transition-colors">View All Projects</span>
            <span className="w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>
      </section>

      {/* Latest Writing Teaser - Dark Mode Return */}
      <section className="bg-[#0a0a0a] text-background py-24 relative overflow-hidden border-t border-gold/20">
        {/* Abstract shape */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <div className="mb-8 font-technical text-xs text-gold border border-gold/30 inline-block px-2 py-1 shadow-[0_0_10px_rgba(255,174,0,0.1)]">
                SECTION 02 // THOUGHTS
              </div>
              <h2 className="font-editorial text-5xl mb-6 leading-tight text-white">
                Latest<br/>Thinking
              </h2>
              <p className="text-white/60 text-lg mb-8 font-light">
                Musings on the intersection of media, automation, and the future of work.
              </p>
              <Link href="/writing" className="inline-flex items-center gap-2 text-gold border-b border-gold/30 pb-1 hover:text-white hover:border-white transition-colors font-technical text-xs tracking-widest uppercase">
                Read the Archive <Globe className="w-3 h-3" />
              </Link>
            </div>
            
            <div className="md:col-span-8 grid gap-8">
              {writing.slice(0, 2).map((article, i) => (
                <div key={article.id} className="group cursor-pointer border-t border-white/10 pt-8 hover:border-gold/50 transition-colors">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-white/40 font-technical text-xs tracking-widest block">{article.date}</span>
                    <span className="font-technical text-[10px] text-gold/50 group-hover:text-gold transition-colors">ART. 0{i+1}</span>
                  </div>
                  <h3 className="font-editorial text-3xl mb-3 text-white group-hover:text-gold transition-colors">{article.title}</h3>
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
