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
        title: "UNNAMED - Eye",
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

        thumbnail: "../assets/gallery/0004/1.webp",
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
        date: "2024",
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
        title: "Cicada Wedding",
        slug: "0008",
        date: "2024",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0008/thumb.webp",
        images: [
            "../assets/gallery/0008/1.webp",
        ],

        alt: "Car flying through space"
    },
    {
        title: "UNNAMED",
        slug: "desert",
        date: "2024",
        category: "fine",
        materials: "Oil on canvas",
        dimensions: "...",
        description: "...",

        thumbnail: "../assets/gallery/desert/1.webp",
        images: [
            "../assets/gallery/desert/1.webp",
        ],

        alt: "Person crawling on desert planet under sun"
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
        slug: "tv",
        date: "2025",
        category: "fine",
        materials: "Watercolor, charcoal, and acrylic on paper",
        dimensions: "...",
        description: "...",

        thumbnail: "../assets/gallery/tv/1.webp",
        images: [
            "../assets/gallery/tv/1.webp",
        ],

        alt: "First person perspective of overweight man watching tv in trashed room"
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
