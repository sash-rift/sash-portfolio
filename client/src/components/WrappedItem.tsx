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
      className="relative pl-8 md:pl-0 py-8 md:py-12 border-l border-border md:border-l-0"
    >
      <div className={`md:flex items-center justify-between gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Month Marker - Absolute center on desktop */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-foreground items-center justify-center z-10">
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>
        
        {/* Mobile Marker */}
        <div className="md:hidden absolute left-0 top-12 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-background" />

        {/* Content Side */}
        <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
          <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-2">{item.month}</span>
          <h3 className="font-editorial text-3xl mb-3">{item.title}</h3>
          <p className="text-muted-foreground max-w-sm ml-0 md:inline-block">{item.description}</p>
        </div>

        {/* Stat Side */}
        <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} mt-4 md:mt-0`}>
          <div className="inline-block border border-border p-4 bg-card/50">
            <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-1">Key Metric</span>
            <span className="font-mono text-xl font-bold">{item.stat}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
