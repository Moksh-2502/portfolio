document.body.classList.add("js-ready");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navAnchors.forEach((anchor) => {
        anchor.classList.toggle("active", anchor.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
);

sections.forEach((section) => sectionObserver.observe(section));

const filterButtons = document.querySelectorAll(".filter-button");
const certCards = Array.from(document.querySelectorAll(".cert-card"));
const showMoreButton = document.querySelector(".show-more");
let activeFilter = "All";
let expanded = false;
const collapsedCount = 8;

function updateCertificates() {
  const matchingCards = certCards.filter(
    (card) => activeFilter === "All" || card.dataset.category === activeFilter
  );

  certCards.forEach((card) => {
    const matches = activeFilter === "All" || card.dataset.category === activeFilter;
    const visibleIndex = matchingCards.indexOf(card);
    const beyondLimit = !expanded && visibleIndex >= collapsedCount;
    card.classList.toggle("filtered-out", !matches);
    card.classList.toggle("is-hidden", matches && beyondLimit);
  });

  if (showMoreButton) {
    const needsExpansion = matchingCards.length > collapsedCount;
    showMoreButton.hidden = !needsExpansion;
    showMoreButton.textContent = expanded ? "Show Fewer Certifications" : "Show More Certifications";
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || "All";
    expanded = false;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    updateCertificates();
  });
});

if (showMoreButton) {
  showMoreButton.addEventListener("click", () => {
    expanded = !expanded;
    updateCertificates();
  });
}

updateCertificates();
