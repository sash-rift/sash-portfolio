import content from "@/data/content.json";
import { Link } from "wouter";

export function Footer() {
  const { profile } = content;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-20 bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="font-editorial text-2xl mb-2">{profile.name}</h3>
            <p className="text-muted-foreground text-sm max-w-md">{profile.tagline}</p>
          </div>
          
          <div className="flex gap-6">
            <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground uppercase tracking-widest">
          <span>&copy; {currentYear} Sash Mohapatra</span>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/work" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
