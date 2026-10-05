// ========================================
// MOBILE MENU
// ========================================

const menuButton = document.querySelector(".menu-button");

const navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("mobile-open");

});


// Close mobile menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("mobile-open");

    });

});


// ========================================
// DARK MODE
// ========================================

const themeButton = document.querySelector(".theme-button");


themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        themeButton.innerHTML = "☀";

        showToast("Cozy dark mode enabled 🌙");

    } else {

        themeButton.innerHTML = "☾";

        showToast("Autumn light mode enabled 🍂");

    }

});


// ========================================
// SEARCH
// ========================================

const search = document.querySelector("#search");

const cards = document.querySelectorAll(".card");


search.addEventListener("input", function () {

    const keyword = search.value.toLowerCase();


    cards.forEach(function (card) {

        const title =
            card.querySelector("h3")
            .textContent
            .toLowerCase();

        const country =
            card.querySelector(".category")
            .textContent
            .toLowerCase();


        if (
            title.includes(keyword) ||
            country.includes(keyword)
        ) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});


// ========================================
// LIKE BUTTON
// ========================================

document.querySelectorAll(".like-button")
    .forEach(function (button) {


        button.addEventListener("click", function () {

            button.classList.toggle("liked");


            if (button.classList.contains("liked")) {

                button.innerHTML = "♥";

                showToast("Added to your autumn favorites 🍂");

            } else {

                button.innerHTML = "♡";

                showToast("Removed from favorites");

            }

        });

    });


// ========================================
// IMAGE LIGHTBOX
// ========================================

const lightbox =
    document.querySelector(".lightbox");

const lightboxImage =
    lightbox.querySelector("img");

const closeLightbox =
    document.querySelector(".close-lightbox");


cards.forEach(function (card) {

    const image =
        card.querySelector("img");


    image.addEventListener("click", function () {

        lightboxImage.src = image.src;

        lightbox.classList.add("show");

    });

});


closeLightbox.addEventListener("click", function () {

    lightbox.classList.remove("show");

});


lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.classList.remove("show");

    }

});


// ========================================
// ESCAPE TO CLOSE LIGHTBOX
// ========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        lightbox.classList.remove("show");

    }

});


// ========================================
// BACK TO TOP
// ========================================

const topButton =
    document.createElement("button");


topButton.className = "top-button";

topButton.innerHTML = "↑";

document.body.appendChild(topButton);


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ========================================
// TOAST
// ========================================

function showToast(message) {

    const toast =
        document.createElement("div");


    toast.className = "toast";

    toast.textContent = message;


    document.body.appendChild(toast);


    setTimeout(function () {

        toast.classList.add("show");

    }, 10);


    setTimeout(function () {

        toast.classList.remove("show");


        setTimeout(function () {

            toast.remove();

        }, 300);


    }, 2000);

}


// ========================================
// SCROLL ANIMATION
// ========================================

const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


cards.forEach(function (card) {

    card.classList.add("hidden-card");

    observer.observe(card);

});