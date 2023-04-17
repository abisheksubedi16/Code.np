// Get the current date
const currentDate = new Date();

// Extract the date components
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

// Format the date string
const formattedDate = `${year}/${month}/${day}`;

// Update the HTML element with the date value
document.getElementById('dateContainer').innerHTML = `${formattedDate}`;

//SLIDER
let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const slider = document.querySelector(".slider");

    // Function to show next slide
    function nextSlide() {
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      updateSlider();
    }

    // Function to show previous slide
    function prevSlide() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
      updateSlider();
    }

    // Function to update slider position
    function updateSlider() {
      slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    // Auto play slider every 5 seconds
    setInterval(() => {
      nextSlide();
    }, 5000);
