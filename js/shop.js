const shopGrid = document.getElementById("shop-grid");
const shopEmpty = document.getElementById("shop-empty");
const shopCount = document.getElementById("shop-count");

const shopFilterButtons = document.querySelectorAll(".shop-filter-button");
const availabilityFilter = document.getElementById("availability-filter");

let activeTypeFilter = "all";

// Image failure handling
function handleShopImageError(image, imageContainer, product) {
    image.hidden = true;
    imageContainer.classList.add("image-failed");

    const fallback = document.createElement("span");
    fallback.classList.add("shop-product-image-fallback");
    fallback.textContent = `Image unavailable — ${getProductTitle(product)}`;

    imageContainer.appendChild(fallback);
}

// Render shop w/ lazy loading
function renderShop() {
    shopGrid.innerHTML = "";

    const newestFirst = [...products].reverse();

    const visibleProducts = newestFirst.filter((product) => {
        const matchesType = (
            activeTypeFilter === "all" ||
            product.type === activeTypeFilter
        );

        const matchesAvailability = (
            !availabilityFilter.checked ||
            isProductAvailable(product)
        );

        return matchesType && matchesAvailability;
    });

    shopCount.textContent = `${visibleProducts.length} product${visibleProducts.length === 1 ? "" : "s"}`;

    shopEmpty.hidden = visibleProducts.length > 0;

    visibleProducts.forEach((product, index) => {

        const article = document.createElement("article");
        article.classList.add("shop-product");
        article.classList.toggle("unavailable", !isProductAvailable(product));
        article.style.animationDelay = `${Math.min(index * 45, 225)}ms`;

        const link = document.createElement("a");
        link.classList.add("shop-product-link");
        link.href = getProductPageURL(product);
        link.setAttribute(
            "aria-label",
            `View ${getProductTitle(product)} — ${getProductTypeLabel(product)}, ${formatProductPrice(product)}, ${getProductAvailabilityLabel(product)}`
        );

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("shop-product-image");

        const badge = document.createElement("span");
        badge.classList.add("shop-product-badge");
        badge.classList.add(`type-${product.type}`);
        badge.textContent = getProductTypeLabel(product);
        imageContainer.appendChild(badge);

        const image = document.createElement("img");
        image.src = getProductThumbnail(product);
        image.alt = getProductAlt(product);
        image.loading = "lazy";
        image.decoding = "async";
        image.addEventListener(
            "error",
            () => { handleShopImageError(image, imageContainer, product); },
            { once: true }
        );

        imageContainer.appendChild(image);

        const info = document.createElement("div");
        info.classList.add("shop-product-info");

        const primaryInfo = document.createElement("div");
        primaryInfo.classList.add("shop-product-info-row");

        const title = document.createElement("h2");
        title.classList.add("shop-product-title");
        title.textContent = getProductTitle(product);

        const price = document.createElement("p");
        price.classList.add("shop-product-price");
        price.textContent = formatProductPrice(product);

        primaryInfo.appendChild(title);
        primaryInfo.appendChild(price);

        const secondaryInfo = document.createElement("div");
        secondaryInfo.classList.add("shop-product-info-row");
        secondaryInfo.classList.add("shop-product-secondary");

        const type = document.createElement("p");
        type.classList.add("shop-product-type");
        type.textContent = getProductTypeLabel(product);

        const availability = document.createElement("p");
        availability.classList.add("shop-product-availability");
        availability.classList.add(`availability-${product.availability}`);
        availability.textContent = getProductAvailabilityLabel(product);

        secondaryInfo.appendChild(type);
        secondaryInfo.appendChild(availability);

        info.appendChild(primaryInfo);
        info.appendChild(secondaryInfo);

        link.appendChild(imageContainer);
        link.appendChild(info);

        article.appendChild(link);
        shopGrid.appendChild(article);
    });
}

// Type filtering
shopFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeTypeFilter = button.dataset.filter;

        shopFilterButtons.forEach((btn) => {
            btn.classList.remove("active");
            btn.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        renderShop();
    });
});

// Availability filtering
availabilityFilter.addEventListener("change", renderShop);

// Initial rendering of shop
renderShop();
