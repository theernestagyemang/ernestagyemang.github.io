function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Add a subtle shadow/border to the desktop nav once the page scrolls.
(function initNavScrollState() {
  const nav = document.getElementById("desktop-nav");
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 8) {
      nav.style.borderBottomColor = "rgba(0, 0, 0, 0.08)";
      nav.style.boxShadow = "0 1px 2px rgba(16, 16, 18, 0.06)";
    } else {
      nav.style.borderBottomColor = "transparent";
      nav.style.boxShadow = "none";
    }
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

// Highlight the current section's nav link as the page is scrolled.
(function initActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle("active-link", link.getAttribute("href") === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
})();
