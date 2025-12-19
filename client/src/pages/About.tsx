import { Layout } from "@/components/Layout";
import content from "@/data/content.json";

export default function About() {
  const { profile } = content;

  return (
    <Layout>
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Main Bio */}
          <div className="md:col-span-8">
            <h1 className="font-editorial text-6xl md:text-7xl mb-12">
              {profile.tagline}
            </h1>
            <div className="prose prose-lg prose-headings:font-editorial max-w-none">
              <p className="text-2xl font-light leading-relaxed mb-8">
                {profile.bio}
              </p>
              <div className="columns-1 md:columns-2 gap-12 space-y-8">
                <div>
                  <h3 className="uppercase text-xs tracking-widest font-bold mb-4 border-b border-border pb-2">Background</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    With a foundation in Microsoft/Azure AI technology, I've spent years understanding the infrastructure that powers our digital world. Now, I leverage that deep technical knowledge to build consumer-facing applications and media ecosystems.
                  </p>
                </div>
                <div>
                  <h3 className="uppercase text-xs tracking-widest font-bold mb-4 border-b border-border pb-2">Focus Areas</h3>
                  <ul className="text-muted-foreground text-sm space-y-2 list-none p-0">
                    <li>— Media Ecosystems</li>
                    <li>— Automated Workflows</li>
                    <li>— AI Education & Strategy</li>
                    <li>— Operational Efficiency</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Stats */}
          <div className="md:col-span-4 md:border-l border-border md:pl-12">
            <div className="sticky top-32 space-y-12">
              <div>
                <span className="block text-6xl font-editorial font-bold text-primary mb-2">10+</span>
                <span className="uppercase text-xs tracking-widest font-bold">Years in Tech</span>
              </div>
              <div>
                <span className="block text-6xl font-editorial font-bold text-primary mb-2">3+</span>
                <span className="uppercase text-xs tracking-widest font-bold">Ventures Founded</span>
              </div>
              
              <div className="pt-12 border-t border-border">
                <h4 className="font-editorial text-2xl mb-4">Speaking & Advisory</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Available for talks on AI implementation, automation in traditional business, and the future of media.
                </p>
                <a href={`mailto:${profile.email}`} className="text-primary hover:text-foreground transition-colors font-bold underline">
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
