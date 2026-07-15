import { useState } from "react";

const links = [
  { href: "#thesis", label: "Thesis" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#projects", label: "Projects" },
  { href: "#background", label: "Background" },
  { href: "#contact", label: "Contact" },
];

const CAL = "https://cal.com/sash-mohapatra/chat-with-sash";
const RESUME = "/Sash-Mohapatra-Resume.pdf";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="border-b border-border sticky top-0 bg-background/85 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <a
          href="#top"
          onClick={close}
          className="font-mono text-sm tracking-tight text-foreground hover:text-primary transition-colors"
        >
          sash@rift <span className="text-primary">~</span> %
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CAL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest border border-foreground px-3 py-1.5 text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Book a call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden font-mono text-xs uppercase tracking-widest border border-foreground px-3 py-1.5 text-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-6 py-5 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="font-mono text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-3 border-t border-border">
              <a
                href={CAL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="font-mono text-xs uppercase tracking-widest border border-foreground px-4 py-2 text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Book a call
              </a>
              <a
                href={RESUME}
                download
                onClick={close}
                className="font-mono text-xs uppercase tracking-widest border border-foreground px-4 py-2 text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Résumé
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
