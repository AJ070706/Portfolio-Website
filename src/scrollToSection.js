export function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const header = document.querySelector('.site-header');
  const offset = (header?.getBoundingClientRect().height ?? 0) + 24;
  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
  window.scrollTo({ top, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
}
