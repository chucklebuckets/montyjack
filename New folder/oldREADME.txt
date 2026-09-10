MONTY JACK SHOP
===============

This bundle adds the complete static shop frontend while keeping your existing
site architecture intact.

FILES
-----

shop/index.html
    Main shop grid with:
    - 5-column desktop grid
    - original / print / other filters
    - "Available only" filter enabled by default
    - product type badges
    - title, type, price, and availability
    - lazy-loaded images
    - image failure handling
    - responsive 5 / 4 / 3 / 2 / 1-column layout

shop/item/index.html
    Reusable product detail page. Every product gets a URL like:
    https://montyjack.com/shop/item/#shrew-original

css/shop.css
    Shop-grid styling only.

css/product.css
    Product-detail-page styling only.

css/site.css
    Copy of your most recent cleaned shared site.css.

js/pieces.js
    Copy of your most recent shared artwork collection.

js/products.js
    Shop-specific product catalog. This is where you add pricing, availability,
    checkout links, and product type.

js/shop-utils.js
    Shared shop/product helper functions. Both shop.js and product.js use it.

js/shop.js
    Shop grid/filtering logic.

js/product.js
    Product detail page logic, image viewer, checkout state, share link, etc.

js/site.js
    Small shared helper that applies your existing .site-header.scrolled class.


HOW THE DATA IS SPLIT
---------------------

pieces.js contains facts about ART:
    title
    year/date
    materials
    dimensions
    story
    artwork images
    gallery slug

products.js contains facts about THINGS FOR SALE:
    original / print / other
    price
    availability
    checkout provider
    checkout URL
    shipping notes
    product-specific copy

This lets one artwork have both an original product and a print product without
duplicating the artwork metadata.


ADDING STRIPE ORIGINALS
-----------------------

In products.js:

    checkout: {
        provider: "stripe",
        url: "PASTE YOUR STRIPE PAYMENT LINK"
    }

The purchase button automatically becomes:
    Purchase Original — $PRICE

For your setup, put the fixed shipping cost into the Stripe price and use a
shipping note such as:

    shipping: "Shipping is included in the listed price."


ADDING BIG CARTEL PRINTS
------------------------

Every print on montyjack.com can still have its own product card and detail URL,
even though they all point to one Big Cartel "Prints" product.

Use the same Big Cartel URL for every print:

    checkout: {
        provider: "bigcartel",
        url: "PASTE YOUR BIG CARTEL PRINTS PRODUCT URL",
        variant: "Shrew"
    }

The product page tells the customer:
    On Big Cartel, choose the "Shrew" print variant.

Change variant for each print.


ADDING ACCESSORIES
------------------

Use:
    type: "other"

Optionally add:
    subtype: "sticker"

The shop filter still groups it under Other, but its badge/card can say Sticker.


ORDERING
--------

Like your gallery, products.js is displayed newest-first.

Add new products to the BOTTOM of the products array.


IMPORTANT
---------

The checkout URLs in the sample products are intentionally blank so you cannot
accidentally send a customer to a placeholder checkout. The pages will show
"Purchase link coming soon" until you paste your real Stripe/Big Cartel links.
