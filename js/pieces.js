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
        title: "UNNAMED",
        slug: "eye",
        date: "2022",
        category: "fine",
        materials: "Charcoal on paper",
        dimensions: "...",
        description: "...",

        thumbnail: "../assets/gallery/eye/1.webp",
        images: [
            "../assets/gallery/eye/1.webp",
        ],

        alt: "Hands holding open eye"
    },
    {
        title: "UNNAMED",
        slug: "bus",
        date: "2023",
        category: "fine",
        materials: "Colored pencil on paper",
        dimensions: "...",
        description: "...",

        thumbnail: "../assets/gallery/bus/1.webp",
        images: [
            "../assets/gallery/bus/1.webp",
        ],

        alt: "Bus in rain"
    },
    {
        title: "HUNGER",
        slug: "hunger",
        date: "2023",
        category: "fine",
        materials: "Mixed media",
        dimensions: "...",
        description: "...",

        thumbnail: "../assets/gallery/hunger/1.webp",
        images: [
            "../assets/gallery/hunger/1.webp",
        ],

        alt: "Green monster and orange blob"
    },
    {
        title: "UNNAMED",
        slug: "teeth",
        date: "2023",
        category: "fine",
        materials: "Oil on canvas",
        dimensions: "...",
        description: "...",
        venue: {
            name: "Madness! 2.0 - Gallery Forty-Two",
            //url: "..."
        },

        thumbnail: "../assets/gallery/teeth/1.webp",
        images: [
            "../assets/gallery/teeth/1.webp",
        ],

        alt: "Ingrown teeth"
    },
    {
        title: "UNNAMED",
        slug: "car",
        date: "2024",
        category: "fine",
        materials: "Oil on canvas",
        dimensions: "...",
        description: "...",
        venue: {
            name: "3rd Annual Art of Speed Juried Exhibition - Gallery Forty-Two",
            //url: "..."
        },

        thumbnail: "../assets/gallery/car/1.webp",
        images: [
            "../assets/gallery/car/1.webp",
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
