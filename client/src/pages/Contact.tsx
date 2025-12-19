import { Layout } from "@/components/Layout";
import content from "@/data/content.json";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send, Zap } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { profile } = content;
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Transmitted",
      description: "Secure connection established. Message received.",
    });
    console.log(values);
    form.reset();
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 min-h-[80vh] flex flex-col justify-center relative">
         <div className="absolute top-0 right-6 h-full w-px bg-border/10 hidden md:block"></div>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Light / Editorial Side */}
          <div className="relative">
             <div className="font-technical text-xs text-muted-foreground mb-8 flex items-center gap-2">
               FILE: COMM_CHANNEL // <span className="text-primary w-2 h-2 bg-primary rounded-full animate-pulse"></span> OPEN
             </div>
            
            <h1 className="font-editorial text-6xl md:text-7xl mb-8 leading-[0.9]">
              Let's<br/>Connect
            </h1>
            <p className="text-xl text-muted-foreground mb-12 font-light leading-relaxed border-l-2 border-gold pl-6">
              Whether you're interested in discussing the future of media, need advisory on AI automation, or just want to say hello.
            </p>
            
            <div className="space-y-12">
              <div>
                <h3 className="font-technical text-xs tracking-widest uppercase mb-4 border-b border-border pb-2">Direct_Line</h3>
                <a href={`mailto:${profile.email}`} className="text-3xl font-editorial hover:text-gold transition-colors">
                  {profile.email}
                </a>
              </div>
              
              <div>
                <h3 className="font-technical text-xs tracking-widest uppercase mb-4 border-b border-border pb-2">Network_Nodes</h3>
                <div className="flex flex-col space-y-4">
                  <a href={profile.social.twitter} className="flex items-center gap-4 group">
                    <span className="font-technical text-[10px] uppercase text-muted-foreground group-hover:text-gold transition-colors">01</span>
                    <span className="text-lg font-editorial group-hover:translate-x-2 transition-transform duration-300">Twitter / X</span>
                  </a>
                  <a href={profile.social.linkedin} className="flex items-center gap-4 group">
                    <span className="font-technical text-[10px] uppercase text-muted-foreground group-hover:text-gold transition-colors">02</span>
                    <span className="text-lg font-editorial group-hover:translate-x-2 transition-transform duration-300">LinkedIn</span>
                  </a>
                  <a href={profile.social.github} className="flex items-center gap-4 group">
                    <span className="font-technical text-[10px] uppercase text-muted-foreground group-hover:text-gold transition-colors">03</span>
                    <span className="text-lg font-editorial group-hover:translate-x-2 transition-transform duration-300">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Dark / Technical Side - Form */}
          <div className="bg-[#0a0a0a] text-white p-8 md:p-12 border border-gold/20 relative overflow-hidden shadow-2xl sticky top-24">
             {/* Dark Grid Background */}
             <div className="absolute inset-0 grid-lines-dark opacity-20 pointer-events-none"></div>
             {/* Gold Glow */}
             <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 blur-[80px] rounded-full pointer-events-none"></div>

             <div className="relative z-10">
               <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                 <h3 className="font-technical text-xs tracking-widest uppercase text-gold">Input_Terminal</h3>
                 <Zap className="w-4 h-4 text-gold animate-pulse" />
               </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-technical text-[10px] uppercase tracking-widest text-white/60">Identify_Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="ENTER NAME" className="bg-black/50 border-white/10 rounded-none focus-visible:ring-gold focus-visible:border-gold text-white font-mono placeholder:text-white/20" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-technical text-[10px] uppercase tracking-widest text-white/60">Return_Address</FormLabel>
                          <FormControl>
                            <Input placeholder="ENTER EMAIL" className="bg-black/50 border-white/10 rounded-none focus-visible:ring-gold focus-visible:border-gold text-white font-mono placeholder:text-white/20" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-technical text-[10px] uppercase tracking-widest text-white/60">Transmission_Data</FormLabel>
                          <FormControl>
                            <Textarea placeholder="ENTER MESSAGE..." className="bg-black/50 border-white/10 rounded-none min-h-[150px] focus-visible:ring-gold focus-visible:border-gold text-white font-mono placeholder:text-white/20" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-gold text-black hover:bg-white hover:text-black uppercase tracking-widest font-bold py-6 rounded-none font-technical flex items-center gap-2 group">
                      Initialize Transmission <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </Form>
            </div>
            
            {/* Decorative Tech Footer */}
            <div className="mt-8 pt-4 border-t border-white/5 flex justify-between font-technical text-[10px] text-white/20 uppercase">
              <span>Secure_Socket_Layer</span>
              <span>Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
