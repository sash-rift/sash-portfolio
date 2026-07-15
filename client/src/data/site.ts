// Personal site content. Single source of truth for the one-page site.
// Mods happen here; Home.tsx renders it.

export const site = {
  meta: {
    name: "Sash Mohapatra",
    role: "AI Education & Enablement",
    title: "Sash Mohapatra — AI Education & Enablement",
    description:
      "I help scale human capability with AI systems. Twenty years helping people and companies move through technological change.",
  },

  // Links used across the site. Placeholders marked TODO until confirmed.
  links: {
    email: "sash@riftlab.ai",
    riftlab: "https://riftlab.ai",
    linkedin: "https://linkedin.com/in/shasmo",
    calendar: "https://cal.com/sash-mohapatra/chat-with-sash",
    resume: "/Sash-Mohapatra-Resume-Branded.pdf",
    maven: "https://maven.com/sashmohapatra/ai-orch-cert-kw",
    pollzy: "https://pollzy.co",
    headshot: "/headshot.jpg",
  },

  hero: {
    label: "> mission",
    headline: "I help scale human capability with AI systems.",
    subline:
      "Twenty years helping people and companies move through technological change. I build the education that turns AI into new capability.",
    ctaPrimary: { label: "read my thesis", href: "#thesis" },
    ctaSecondary: { label: "book a call", href: "https://cal.com/sash-mohapatra/chat-with-sash" },
    prompt: "sash@rift ~ %",
  },

  perspective: {
    label: "~/thesis",
    heading: "How I think about skilling",
    lead:
      "The tools change every week. The way you work with them changes slowly, and that is the part worth learning.",
    body: [
      "Model capability and the harnesses around it move fast. New models, new tools, something to relearn most weeks. Keeping up with that is real work, and it wears people out.",
      "Underneath the churn is something steadier: a way of working with machines. Once you have it, the next tool is a new instrument for a craft you already know. That way of working has a name in how I teach it. Orchestration: directing AI across a whole piece of work while keeping your hand on the outcome. The tools will keep changing. The mental model is what carries you from one release to the next without starting over.",
      "That model is a new way to work, and the hard part of it is human before it is technical. Handing your work to a collaborator you cannot fully see raises real questions of trust and control. I spend as much time on that transition as on any feature.",
      "The hardest thing to hand an AI is the judgment you have built but never had to explain. Over the past few decades, professions grew through specialization, and specialists build intuition they can no longer put into words. A banker or a trial lawyer knows things in their hands that never made it onto a page. To work well with AI, you have to get that knowledge out of your head and into language a machine can use. My frameworks are built to help you do that: surface your own judgment, describe it, and let AI carry it so your experience scales with the work.",
      "Every framework I build, the Orchestrator Method and everything after it, is built to augment and scale what a person can do, not to replace them. Replace the person and their judgment stops shaping the real work, and that judgment is what we are trying to scale.",
    ],
    // words rendered in accent inside the body
    accentWords: ["Orchestration"],
    pullQuote:
      "To work well with AI, you have to get that knowledge out of your head and into language a machine can use.",
    pullQuoteLabel: "the shift",
  },

  capabilityPath: {
    label: "~/roadmap",
    heading: "The capability roadmap",
    lead:
      "Most AI training is a one-off. People learn a few prompts and plateau, because nothing tells them what the next real step is.",
    body:
      "A path fixes that. It shows a person where they stand and what changes at the next rung, and it shows a company how to move from scattered use to capability it can count on. I built two versions of the same path: one for a person building a career, one for an organization building capability. Each rung has its own training and its own outcome you can point to.",
    ladders: [
      {
        title: "For a person",
        subtitle: "a credential you earn",
        rungs: [
          {
            name: "Foundations",
            desc: "Orchestrate AI for your own work and ship real output with it. Live now as the Certified AI Orchestrator™.",
            outcome:
              "You do your daily work faster and better, with judgment about what to trust.",
          },
          {
            name: "Practitioner",
            desc: "Build multi-step systems and reusable skills that hold up in real use.",
            outcome: "You automate whole workflows, not single tasks.",
          },
          {
            name: "Architect",
            desc: "Design AI-native systems other people depend on.",
            outcome: "You set how a team or product works with AI.",
          },
        ],
      },
      {
        title: "For an organization",
        subtitle: "capability you build",
        rungs: [
          {
            name: "Fluency",
            desc: "Everyone uses AI for daily work with confidence and good judgment.",
            outcome: "AI becomes a normal part of how the team works.",
          },
          {
            name: "Orchestration",
            desc: "Practitioners direct AI across real workflows and build systems others reuse.",
            outcome: "The work itself gets faster and more consistent.",
          },
          {
            name: "Stewardship",
            desc: "Champions set the standards, mentor others, and keep the organization's judgment and voice intact as it scales.",
            outcome: "The company runs on AI without losing what makes it good.",
          },
        ],
      },
    ],
    footnote:
      "Change management runs alongside every rung, because capability only counts once people adopt it.",
  },

  builtWithClaude: {
    label: "~/built-with-claude",
    heading: "Built with Claude",
    lead: "I teach orchestration, and I run my own work on it every day.",
    body:
      "My work happens in the terminal, with Claude Code as the orchestrator. I built a production system of skills, agents, and connected tools that drafts curriculum, runs research, and produces content, with me directing and reviewing every step. This site was built the same way. So was the course. When I teach orchestration, I am teaching what I do.",
    terminal: [
      { type: "prompt", text: "sash@rift ~ % claude" },
      { type: "input", text: "draft week 3 from the outline, keep the labs hands-on" },
      { type: "output", text: "✓ 4 lessons  ·  1 lab  ·  6 reflection prompts" },
      { type: "input", text: "now build the share card and the email" },
      { type: "output", text: "✓ done. want me to schedule the send?" },
    ],
  },

  projects: {
    label: "~/projects",
    heading: "Projects",
    lead: "I teach building because I build. Here is some of what I have shipped.",
    intro:
      "A certification, a company, two products, and a newsletter, all built the way I teach, with Claude in the terminal and me directing every step.",
    cards: [
      {
        name: "AI Orchestration Certification for Knowledge Workers",
        tag: "education",
        featured: true,
        desc: "The live cohort certification I created and teach. First pilot November 2025, now in its sixth cohort. The whole curriculum is written and produced with Claude.",
        stats: [
          { value: "120+", label: "trained" },
          { value: "4.9/5", label: "rating" },
          { value: "6", label: "cohorts" },
        ],
        cta: { label: "see the course", href: "https://maven.com/sashmohapatra/ai-orch-cert-kw" },
        soon: false,
      },
      {
        name: "Rift Lab",
        tag: "company",
        desc: "The AI education and advisory company I founded. Public and private cohorts, the Orchestrator Method in practice, and the field reports below.",
        note: "Anthropic Partner Network",
        cta: { label: "riftlab.ai", href: "https://riftlab.ai" },
        soon: false,
      },
      {
        name: "Rift Dispatch",
        tag: "newsletter",
        desc: "My weekly newsletter on building with AI and the ideas behind the Orchestrator Method. Written and produced the same way I teach.",
        cta: { label: "riftdispatch.substack.com", href: "https://riftdispatch.substack.com" },
        soon: false,
      },
      {
        name: "Pipcal",
        tag: "product",
        desc: "A calendar that gives you your whole week at a glance, with a lighter way to schedule peer to peer. In build now.",
        cta: { label: "", href: "" },
        soon: true,
      },
      {
        name: "Pollzy",
        tag: "product",
        desc: "An AI-native polling tool I built and ship as a founder. A live app people use, built on the same orchestration approach I teach.",
        cta: { label: "pollzy.co", href: "https://pollzy.co" },
        soon: false,
      },
    ],
  },

  fieldReports: {
    label: "~/field-reports",
    heading: "Field reports",
    intro: "From people I have taught.",
    pending: false,
    // Verbatim from riftlab.ai. Do not paraphrase.
    quotes: [
      {
        quote:
          "ILO Group partners with K-12 education agencies across the country, and we wanted our consulting team to use AI consistently and well. Three sessions with Sash leveled up our team. He taught the orchestrator mindset, the task decomposition framework, and showed us how to build our own custom Claude skills. The skillset has allowed our consultants to focus more time on our important work - the research, synthesis, and strategy that moves our clients forward.",
        name: "Laura Smith",
        role: "Principal, ILO Group",
      },
      {
        quote:
          "Just completed Sash's course on AI for knowledge work, and it took my AI knowledge to the next level. It is an incredibly useful, hands-on deep dive into building actual skills and autonomous agents with Claude. What really sets this course apart is the balance between practice and theory. Whether you are an industry professional looking to scale your workflows or a curious beginner just starting out, this course is absolutely for you.",
        name: "Alvin",
        role: "Portfolio Manager, GIC",
      },
      {
        quote:
          "This seminal and well structured course helped me spruce up my (outdated) AI knowledge, now at par with a fairly well versed AI practitioner of today. As a new joiner at an AI ready firm, I was anxious about my gaps in knowledge. This course got me right back up with its generous and thorough exploration of concepts, especially systems thinking, agentic orchestration and data organisation, along with toolage and frameworks. Shashwat brings the energy and excitement as a tutor, fused with well curated materials, and as a well developed communicator, making it easy to engage.",
        name: "Akash Alphons",
        role: "Corporate Affairs, Hero Futures Energies",
      },
      {
        quote:
          "Really glad I took this one. Sash did a great job breaking down AI in a way that's actually practical and useful to your personal life and work right away. You start with prompt writing, then you move into orchestration, and eventually you're building agents. Since the class size is small, he is able to give personal attention. Would definitely recommend this to anyone who wants to go beyond just chatting with AI and actually make it work for them.",
        name: "Rahul",
        role: "Banking Consultant, EY",
      },
    ],
  },

  background: {
    label: "~/whoami",
    heading: "Background",
    body: [
      "I started out teaching. As a Microsoft field engineer, I spent a decade building technical curriculum and training more than a thousand IT professionals across Southeast Asia and the United States. Every course had a hands-on lab I wrote myself.",
      "Then I spent a decade helping enterprises adopt what came next: first the cloud, then data and AI. I led enablement for some of the largest banks and financial firms in the world, translating hard technology into work their people could actually do. I was the lead technical architect on a $200M cloud transformation, and I trained the teams that carried it.",
      "When AI arrived, I went back to where I started. I founded Rift Lab to build and teach AI-native education, developed the Orchestrator Method, and now run cohorts and advise leaders on adoption.",
      "Across every one of those shifts, the job has been the same. I help people move through change, and I build the learning that gets them there.",
    ],
  },

  contact: {
    label: "~/contact",
    line: "Leading a team or a company through AI adoption? I help leaders and their people build the skilling and the change that makes it real.",
    signoff: "sash@rift ~ % logout",
  },
};

export type Site = typeof site;
