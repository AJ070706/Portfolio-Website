// Observe individual content blocks, so tall sections reveal as they are read.
export function setupScrollReveal(root) {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!root || motion.matches || !('IntersectionObserver' in window)) return;

  const elements = root.querySelectorAll(
    '.hero-copy, .hero-portrait, .section-header, .about-story > p, .about-highlights > div, .experience-card, .course-header, .course-note, .course-nav, .project-card, .planned-courses',
  );
  const reveal = element => {
    element.classList.remove('reveal-pending');
    observer.unobserve(element);
  };
  const observer = new window.IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) reveal(entry.target);
    });
  }, { threshold: 0 });

  elements.forEach(element => {
    element.classList.add('scroll-reveal', 'reveal-pending');
    observer.observe(element);
  });

  // Keyboard navigation must never land on an invisible control.
  const handleFocus = event => {
    const element = event.target.closest('.reveal-pending');
    if (element) reveal(element);
  };
  const handleMotionChange = () => {
    if (motion.matches) elements.forEach(reveal);
  };
  root.addEventListener('focusin', handleFocus);
  motion.addEventListener('change', handleMotionChange);

  return () => {
    observer.disconnect();
    root.removeEventListener('focusin', handleFocus);
    motion.removeEventListener('change', handleMotionChange);
    elements.forEach(element => element.classList.remove('scroll-reveal', 'reveal-pending'));
  };
}
