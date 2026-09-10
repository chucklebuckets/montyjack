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
        title: "shrew",
        slug: "shrew",
        date: "2014",
        category: "3d",
        materials: "Meat, bone, energy",
        dimensions: "18ft × 27ft × 10ft",
        description: "I really like this piece. it all began when I was born. At first, I saw a light.\nI crawled closer to that light. Then I was cold and mad.",
        venue: {
            name: "Gallery FortyShrew",
            url: "https://example.com"
        },

        thumbnail: "../assets/gallery/shrew/1.png",
        images: [
            "../assets/gallery/shrew/1.png",
        ],

        alt: "DESCRIPTION OF CHEESE CUBE"
    },

    {
        title: "cheesecube",
        slug: "cheesecube",
        date: "2014",
        category: "fine",

        thumbnail: "../assets/gallery/cheesecube/1.png",
        images: [
            "../assets/gallery/cheesecube/1.png",
            "../assets/gallery/cheesecube/2.png",
            "../assets/gallery/cheesecube/3.png",
        ],

        alt: "DESCRIPTION OF CHEESE CUBE"
    },
    {
        title: "monster",
        slug: "monster",
        date: "2014",
        category: "fine",

        thumbnail: "../assets/gallery/patrick/1.jpg",
        images: [
            "../assets/gallery/patrick/1.jpg",
        ],

        alt: "DESCRIPTION OF CHEESE CUBE"
    },
];

// Backward-compatible alias for shared code that still references `pieces`
const pieces = artworks;
