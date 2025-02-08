document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper-container", {
    // Enable center mode
    centeredSlides: true,
    // Adjust slidesPerView to 'auto' to let slides size based on CSS
    slidesPerView: "auto",
    // Space between slides in px
    spaceBetween: 0,
    // Loop slides for continuous navigation
    loop: true,
    // Optional: autoplay configuration
    autoplay: false,
    // Optional: pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Optional: navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Enable smooth transitions
    speed: 600,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq__question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      this.classList.toggle("active");

      const answer = this.nextElementSibling;

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
