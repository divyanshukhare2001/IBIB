document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  /* ---------------- Footer year ---------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Navbar shrink on scroll ---------------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------------- Mobile menu ---------------- */
  const burgerBtn = document.getElementById('burgerBtn');
  const navMobile = document.getElementById('navMobile');
  burgerBtn.addEventListener('click', () => {
    navMobile.classList.toggle('is-open');
    burgerBtn.innerHTML = navMobile.classList.contains('is-open')
      ? '<i data-lucide="x"></i>'
      : '<i data-lucide="menu"></i>';
    if (window.lucide) lucide.createIcons();
  });
  navMobile.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      navMobile.classList.remove('is-open');
      burgerBtn.innerHTML = '<i data-lucide="menu"></i>';
      if (window.lucide) lucide.createIcons();
    })
  );

  /* ---------------- Contact / Enquiry popup ---------------- */
  const popup = document.getElementById('popup');
  const popupBackdrop = document.getElementById('popupBackdrop');
  const popupClose = document.getElementById('popupClose');
  const popupForm = document.getElementById('popupForm');
  const popupThanks = document.getElementById('popupThanks');
  const contactForm = document.getElementById('contactForm');

  function openPopup() {
    popup.hidden = false;
    if (window.lucide) lucide.createIcons();
  }
  function closePopup() {
    popup.hidden = true;
  }

  document.getElementById('enquiryBtnHero').addEventListener('click', openPopup);
  document.getElementById('enquiryBtnCta').addEventListener('click', openPopup);
  popupBackdrop.addEventListener('click', closePopup);
  popupClose.addEventListener('click', closePopup);

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    popupForm.hidden = true;
    popupThanks.hidden = false;
    if (window.lucide) lucide.createIcons();
  });




  
  // /* ---------------- Itinerary sticky scroll sync ---------------- */
 
const days = document.querySelectorAll(".itinerary__day");
const image = document.getElementById("itinImage");
const dayNum = document.getElementById("itinDayNum");
const title = document.getElementById("itinDayTitle");

let active = 0;

function update(index) {
  if (index === active) return;

  active = index;

  const current = days[index];

  days.forEach((day, i) => {
    day.classList.toggle("is-active", i === index);
  });

  image.style.backgroundImage = `url(${current.dataset.image})`;
  dayNum.textContent = `Day ${current.dataset.day}`;
  title.textContent = current.dataset.title;
}


window.addEventListener("scroll", () => {

  days.forEach((day, index) => {

    const rect = day.getBoundingClientRect();

    // check if this day is near middle of viewport
    if (
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2
    ) {
      update(index);
    }

  });

});








});
