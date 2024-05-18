const burgerMenuButton = document.querySelector(".burger-button");
const sideMenu = document.querySelector(".header__burgermenu--sidemenu");
const sideMenuCrossButton = document.querySelector(".cross-button");
const sideMenuListItem = document.querySelectorAll(".header__burgermenu--item");


const openMenu = () => {
  burgerMenuButton.classList.add("hidden");
  sideMenu.classList.remove("hidden");
};

burgerMenuButton.addEventListener("click", openMenu);

const closeButton = () => {
  sideMenu.classList.add("hidden");
  burgerMenuButton.classList.remove("hidden");
};

sideMenuCrossButton.addEventListener("click", closeButton);

for (let i = 0; i < sideMenuListItem.length; i++) {
  sideMenuListItem[i].addEventListener("click", closeButton);
};