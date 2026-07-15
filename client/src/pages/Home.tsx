import { Layout } from "@/components/Layout";
import { site } from "@/data/site";
import { ArrowRight, ArrowUpRight, Linkedin } from "lucide-react";
import { useState } from "react";

/* ---------- small building blocks ---------- */

function Headshot({ src }: { src: string }) {
  const [err, setErr] = useState(false);
  if (!err && src) {
    return (
      <div className="relative aspect-[4/5] w-full max-w-sm md:ml-auto border border-gold/40 overflow-hidden">
        <img
          src={src}
          alt="Sash Mohapatra"
          onError={() => setErr(true)}
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-white/70 mix-blend-difference">
          sash mohapatra
        </span>
      </div>
    );
  }
  return (
    <div className="relative aspect-[4/5] w-full max-w-sm md:ml-auto border border-border overflow-hidden bg-secondary">
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-4">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">headshot</span>
        <span className="font-mono text-[11px] text-muted-foreground/60">add /public/headshot.jpg</span>
      </div>
    </div>
  );
}

function LadderBar({ level, total = 9 }: { level: number; total?: number }) {
  return (
    <div className="flex gap-[3px] shrink-0" aria-hidden>
      {Array.from({ length: total }).map((_, k) => (
        <span key={k} className={`w-1.5 h-4 ${k < level ? "bg-gold" : "bg-gold/15"}`} />
      ))}
    </div>
  );
}

function SectionLabel({ path, accent = "terra" }: { path: string; accent?: "terra" | "gold" }) {
  const dot = accent === "gold" ? "bg-gold" : "bg-primary";
  const text = accent === "gold" ? "text-gold" : "text-primary";
  return (
    <div className="flex items-center gap-2 mb-6">
      <span className={`w-2 h-2 ${dot}`} />
      <span className={`font-mono text-xs tracking-widest ${text}`}>{path}</span>
    </div>
  );
}

function AccentText({ text, words }: { text: string; words: string[] }) {
  if (!words?.length) return <>{text}</>;
  const pattern = new RegExp(`(${words.join("|")})`, "g");
  const parts = text.split(pattern);
  return (
    <>
      {parts.map((part, i) =>
        words.includes(part) ? (
          <span key={i} className="text-primary font-medium">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function ProjectCardBody({ card, i }: { card: any; i: number }) {
  const hasLink = card.cta.href && card.cta.href !== "#";
  const ctaBlock = card.soon ? (
    <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gold">
      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
      coming soon
    </span>
  ) : (
    hasLink && (
      <a
        href={card.cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-foreground hover:text-primary transition-colors"
      >
        {card.cta.label}
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    )
  );

  const header = (
    <div className="flex items-start justify-between mb-4">
      <span className="font-mono text-[11px] uppercase tracking-widest text-primary border border-primary/40 px-2 py-0.5">
        {card.tag}
      </span>
      <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
    </div>
  );

  if (card.featured) {
    return (
      <div className="p-8 md:p-10">
        {header}
        <h3 className="font-editorial text-3xl md:text-4xl mb-3 max-w-2xl">{card.name}</h3>
        <p className="text-base leading-relaxed text-foreground/80 max-w-2xl mb-6">{card.desc}</p>
        {card.stats && (
          <div className="flex flex-wrap gap-3">
            {card.stats.map((s: { value: string; label: string }, k: number) => (
              <div key={k} className="border border-border px-5 py-2.5">
                <div className="font-editorial text-3xl text-primary leading-none">{s.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}
        {ctaBlock}
      </div>
    );
  }

  return (
    <div className="p-8 md:p-9 flex flex-col h-full bg-card">
      {header}
      <h3 className="font-editorial text-3xl mb-3">{card.name}</h3>
      <p className="text-base leading-relaxed text-foreground/80 flex-grow">{card.desc}</p>
      {card.note && (
        <div className="mt-4 inline-flex items-center gap-2 self-start font-mono text-[11px] uppercase tracking-widest text-gold border border-gold/40 px-2.5 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          {card.note}
        </div>
      )}
      {ctaBlock}
    </div>
  );
}

/* ---------- page ---------- */

export default function Home() {
  const {
    hero,
    perspective,
    capabilityPath,
    builtWithClaude,
    projects,
    fieldReports,
    background,
    contact,
    links,
  } = site;

  // Group project cards into stacking rows: featured card alone, then pairs.
  const projItems = projects.cards.map((card, i) => ({ card, i }));
  const projRows: { card: any; i: number }[][] = [];
  const featItem = projItems.find((x) => x.card.featured);
  if (featItem) projRows.push([featItem]);
  const projRest = projItems.filter((x) => !x.card.featured);
  for (let k = 0; k < projRest.length; k += 2) projRows.push(projRest.slice(k, k + 2));

  return (
    <Layout>
      {/* ===== HERO (dark, gold + saffron) ===== */}
      <section
        id="top"
        className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#15100a] text-[#efe7d8]"
      >
        <div className="absolute inset-0 grid-lines-dark opacity-30 pointer-events-none" />
        {/* warm glow, low and subtle */}
        <div className="absolute -top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[hsl(30_96%_56%/0.07)] blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="reveal max-w-4xl">
            <div className="flex items-center gap-2 mb-8">
              <span className="font-mono text-xs tracking-widest text-saffron">{hero.label}</span>
              <span className="inline-block w-2 h-4 bg-saffron animate-pulse" />
            </div>
            <h1 className="font-editorial text-5xl md:text-7xl lg:text-[5.2rem] leading-[1.02] text-balance mb-8">
              I help scale <span className="text-gold">human capability</span> with AI systems.
            </h1>
            <p className="text-lg md:text-xl text-[#efe7d8]/70 leading-relaxed max-w-2xl border-l-2 border-gold pl-5">
              {hero.subline}
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href={hero.ctaPrimary.href}
                className="group inline-flex items-center gap-2 bg-gold text-[#15100a] px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-saffron transition-colors"
              >
                {hero.ctaPrimary.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={hero.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#efe7d8]/40 px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#efe7d8] hover:text-[#15100a] transition-colors"
              >
                {hero.ctaSecondary.label}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full border-t border-white/10 py-3">
          <div className="container mx-auto px-6 font-mono text-[10px] uppercase tracking-widest text-[#efe7d8]/40 flex justify-between">
            <span className="text-saffron/70">{hero.prompt}</span>
            <span>scroll ↓</span>
          </div>
        </div>
      </section>

      {/* ===== PERSPECTIVE ===== */}
      <section id="thesis" className="border-b border-border">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="reveal">
            <SectionLabel path={perspective.label} />
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              {perspective.heading}
            </h2>
            <p className="font-editorial text-3xl md:text-[2.6rem] leading-[1.15] text-balance max-w-3xl mb-12">
              {perspective.lead}
            </p>
            <div className="grid md:grid-cols-12 gap-10 md:gap-14">
              <div className="md:col-span-7 space-y-5 text-lg leading-relaxed text-foreground/90">
                {perspective.body.map((p, i) => (
                  <p key={i}>
                    <AccentText text={p} words={perspective.accentWords} />
                  </p>
                ))}
              </div>
              <aside className="md:col-span-5">
                <blockquote className="md:sticky md:top-28 border-l-2 border-primary pl-6">
                  <span className="block font-mono text-xs uppercase tracking-widest text-primary mb-4">
                    {perspective.pullQuoteLabel}
                  </span>
                  <p className="font-editorial text-2xl md:text-[1.9rem] leading-snug text-foreground">
                    {perspective.pullQuote}
                  </p>
                </blockquote>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CAPABILITY PATH ===== */}
      <section id="roadmap" className="border-b border-border bg-gold-soft">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="reveal">
            <SectionLabel path={capabilityPath.label} accent="gold" />
            <h2 className="font-editorial text-4xl md:text-5xl mb-5">{capabilityPath.heading}</h2>
            <p className="font-editorial text-2xl md:text-3xl leading-snug text-balance max-w-3xl mb-5 text-foreground/85">
              {capabilityPath.lead}
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground mb-10">
              {capabilityPath.body}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-gold/30 border border-gold/30">
            {capabilityPath.ladders.map((ladder, li) => (
              <div key={li} className="reveal bg-background p-8 md:p-10">
                <div className="mb-7">
                  <div className="font-mono text-xs uppercase tracking-widest text-gold mb-1">
                    {ladder.title}
                  </div>
                  <div className="font-editorial text-xl italic text-muted-foreground">
                    {ladder.subtitle}
                  </div>
                </div>
                <ol className="space-y-7">
                  {ladder.rungs.map((rung, ri) => (
                    <li key={ri} className="flex gap-4">
                      <span className="font-mono text-xs text-gold pt-1.5 shrink-0">
                        0{ri + 1}
                      </span>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between gap-4 mb-2">
                          <div className="font-editorial text-2xl">{rung.name}</div>
                          <LadderBar level={Math.round(((ri + 1) / ladder.rungs.length) * 9)} />
                        </div>
                        <p className="text-base text-foreground/80 leading-relaxed mb-2">
                          {rung.desc}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          <span className="text-gold font-mono text-xs uppercase tracking-wider mr-2">
                            outcome
                          </span>
                          {rung.outcome}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <p className="reveal max-w-2xl mt-8 text-base text-muted-foreground leading-relaxed">
            {capabilityPath.footnote}
          </p>
        </div>
      </section>

      {/* ===== BUILT WITH CLAUDE (dark terminal panel) ===== */}
      <section id="built-with-claude" className="bg-[#1a1613] text-[#e9e1d5]">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="reveal">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-gold" />
                <span className="font-mono text-xs tracking-widest text-gold">
                  {builtWithClaude.label}
                </span>
              </div>
              <h2 className="font-editorial text-4xl md:text-5xl mb-6">{builtWithClaude.heading}</h2>
              <p className="font-editorial text-2xl italic text-[#e9e1d5]/80 mb-6 leading-snug">
                {builtWithClaude.lead}
              </p>
              <p className="text-lg leading-relaxed text-[#e9e1d5]/70">{builtWithClaude.body}</p>
              <div className="mt-8 space-y-2.5 font-mono text-xs border-t border-white/10 pt-6">
                <div className="flex gap-4">
                  <span className="text-gold w-24 shrink-0">curriculum</span>
                  <span className="text-[#e9e1d5]/50">drafted, structured, reviewed</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gold w-24 shrink-0">research</span>
                  <span className="text-[#e9e1d5]/50">gathered, synthesized, cited</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gold w-24 shrink-0">content</span>
                  <span className="text-[#e9e1d5]/50">written, formatted, shipped</span>
                </div>
              </div>
            </div>

            <div className="reveal border border-white/10 bg-black/30 font-mono text-sm md:sticky md:top-24 self-start w-full">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-[#e06c50]" />
                <span className="w-3 h-3 rounded-full bg-[#d8a84b]" />
                <span className="w-3 h-3 rounded-full bg-[#8fa86f]" />
                <span className="ml-3 text-white/30 text-xs">claude — terminal</span>
              </div>
              <div className="p-5 space-y-2 leading-relaxed">
                {builtWithClaude.terminal.map((line, i) => {
                  if (line.type === "prompt")
                    return (
                      <div key={i} className="text-white/50">
                        {line.text}
                      </div>
                    );
                  if (line.type === "input")
                    return (
                      <div key={i} className="text-[#e9e1d5]">
                        <span className="text-primary">&gt; </span>
                        {line.text}
                      </div>
                    );
                  return (
                    <div key={i} className="text-[#a7d18a] pl-4">
                      {line.text}
                    </div>
                  );
                })}
                <div className="text-white/40">
                  <span className="text-primary">&gt; </span>
                  <span className="inline-block w-2 h-4 bg-[#e9e1d5]/70 align-middle animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="border-b border-border">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="reveal">
            <SectionLabel path={projects.label} />
            <h2 className="font-editorial text-4xl md:text-5xl mb-6">{projects.heading}</h2>
            <p className="font-editorial text-2xl md:text-3xl leading-snug text-balance max-w-3xl mb-4 text-foreground/85">
              {projects.lead}
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground mb-10">
              {projects.intro}
            </p>
          </div>

          {/* Stacking sticky rows: each row pins, the next scrolls up and stacks over it. */}
          <div className="relative">
            {projRows.map((row, r) => (
              <div
                key={r}
                className="md:sticky md:min-h-[52vh] bg-card border border-border border-t-[3px] border-t-gold"
                style={{ top: `${72 + r * 10}px`, zIndex: 10 + r * 10 }}
              >
                {row.length === 2 ? (
                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                    {row.map(({ card, i }) => (
                      <ProjectCardBody key={i} card={card} i={i} />
                    ))}
                  </div>
                ) : (
                  <ProjectCardBody card={row[0].card} i={row[0].i} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FIELD REPORTS ===== */}
      <section id="field-reports" className="border-b border-border bg-terra-soft">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="reveal">
            <SectionLabel path={fieldReports.label} />
            <h2 className="font-editorial text-4xl md:text-5xl mb-3">{fieldReports.heading}</h2>
            <p className="text-lg text-muted-foreground mb-10">{fieldReports.intro}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {fieldReports.quotes.map((q, i) => (
              <figure key={i} className="reveal border-t-2 border-primary/50 pt-6 flex flex-col">
                <span className="font-editorial text-4xl text-primary/40 leading-none mb-2">“</span>
                <blockquote
                  className={`text-[15px] leading-relaxed mb-6 flex-grow ${
                    fieldReports.pending ? "text-muted-foreground/50 italic" : "text-foreground/85"
                  }`}
                >
                  {q.quote}
                </blockquote>
                <figcaption className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  <span className="text-foreground">{q.name}</span> · {q.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BACKGROUND ===== */}
      <section id="background" className="border-b border-border">
        <div className="container mx-auto px-6 py-16 md:py-20">
          <div className="reveal">
            <SectionLabel path={background.label} />
            <h2 className="font-editorial text-4xl md:text-5xl mb-10">{background.heading}</h2>
            <div className="grid md:grid-cols-12 gap-12 md:gap-16">
              <div className="md:col-span-7 order-2 md:order-1">
                <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                  {background.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a
                    href={links.resume}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition-colors"
                  >
                    full résumé
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest border border-border text-foreground/70 px-5 py-3 hover:border-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    linkedin
                  </a>
                </div>
              </div>
              <div className="md:col-span-5 order-1 md:order-2">
                <Headshot src={links.headshot} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT (dark close) ===== */}
      <section id="contact" className="relative overflow-hidden bg-[#15100a] text-[#efe7d8]">
        <div className="absolute inset-0 grid-lines-dark opacity-30 pointer-events-none" />
        <div className="absolute -bottom-1/4 left-0 w-[600px] h-[600px] rounded-full bg-[hsl(40_68%_50%/0.06)] blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 py-20 md:py-24 relative z-10">
          <div className="reveal">
            <SectionLabel path={contact.label} accent="gold" />
            <p className="font-editorial text-3xl md:text-4xl leading-tight text-balance max-w-3xl mb-10">
              {contact.line}
            </p>
            <div className="flex flex-col gap-3 font-mono text-sm">
              <a href={`mailto:${links.email}`} className="group inline-flex items-center gap-3 text-[#efe7d8] hover:text-gold transition-colors">
                <span className="text-[#efe7d8]/40 w-24">email</span>
                {links.email}
              </a>
              <a href={links.riftlab} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-[#efe7d8] hover:text-gold transition-colors">
                <span className="text-[#efe7d8]/40 w-24">rift lab</span>
                riftlab.ai
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-[#efe7d8] hover:text-gold transition-colors">
                <span className="text-[#efe7d8]/40 w-24">linkedin</span>
                /in/shasmo
              </a>
              <a href={links.calendar} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 text-[#efe7d8] hover:text-gold transition-colors">
                <span className="text-[#efe7d8]/40 w-24">book a call</span>
                cal.com/sash-mohapatra
              </a>
              <a href={links.resume} download className="group inline-flex items-center gap-3 text-[#efe7d8] hover:text-gold transition-colors">
                <span className="text-[#efe7d8]/40 w-24">résumé</span>
                <span className="inline-flex items-center gap-1.5">
                  download PDF
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
