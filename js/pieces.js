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
        title: "UNTITLED - Bird Skull",
        slug: "0000",
        date: "2022",
        category: "sketch",
        materials: "Colored pencil on paper",

        thumbnail: "../assets/gallery/0000/thumb.webp",
        images: [
            "../assets/gallery/0000/1.webp",
        ],

        alt: "Depiction of a bird skull"
    },
    {
        title: "UNTITLED - Eye",
        slug: "0001",
        date: "2022",
        category: "fine",
        materials: "Charcoal on paper",

        thumbnail: "../assets/gallery/0001/thumb.webp",
        images: [
            "../assets/gallery/0001/1.webp",
        ],

        alt: "Hands holding open eye"
    },
    {
        title: "Ukemochi's Lunch",
        slug: "0001a",
        date: "2022",
        category: "fine",
        materials: "Acrylic on canvas",

        thumbnail: "../assets/gallery/0001a/thumb.webp",
        images: [
            "../assets/gallery/0001a/1.webp",
        ],

        alt: "Hands holding open eye"
    },
    {
        title: "Waiting",
        slug: "0002",
        date: "2023",
        category: "fine",
        materials: "Colored pencil on paper",

        thumbnail: "../assets/gallery/0002/thumb.webp",
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
        
        thumbnail: "../assets/gallery/0003/thumb.webp",
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
        materials: "Bleach on fabric",

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

        thumbnail: "../assets/gallery/0005/thumb.webp",
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

        thumbnail: "../assets/gallery/0007/thumb.webp",
        images: [
            "../assets/gallery/0007/1.webp",
        ],

        alt: "Car flying through space"
    },
    {
        title: "UNTITLED - Peach",
        slug: "0007a",
        date: "Spring 2024",
        category: "fine",
        materials: "Oil on canvas",

        thumbnail: "../assets/gallery/0007a/thumb.webp",
        images: [
            "../assets/gallery/0007a/1.webp",
        ],

        alt: "Fresh juicy peach"
    },
    {
        title: "Creature Pants",
        slug: "0007b",
        date: "Spring 2024",
        category: "misc",
        materials: "Fabric paint on denim",

        thumbnail: "../assets/gallery/0007b/thumb.webp",
        images: [
            "../assets/gallery/0007b/1.webp",
            "../assets/gallery/0007b/2.webp",
            "../assets/gallery/0007b/3.webp",
            "../assets/gallery/0007b/4.webp",
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

        thumbnail: "../assets/gallery/0009/thumb.webp",
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

        thumbnail: "../assets/gallery/0011/thumb.webp",
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

        thumbnail: "../assets/gallery/0014/thumb.webp",
        images: [
            "../assets/gallery/0014/1.webp",
        ],

        alt: "Vibrant desert"
    },
    {
        title: "Virgin Ears",
        slug: "0015",
        date: "Fall 2024",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0015/thumb.webp",
        images: [
            "../assets/gallery/0015/1.webp",
        ],

        alt: "Baby in pool of honey"
    },
    {
        title: "Squashed!",
        slug: "0016",
        date: "Fall 2024",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0016/thumb.webp",
        images: [
            "../assets/gallery/0016/1.webp",
        ],

        alt: "Baby in pool of honey"
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
        title: "Hypersomnia",
        slug: "0019",
        date: "Winter 2024",
        category: "fine",
        materials: "Oil on canvas",

        thumbnail: "../assets/gallery/0019/thumb.webp",
        images: [
            "../assets/gallery/0019/1.webp",
        ],

        alt: "A restless person wrapped up in bedding"
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

        alt: "Frog as a hot air balloon"
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
        title: "Leftovers",
        slug: "0029",
        date: "Spring 2025",
        category: "3d",
        materials: "Toilet paper, paint",

        thumbnail: "../assets/gallery/0029/thumb.webp",
        images: [
            "../assets/gallery/0029/1.webp",
            "../assets/gallery/0029/2.webp",
            "../assets/gallery/0029/3.webp",
            "../assets/gallery/0029/4.webp",
        ],

        alt: "Mangled fish and olive on paper plate"
    },
    {
        title: "UNTITLED",
        slug: "0030",
        date: "Spring 2025",
        category: "3d",
        materials: "Wood, paint, wire, glue",

        thumbnail: "../assets/gallery/0030/thumb.webp",
        images: [
            "../assets/gallery/0030/1.webp",
            "../assets/gallery/0030/2.webp",
            "../assets/gallery/0030/3.webp",
        ],

        alt: "..."
    },
    {
        title: "UNTITLED",
        slug: "0031",
        date: "Spring 2025",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0031/thumb.webp",
        images: [
            "../assets/gallery/0031/1.webp",
        ],

        alt: "..."
    },
    {
        title: "Thinking on Your Toes",
        slug: "0032",
        date: "Spring 2025",
        category: "3d",
        materials: "Wire, clay, paint",

        thumbnail: "../assets/gallery/0032/thumb.webp",
        images: [
            "../assets/gallery/0032/1.webp",
        ],

        alt: "..."
    },
    {
        title: "Jackpot",
        slug: "0033",
        date: "Spring 2025",
        category: "fine",
        materials: "Linoleum, watercolor",

        thumbnail: "../assets/gallery/0033/thumb.webp",
        images: [
            "../assets/gallery/0033/1.webp",
            "../assets/gallery/0033/2.webp",
        ],

        alt: "..."
    },
    {
        title: "Fracture",
        slug: "0034",
        date: "Spring 2025",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0034/thumb.webp",
        images: [
            "../assets/gallery/0034/1.webp",
        ],

        alt: "..."
    },
    {
        title: "Heave",
        slug: "0035",
        date: "Spring 2025",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0035/thumb.webp",
        images: [
            "../assets/gallery/0035/1.webp",
        ],

        alt: "..."
    },
    {
        title: "Ho",
        slug: "0036",
        date: "Spring 2025",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0036/thumb.webp",
        images: [
            "../assets/gallery/0036/1.webp",
        ],

        alt: "..."
    },
    {
        title: "Childhood",
        slug: "0037",
        date: "Spring 2025",
        category: "fine",
        materials: "Oil on canvas",

        thumbnail: "../assets/gallery/0037/thumb.webp",
        images: [
            "../assets/gallery/0037/1.webp",
        ],

        alt: "..."
    },
    {
        title: "UNTITLED",
        slug: "0038",
        date: "Spring 2025",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0038/thumb.webp",
        images: [
            "../assets/gallery/0038/1.webp",
        ],

        alt: "..."
    },
    {
        title: "Echolocation",
        slug: "0039",
        date: "Spring 2025",
        category: "photo",
        materials: "Silver gelatin print, ink",

        thumbnail: "../assets/gallery/0039/thumb.webp",
        images: [
            "../assets/gallery/0039/1.webp",
        ],

        alt: "..."
    },
    {
        title: "Kolmisilmä",
        slug: "0040",
        date: "Spring 2025",
        category: "3d",
        materials: "Clay, mixed media",

        thumbnail: "../assets/gallery/0040/thumb.webp",
        images: [
            "../assets/gallery/0040/1.webp",
            "../assets/gallery/0040/2.webp",
            "../assets/gallery/0040/3.webp",
            "../assets/gallery/0040/4.webp",
        ],

        alt: "..."
    },
    {
        title: "Eyepatch",
        slug: "0041",
        date: "Spring 2025",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0041/thumb.webp",
        images: [
            "../assets/gallery/0041/1.webp",
        ],

        alt: "..."
    },
    {
        title: "UNTITLED",
        slug: "0042",
        date: "Spring 2025",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0042/thumb.webp",
        images: [
            "../assets/gallery/0042/1.webp",
        ],

        alt: "..."
    },
    {
        title: "UNTITLED",
        slug: "0043",
        date: "Spring 2025",
        category: "fine",
        materials: "Oil on canvas, yarn",

        thumbnail: "../assets/gallery/0043/thumb.webp",
        images: [
            "../assets/gallery/0043/1.webp",
            "../assets/gallery/0043/2.webp",
            "../assets/gallery/0043/3.webp",
            "../assets/gallery/0043/4.webp",
            "../assets/gallery/0043/5.webp",
        ],

        alt: "..."
    },
    {
        title: "RAT Pedal",
        slug: "0043a",
        date: "Spring 2025",
        category: "other",
        materials: "Acrylic on pedal",

        thumbnail: "../assets/gallery/0043a/thumb.webp",
        images: [
            "../assets/gallery/0043a/1.webp",
        ],

        alt: "..."
    },
    {
        title: "Mukbang",
        slug: "0044",
        date: "Spring 2025",
        category: "fine",
        materials: "Linoleum, watercolor",

        thumbnail: "../assets/gallery/0044/thumb.webp",
        images: [
            "../assets/gallery/0044/1.webp",
            "../assets/gallery/0044/2.webp",
        ],

        alt: "..."
    },
    {
        title: "Final Battle",
        slug: "0045",
        date: "Spring 2025",
        category: "photo",
        materials: "Silver gelatin print",

        thumbnail: "../assets/gallery/0045/thumb.webp",
        images: [
            "../assets/gallery/0045/1.webp",
        ],

        alt: "..."
    },
    {
        title: "Ulysses S. Grant",
        slug: "0046",
        date: "Spring 2025",
        category: "3d",
        materials: "Clay, concrete, tinfoil, spraypaint",

        thumbnail: "../assets/gallery/0046/thumb.webp",
        images: [
            "../assets/gallery/0046/1.webp",
        ],

        alt: "..."
    },
    {
        title: "Jättimato",
        slug: "0047",
        date: "Summer 2025",
        category: "misc",
        materials: "Fabric, Poly-Fil",

        thumbnail: "../assets/gallery/0047/thumb.webp",
        images: [
            "../assets/gallery/0047/1.webp",
            "../assets/gallery/0047/2.webp",
            "../assets/gallery/0047/3.webp",
            "../assets/gallery/0047/4.webp",
        ],

        alt: "..."
    },
    {
        title: "He Looked Bigger From Below",
        slug: "0048",
        date: "Winter 2026",
        category: "fine",
        materials: "Oil on wood",

        thumbnail: "../assets/gallery/0048/thumb.webp",
        images: [
            "../assets/gallery/0048/1.webp",
        ],

        alt: "..."
    },
    {
        title: "Twins",
        slug: "0049",
        date: "Summer 2026",
        category: "fine",
        materials: "Oil on canvas",

        thumbnail: "../assets/gallery/0049/thumb.webp",
        images: [
            "../assets/gallery/0049/1.webp",
        ],

        alt: "..."
    },
    {
        title: "Face Blindness",
        slug: "0050",
        date: "Summer 2026",
        category: "fine",
        materials: "Oil on canvas",

        thumbnail: "../assets/gallery/0050/thumb.webp",
        images: [
            "../assets/gallery/0050/1.webp",
        ],

        alt: "..."
    },

    /*
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
    */
];

// Backward-compatible alias for shared code that still references `pieces`
const pieces = artworks;
