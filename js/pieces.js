/*
title - REQUIRED - Title of piece
slug - REQUIRED - Url fragment. EX: "tree-shrew" in "https://montyjack.com/gallery/#tree-shrew"
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
const artworks = [
    {
        title: "UNTITLED - Eye",
        slug: "0001",
        date: "2022",
        category: "fine",
        materials: "Charcoal on paper",

        thumbnail: "../assets/gallery/0001/1.webp",
        images: [
            "../assets/gallery/0001/1.webp",
        ],

        alt: "Hands holding open eye"
    },
    {
        title: "Waiting",
        slug: "0002",
        date: "2023",
        category: "fine",
        materials: "Colored pencil on paper",

        thumbnail: "../assets/gallery/0002/1.webp",
        images: [
            "../assets/gallery/0002/1.webp",
        ],

        alt: "Bus in rain"
    },
    {
        title: "Everyone is Talking, No One is Listening",
        slug: "0003",
        date: "2023",
        category: "fine",
        materials: "Oil on canvas",
        venue: {
            name: "Madness! 2.0 - Gallery Forty-Two",
            //url: "..."
        },
        
        thumbnail: "../assets/gallery/0003/1.webp",
        images: [
            "../assets/gallery/0003/1.webp",
        ],

        alt: "Ingrown teeth"
    },
    {
        title: "All Tomorrows Hoodie",
        slug: "0004",
        date: "Winter 2023",
        category: "misc",
        materials: "Bleach, fabric",

        thumbnail: "../assets/gallery/0004/thumb.webp",
        images: [
            "../assets/gallery/0004/1.webp",
            "../assets/gallery/0004/2.webp",
            "../assets/gallery/0004/3.webp",
            "../assets/gallery/0004/4.webp",
            "../assets/gallery/0004/5.webp",
        ],

        alt: "Green hoodie bleach painted with All Tomorrows figures"
    },
    {
        title: "HUNGER",
        slug: "0005",
        date: "Winter 2023",
        category: "fine",
        materials: "Mixed media",

        thumbnail: "../assets/gallery/0005/1.webp",
        images: [
            "../assets/gallery/0005/1.webp",
        ],

        alt: "Green monster and orange blob"
    },
    {
        title: "Sleep Deprived",
        slug: "0006",
        date: "Winter 2023",
        category: "fine",
        materials: "Mixed media",
        venue: {
            name: "Madness! 2.0 - Gallery Forty-Two",
            //url: "..."
        },
        
        thumbnail: "../assets/gallery/0006/thumb.webp",
        images: [
            "../assets/gallery/0006/1.webp",
        ],

        alt: "Guy bent over"
    },
    {
        title: "Universal Expansion",
        slug: "0007",
        date: "Spring 2024",
        category: "fine",
        materials: "Oil on canvas",
        venue: {
            name: "3rd Annual Art of Speed Juried Exhibition - Gallery Forty-Two",
            //url: "..."
        },

        thumbnail: "../assets/gallery/0007/1.webp",
        images: [
            "../assets/gallery/0007/1.webp",
        ],

        alt: "Car flying through space"
    },
    {
        title: "Creature Pants",
        slug: "0007a",
        date: "Spring 2024",
        category: "misc",
        materials: "Fabric paint on denim",

        thumbnail: "../assets/gallery/0007a/thumb.webp",
        images: [
            "../assets/gallery/0007a/1.webp",
            "../assets/gallery/0007a/2.webp",
            "../assets/gallery/0007a/3.webp",
            "../assets/gallery/0007a/4.webp",
        ],

        alt: "Jeans with an orange snake creature painted on the leg"
    },
    {
        title: "Cicada Wedding",
        slug: "0008",
        date: "Fall 2024",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0008/thumb.webp",
        images: [
            "../assets/gallery/0008/1.webp",
        ],

        alt: "Marriage being held by cicadas"
    },
    {
        title: "Precipice",
        slug: "0009",
        date: "Fall 2024",
        category: "fine",
        materials: "Oil on canvas",

        thumbnail: "../assets/gallery/0009/1.webp",
        images: [
            "../assets/gallery/0009/1.webp",
        ],

        alt: "Person crawling on desert planet under sun"
    },
    {
        title: "Fishing for Fishies",
        slug: "0010",
        date: "Fall 2024",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0010/thumb.webp",
        images: [
            "../assets/gallery/0010/1.webp",
        ],

        alt: "Baby riding on Swedish Fish"
    },
    {
        title: "Livestock",
        slug: "0011",
        date: "Fall 2024",
        category: "fine",
        materials: "Acrylic, charcoal, watercolor",

        thumbnail: "../assets/gallery/0011/1.webp",
        images: [
            "../assets/gallery/0011/1.webp",
        ],

        alt: "..."
    },
    {
        title: "Dinner Party",
        slug: "0012",
        date: "Fall 2024",
        category: "fine",
        materials: "Charcoal on paper",

        thumbnail: "../assets/gallery/0012/thumb.webp",
        images: [
            "../assets/gallery/0012/1.webp",
        ],

        alt: "Humanoid creature on all fours"
    },
    {
        title: "Sticky Situation",
        slug: "0013",
        date: "Fall 2024",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0013/thumb.webp",
        images: [
            "../assets/gallery/0013/1.webp",
        ],

        alt: "Baby in pool of honey"
    },
    {
        title: "UNTITLED - DESERT",
        slug: "0014",
        date: "Fall 2024",
        category: "fine",
        materials: "Chalk pastel on paper",

        thumbnail: "../assets/gallery/0014/1.webp",
        images: [
            "../assets/gallery/0014/1.webp",
        ],

        alt: "Vibrant desert"
    },
    {
        title: "Snippet of Raft of the Medusa",
        slug: "0017",
        date: "Fall 2024",
        category: "fine",
        materials: "Oil pastel",

        thumbnail: "../assets/gallery/0017/thumb.webp",
        images: [
            "../assets/gallery/0017/1.webp",
        ],

        alt: "A zoomed in snippet from the piece Raft of the Medusa"
    },
    {
        title: "Boogie",
        slug: "0018",
        date: "Fall 2024",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0018/thumb.webp",
        images: [
            "../assets/gallery/0018/1.webp",
        ],

        alt: "Baby in nose"
    },
    {
        title: "Morsels",
        slug: "0020",
        date: "Winter 2024",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0020/thumb.webp",
        images: [
            "../assets/gallery/0020/1.webp",
        ],

        alt: "Baby sitting on chocolate chips"
    },
    {
        title: "Snack Crackle Pop",
        slug: "0021",
        date: "Winter 2024",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0021/thumb.webp",
        images: [
            "../assets/gallery/0021/1.webp",
        ],

        alt: "Thumbtacks in a cereal bowl"
    },
    {
        title: "Accident",
        slug: "0022",
        date: "Winter 2024",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0022/thumb.webp",
        images: [
            "../assets/gallery/0022/1.webp",
        ],

        alt: "Hand"
    },
    {
        title: "Frog Balloon",
        slug: "0023",
        date: "Winter 2024",
        category: "sketch",
        materials: "Pen",

        thumbnail: "../assets/gallery/0023/thumb.webp",
        images: [
            "../assets/gallery/0023/1.webp",
        ],

        alt: "Big frog on top of a hot air balloon"
    },
    {
        title: "Parasomnia",
        slug: "0024",
        date: "Winter 2024",
        category: "fine",
        materials: "Gouache, colored pencil",

        thumbnail: "../assets/gallery/0024/thumb.webp",
        images: [
            "../assets/gallery/0024/1.webp",
        ],

        alt: "Guy melded into bed"
    },
    {
        title: "Late Night Decisions",
        slug: "0025",
        date: "Winter 2024",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0025/thumb.webp",
        images: [
            "../assets/gallery/0025/1.webp",
        ],

        alt: "Hair clippings in sink"
    },
    {
        title: "Maturity",
        slug: "0026",
        date: "Winter 2025",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0026/thumb.webp",
        images: [
            "../assets/gallery/0026/1.webp",
        ],

        alt: "Kid with fake mustache scratching chin"
    },
    {
        title: "Greed",
        slug: "0027",
        date: "Winter 2025",
        category: "fine",
        materials: "Colored pencil on paper",

        thumbnail: "../assets/gallery/0027/thumb.webp",
        images: [
            "../assets/gallery/0027/1.webp",
        ],

        alt: "Personification of greed"
    },
    {
        title: "Maturity II",
        slug: "0028",
        date: "Spring 2025",
        category: "photo",
        materials: "Silver gelatin print, ink",

        thumbnail: "../assets/gallery/0028/thumb.webp",
        images: [
            "../assets/gallery/0028/1.webp",
        ],

        alt: "Kid putting on lipstick"
    },
    {
        title: "Untitled",
        slug: "0029",
        date: "Spring 2025",
        category: "3d",
        materials: "Toilet paper, paint",

        thumbnail: "../assets/gallery/0029/thumb.webp",
        images: [
            "../assets/gallery/0029/1.webp",
        ],

        alt: "Kid putting on lipstick"
    },
    {
        title: "UNNAMED",
        slug: "phones",
        date: "2025",
        category: "fine",
        materials: "Oil on canvas",
        dimensions: "...",
        description: "...",

        thumbnail: "../assets/gallery/phones/1.webp",
        images: [
            "../assets/gallery/phones/1.webp",
        ],

        alt: "People on phones"
    },
    {
        title: "UNNAMED",
        slug: "egg",
        date: "2026",
        category: "fine",
        materials: "Oil on canvas",
        dimensions: "...",
        description: "...",

        thumbnail: "../assets/gallery/egg/1.webp",
        images: [
            "../assets/gallery/egg/1.webp",
        ],

        alt: "2 fried eggs with faces"
    },
];

// Backward-compatible alias for shared code that still references `pieces`
const pieces = artworks;
