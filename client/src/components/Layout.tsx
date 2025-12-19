import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-white border-[12px] border-background relative">
      {/* Outer frame border line */}
      <div className="fixed inset-3 border border-border/20 pointer-events-none z-50 mix-blend-multiply" />
      
      {/* Corner marks */}
      <div className="fixed top-6 left-6 w-4 h-[1px] bg-foreground z-50" />
      <div className="fixed top-6 left-6 w-[1px] h-4 bg-foreground z-50" />
      
      <div className="fixed top-6 right-6 w-4 h-[1px] bg-foreground z-50" />
      <div className="fixed top-6 right-6 w-[1px] h-4 bg-foreground z-50" />
      
      <div className="fixed bottom-6 left-6 w-4 h-[1px] bg-foreground z-50" />
      <div className="fixed bottom-6 left-6 w-[1px] h-4 bg-foreground z-50" />
      
      <div className="fixed bottom-6 right-6 w-4 h-[1px] bg-foreground z-50" />
      <div className="fixed bottom-6 right-6 w-[1px] h-4 bg-foreground z-50" />

      <Navigation />
      <motion.main 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow relative"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
