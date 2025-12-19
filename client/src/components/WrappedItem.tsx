import { motion } from "framer-motion";

interface WrappedItemProps {
  item: {
    month: string;
    title: string;
    description: string;
    stat: string;
  };
  index: number;
}

export function WrappedItem({ item, index }: WrappedItemProps) {
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
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-background border border-foreground items-center justify-center z-10 rotate-45">
          <div className="w-1 h-1 bg-primary rounded-full" />
        </div>
        
        {/* Mobile Marker */}
        <div className="md:hidden absolute left-0 top-16 -translate-x-1/2 w-3 h-3 bg-background border border-foreground rotate-45" />

        {/* Content Side */}
        <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
          <span className="font-technical text-primary text-xs uppercase tracking-widest block mb-2">{item.month}</span>
          <h3 className="font-editorial text-4xl mb-3">{item.title}</h3>
          <p className="text-muted-foreground max-w-sm ml-0 md:inline-block font-light leading-relaxed">{item.description}</p>
        </div>

        {/* Stat Side */}
        <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} mt-4 md:mt-0`}>
          <div className="inline-block border border-dashed border-foreground/30 p-4 bg-white/40">
            <span className="block font-technical text-[10px] uppercase tracking-widest text-muted-foreground mb-1">DATA_POINT</span>
            <span className="font-mono text-xl font-bold text-foreground">{item.stat}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
