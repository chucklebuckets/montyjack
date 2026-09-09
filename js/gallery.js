const galleryGrid = document.getElementById("gallery-grid");

const filterButtons = document.querySelectorAll(".filter-button");

// Image failure handling
function handleGalleryImageError(image, imageContainer, piece) {
    image.hidden = true;
    imageContainer.classList.add("image-failed");

    const fallback = document.createElement("span");
    fallback.classList.add("gallery-piece-image-fallback");
    fallback.textContent = `Image unavailable — ${piece.title}`;

    imageContainer.appendChild(fallback);
}

// Render gallery w/ lazy loading
function renderGallery(filter = "all") {
    galleryGrid.innerHTML = "";

    const newestFirst = [...pieces].reverse();

    const visiblePieces = newestFirst.filter((piece) => {
        return (filter === "all" || piece.category === filter);
    });

    setPieceSource(newestFirst);
    setVisiblePieces(visiblePieces);

    visiblePieces.forEach((piece, index) => {

        const article = document.createElement("article");
        article.classList.add("gallery-piece");
        article.style.animationDelay = `${Math.min(index * 60, 300)}ms`; // Staggered loading animation w/ cap

        const button = document.createElement("button");
        button.classList.add("gallery-piece-button");
        button.type = "button";
        button.setAttribute(
            "aria-label",
            `View ${piece.title}`
        );

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("gallery-piece-image");

        const image = document.createElement("img");
        image.src = piece.thumbnail;
        image.alt = piece.alt;
        image.loading = "lazy";
        image.decoding = "async";
        image.addEventListener(
            "error",
            () => { handleGalleryImageError(image, imageContainer, piece); },
            { once: true }
        );

        imageContainer.appendChild(image);

        const info = document.createElement("div");
        info.classList.add("gallery-piece-info");

        const title = document.createElement("h2");
        title.classList.add("gallery-piece-title");
        title.textContent = piece.title;
        info.appendChild(title);

        const date = document.createElement("p");
        date.classList.add("gallery-piece-date");
        date.textContent = piece.date;
        info.appendChild(date);

        button.appendChild(imageContainer);
        button.appendChild(info);

        button.addEventListener("click", () => { openLightbox(index, true, button); })

        article.appendChild(button);
        galleryGrid.appendChild(article);
    });
}

// Filtering
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
            btn.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active")
        button.setAttribute("aria-pressed", "true")

        renderGallery(filter);
    });
});

// Initial rendering of gallery with All filter
renderGallery();
initializeLightboxHistory();
