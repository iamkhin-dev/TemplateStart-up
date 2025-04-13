document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    
    filterButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            filterButtons.forEach(function(btn) {
                btn.classList.remove("active");
            });
            button.classList.add("active");

            const filter = button.textContent.toLowerCase();

            portfolioItems.forEach(function(item) {
                const itemText = item.querySelector("h3").textContent.toLowerCase();
                if (filter === "all" || itemText.includes(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollElements = document.querySelectorAll(".scroll-reveal");

    function elementInView(el, offset) {
        if (offset === undefined) offset = 100;
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
    }

    function displayScrollElement(element) {
        element.classList.add("visible");
    }

    function hideScrollElement(element) {
        element.classList.remove("visible");
    }

    function handleScrollAnimation() {
        scrollElements.forEach(function(el) {
            if (elementInView(el, 150)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    }

    window.addEventListener("scroll", function() {
        handleScrollAnimation();
    });

    handleScrollAnimation();
});