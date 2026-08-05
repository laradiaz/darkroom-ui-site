export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
