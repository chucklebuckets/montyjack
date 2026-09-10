const productLayout = document.getElementById("product-layout");
const productMissing = document.getElementById("product-missing");

const productBreadcrumbTitle = document.getElementById("product-breadcrumb-title");

const productMainImage = document.getElementById("product-main-image");
const productImageError = document.getElementById("product-image-error");
const productThumbnails = document.getElementById("product-thumbnails");
const productImagePrevious = document.getElementById("product-image-previous");
const productImageNext = document.getElementById("product-image-next");
const productImageIndex = document.getElementById("product-image-index");

const productTitle = document.getElementById("product-title");
const productType = document.getElementById("product-type");
const productPrice = document.getElementById("product-price");
const productAvailability = document.getElementById("product-availability");

const productShippingNotes = document.getElementById("product-shipping-notes");
const productDimensionsRow = document.getElementById("product-dimensions-row");
const productDimensions = document.getElementById("product-dimensions");
const productMaterialsRow = document.getElementById("product-materials-row");
const productMaterials = document.getElementById("product-materials");
const productPackaging = document.getElementById("product-packaging");
const productFraming = document.getElementById("product-framing");
const productShippingPrice = document.getElementById("product-shipping-price");

const productVariantNote = document.getElementById("product-variant-note");
const productPurchase = document.getElementById("product-purchase");
const productCheckoutNote = document.getElementById("product-checkout-note");

const productGalleryLink = document.getElementById("product-gallery-link");
const productCopyLink = document.getElementById("product-copy-link");

let currentProduct = null;
let currentProductImages = [];
let currentProductImageIndex = 0;
let productImageRequest = 0;
let copyLinkTimeout = null;

const baseProductDocumentTitle = document.title;
const siteProductDocumentTitle = document.title.includes(" | ")
    ? document.title.split(" | ").at(-1)
    : document.title;

// Product routing
function getCurrentProductSlug() {
    return decodeURIComponent(window.location.hash.slice(1));
}

function getProductFromURL() {
    const slug = getCurrentProductSlug();

    if (!slug) { return null; }

    return products.find(product => product.slug === slug) || null;
}

function showMissingProduct() {
    currentProduct = null;

    productLayout.hidden = true;
    productMissing.hidden = false;

    productBreadcrumbTitle.textContent = "Product not found";
    document.title = baseProductDocumentTitle;
}

function renderProductFromURL() {
    const product = getProductFromURL();

    if (!product) {
        showMissingProduct();
        return;
    }

    currentProduct = product;
    currentProductImages = getProductImages(product);
    currentProductImageIndex = 0;

    productMissing.hidden = true;
    productLayout.hidden = false;

    const title = getProductTitle(product);

    productBreadcrumbTitle.textContent = title;
    productTitle.textContent = title;
    productType.textContent = getProductTypeLabel(product);
    productPrice.textContent = formatProductPrice(product);

    productAvailability.textContent = getProductAvailabilityLabel(product);
    productAvailability.className = "product-availability";
    productAvailability.classList.add(`availability-${product.availability}`);

    document.title = `${title} | ${siteProductDocumentTitle}`;

    renderProductDetails(product);
    renderProductCheckout(product);
    renderProductGalleryLink(product);
    renderProductThumbnails(product);
    updateProductImage(false);
}

// Product details
function renderProductDetails(product) {
    const dimensions = getProductDimensions(product);
    const materials = getProductMaterials(product);
    const shippingPrice = formatShippingPrice(product);

    if (product.shippingNotes) {
        productShippingNotes.textContent = product.shippingNotes;
        productShippingNotes.hidden = false;
    } else {
        productShippingNotes.hidden = true;
    }

    if (dimensions) {
        productDimensions.textContent = dimensions;
        productDimensionsRow.hidden = false;
    } else {
        productDimensionsRow.hidden = true;
    }

    if (materials) {
        productMaterials.textContent = materials;
        productMaterialsRow.hidden = false;
    } else {
        productMaterialsRow.hidden = true;
    }

    if (product.packaging) {
        productPackaging.textContent = product.packaging;
        productPackaging.hidden = false;
    } else {
        productPackaging.hidden = true;
    }

    if (product.framing) {
        productFraming.textContent = product.framing;
        productFraming.hidden = false;
    } else {
        productFraming.hidden = true;
    }

    if (shippingPrice) {
        productShippingPrice.textContent = shippingPrice;
        productShippingPrice.hidden = false;
    } else {
        productShippingPrice.hidden = true;
    }
}

// Checkout
function renderProductCheckout(product) {
    const checkout = product.checkout;
    const available = isProductAvailable(product);

    productVariantNote.hidden = true;

    productPurchase.removeAttribute("href");
    productPurchase.removeAttribute("target");
    productPurchase.removeAttribute("rel");
    productPurchase.setAttribute("aria-disabled", "true");
    productPurchase.classList.add("disabled");

    if (!available) {
        productPurchase.textContent = getProductAvailabilityLabel(product);
        productCheckoutNote.textContent = "";
        return;
    }

    if (checkout?.provider === "bigcartel" && checkout.variant) {
        productVariantNote.textContent = `On Big Cartel, choose the "${checkout.variant}" print variant.`;
        productVariantNote.hidden = false;
    }

    if (!checkout?.url) {
        productPurchase.textContent = "Purchase link coming soon";
        productCheckoutNote.textContent = "";
        return;
    }

    productPurchase.href = checkout.url;
    productPurchase.removeAttribute("aria-disabled");
    productPurchase.classList.remove("disabled");

    if (product.type === "original") {
        productPurchase.textContent = `Purchase Original — ${formatProductPrice(product)}`;
    } else if (product.type === "print") {
        productPurchase.textContent = `Purchase Print — ${formatProductPrice(product)}`;
    } else {
        productPurchase.textContent = `Purchase — ${formatProductPrice(product)}`;
    }

    if (checkout.provider === "stripe") {
        productCheckoutNote.textContent = "Secure checkout via Stripe";
    } else if (checkout.provider === "bigcartel") {
        productCheckoutNote.textContent = "Checkout and fulfillment via Big Cartel";
    } else {
        productCheckoutNote.textContent = "";
    }
}

function renderProductGalleryLink(product) {
    const galleryURL = getGalleryPieceURL(product);

    if (galleryURL) {
        productGalleryLink.href = galleryURL;
        productGalleryLink.hidden = false;
    } else {
        productGalleryLink.hidden = true;
    }
}

// Product images
function renderProductThumbnails(product) {
    productThumbnails.replaceChildren();

    const hasMultipleImages = currentProductImages.length > 1;

    productThumbnails.hidden = !hasMultipleImages;
    productImagePrevious.hidden = !hasMultipleImages;
    productImageNext.hidden = !hasMultipleImages;
    productImageIndex.hidden = !hasMultipleImages;

    currentProductImages.forEach((imagePath, index) => {
        const button = document.createElement("button");
        button.classList.add("product-thumbnail");
        button.type = "button";
        button.setAttribute("aria-label", `View image ${index + 1} of ${getProductTitle(product)}`);

        const image = document.createElement("img");
        image.src = getProductPageImagePath(imagePath);
        image.alt = "";
        image.loading = "lazy";
        image.decoding = "async";

        button.appendChild(image);

        button.addEventListener("click", () => {
            currentProductImageIndex = index;
            updateProductImage();
        });

        productThumbnails.appendChild(button);
    });
}

function updateProductThumbnailState() {
    const thumbnailButtons = productThumbnails.querySelectorAll(".product-thumbnail");

    thumbnailButtons.forEach((button, index) => {
        const selected = index === currentProductImageIndex;

        button.classList.toggle("active", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
}

function updateProductImage(animate = true) {
    if (!currentProduct || currentProductImages.length === 0) {
        showProductImageError();
        return;
    }

    const imagePath = getProductPageImagePath(
        currentProductImages[currentProductImageIndex]
    );

    loadProductImage(
        imagePath,
        getProductAlt(currentProduct),
        animate
    );

    productImageIndex.textContent =
        `${currentProductImageIndex + 1} / ${currentProductImages.length}`;

    updateProductThumbnailState();
}

function loadProductImage(src, alt, animate = true) {
    const request = ++productImageRequest;

    const beginLoad = () => {
        const preloadImage = new Image();

        preloadImage.onload = () => {
            if (request !== productImageRequest) { return; }

            productMainImage.src = src;
            productMainImage.alt = alt;
            productMainImage.hidden = false;
            productImageError.hidden = true;

            requestAnimationFrame(() => {
                productMainImage.classList.remove("changing");
            });
        };

        preloadImage.onerror = () => {
            if (request !== productImageRequest) { return; }

            showProductImageError();
        };

        preloadImage.src = src;
    };

    if (!animate) {
        beginLoad();
        return;
    }

    productMainImage.classList.add("changing");

    setTimeout(beginLoad, 90);
}

function showProductImageError() {
    productMainImage.classList.remove("changing");
    productMainImage.hidden = true;

    productImageError.textContent =
        `Image unavailable for ${currentProduct ? getProductTitle(currentProduct) : "this product"}.`;

    productImageError.hidden = false;
}

function showPreviousProductImage() {
    currentProductImageIndex--;

    if (currentProductImageIndex < 0) {
        currentProductImageIndex = currentProductImages.length - 1;
    }

    updateProductImage();
}

function showNextProductImage() {
    currentProductImageIndex++;

    if (currentProductImageIndex >= currentProductImages.length) {
        currentProductImageIndex = 0;
    }

    updateProductImage();
}

// Copy link
async function copyProductLink() {
    if (!currentProduct) { return; }

    const productURL = window.location.href;

    try {
        await navigator.clipboard.writeText(productURL);
    } catch {
        const temporaryInput = document.createElement("textarea");
        temporaryInput.value = productURL;
        temporaryInput.setAttribute("readonly", "");
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";
        document.body.appendChild(temporaryInput);
        temporaryInput.select();
        document.execCommand("copy");
        temporaryInput.remove();
    }

    productCopyLink.textContent = "Copied!";

    clearTimeout(copyLinkTimeout);
    copyLinkTimeout = setTimeout(() => {
        productCopyLink.textContent = "Copy Link";
    }, 1500);
}

// Button events
productImagePrevious.addEventListener("click", showPreviousProductImage);
productImageNext.addEventListener("click", showNextProductImage);
productCopyLink.addEventListener("click", copyProductLink);

// Keyboard image controls
document.addEventListener("keydown", (event) => {
    if (!currentProduct || currentProductImages.length <= 1) { return; }

    if (event.key === "ArrowLeft") {
        showPreviousProductImage();
    }

    if (event.key === "ArrowRight") {
        showNextProductImage();
    }
});

// Update if a different product hash is loaded on the same page
window.addEventListener("hashchange", renderProductFromURL);

// Initial product rendering
renderProductFromURL();
