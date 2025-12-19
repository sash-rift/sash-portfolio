import { Layout } from "@/components/Layout";
import content from "@/data/content.json";
import portraitImage from "@assets/stock_images/man_portrait_black_a_318011a5.jpg";
import { Zap } from "lucide-react";

export default function About() {
  const { profile } = content;

  return (
    <Layout>
      <section className="container mx-auto px-6 py-20 relative">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Main Bio - LIGHT SIDE (Storytelling) */}
          <div className="md:col-span-7 relative">
             <div className="font-technical text-xs text-muted-foreground mb-8 flex items-center gap-2">
               FILE: PROFILE_DATA // <span className="text-primary w-2 h-2 bg-primary rounded-full animate-pulse"></span> ACTIVE
             </div>
            
            <h1 className="font-editorial text-6xl md:text-7xl mb-12 leading-[0.9]">
              {profile.tagline}
            </h1>
            <div className="prose prose-lg prose-headings:font-editorial max-w-none">
              <p className="text-2xl font-light leading-relaxed mb-8 border-l-2 border-gold pl-6 text-foreground">
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
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gold"></div> Media Ecosystems</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gold"></div> Automated Workflows</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gold"></div> AI Education & Strategy</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-gold"></div> Operational Efficiency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Stats - DARK SIDE (Data/Tech) */}
          {/* Using a negative margin on mobile to span full width, or just a card style on desktop */}
          <div className="md:col-span-5 relative">
            <div className="sticky top-24">
              
              {/* Dark Card Container */}
              <div className="bg-[#0a0a0a] text-white p-8 border border-gold/20 relative overflow-hidden shadow-2xl">
                 {/* Dark Grid Background */}
                 <div className="absolute inset-0 grid-lines-dark opacity-20 pointer-events-none"></div>
                 {/* Gold Glow */}
                 <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gold/10 blur-[60px] rounded-full pointer-events-none"></div>

                 {/* Portrait Image Block */}
                <div className="relative group mb-12">
                  <div className="absolute -top-3 -right-3 font-technical text-[10px] text-gold/60">IMG_SEQ_01</div>
                  
                  {/* Image Frame */}
                  <div className="border border-gold/30 p-1 bg-black/50 relative z-10">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img 
                        src={portraitImage} 
                        alt="Sash Mohapatra" 
                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out"
                      />
                      {/* Technical overlays on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 text-gold text-[10px] font-technical hidden group-hover:block animate-in fade-in slide-in-from-bottom-2">
                        <Zap className="w-3 h-3 mb-1 fill-gold" />
                        ID: SASH_M<br/>
                        STATUS: ONLINE
                      </div>
                    </div>
                  </div>
                  
                  {/* Caption */}
                  <div className="flex justify-between items-end mt-3 border-b border-gold/20 pb-2">
                    <span className="font-technical text-[10px] uppercase tracking-widest text-white/40">Subject</span>
                    <span className="font-editorial italic text-sm text-gold">Sash Mohapatra</span>
                  </div>
                </div>

                {/* Stats Block - Dark Mode */}
                <div className="space-y-6">
                  <div className="group">
                    <div className="flex justify-between items-baseline mb-1">
                       <span className="font-technical text-[10px] text-white/40 group-hover:text-gold transition-colors">METRIC_01</span>
                       <span className="font-technical text-[10px] text-white/20">YEARS</span>
                    </div>
                    <div className="border-l-2 border-white/10 pl-4 group-hover:border-gold transition-colors">
                      <span className="block text-5xl font-editorial font-bold text-white group-hover:text-gold transition-colors">10+</span>
                      <span className="font-technical text-xs tracking-widest uppercase text-white/60">Years in Tech</span>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex justify-between items-baseline mb-1">
                       <span className="font-technical text-[10px] text-white/40 group-hover:text-gold transition-colors">METRIC_02</span>
                       <span className="font-technical text-[10px] text-white/20">VENTURES</span>
                    </div>
                    <div className="border-l-2 border-white/10 pl-4 group-hover:border-gold transition-colors">
                      <span className="block text-5xl font-editorial font-bold text-white group-hover:text-gold transition-colors">3+</span>
                      <span className="font-technical text-xs tracking-widest uppercase text-white/60">Ventures Founded</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-gold/10 mt-12">
                  <h4 className="font-editorial text-2xl mb-4 text-white">Advisory</h4>
                  <p className="text-sm text-white/50 mb-6 font-light">
                    Available for talks on AI implementation & automation.
                  </p>
                  <a href={`mailto:${profile.email}`} className="block w-full text-center border border-gold/50 text-gold px-4 py-3 font-technical text-xs hover:bg-gold hover:text-black transition-colors uppercase tracking-widest font-bold">
                    Connect
                  </a>
                </div>

              </div>
              
              {/* Decorative elements under the card */}
              <div className="mt-2 flex justify-between font-technical text-[10px] text-muted-foreground uppercase">
                <span>Data_Verified</span>
                <span>[ Encrypted ]</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
