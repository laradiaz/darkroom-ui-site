import { COMPONENT_LIST, SITE } from "@/constants/site";

const GLYPHS: Record<string, string> = {
  Heading: "Aa",
  Text: "Tx",
  Label: "Lb",
  Button: "Bt",
  Badge: "Bg",
  RecipeCard: "Rc",
  MediaCard: "Mc",
  Divider: "—",
  ContentGrid: "Cg",
  NavBar: "Nv",
  Hero: "Hr",
  NewsletterSignup: "Nl",
  SocialLink: "So",
  Figure: "Fg",
  Footer: "Ft",
  Page: "Pg",
  Container: "Ct",
  Section: "Sc",
};

export function ComponentsSection() {
  return (
    <section className="section" id="components" aria-labelledby="components-title">
      <div className="section-grid">
        <p className="num-label">03 — Set</p>
        <div>
          <h2 id="components-title">A focused set, not eighty widgets</h2>
          <p className="section-intro">
            {SITE.name} ships primitives you actually use on landing pages and editorial sites —
            not a datatable for every layout.
          </p>
          <div className="specimen-board" role="list">
            {COMPONENT_LIST.map((name) => (
              <div className="specimen-cell" role="listitem" key={name}>
                <span className="specimen-glyph">{GLYPHS[name] ?? name.slice(0, 2)}</span>
                <span className="specimen-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
