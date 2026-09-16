tailwind.config = {
  theme: {
    extend: {
      colors: {
        base: "#0b0f17",
        surface: "#101725",
        surface2: "#141d2e",
        line: "#1f2937",
        cyan: { DEFAULT: "#06b6d4", bright: "#38bdf8" },
        indigo: { DEFAULT: "#6366f1" },
        ink: "#e6edf5",
        muted: "#8ea0b8",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
    },
  },
};

(function () {
  var saved = localStorage.getItem("portfolio-theme");
  var theme = saved || "dark";
  document.documentElement.setAttribute("data-theme", theme);
})();

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => {
    const html = document.documentElement;
    const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
    html.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
  });

  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  menuBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    menuBtn.setAttribute("aria-expanded", String(isHidden));
  });
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
});
