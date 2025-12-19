import { Layout } from "@/components/Layout";
import content from "@/data/content.json";
import { WrappedItem } from "@/components/WrappedItem";

export default function Wrapped2025() {
  const { wrapped2025 } = content;

  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-24 mb-12">
        <div className="container mx-auto px-6 text-center">
          <span className="font-mono text-sm border border-white/30 px-3 py-1 rounded-full mb-6 inline-block">Year in Review</span>
          <h1 className="font-editorial text-7xl md:text-9xl mb-6">2025 Wrapped</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-80">
            A chronological look at the milestones, launches, and learning curves that defined the year.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24 relative">
        {/* Central timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
        <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-border" />
        
        <div className="space-y-0">
          {wrapped2025.map((item, index) => (
            <WrappedItem key={index} item={item} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-24">
          <h3 className="font-editorial text-4xl mb-6">Ready for 2026?</h3>
          <p className="text-muted-foreground mb-8">The best is yet to come.</p>
        </div>
      </div>
    </Layout>
  );
}
