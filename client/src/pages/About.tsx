import { Layout } from "@/components/Layout";
import content from "@/data/content.json";
import portraitImage from "@assets/stock_images/man_portrait_black_a_318011a5.jpg";

export default function About() {
  const { profile } = content;

  return (
    <Layout>
      <section className="container mx-auto px-6 py-20 relative">
        <div className="absolute top-0 right-6 h-full w-px bg-border/10 hidden md:block"></div>
        
        <div className="grid md:grid-cols-12 gap-12">
          {/* Main Bio */}
          <div className="md:col-span-8 relative">
             <div className="font-technical text-xs text-muted-foreground mb-8">
               FILE: PROFILE_DATA // <span className="text-primary">ACTIVE</span>
             </div>
            
            <h1 className="font-editorial text-6xl md:text-7xl mb-12 leading-[0.9]">
              {profile.tagline}
            </h1>
            <div className="prose prose-lg prose-headings:font-editorial max-w-none">
              <p className="text-2xl font-light leading-relaxed mb-8 border-l-2 border-primary pl-6">
                {profile.bio}
              </p>
              <div className="columns-1 md:columns-2 gap-12 space-y-8">
                <div>
                  <h3 className="font-technical text-xs tracking-widest uppercase mb-4 border-b border-border pb-2">Background_Log</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-mono">
                    {">"} Microsoft/Azure AI Infrastructure<br/>
                    {">"} Enterprise Systems Engineering<br/>
                    {">"} Consumer Application Dev<br/>
                    {">"} Media Ecosystem Architecture
                  </p>
                </div>
                <div>
                  <h3 className="font-technical text-xs tracking-widest uppercase mb-4 border-b border-border pb-2">Focus_Areas</h3>
                  <ul className="text-muted-foreground text-sm space-y-2 list-none p-0">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div> Media Ecosystems</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div> Automated Workflows</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div> AI Education & Strategy</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-primary"></div> Operational Efficiency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Stats */}
          <div className="md:col-span-4 md:pl-12">
            <div className="sticky top-32 space-y-12">
              
              {/* Portrait Image Block */}
              <div className="relative group">
                {/* Image Frame */}
                <div className="border-2 border-border p-1 bg-background relative z-10">
                  <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                    <img 
                      src={portraitImage} 
                      alt="Sash Mohapatra" 
                      className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                    {/* Technical overlays on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white text-[10px] font-technical hidden group-hover:block animate-in fade-in slide-in-from-bottom-2">
                      IMG_REF: SM_2025<br/>
                      LOC: SEATTLE, WA
                    </div>
                  </div>
                </div>
                
                {/* Offset Decorative Border */}
                <div className="absolute top-4 -right-4 w-full h-full border border-primary/30 -z-0"></div>
                
                {/* Caption */}
                <div className="flex justify-between items-end mt-3 border-b border-border/20 pb-2">
                  <span className="font-technical text-[10px] uppercase tracking-widest text-muted-foreground">Subject</span>
                  <span className="font-editorial italic text-sm">Sash Mohapatra</span>
                </div>
              </div>

              {/* Stats Block */}
              <div className="border border-border p-6 bg-white/50 relative overflow-hidden group hover:border-primary transition-colors">
                <div className="absolute top-0 right-0 p-2 font-technical text-[10px] text-muted-foreground">STAT_01</div>
                <span className="block text-6xl font-editorial font-bold text-primary mb-2">10+</span>
                <span className="font-technical text-xs tracking-widest uppercase">Years in Tech</span>
              </div>
              
              <div className="border border-border p-6 bg-white/50 relative overflow-hidden group hover:border-primary transition-colors">
                 <div className="absolute top-0 right-0 p-2 font-technical text-[10px] text-muted-foreground">STAT_02</div>
                <span className="block text-6xl font-editorial font-bold text-primary mb-2">3+</span>
                <span className="font-technical text-xs tracking-widest uppercase">Ventures Founded</span>
              </div>
              
              <div className="pt-8 border-t border-border mt-12">
                <h4 className="font-editorial text-2xl mb-4">Speaking & Advisory</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Available for talks on AI implementation, automation in traditional business, and the future of media.
                </p>
                <a href={`mailto:${profile.email}`} className="inline-block border border-foreground px-4 py-2 font-technical text-xs hover:bg-foreground hover:text-background transition-colors uppercase tracking-widest">
                  Request Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
