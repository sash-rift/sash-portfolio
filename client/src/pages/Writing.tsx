import { Layout } from "@/components/Layout";
import content from "@/data/content.json";

export default function Writing() {
  const { writing } = content;

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 min-h-screen">
        <h1 className="font-editorial text-6xl mb-16">Writing & Thoughts</h1>
        
        <div className="max-w-4xl space-y-12">
          {writing.map((article) => (
            <div key={article.id} className="group border-b border-border pb-12">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h2 className="font-editorial text-4xl group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <span className="text-sm font-mono text-muted-foreground mt-2 md:mt-0">{article.date}</span>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mb-6">
                {article.summary}
              </p>
              <a href="#" className="inline-block uppercase text-xs font-bold tracking-widest border-b border-transparent hover:border-primary hover:text-primary transition-all pb-1">
                Read Article
              </a>
            </div>
          ))}
          
          <div className="py-12 text-center text-muted-foreground italic font-editorial">
            More archives coming soon...
          </div>
        </div>
      </div>
    </Layout>
  );
}
