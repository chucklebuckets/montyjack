/*
slug - REQUIRED - Unique product URL fragment. EX: "shrew-original" in "https://montyjack.com/shop/item/#shrew-original"
pieceSlug - optional - Slug from pieces.js. Inherits title, images, dimensions, materials, etc.
title - REQUIRED only when pieceSlug is not used - Product title
type - REQUIRED - "original", "print", or "other"
subtype - optional - More specific type for "other". EX: "sticker", "book", "pin"
price - REQUIRED - Price as a number. EX: 450
currency - optional - Defaults to "USD"
availability - REQUIRED - "available", "sold", "coming-soon", or "unavailable"

shippingNotes - optional - Time-sensitive or special shipping note. EX: paint drying delay
dimensions - optional - Overrides the linked artwork dimensions
materials - optional - Overrides the linked artwork materials
packaging - optional - Packaging/certificate note
framing - optional - EX: "Unframed", "Framed in black wood"
shippingPrice - optional - Number for a dollar amount, or a string such as "Included"

thumbnail - optional - Overrides the linked piece thumbnail
images - optional - Overrides the linked piece images
alt - optional - Overrides the linked piece alt text

checkout - optional - External checkout provider/link
    provider - "stripe" or "bigcartel"
    url - Paste the Stripe Payment Link or Big Cartel product URL here
    variant - optional - Big Cartel variant the customer should choose

Products are displayed newest-first, so continue adding new products to the bottom of this array.
*/
const products = [
    {
        slug: "car-original",
        pieceSlug: "car",
        type: "original",
        price: 300,
        availability: "available",

        shippingNotes: "PAINTS GOTTA DRY YADA YADA.",
        packaging: "Comes packaged in a storage box with a signed certificate of authenticity.",
        framing: "(Unframed)",
        shippingPrice: "US Standard Shipping - $15",

        checkout: {
            provider: "stripe",
            url: ""
        }
    },

    {
        slug: "shrew-print",
        pieceSlug: "shrew",
        type: "print",
        price: 25,
        availability: "available",

        dimensions: "Choose size through Big Cartel",
        materials: "Fine art print",
        packaging: "Ships in protective print packaging.",
        framing: "Unframed",
        shippingPrice: "Calculated through Big Cartel",

        checkout: {
            provider: "bigcartel",
            url: "",
            variant: "Shrew"
        }
    },

    {
        slug: "cheesecube-print",
        pieceSlug: "cheesecube",
        type: "print",
        price: 25,
        availability: "available",

        dimensions: "Choose size through Big Cartel",
        materials: "Fine art print",
        packaging: "Ships in protective print packaging.",
        framing: "Unframed",
        shippingPrice: "Calculated through Big Cartel",

        checkout: {
            provider: "bigcartel",
            url: "",
            variant: "cheesecube"
        }
    },

    {
        slug: "monster-original",
        pieceSlug: "monster",
        type: "original",
        price: 600,
        availability: "available",

        packaging: "Comes packaged with a signed certificate of authenticity.",
        framing: "Unframed",
        shippingPrice: "Included",

        checkout: {
            provider: "stripe",
            url: ""
        }
    },

    /*
    Example future accessory:

    {
        slug: "monster-sticker",
        title: "Monster Sticker",
        type: "other",
        subtype: "sticker",
        price: 6,
        availability: "available",

        materials: "Weather-resistant vinyl",
        packaging: "Ships in a protective mailer.",
        shippingPrice: "Calculated through Big Cartel",

        thumbnail: "../assets/shop/monster-sticker/1.jpg",
        images: [
            "../assets/shop/monster-sticker/1.jpg",
            "../assets/shop/monster-sticker/2.jpg",
        ],

        alt: "Monster vinyl sticker",

        checkout: {
            provider: "bigcartel",
            url: ""
        }
    },
    */
];
