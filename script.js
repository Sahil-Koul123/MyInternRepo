
document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");
    const carouselInner = document.querySelector(".carousel-inner");
    const items = document.querySelectorAll(".carousel-item");

    let currentIndex = 0;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    setInterval(() => {
        nextButton.click();
    }, 5000);

    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartCountElement = document.getElementById("cart-count");
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

window.openTab = openTab;
});


