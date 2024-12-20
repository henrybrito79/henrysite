let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slideshow-box");
    slides.forEach((slide) => (slide.style.display = "none")); // Hide all slides
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1; // Loop back to first slide
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);


function initMap() {
    // Gym location coordinates (example: NYC)
    const gymLocation = { lat: 40.712776, lng: -74.005974 };

    // Create a map centered at the gym location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: gymLocation,
    });

    // Add a marker at the gym location
    const marker = new google.maps.Marker({
        position: gymLocation,
        map: map,
        title: "Dragon Ball Z Gym",
    });
}

// Ensure the Google Maps API calls initMap once it's loaded
window.initMap = initMap;

