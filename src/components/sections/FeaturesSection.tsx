"use client";

import { useLocale } from "@/components/LocaleProvider";

export function FeaturesSection() {
  const { copy } = useLocale();

  return (
    <section className="section" id="features" aria-labelledby="features-title">
      <div className="section-grid">
        <p className="num-label">{copy.features.rail}</p>
        <div>
          <h2 id="features-title">{copy.features.title}</h2>
          <p className="section-intro">{copy.features.intro}</p>
          <ul className="feature-index">
            {copy.features.items.map((feature) => (
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
