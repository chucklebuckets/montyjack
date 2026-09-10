MONTY JACK SHOP — REVISED
==========================

This revision makes the shop simpler and fixes the gallery/shop data conflict.

IMPORTANT GALLERY FIX
---------------------

Your current gallery.js uses `artworks`.

The previous shop bundle supplied the same collection as `pieces`, which caused
the gallery to fail. The revised pieces.js now uses:

    const artworks = [ ... ];

and provides:

    const pieces = artworks;

only as a backward-compatible alias.

The supplied gallery.js is your attached current version with its direct
dependency on shop helper functions removed. The gallery now works independently
of products.js/shop-utils.js again.


SHOP GRID CHANGES
-----------------

- Removed the visible "Shop" page heading.
- Original / Print / Other filters stay centered.
- "Available only" now appears centered underneath those filters.
- "Available only" is unchecked by default.
- The compact product grid and type badges are unchanged.


PRODUCT PAGE CHANGES
--------------------

Removed:
- Currently-at / venue row
- Product sales-description paragraph such as "Fine art print of Shrew"
- Inherited artist statement / story
- The bordered metadata table/list

Product details are now a loose vertical list in this order:

1. shippingNotes
2. dimensions
3. materials
4. packaging
5. framing
6. shippingPrice

Each field is optional. Empty fields disappear automatically.


PRODUCT DATA EXAMPLE
--------------------

    {
        slug: "some-original",
        pieceSlug: "some-piece",
        type: "original",
        price: 500,
        availability: "available",

        shippingNotes: "Ships in October after the paint has fully cured.",
        dimensions: "11 in. × 14 in.",
        materials: "Oil on panel",
        packaging: "Comes packaged in a storage box with a signed certificate of authenticity.",
        framing: "Unframed",
        shippingPrice: 15,

        checkout: {
            provider: "stripe",
            url: "YOUR STRIPE PAYMENT LINK"
        }
    }

shippingPrice can also be a string:

    shippingPrice: "Included"

or:

    shippingPrice: "Calculated through Big Cartel"


FILES TO COPY
-------------

js/pieces.js
js/gallery.js
js/products.js
js/shop-utils.js
js/product.js
css/shop.css
css/product.css
shop/index.html
shop/item/index.html

The remaining files in the ZIP are included so the shop folder is complete.
