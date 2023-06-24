// modal
const modal = document.querySelector("[data-modal]");
const modalOverlay = document.querySelector("[data-modal-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close]");

const modalCloseFunc = () => {
  modal.classList.add("close");
};

modalCloseBtn.addEventListener("click", modalCloseFunc);
modalOverlay.addEventListener("click", modalCloseFunc);

// notification

const notification = document.querySelector("[data-notification]");
const closeNotification = document.querySelector("[data-notification-close]");

closeNotification.addEventListener("click", () => {
  notification.classList.add("close");
});

// mobile menu
const mobileMenuOpenBtn = document.querySelector("[data-mobile-open-btn]");
const mobileMenuCloseBtn = document.querySelector("[data-mobile-close-btn]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const overlay = document.querySelector("[data-overlay]");

const mobileMenuCloseFun = () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
};

mobileMenuOpenBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});

mobileMenuCloseBtn.addEventListener("click", mobileMenuCloseFun);

overlay.addEventListener("click", mobileMenuCloseFun);

// accordion Menu
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordion.length; i++) {
      if (clickBtn) break;
      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}

// sidebar
const sidebarOpenBtn = document.querySelector(".fa-table-cells-large");
const sidebar = document.querySelector(".sidebar");
const sidebarCloseBtn = document.querySelector("[data-mobile-menu-close]");

const sidebarCloseFun = () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
};

sidebarOpenBtn.addEventListener("click", function () {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

sidebarCloseBtn.addEventListener("click", sidebarCloseFun);
overlay.addEventListener("click", sidebarCloseFun);

// countdown

const countDownDate = new Date("Oct 15,2024 23:59:59").getTime();

const counter = setInterval(() => {
  const dateNow = new Date().getTime();

  const dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
