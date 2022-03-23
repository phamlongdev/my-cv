const sidebar = document.querySelector(".sidebar");
const btnOpenSidebar = document.querySelector(".btn--open_sidebar");
const btnCloseSidebar = document.querySelector(".sidebar__header__btn--close");

btnOpenSidebar.addEventListener("click", () => {
  sidebar.classList.remove("closed");
});

btnCloseSidebar.addEventListener("click", () => {
  sidebar.classList.add("closed");
});
