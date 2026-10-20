const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  const revealItems = document.querySelectorAll(
    ".project, .flow-heading, .flow-node, .flow-caption, .about-mark, .about-copy, .about-side, .contact-inner"
  );

  revealItems.forEach((item) => item.classList.add("reveal"));
  document.documentElement.classList.add("has-motion");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -30px 0px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}
