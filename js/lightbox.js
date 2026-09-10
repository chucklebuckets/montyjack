const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image")
const lightboxClose = document.getElementById("lightbox-close")
const lightboxContent = document.getElementById("lightbox-content");
const imageIndex = document.getElementById("image-index");

const imagePrevious = document.getElementById("image-previous");
const imageNext = document.getElementById("image-next");
const piecePrevious = document.getElementById("piece-previous");
const pieceNext = document.getElementById("piece-next");

let pieceSource = [];
let visiblePieces = [];
let currentPieceIndex = 0;
let currentImageIndex = 0;
let lastFocusedElement = null;
let copyLinkResetTimeout = null;
let imageLoadRequest = 0;
let lightboxDetailsEnhancer = null;

const baseDocumentTitle = document.title;
const siteDocumentTitle = document.title.includes(" | ")
    ? document.title.split(" | ").at(-1)
    : document.title;

const copyLinkButton = document.getElementById("copy-link-button");

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

const lightboxImageError = document.createElement("div");
lightboxImageError.classList.add("lightbox-image-error");
lightboxImageError.setAttribute("role", "status");
lightboxImageError.hidden = true;
lightboxImage.insertAdjacentElement("afterend", lightboxImageError);

imageIndex.setAttribute("aria-live", "polite");

// Set pieces available to the lightbox
function setPieceSource(pieceList) {
    pieceSource = pieceList;
}

function setVisiblePieces(pieceList) {
    visiblePieces = pieceList;
}

function setLightboxDetailsEnhancer(enhancer) {
    lightboxDetailsEnhancer = enhancer;
}

function getVisiblePieceSlugs() {
    return visiblePieces.map(piece => piece.slug);
}

function restoreVisiblePieces(pieceSlugs) {
    if (!pieceSlugs || pieceSlugs.length === 0) { return; }

    const pieceMap = new Map(
        pieceSource.map(piece => [piece.slug, piece])
    );

    const restoredPieces = pieceSlugs
        .map(slug => pieceMap.get(slug))
        .filter(piece => piece);

    if (restoredPieces.length > 0) { visiblePieces = restoredPieces; }
}

// Document title
function updateDocumentTitle(piece = null) {
    if (!piece) {
        document.title = baseDocumentTitle;
        return;
    }

    document.title = `${piece.title} | ${siteDocumentTitle}`;
}

// Lightbox
function openLightbox(pieceIndex, updateUrl = true, opener = null) {
    currentPieceIndex = pieceIndex;
    currentImageIndex = 0;

    const piece = visiblePieces[currentPieceIndex];

    if (!piece) { return; }

    if (opener) { lastFocusedElement = opener; }

    if (updateUrl) {
        window.history.pushState(
            {
                pieceLightbox: true,
                fromPage: true,
                pieceSlugs: getVisiblePieceSlugs()
            },
            "",
            getPieceURL(piece.slug)
        );
    }

    setDetailsOpen(false);

    lightbox.classList.remove("lightbox-ready");
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";

    updateDetails(piece);
    updateNavigationVisibility();
    updateDocumentTitle(piece);

    imageIndex.textContent = `${currentImageIndex + 1} / ${piece.images.length}`;
    imageIndex.hidden = piece.images.length <= 1;

    loadLightboxImage(
        piece.images[currentImageIndex],
        piece.alt,
        piece,
        false,
        true
    );
}

function updateLightbox(animateImage = true) {
    const piece = visiblePieces[currentPieceIndex];

    if (!piece) { return; }

    loadLightboxImage(
        piece.images[currentImageIndex],
        piece.alt,
        piece,
        animateImage,
        false
    );

    // Image counter
    imageIndex.textContent = `${currentImageIndex + 1} / ${piece.images.length}`;
    imageIndex.hidden = piece.images.length <= 1;

    updateNavigationVisibility();
    updateDetails(piece);
    updateDocumentTitle(piece);
}

function loadLightboxImage(src, alt, piece, animate = true, revealLightbox = false) {
    const request = ++imageLoadRequest;

    const beginLoad = () => {
        lightboxImage.onload = null;
        lightboxImage.onerror = null;

        lightboxImage.hidden = false;
        lightboxImageError.hidden = true;
        lightboxImage.src = src;
        lightboxImage.alt = alt;

        const finishLoad = () => {
            if (request !== imageLoadRequest) { return; }

            lightboxImage.classList.remove("changing");
            lightboxImage.hidden = false;
            lightboxImageError.hidden = true;

            if (revealLightbox) {
                lightbox.classList.add("lightbox-ready");
                lightboxClose.focus({ preventScroll: true });
            }
        };

        const failLoad = () => {
            if (request !== imageLoadRequest) { return; }

            lightboxImage.classList.remove("changing");
            lightboxImage.hidden = true;
            lightboxImageError.textContent = `Image unavailable for ${piece.title}.`;
            lightboxImageError.hidden = false;

            if (revealLightbox) {
                lightbox.classList.add("lightbox-ready");
                lightboxClose.focus({ preventScroll: true });
            }
        };

        lightboxImage.onload = finishLoad;
        lightboxImage.onerror = failLoad;

        if (lightboxImage.complete) {
            if (lightboxImage.naturalWidth > 0) { finishLoad(); }
            else { failLoad(); }
        }
    };

    if (!animate) {
        beginLoad();
        return;
    }

    lightboxImage.classList.add("changing");

    setTimeout(beginLoad, 120);
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

    updatePieceURL();
    updateLightbox();
}

function showNextPiece() {
    currentPieceIndex++;

    if (currentPieceIndex >= visiblePieces.length) { currentPieceIndex = 0; } // Wrap around

    currentImageIndex = 0;

    updatePieceURL();
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

    if (lightboxDetailsEnhancer) { lightboxDetailsEnhancer(piece); }

    resetCopyLinkButton();
}

// Copy link
async function copyPieceLink() {
    const piece = visiblePieces[currentPieceIndex];

    if (!piece) { return; }

    const pieceURL = new URL(getPieceURL(piece.slug), window.location.origin).href;

    try {
        await navigator.clipboard.writeText(pieceURL);
    } catch {
        const temporaryInput = document.createElement("textarea");
        temporaryInput.value = pieceURL;
        temporaryInput.setAttribute("readonly", "");
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";
        document.body.appendChild(temporaryInput);
        temporaryInput.select();
        document.execCommand("copy");
        temporaryInput.remove();
    }

    copyLinkButton.textContent = "Copied!";

    clearTimeout(copyLinkResetTimeout);
    copyLinkResetTimeout = setTimeout(resetCopyLinkButton, 1500);
}

function resetCopyLinkButton() {
    clearTimeout(copyLinkResetTimeout);
    copyLinkButton.textContent = "Copy Link";
}

// URL/history
function getPieceURL(slug = null) {
    const baseURL = window.location.pathname + window.location.search;

    if (!slug) { return baseURL; }

    return `${baseURL}#${encodeURIComponent(slug)}`;
}

function updatePieceURL() {
    const piece = visiblePieces[currentPieceIndex];
    const fromPage = window.history.state?.fromPage === true;

    window.history.replaceState(
        {
            pieceLightbox: true,
            fromPage: fromPage,
            pieceSlugs: getVisiblePieceSlugs()
        },
        "",
        getPieceURL(piece.slug)
    );
}

function hideLightbox() {
    setDetailsOpen(false);
    lightbox.classList.remove("lightbox-ready");
    lightbox.hidden = true;
    lightboxImage.src = "";
    lightboxImage.hidden = false;
    lightboxImageError.hidden = true;
    document.body.style.overflow = "";
    updateDocumentTitle();

    if (lastFocusedElement && document.contains(lastFocusedElement)) {
        lastFocusedElement.focus({ preventScroll: true });
    }
}

// Close lightbox
function closeLightbox() {
    if (
        window.history.state?.pieceLightbox &&
        window.history.state?.fromPage
    ) {
        window.history.back();
        return;
    }

    window.history.replaceState(
        { pieceBase: true },
        "",
        getPieceURL()
    );

    hideLightbox();
}

function routeFromURL() {
    const slug = decodeURIComponent(window.location.hash.slice(1));

    if (!slug) {
        hideLightbox();
        return;
    }

    restoreVisiblePieces(window.history.state?.pieceSlugs);

    const index = visiblePieces.findIndex(piece => piece.slug === slug);

    if (index === -1) {
        window.history.replaceState(
            { pieceBase: true },
            "",
            getPieceURL()
        );

        hideLightbox();
        return;
    }

    openLightbox(index, false);
}

function initializeLightboxHistory() {
    if (window.location.hash) {
        window.history.replaceState(
            {
                pieceLightbox: true,
                fromPage: false,
                pieceSlugs: getVisiblePieceSlugs()
            },
            "",
            window.location.pathname + window.location.search + window.location.hash
        );

        routeFromURL();
    } else {
        window.history.replaceState(
            { pieceBase: true },
            "",
            getPieceURL()
        );
    }
}

// Keyboard accessibility
function getFocusableLightboxElements() {
    const focusableElements = lightbox.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    return [...focusableElements].filter((element) => {
        if (element.hidden) { return false; }
        if (element.closest("[hidden]")) { return false; }
        if (element.closest('[aria-hidden="true"]')) { return false; }

        return window.getComputedStyle(element).visibility !== "hidden";
    });
}

function trapLightboxFocus(event) {
    if (event.key !== "Tab") { return; }

    const focusableElements = getFocusableLightboxElements();

    if (focusableElements.length === 0) {
        event.preventDefault();
        lightboxClose.focus({ preventScroll: true });
        return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
    }
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
    if (event.target === lightbox || event.target.classList.contains("lightbox-content")) {
        closeLightbox();
    }
});

// Copy link button
copyLinkButton.addEventListener("click", copyPieceLink);

// Toggle on/off details panel
detailsToggle.addEventListener("click", () => {
    const isOpen = lightbox.classList.contains("details-open");
    setDetailsOpen(!isOpen);

    if (!isOpen) { detailsClose.focus({ preventScroll: true }); }
});

// Close button on details panel
detailsClose.addEventListener("click", () => {
    setDetailsOpen(false);
    detailsToggle.focus({ preventScroll: true });
});

// Keyboard controls
document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) { return; }

    trapLightboxFocus(event);

    if (event.key === "Escape") {
        event.preventDefault();

        if (lightbox.classList.contains("details-open")) {
            setDetailsOpen(false);
            detailsToggle.focus({ preventScroll: true });
        }
        else { closeLightbox(); }
    }

    if (event.key === "ArrowLeft") { showPreviousPiece(); }

    if (event.key === "ArrowRight") { showNextPiece(); }
});

// Browser back/forward
window.addEventListener("popstate", routeFromURL);
