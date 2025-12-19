import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/wrapped", label: "2025 Wrapped" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [location] = useLocation();

  // Determine if we need to show light text (dark bg) or dark text (light bg)
  // Home (/) starts dark. Wrapped (/wrapped) is fully dark. Writing is mostly light but footer is dark.
  // This is simple logic: Home and Wrapped use light text navigation primarily.
  // BUT: Navigation is sticky. So when we scroll on Home, we go from Dark -> Light sections.
  // Best approach: Glassmorphism that adapts, but keep text contrasting or neutral.
  // Given the mix, let's use a dynamic approach or a high-contrast standard.
  // Let's use standard foreground color but ensure the glass effect is strong.
  
  return (
    <nav className="border-b border-border/10 py-6 sticky top-0 bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-editorial text-2xl font-bold tracking-tight hover:text-gold transition-colors">
          S. Mohapatra
        </Link>
        
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "uppercase text-sm tracking-widest hover:text-gold transition-colors font-medium",
                location === link.href ? "text-primary border-b border-primary" : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          <Link href="/contact" className="uppercase text-xs font-bold border border-foreground px-3 py-1 hover:bg-foreground hover:text-background transition-colors">
            Menu
          </Link>
        </div>
      </div>
    </nav>
  );
}
