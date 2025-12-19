import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WrappedItemProps {
  item: {
    month: string;
    title: string;
    description: string;
    stat: string;
  };
  index: number;
  variant?: "light" | "dark";
}

export function WrappedItem({ item, index, variant = "light" }: WrappedItemProps) {
  const isDark = variant === "dark";

  return (
    <motion.div 
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0 py-12"
    >
      <div className={`md:flex items-center justify-between gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Month Marker - Absolute center on desktop */}
        <div className={cn(
          "hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 border items-center justify-center z-10 rotate-45",
          isDark ? "bg-black border-gold" : "bg-background border-foreground"
        )}>
          <div className={cn(
            "w-1 h-1 rounded-full",
            isDark ? "bg-gold shadow-[0_0_5px_#ffae00]" : "bg-primary"
          )} />
        </div>
        
        {/* Mobile Marker */}
        <div className={cn(
          "md:hidden absolute left-0 top-16 -translate-x-1/2 w-3 h-3 border rotate-45",
          isDark ? "bg-black border-gold" : "bg-background border-foreground"
        )} />

        {/* Content Side */}
        <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
          <span className={cn(
            "font-technical text-xs uppercase tracking-widest block mb-2",
            isDark ? "text-gold" : "text-primary"
          )}>{item.month}</span>
          <h3 className={cn(
            "font-editorial text-4xl mb-3",
            isDark ? "text-white" : "text-foreground"
          )}>{item.title}</h3>
          <p className={cn(
            "max-w-sm ml-0 md:inline-block font-light leading-relaxed",
            isDark ? "text-white/60" : "text-muted-foreground"
          )}>{item.description}</p>
        </div>

        {/* Stat Side */}
        <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} mt-4 md:mt-0`}>
          <div className={cn(
            "inline-block border border-dashed p-4",
            isDark ? "border-gold/30 bg-gold/5 text-gold" : "border-foreground/30 bg-white/40 text-foreground"
          )}>
            <span className={cn(
              "block font-technical text-[10px] uppercase tracking-widest mb-1",
              isDark ? "text-gold/60" : "text-muted-foreground"
            )}>DATA_POINT</span>
            <span className="font-mono text-xl font-bold">{item.stat}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
