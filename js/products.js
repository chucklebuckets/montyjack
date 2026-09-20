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
        slug: "hypersomnia-original",
        pieceSlug: "0019",

        type: "original",
        price: 1234,
        availability: "unavailable",

        dimensions: "16 × 20 in. (H × W)",

        packaging: "Comes packaged with a signed certificate of authenticity.",
        framing: "Unframed",
        shippingPrice: "US Shipping $15",

        checkout: {
            provider: "Stripe",
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
