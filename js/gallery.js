/*
title - REQUIRED - Title of piece
date - REQUIRED - Date of piece
category - REQUIRED - Filter category
materials - optional - Material/medium used
dimensions - optional - Measurements of piece
description - optional - Artist statement, story, etc
venue - optional - Venue piece is currently at, link to venue
shop - optional - Status of piece in shop, link to shop
thumbnail - REQUIRED - Image used in the gallery grid
images - REQUIRED - Images in the lightbox viewer
alt - REQUIRED - Alt text if image cannot load or for text reader
*/
const pieces = [
    {
        title: "shrew",
        date: "2014",
        category: "3d",
        materials: "Meat, bone, energy",
        dimensions: "18ft × 27ft × 10ft",
        description: "I really like this piece. it all began when I was born. At first, I saw a light.\nI crawled closer to that light. Then I was cold and mad.",
        venue: {
            name: "Gallery FortyShrew",
            url: "https://example.com"
        },
        shop: {
            status: "Sold",
            url: "https://example.com",
        },

        thumbnail: "../assets/gallery/shrew/1.png",
        images: [
            "../assets/gallery/shrew/1.png",
        ],

        alt: "DESCRIPTION OF CHEESE CUBE"
    },

    {
        title: "cheesecube",
        date: "2014",
        category: "fine",

        thumbnail: "../assets/gallery/cheesecube/1.png",
        images: [
            "../assets/gallery/cheesecube/1.png",
            "../assets/gallery/cheesecube/2.png",
            "../assets/gallery/cheesecube/3.png",
        ],

        alt: "DESCRIPTION OF CHEESE CUBE"
    },
    {
        title: "monster",
        date: "2014",
        category: "fine",

        thumbnail: "../assets/gallery/patrick/1.jpg",
        images: [
            "../assets/gallery/patrick/1.jpg",
        ],

        alt: "DESCRIPTION OF CHEESE CUBE"
    },
];

const galleryGrid = document.getElementById("gallery-grid");

const filterButtons = document.querySelectorAll(".filter-button");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image")
const lightboxClose = document.getElementById("lightbox-close")
const lightboxContent = document.getElementById("lightbox-content");
const imageIndex = document.getElementById("image-index");

const imagePrevious = document.getElementById("image-previous");
const imageNext = document.getElementById("image-next");
const piecePrevious = document.getElementById("piece-previous");
const pieceNext = document.getElementById("piece-next");

let visiblePieces = [];
let currentPieceIndex = 0;
let currentImageIndex = 0;

const detailsToggle = document.getElementById("details-toggle");
const detailsPanel = document.getElementById("details-panel");
const detailsClose = document.getElementById("details-close");
const detailsTitle = document.getElementById("details-title");
const detailsDate = document.getElementById("details-date");
const detailsMaterialsRow = document.getElementById("details-materials-row");
const detailsMaterials = document.getElementById("details-materials");
const detailsDimensionsRow = document.getElementById("details-dimensions-row");
const detailsDimensions = document.getElementById("details-dimensions");
const detailsDescriptionSection = document.getElementById("details-description-section");
const detailsDescription = document.getElementById("details-description");
const detailsVenueSection = document.getElementById("details-venue-section");
const detailsVenue = document.getElementById("details-venue");
const detailsShopSection = document.getElementById("details-shop-section");
const detailsShop = document.getElementById("details-shop");

// Render gallery w/ lazy loading
function renderGallery(filter = "all") {
    galleryGrid.innerHTML = "";

    const newestFirst = [...pieces].reverse();

    visiblePieces = newestFirst.filter((piece) => {
        return (filter === "all" || piece.category === filter);
    });

    visiblePieces.forEach((piece, index) => {

        const article = document.createElement("article");
        article.classList.add("gallery-piece");

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

        button.addEventListener("click", () => { openLightbox(index); })

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

// Lightbox
function openLightbox(pieceIndex) {
    currentPieceIndex = pieceIndex;
    currentImageIndex = 0;

    setDetailsOpen(false);

    updateLightbox();

    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
}

function updateLightbox() {
    const piece = visiblePieces[currentPieceIndex];
    const image = piece.images[currentImageIndex];

    lightboxImage.src = image
    lightboxImage.alt = piece.alt

    // Image counter
    imageIndex.textContent = `${currentImageIndex + 1} / ${piece.images.length}`;
    imageIndex.hidden = piece.images.length <= 1;
    
    updateNavigationVisibility();
    updateDetails(piece);
}

function setDetailsOpen(open) {
    lightbox.classList.toggle("details-open", open);
    detailsToggle.setAttribute("aria-expanded", String(open));
    detailsPanel.setAttribute("aria-hidden", String(!open))
}

// Image navigation
function showPreviousImage() {
    const piece = visiblePieces[currentPieceIndex];
    currentImageIndex--;

    if (currentImageIndex < 0) { currentImageIndex = piece.images.length - 1; } // Wrap around

    updateLightbox();
}

function showNextImage() {
    const piece = visiblePieces[currentPieceIndex];
    currentImageIndex++;

    if (currentImageIndex >= piece.images.length) { currentImageIndex = 0; } // Wrap around

    updateLightbox();
}

// Piece navigation
function showPreviousPiece() {
    currentPieceIndex--;

    if (currentPieceIndex < 0) { currentPieceIndex = visiblePieces.length - 1; } // Wrap around

    currentImageIndex = 0;

    updateLightbox();
}

function showNextPiece() {
    currentPieceIndex++;

    if (currentPieceIndex >= visiblePieces.length) { currentPieceIndex = 0; } // Wrap around

    currentImageIndex = 0;

    updateLightbox();
}

// Navigation arrow visibility (piece only has 1 image) (filter only has 1 piece)
function updateNavigationVisibility() {
    const piece = visiblePieces[currentPieceIndex];

    const hasMultipleImages = (piece.images.length > 1);
    imagePrevious.hidden = !hasMultipleImages;
    imageNext.hidden = !hasMultipleImages;

    const hasMultiplePieces = (visiblePieces.length > 1);
    pieceNext.hidden = !hasMultiplePieces;
    piecePrevious.hidden = !hasMultiplePieces;
}


// Details panel
function updateDetails(piece) {
    // Core details
    detailsTitle.textContent = piece.title;
    detailsDate.textContent = piece.date;

    // Materials/medium
    if (piece.materials) {
        detailsMaterials.textContent = piece.materials;
        detailsMaterialsRow.hidden = false;
    } else {
        detailsMaterialsRow.hidden = true
    }

    // Dimensions
    if (piece.dimensions) {
        detailsDimensions.textContent = piece.dimensions;
        detailsDimensionsRow.hidden = false;
    } else {
        detailsDimensionsRow.hidden = true
    }
    
    // Artist statement/description
    if (piece.description) {
        detailsDescription.textContent = piece.description;
        detailsDescriptionSection.hidden = false;
    } else {
        detailsDescriptionSection.hidden = true;
    }

    // Venue
    detailsVenue.replaceChildren();

    if (piece.venue) {
        const venueElement = document.createElement(piece.venue.url ? "a" : "span");
        venueElement.textContent = piece.venue.name;
        if (piece.venue.url) {
            venueElement.href = piece.venue.url;
            venueElement.target = "_blank";
            venueElement.rel = "noopener noreferrer";
        }
        detailsVenue.appendChild(venueElement);
        detailsVenueSection.hidden = false;
    } else {
        detailsVenueSection.hidden = true;
    }

    // Shop
    detailsShop.replaceChildren();

    if (piece.shop) {
        const shopElement = document.createElement(piece.shop.url ? "a" : "span");
        const anchorText = piece.title + " - " + piece.shop.status
        shopElement.textContent = anchorText;
        if (piece.shop.url) {
            shopElement.href = piece.shop.url;
            shopElement.target = "_blank";
            shopElement.rel = "noopener noreferrer";
        }
        detailsShop.appendChild(shopElement);
        detailsShopSection.hidden = false;
    } else {
        detailsShopSection.hidden = true;
    }
}

// Close lightbox
function closeLightbox() {
    setDetailsOpen(false);
    lightbox.hidden = true;
    lightboxImage.src = "";
    document.body.style.overflow = "";
}



// --------------------------------------------------------------------------------
// Nav and close buttons
lightboxClose.addEventListener("click", closeLightbox);
imagePrevious.addEventListener("click", showPreviousImage);
imageNext.addEventListener("click", showNextImage);
piecePrevious.addEventListener("click", showPreviousPiece);
pieceNext.addEventListener("click", showNextPiece)

// Clicking outside of lightbox to close
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox | event.target.classList.contains("lightbox-content")) {
        closeLightbox();
    }
});

// Toggle on/off details panel
detailsToggle.addEventListener("click", () => {
    const isOpen = lightbox.classList.contains("details-open");
    setDetailsOpen(!isOpen);
});

// Close button on details panel
detailsClose.addEventListener("click", () => { setDetailsOpen(false); });

// Keyboard controls
document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) { return; }

    if (event.key === "Escape") {
        if (lightbox.classList.contains("details-open")) { setDetailsOpen(false); }
        else { closeLightbox(); }
    }

    if (event.key === "ArrowLeft") { showPreviousPiece(); }

    if (event.key === "ArrowRight") { showNextPiece(); }
});

// Initial rendering of gallery with All filter
renderGallery();