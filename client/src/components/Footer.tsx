import { site } from "@/data/site";

export function Footer() {
  const { links, contact } = site;
  const year = 2026;

  return (
    <footer className="border-t border-white/10 bg-[#15100a] text-[#efe7d8]">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <span className="font-mono text-xs text-[#efe7d8]/50">
            {contact.signoff}
          </span>
          <div className="flex gap-6 font-mono text-xs uppercase tracking-widest">
            <a href={`mailto:${links.email}`} className="text-[#efe7d8]/60 hover:text-gold transition-colors">
              Email
            </a>
            <a href={links.riftlab} target="_blank" rel="noopener noreferrer" className="text-[#efe7d8]/60 hover:text-gold transition-colors">
              Rift Lab
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#efe7d8]/60 hover:text-gold transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 font-mono text-[11px] text-[#efe7d8]/40 uppercase tracking-widest">
          © {year} Sash Mohapatra
        </div>
      </div>
    </footer>
  );
}
