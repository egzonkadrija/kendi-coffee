const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const favorites = document.querySelectorAll(".favorite");
const revealItems = document.querySelectorAll(".reveal");
const reviewTrack = document.querySelector(".review-track");
const prevReview = document.querySelector(".prev");
const nextReview = document.querySelector(".next");

document.body.classList.add("js-ready");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
    });
  });
}

favorites.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("is-active");
  });
});

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
  window.setTimeout(() => {
    revealItems.forEach((item) => item.classList.add("in-view"));
  }, 900);
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

function scrollReviews(direction) {
  if (!reviewTrack) return;

  const card = reviewTrack.querySelector(".review-card");
  const amount = card ? card.getBoundingClientRect().width + 18 : 260;
  reviewTrack.scrollBy({ left: amount * direction, behavior: "smooth" });
}

if (prevReview && nextReview) {
  prevReview.addEventListener("click", () => scrollReviews(-1));
  nextReview.addEventListener("click", () => scrollReviews(1));
}
