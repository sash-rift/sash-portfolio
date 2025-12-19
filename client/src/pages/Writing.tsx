import { Layout } from "@/components/Layout";
import content from "@/data/content.json";

export default function Writing() {
  const { writing } = content;

  return (
    <Layout>
      {/* Dark Header Section */}
      <div className="bg-[#0a0a0a] text-white py-20 border-b border-gold/20 relative overflow-hidden">
        {/* Abstract Gold Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute inset-0 grid-lines-dark opacity-10 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
               <div className="font-technical text-xs tracking-widest uppercase text-gold mb-4 inline-block border border-gold/30 px-3 py-1 rounded-full bg-gold/5">
                 Archive_Vol_01
               </div>
               <h1 className="font-editorial text-6xl md:text-8xl leading-[0.9]">
                 Writing &<br/>Thoughts
               </h1>
            </div>
            
            <div className="text-left md:text-right font-technical text-xs tracking-widest uppercase text-white/50">
              <div className="mb-2">Total Entries: <span className="text-white">{writing.length}</span></div>
              <div>Last Update: <span className="text-gold">DEC 2025</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 min-h-[60vh]">
        <div className="max-w-4xl space-y-0">
          {writing.map((article, index) => (
            <div key={article.id} className="group border-b border-border py-12 hover:bg-[#0a0a0a] hover:text-white transition-colors duration-300 -mx-4 px-6 relative overflow-hidden">
              {/* Hover Dark Background Reveal */}
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 relative z-10">
                <div className="flex items-baseline gap-6">
                  <span className="font-technical text-xs text-primary/60 group-hover:text-gold transition-colors">0{index + 1}</span>
                  <h2 className="font-editorial text-4xl group-hover:text-white transition-colors">
                    {article.title}
                  </h2>
                </div>
                <span className="font-technical text-xs uppercase tracking-widest text-muted-foreground group-hover:text-white/40 mt-2 md:mt-0">{article.date}</span>
              </div>
              
              <p className="text-lg text-muted-foreground group-hover:text-white/70 max-w-2xl mb-6 ml-0 md:ml-10 font-light relative z-10 transition-colors">
                {article.summary}
              </p>
              
              <div className="ml-0 md:ml-10 relative z-10">
                <a href="#" className="inline-block font-technical text-[10px] uppercase font-bold tracking-widest border border-foreground px-3 py-1 group-hover:border-gold group-hover:text-black group-hover:bg-gold transition-all">
                  Read Article
                </a>
              </div>
            </div>
          ))}
          
          <div className="py-12 text-center text-muted-foreground font-technical text-xs uppercase tracking-widest">
            // End of Archive
          </div>
        </div>
      </div>
    </Layout>
  );
}
