import { FEATURES } from "@/constants/site";

export function FeaturesSection() {
  return (
    <section className="section" id="features" aria-labelledby="features-title">
      <div className="section-grid">
        <p className="num-label">02 — Features</p>
        <div>
          <h2 id="features-title">Built for editorial product sites</h2>
          <p className="section-intro">
            Everything you need to ship a polished marketing or content experience — without a
            rainbow of accent colors.
          </p>
          <ul className="feature-index">
            {FEATURES.map((feature) => (
              <li key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
