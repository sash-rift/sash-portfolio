import { Layout } from "@/components/Layout";
import content from "@/data/content.json";

export default function Writing() {
  const { writing } = content;

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 min-h-screen">
        <div className="flex items-center justify-between mb-16 border-b border-border pb-8">
           <h1 className="font-editorial text-6xl md:text-8xl">Writing</h1>
           <div className="text-right hidden md:block">
             <div className="font-technical text-xs tracking-widest uppercase text-muted-foreground">Archive_Vol_01</div>
             <div className="font-technical text-xs tracking-widest uppercase text-muted-foreground">Entries: {writing.length}</div>
           </div>
        </div>
        
        <div className="max-w-4xl space-y-0">
          {writing.map((article, index) => (
            <div key={article.id} className="group border-b border-border py-12 hover:bg-white/40 transition-colors -mx-4 px-4">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-technical text-xs text-primary/60">0{index + 1}</span>
                  <h2 className="font-editorial text-4xl group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                </div>
                <span className="font-technical text-xs uppercase tracking-widest text-muted-foreground mt-2 md:mt-0">{article.date}</span>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mb-6 ml-0 md:ml-8 font-light">
                {article.summary}
              </p>
              <div className="ml-0 md:ml-8">
                <a href="#" className="inline-block font-technical text-[10px] uppercase font-bold tracking-widest border border-foreground px-3 py-1 hover:bg-foreground hover:text-background transition-all">
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
