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
      title: "Message Sent",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    console.log(values);
    form.reset();
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20 min-h-[80vh] flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h1 className="font-editorial text-6xl mb-8">Let's Connect</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Whether you're interested in discussing the future of media, need advisory on AI automation, or just want to say hello.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="uppercase text-xs tracking-widest font-bold mb-2">Email</h3>
                <a href={`mailto:${profile.email}`} className="text-2xl font-editorial hover:text-primary transition-colors">
                  {profile.email}
                </a>
              </div>
              
              <div>
                <h3 className="uppercase text-xs tracking-widest font-bold mb-2">Social</h3>
                <div className="flex flex-col space-y-2">
                  <a href={profile.social.twitter} className="hover:text-primary transition-colors">Twitter / X</a>
                  <a href={profile.social.linkedin} className="hover:text-primary transition-colors">LinkedIn</a>
                  <a href={profile.social.github} className="hover:text-primary transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 md:p-12 border border-border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs tracking-widest font-bold">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-background border-border rounded-none focus-visible:ring-primary" {...field} />
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
                      <FormLabel className="uppercase text-xs tracking-widest font-bold">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" className="bg-background border-border rounded-none focus-visible:ring-primary" {...field} />
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
                      <FormLabel className="uppercase text-xs tracking-widest font-bold">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell me about your project..." className="bg-background border-border rounded-none min-h-[150px] focus-visible:ring-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-foreground text-background hover:bg-primary uppercase tracking-widest font-bold py-6 rounded-none">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
