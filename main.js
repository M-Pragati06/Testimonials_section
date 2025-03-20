// Testimonial data
const testimonials = [
    {
        name: "John Doe",
        image: "assets/avatar-1.webp",
        comment: "Amazing service, highly recommend!",
        rating: "★★★★★"
    },
    {
        name: "Jane Smith",
        image: "assets/avatar-2.webp",
        comment: "Fantastic experience, will return!",
        rating: "★★★★☆"
    },
    {
        name: "Alexa Johnson",
        image: "assets/avatar-3.webp",
        comment: "Great support and fast response.",
        rating: "★★★★★"
    },
    {
        name: "Michael Brown",
        image: "assets/avatar-4.webp",
        comment: "Excellent quality and fast service!",
        rating: "★★★★★"
    },
    {
        name: "Emily Wilson",
        image: "assets/avatar-5.webp",
        comment: "Very professional and timely delivery.",
        rating: "★★★★☆"
    },
    {
        name: "David Lee",
        image: "assets/avatar-2.webp",
        comment: "Outstanding customer service!",
        rating: "★★★★★"
    }

];

// Function to generate carousel items
function generateCarouselItems() {
    const carouselInner = document.getElementById("carouselInner");
    let cardsPerSlide;

    // Determine the number of cards per slide based on screen width
    if (window.innerWidth < 768) {
        cardsPerSlide = 1; // Mobile
    } else if (window.innerWidth < 992) {
        cardsPerSlide = 2; // Tablet
    } else {
        cardsPerSlide = 3; // Desktop
    }

    // Split testimonials into chunks for each slide
    for (let i = 0; i < testimonials.length; i += cardsPerSlide) {
        const slideTestimonials = testimonials.slice(i, i + cardsPerSlide);
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (i === 0) carouselItem.classList.add("active"); // First slide is active

        const row = document.createElement("div");
        row.classList.add("row", "justify-content-center");

        slideTestimonials.forEach(testimonial => {
            const col = document.createElement("div");
            col.classList.add("col-12", "col-md-6", "col-lg-4");

            const card = document.createElement("div");
            card.classList.add("card", "testimonial-card");

            card.innerHTML = `
                <div class="image-container">
                    <img src="${testimonial.image}" class="rounded-circle mx-auto d-block" alt="Client">
                </div>
                <h5 class="mt-2 text-primary">${testimonial.name}</h5>
                <p class="text-muted">${testimonial.comment}</p>
                <div class="stars">${testimonial.rating}</div>
            `;

            col.appendChild(card);
            row.appendChild(col);
        });

        carouselItem.appendChild(row);
        carouselInner.appendChild(carouselItem);
    }
}

// Generate carousel items on page load
generateCarouselItems();

// Regenerate carousel items on window resize
window.addEventListener("resize", () => {
    const carouselInner = document.getElementById("carouselInner");
    carouselInner.innerHTML = ""; // Clear existing carousel items
    generateCarouselItems(); // Regenerate carousel items
});
