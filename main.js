var swiper1 = new Swiper(".mySwiper1", {
  spacebetween: 0,
  slidesPerView: 4,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  breakpoints: {
    640: { slidesPerView: 3, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 40 },
    1024: { slidesPerView: 3, spaceBetween: 50 },
  },
});





const form = document.getElementById('bookingForm');
  const cnicInput = document.getElementById('cnic');
  const cnicError = document.getElementById('cnicError');

  form.addEventListener('submit', function(event) {
    // Reset error message
    cnicError.style.display = 'none';

    // Validate CNIC: must be exactly 11 digits (numbers only)
    const cnicValue = cnicInput.value.trim();
    const cnicRegex = /^[0-9]{11}$/;

    if (!cnicRegex.test(cnicValue)) {
      event.preventDefault();
      cnicError.style.display = 'block';
      cnicInput.focus();
      return false;
    }
    document.getElementById('dob').max = new Date().toISOString().split('T')[0];

    // If all good, form will submit normally
    alert('Form submitted successfully!');
  });