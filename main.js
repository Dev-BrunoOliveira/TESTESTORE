document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-btn");

  const openMenu = () => {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  hamburgerBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  const sizeFilterButtons = document.querySelectorAll(".size-filter button");

  sizeFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      sizeFilterButtons.forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");
    });
  });
});
