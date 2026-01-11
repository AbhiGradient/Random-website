// MULTI-CAROUSEL SUPPORT
document.querySelectorAll(".carousel-container").forEach(container => {
    const track = container.querySelector(".carousel-track");
    const leftBtn = container.querySelector(".carousel-btn.left");
    const rightBtn = container.querySelector(".carousel-btn.right");

    const scrollAmount = 260; // card width + gap

    leftBtn.addEventListener("click", () => {
        track.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    rightBtn.addEventListener("click", () => {
        track.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });
});

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Dynamically grab the search input and button
    const searchInput = document.querySelector('.nav-search input');
    const searchBtn = document.querySelector('.nav-search button');

    if (!searchInput || !searchBtn) return; // just in case

    // Function to perform search
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;

        let found = false;

        // Search in car cards
        const carCards = document.querySelectorAll('#cars-carousel .app-card');
        carCards.forEach(card => {
            const carName = card.querySelector('.carname')?.textContent.toLowerCase();
            if (carName && carName.includes(query)) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.style.border = '2px solid #f39c12'; // highlight
                found = true;
            } else {
                card.style.border = 'none';
            }
        });

        // Search in product cards
        const productCards = document.querySelectorAll('#products-carousel .app-card');
        productCards.forEach(card => {
            const prodName = card.querySelector('p')?.textContent.toLowerCase();
            if (prodName && prodName.includes(query)) {
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.style.border = '2px solid #f39c12';
                found = true;
            } else {
                card.style.border = 'none';
            }
        });

        if (!found) {
            alert("No results found for: " + query);
        }
    }

    // Trigger search on button click
    searchBtn.addEventListener('click', performSearch);

    // Trigger search on Enter key press
    searchInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') performSearch();
    });

});

