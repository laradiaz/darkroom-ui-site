function headerOffset() {
  return document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const top = Math.max(
    0,
    el.getBoundingClientRect().top + window.scrollY - headerOffset() - 8,
  );

  window.scrollTo({ top, behavior: "smooth" });
}

export function goToSection(event: { preventDefault(): void }, id: string) {
  event.preventDefault();
  scrollToSection(id);
  history.replaceState(null, "", window.location.pathname + window.location.search);
}

export function stripHashAndScroll() {
  const id = window.location.hash.replace(/^#/, "");
  if (!id) return;
  scrollToSection(id);
  history.replaceState(null, "", window.location.pathname + window.location.search);
}
