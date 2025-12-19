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

  return (
    <nav className="border-b border-border py-6 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-editorial text-2xl font-bold tracking-tight hover:text-primary transition-colors">
          S. Mohapatra
        </Link>
        
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "uppercase text-sm tracking-widest hover:text-primary transition-colors font-medium",
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
