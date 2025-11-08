document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".nav__burger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileList = document.querySelector(".mobile-menu__list");
  const closeBtn = document.querySelector(".mobile-menu__close");

  const leftLinks = document.querySelectorAll(".nav__list--left a");
  const rightLinks = document.querySelectorAll(".nav__list--right a");

  const allLinks = [...leftLinks, ...rightLinks];
  allLinks.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.textContent;
    if (link.classList.contains("current")) a.classList.add("current");
    li.appendChild(a);
    mobileList.appendChild(li);
  });

  // Открытие меню
  burger.addEventListener("click", () => {
    mobileMenu.classList.add("show");
  });

  // Закрытие меню
  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });

  // Можно закрывать по клику на ссылку
  mobileList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
    });
  });
});
