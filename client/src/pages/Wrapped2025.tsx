import { Layout } from "@/components/Layout";
import content from "@/data/content.json";
import { WrappedItem } from "@/components/WrappedItem";

export default function Wrapped2025() {
  const { wrapped2025 } = content;

  return (
    <Layout>
      <div className="bg-foreground text-background py-24 mb-12 relative overflow-hidden">
         {/* Technical grid overlay */}
         <div className="absolute inset-0 opacity-10 pointer-events-none" 
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
         </div>
         
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 border border-white/30 px-3 py-1 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary animate-pulse rounded-full"></div>
            <span className="font-technical text-xs text-white uppercase tracking-widest">Report Gen: Complete</span>
          </div>
          
          <h1 className="font-editorial text-7xl md:text-9xl mb-6 text-white">2025 Wrapped</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/60 font-light">
            A chronological look at the milestones, launches, and learning curves that defined the year.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24 relative">
        {/* Central timeline line - Dotted technical style */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px border-r border-dashed border-foreground/30 -translate-x-1/2" />
        <div className="md:hidden absolute left-0 top-0 bottom-0 w-px border-r border-dashed border-foreground/30" />
        
        <div className="space-y-0">
          {wrapped2025.map((item, index) => (
            <WrappedItem key={index} item={item} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-24 border-t border-border pt-12 max-w-2xl mx-auto">
          <div className="font-technical text-xs text-muted-foreground mb-4">END_OF_REPORT // SEQUENCE_COMPLETE</div>
          <h3 className="font-editorial text-4xl mb-6">Ready for 2026?</h3>
          <p className="text-muted-foreground mb-8">The best is yet to come.</p>
        </div>
      </div>
    </Layout>
  );
}
