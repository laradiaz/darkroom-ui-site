import { useLocale } from "@/components/LocaleProvider";

export function FeaturesSection() {
  const { copy } = useLocale();

  return (
    <section className="index" id="features" aria-labelledby="index-title">
      <div className="index-head">
        <h2 id="index-title">{copy.features.title}</h2>
        <span>{copy.features.tag}</span>
      </div>
      <ul className="index-list">
        {copy.features.items.map((item) => (
          <li key={item.num}>
            <span className="index-num">{item.num}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <span className="index-tag">{item.tag}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
