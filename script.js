(function () {
  const menuBtn = document.getElementById("menuBtn");
  const settingsMenu = document.getElementById("settingsMenu");
  const topBtn = document.getElementById("topBtn");

  if (menuBtn && settingsMenu) {
    menuBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      const open = settingsMenu.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? "Close site menu" : "Open site menu");
    });

    settingsMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        settingsMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open site menu");
      });
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".menu-wrap")) {
        settingsMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open site menu");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        settingsMenu.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open site menu");
      }
    });
  }

  if (topBtn) {
    const updateTopButton = function () {
      topBtn.classList.toggle("show", window.scrollY > 500);
    };
    window.addEventListener("scroll", updateTopButton, { passive: true });
    updateTopButton();
    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
