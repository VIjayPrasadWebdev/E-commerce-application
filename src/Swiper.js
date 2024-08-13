const swiper1 = new Swiper(".brand-swiper", {
  speed: 700,
  autoplay: {
    delay: 2000,
  },
  //freeMode: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 50,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper2 = new Swiper(".swiper-reviews", {
  speed: 700,
  autoplay: {
    delay: 2000,
  },
  freeMode: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 70,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

let mode = document.querySelector(".light-icon svg");
mode.classList.add("light");
mode.addEventListener("click", () => {
  if (mode.classList.contains("light")) {
    mode.classList.remove("light");
    document.querySelector("html").classList.add("dark");
    mode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`;
  } else {
    mode.classList.add("light");
    document.querySelector("html").classList.remove("dark");
    mode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`;
  }
});

let mode2 = document.querySelector(".light-icon-sm svg");
mode2.classList.add("light");
mode2.addEventListener("click", () => {
  if (mode2.classList.contains("light")) {
    mode2.classList.remove("light");
    document.querySelector("html").classList.add("dark");
    mode2;
    mode2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`;
  } else {
    mode2.classList.add("light");
    document.querySelector("html").classList.remove("dark");
    mode2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`;
  }
});

export { swiper1, swiper2 };
