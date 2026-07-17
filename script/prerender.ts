import { readFile, writeFile } from "fs/promises";
import path from "path";
import { site } from "../client/src/data/site.js";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(): string {
  const { meta, hero, perspective, capabilityPath, builtWithClaude, projects, fieldReports, background, contact, links } = site;
  const method = perspective.method;

  return `<div id="_prerender">
  <h1>${esc(meta.name)} — ${esc(meta.role)}</h1>
  <p>${esc(meta.description)}</p>
  <p>${esc(hero.subline)}</p>

  <section>
    <h2>${esc(perspective.heading)}</h2>
    <p>${esc(perspective.lead)}</p>
    ${perspective.body.map(p => `<p>${esc(p)}</p>`).join("\n    ")}
    <blockquote>${esc(perspective.pullQuote)}</blockquote>
    ${method ? `<h3>${esc(method.heading)}</h3>
    <p>${esc(method.primer)}</p>
    <ol>
      ${method.principles.map(p => `<li>${p.n}. ${esc(p.name)}</li>`).join("\n      ")}
    </ol>` : ""}
  </section>

  <section>
    <h2>${esc(capabilityPath.heading)}</h2>
    <p>${esc(capabilityPath.lead)}</p>
    <p>${esc(capabilityPath.body)}</p>
    ${capabilityPath.ladders.map(ladder => `<h3>${esc(ladder.title)}: ${esc(ladder.subtitle)}</h3>
    <ol>
      ${ladder.rungs.map(r => `<li><strong>${esc(r.name)}</strong>: ${esc(r.desc)} Outcome: ${esc(r.outcome)}</li>`).join("\n      ")}
    </ol>`).join("\n    ")}
    <p>${esc(capabilityPath.footnote)}</p>
  </section>

  <section>
    <h2>${esc(builtWithClaude.heading)}</h2>
    <p>${esc(builtWithClaude.lead)}</p>
    <p>${esc(builtWithClaude.body)}</p>
  </section>

  <section>
    <h2>${esc(projects.heading)}</h2>
    <p>${esc(projects.lead)}</p>
    <p>${esc(projects.intro)}</p>
    <ul>
      ${projects.cards.map(c => {
        const link = c.cta.href && c.cta.href !== "#" ? ` — <a href="${esc(c.cta.href)}">${esc(c.cta.href)}</a>` : "";
        const stats = c.stats ? ` (${c.stats.map((s: { value: string; label: string }) => `${esc(s.value)} ${esc(s.label)}`).join(", ")})` : "";
        return `<li><strong>${esc(c.name)}</strong> [${esc(c.tag)}]${stats}: ${esc(c.desc)}${link}</li>`;
      }).join("\n      ")}
    </ul>
  </section>

  <section>
    <h2>${esc(fieldReports.heading)}</h2>
    <p>${esc(fieldReports.intro)}</p>
    ${fieldReports.quotes.map(q => `<blockquote>
      <p>${esc(q.quote)}</p>
      <footer>— ${esc(q.name)}, ${esc(q.role)}</footer>
    </blockquote>`).join("\n    ")}
  </section>

  <section>
    <h2>${esc(background.heading)}</h2>
    ${background.body.map(p => `<p>${esc(p)}</p>`).join("\n    ")}
  </section>

  <section>
    <h2>Contact</h2>
    <p>${esc(contact.line)}</p>
    <ul>
      <li>Email: <a href="mailto:${esc(links.email)}">${esc(links.email)}</a></li>
      <li>LinkedIn: <a href="${esc(links.linkedin)}">${esc(links.linkedin)}</a></li>
      <li>Rift Lab: <a href="${esc(links.riftlab)}">${esc(links.riftlab)}</a></li>
      <li>Book a call: <a href="${esc(links.calendar)}">${esc(links.calendar)}</a></li>
    </ul>
  </section>
</div>`;
}

export async function prerender() {
  const distIndex = path.resolve("dist/public/index.html");
  const html = await readFile(distIndex, "utf-8");
  const block = buildHtml();
  const updated = html.replace(
    '<div id="root"></div>',
    `${block}\n    <div id="root"></div>`,
  );
  await writeFile(distIndex, updated);
  console.log("prerender: injected content into dist/public/index.html");
}
