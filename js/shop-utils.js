const productTypeLabels = {
    original: "Original",
    print: "Print",
    other: "Other"
};

const productAvailabilityLabels = {
    available: "Available",
    sold: "Sold",
    "coming-soon": "Coming Soon",
    unavailable: "Unavailable"
};

function getPieceBySlug(slug) {
    if (!slug) { return null; }

    return artworks.find(piece => piece.slug === slug) || null;
}

function getPieceForProduct(product) {
    return getPieceBySlug(product.pieceSlug);
}

function getProductTitle(product) {
    const piece = getPieceForProduct(product);

    return product.title || piece?.title || "Untitled";
}

function getProductTypeLabel(product) {
    if (product.typeLabel) { return product.typeLabel; }

    if (product.type === "other" && product.subtype) {
        return product.subtype.charAt(0).toUpperCase() + product.subtype.slice(1);
    }

    return productTypeLabels[product.type] || "Other";
}

function getProductAvailabilityLabel(product) {
    return productAvailabilityLabels[product.availability] || product.availability || "Unavailable";
}

function isProductAvailable(product) {
    return product.availability === "available";
}

function formatProductPrice(product) {
    if (typeof product.price !== "number") { return "Price unavailable"; }

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: product.currency || "USD",
        minimumFractionDigits: product.price % 1 === 0 ? 0 : 2,
        maximumFractionDigits: 2
    }).format(product.price);
}

function formatShippingPrice(product) {
    if (typeof product.shippingPrice === "number") {
        return `${new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: product.currency || "USD",
            minimumFractionDigits: product.shippingPrice % 1 === 0 ? 0 : 2,
            maximumFractionDigits: 2
        }).format(product.shippingPrice)} shipping`;
    }

    if (product.shippingPrice) {
        if (product.shippingPrice.toLowerCase() === "included") { return "Shipping included"; }

        return product.shippingPrice;
    }

    return "";
}

function getProductThumbnail(product) {
    const piece = getPieceForProduct(product);

    return product.thumbnail || piece?.thumbnail || "";
}

function getProductImages(product) {
    const piece = getPieceForProduct(product);

    if (product.images && product.images.length > 0) { return product.images; }
    if (piece?.images && piece.images.length > 0) { return piece.images; }

    const thumbnail = getProductThumbnail(product);

    return thumbnail ? [thumbnail] : [];
}

function getProductAlt(product) {
    const piece = getPieceForProduct(product);

    return product.alt || piece?.alt || `${getProductTitle(product)} product image`;
}

function getProductMaterials(product) {
    const piece = getPieceForProduct(product);

    return product.materials || piece?.materials || "";
}

function getProductDimensions(product) {
    const piece = getPieceForProduct(product);

    return product.dimensions || piece?.dimensions || "";
}

function getProductPageURL(product) {
    return `item/#${encodeURIComponent(product.slug)}`;
}

function getGalleryPieceURL(product) {
    if (!product.pieceSlug) { return null; }

    return `../../gallery/#${encodeURIComponent(product.pieceSlug)}`;
}

function getProductPageImagePath(path) {
    if (!path) { return ""; }

    if (
        path.startsWith("http://") ||
        path.startsWith("https://") ||
        path.startsWith("data:") ||
        path.startsWith("/")
    ) {
        return path;
    }

    if (path.startsWith("../")) {
        return `../../${path.slice(3)}`;
    }

    if (path.startsWith("assets/")) {
        return `../../${path}`;
    }

    return path;
}
