// ==========================================================================
// THEME TOGGLE (claro / escuro)
// ==========================================================================
const themeToggle = document.querySelector(".theme-toggle");
const THEME_STORAGE_KEY = "theme";

const applyTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  }
};

if (themeToggle) {
  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  applyTheme(storedTheme === "dark" ? "dark" : "light");

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  });
}

const navbar = document.getElementById("navbar");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const mobileNavQuery = window.matchMedia("(max-width: 50rem)");

const navHeight = () => (navbar ? navbar.offsetHeight : 0);

const setNavExpanded = (expanded) => {
  if (!navbar || !navToggle) {
    return;
  }

  navbar.classList.toggle("is-open", expanded);
  navToggle.setAttribute("aria-expanded", String(expanded));
};

const closeNav = () => setNavExpanded(false);

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    setNavExpanded(!isExpanded);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (!href || !href.startsWith("#")) {
      return;
    }

    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    event.preventDefault();
    closeNav();

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const offset = target.getBoundingClientRect().top + window.scrollY - navHeight() - 16;

    window.scrollTo({
      top: offset,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNav();
  }
});

mobileNavQuery.addEventListener("change", (event) => {
  if (!event.matches) {
    closeNav();
  }
});

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setActiveLink = (sectionId) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

if ("IntersectionObserver" in window && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry?.target?.id) {
        setActiveLink(visibleEntry.target.id);
      }
    },
    {
      rootMargin: "-30% 0px -45% 0px",
      threshold: [0.2, 0.35, 0.5, 0.75],
    }
  );

  sections.forEach((section) => observer.observe(section));
} else if (sections[0]) {
  setActiveLink(sections[0].id);
}

// ==========================================================================
// SCROLL-REVEAL ANIMATIONS
// ==========================================================================
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealElements.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
          // Opcional: descomente a linha abaixo se quiser que a animação ocorra apenas 1 vez
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.1,
    }
  );

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });
} else {
  // Fallback se IntersectionObserver não for suportado
  revealElements.forEach((el) => {
    el.classList.add("reveal--visible");
  });
}
