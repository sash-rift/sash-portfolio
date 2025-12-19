import { Layout } from "@/components/Layout";
import content from "@/data/content.json";
import { WrappedItem } from "@/components/WrappedItem";

export default function Wrapped2025() {
  const { wrapped2025 } = content;

  return (
    <Layout>
      {/* FULL PAGE DARK MODE STRATEGY FOR WRAPPED */}
      <div className="bg-[#050505] text-white min-h-screen pb-24 relative overflow-hidden">
         {/* Gold Technical grid overlay */}
         <div className="absolute inset-0 opacity-10 pointer-events-none" 
              style={{ backgroundImage: 'linear-gradient(rgba(255,174,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,174,0,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
         </div>
         
         {/* Gold Glow at top */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold/10 blur-[100px] pointer-events-none rounded-full"></div>

        {/* Header */}
        <div className="container mx-auto px-6 pt-24 pb-16 text-center relative z-10">
          <div className="inline-flex items-center gap-2 border border-gold/30 px-3 py-1 rounded-full mb-6 bg-gold/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-gold animate-pulse rounded-full shadow-[0_0_10px_#ffae00]"></div>
            <span className="font-technical text-xs text-gold uppercase tracking-widest">Year End Report</span>
          </div>
          
          <h1 className="font-editorial text-7xl md:text-9xl mb-6 text-white text-glow-gold">2025 Wrapped</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/60 font-light">
            A chronological look at the milestones, launches, and learning curves.
          </p>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Central timeline line - Gold Dashed */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px border-r border-dashed border-gold/20 -translate-x-1/2" />
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-px border-r border-dashed border-gold/20" />
          
          <div className="space-y-0">
            {wrapped2025.map((item, index) => (
              <WrappedItem key={index} item={item} index={index} variant="dark" />
            ))}
          </div>
          
          <div className="text-center mt-24 border-t border-gold/20 pt-12 max-w-2xl mx-auto">
            <div className="font-technical text-xs text-gold/60 mb-4">END_OF_REPORT // SEQUENCE_COMPLETE</div>
            <h3 className="font-editorial text-4xl mb-6 text-white">Ready for 2026?</h3>
            <p className="text-white/50 mb-8">The best is yet to come.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
