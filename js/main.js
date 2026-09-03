/* in-Between Co — interactions (restrained) */
(function () {
  "use strict";
  var doc = document;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Sticky header state */
  var header = doc.getElementById("header");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 10); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile nav */
  var toggle = doc.getElementById("navToggle");
  var body = doc.body;
  function closeNav() { body.classList.remove("nav-open"); if (toggle) toggle.setAttribute("aria-expanded", "false"); }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  var mnav = doc.getElementById("mobileNav");
  if (mnav) mnav.addEventListener("click", function (e) { if (e.target.closest("a")) closeNav(); });
  doc.addEventListener("keydown", function (e) { if (e.key === "Escape") closeNav(); });

  /* Smooth anchor scroll with header offset */
  doc.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (id.length < 2) return;
      var target = doc.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var y = target.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
    });
  });

  /* Subtle reveal on scroll */
  var revealEls = doc.querySelectorAll(".reveal, .reveal-img");
  if (reduce || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }
})();
