const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description:
            "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views, calming sea breezes, and direct beach access just steps from your door, making it perfect for peaceful mornings and sunset evenings.",
        image: {
            filename: "listingimage1",
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-118.7798, 34.0259]
        }
    },
    {
        title: "Modern Loft in Downtown",
        description:
            "Stay in the heart of the city in this stylish loft apartment. Featuring modern interiors, open living spaces, and easy access to shops, restaurants, and nightlife, it’s ideal for urban explorers.",
        image: {
            filename: "listingimage2",
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 1200,
        location: "New York City",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-74.0060, 40.7128]
        }
    },
    {
        title: "Mountain Retreat",
        description:
            "Unplug and unwind in this peaceful mountain cabin surrounded by nature. Enjoy fresh air, scenic trails, and quiet evenings that make it the perfect place to relax and recharge.",
        image: {
            filename: "listingimage3",
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 1000,
        location: "Aspen",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-106.8175, 39.1911]
        }
    },
    {
        title: "Historic Villa in Tuscany",
        description:
            "Experience the charm of Tuscany in this beautifully restored historic villa. Surrounded by rolling hills and vineyards, it offers a timeless Italian countryside escape.",
        image: {
            filename: "listingimage4",
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 2500,
        location: "Florence",
        country: "Italy",
        geometry: {
            type: "Point",
            coordinates: [11.2558, 43.7696]
        }
    },
    {
        title: "Secluded Treehouse Getaway",
        description:
            "Live among the treetops in this unique and secluded treehouse retreat. Perfect for nature lovers seeking peace, privacy, and a memorable off-grid experience.",
        image: {
            filename: "listingimage5",
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 800,
        location: "Portland",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-122.6784, 45.5152]
        }
    },
    {
        title: "Beachfront Paradise",
        description:
            "Step out of your door directly onto the sandy beach. This beachfront condo offers breathtaking ocean views, soothing waves, and ultimate relaxation.",
        image: {
            filename: "listingimage6",
            url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 2000,
        location: "Cancun",
        country: "Mexico",
        geometry: {
            type: "Point",
            coordinates: [-86.8515, 21.1619]
        }
    },
    {
        title: "Rustic Cabin by the Lake",
        description:
            "Spend your days fishing, kayaking, and relaxing by the serene lake. This rustic cabin is ideal for outdoor enthusiasts and quiet retreats.",
        image: {
            filename: "listingimage7",
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-120.0324, 39.0968]
        }
    },
    {
        title: "Luxury Penthouse with City Views",
        description:
            "Indulge in luxury living with panoramic city views from this stunning penthouse. Designed for comfort and elegance, it’s perfect for an upscale stay.",
        image: {
            filename: "listingimage8",
            url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 3500,
        location: "Los Angeles",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-118.2437, 34.0522]
        }
    },
    {
        title: "Ski-In/Ski-Out Chalet",
        description:
            "Hit the slopes right from your doorstep in this ski-in/ski-out chalet. Located in the Swiss Alps, it’s perfect for winter sports lovers.",
        image: {
            filename: "listingimage9",
            url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 3000,
        location: "Verbier",
        country: "Switzerland",
        geometry: {
            type: "Point",
            coordinates: [7.2280, 46.0963]
        }
    },
    {
        title: "Safari Lodge in the Serengeti",
        description:
            "Experience the thrill of the wild in a comfortable safari lodge. Witness breathtaking wildlife and the Great Migration up close.",
        image: {
            filename: "listingimage10",
            url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
        geometry: {
            type: "Point",
            coordinates: [34.8333, -2.3333]
        }
    },
    {
        title: "Historic Canal House",
        description:
            "Stay in a beautifully preserved historic canal house located in Amsterdam’s iconic district, offering charm, culture, and scenic views.",
        image: {
            filename: "listingimage11",
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 1800,
        location: "Amsterdam",
        country: "Netherlands",
        geometry: {
            type: "Point",
            coordinates: [4.8952, 52.3702]
        }
    },
    {
        title: "Private Island Retreat",
        description:
            "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience surrounded by crystal-clear waters.",
        image: {
            filename: "listingimage12",
            url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 10000,
        location: "Fiji",
        country: "Fiji",
        geometry: {
            type: "Point",
            coordinates: [178.0650, -17.7134]
        }
    },
    {
        title: "Charming Cottage in the Cotswolds",
        description:
            "Escape to the picturesque Cotswolds in this charming cottage featuring classic architecture, cozy interiors, and peaceful countryside views.",
        image: {
            filename: "listingimage13",
            url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 1200,
        location: "Cotswolds",
        country: "United Kingdom",
        geometry: {
            type: "Point",
            coordinates: [-1.8433, 51.8330]
        }
    },
    {
        title: "Historic Brownstone in Boston",
        description:
            "Step back in time in this elegant historic brownstone located in the heart of Boston, offering classic charm and modern comfort.",
        image: {
            filename: "listingimage14",
            url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 2200,
        location: "Boston",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-71.0589, 42.3601]
        }
    },
    {
        title: "Beachfront Bungalow in Bali",
        description:
            "Relax on the sandy shores of Bali in this beautiful beachfront bungalow featuring tropical views and a private pool.",
        image: {
            filename: "listingimage15",
            url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 1800,
        location: "Bali",
        country: "Indonesia",
        geometry: {
            type: "Point",
            coordinates: [115.1889, -8.4095]
        }
    },
    {
        title: "Mountain View Cabin in Banff",
        description:
            "Enjoy breathtaking mountain views from this cozy cabin located in the heart of the Canadian Rockies.",
        image: {
            filename: "listingimage16",
            url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 1500,
        location: "Banff",
        country: "Canada",
        geometry: {
            type: "Point",
            coordinates: [-115.5708, 51.1784]
        }
    },
    {
        title: "Art Deco Apartment in Miami",
        description:
            "Step into the glamour of the 1920s in this stylish Art Deco apartment located in the heart of South Beach.",
        image: {
            filename: "listingimage17",
            url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 1600,
        location: "Miami",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-80.1918, 25.7617]
        }
    },
    {
        title: "Tropical Villa in Phuket",
        description:
            "Escape to a tropical paradise in this luxurious villa featuring a private infinity pool and stunning views.",
        image: {
            filename: "listingimage18",
            url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 3000,
        location: "Phuket",
        country: "Thailand",
        geometry: {
            type: "Point",
            coordinates: [98.3923, 7.8804]
        }
    },
    {
        title: "Historic Castle in Scotland",
        description:
            "Live like royalty in this historic castle set in the Scottish Highlands, surrounded by rugged landscapes and timeless beauty.",
        image: {
            filename: "listingimage19",
            url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 4000,
        location: "Scottish Highlands",
        country: "United Kingdom",
        geometry: {
            type: "Point",
            coordinates: [-4.2247, 57.4778]
        }
    },
    {
        title: "Desert Oasis in Dubai",
        description:
            "Experience unmatched luxury in the middle of the desert with this opulent oasis featuring premium amenities and a private pool.",
        image: {
            filename: "listingimage20",
            url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 5000,
        location: "Dubai",
        country: "United Arab Emirates",
        geometry: {
            type: "Point",
            coordinates: [55.2708, 25.2048]
        }
    },
    {
        title: "Rustic Log Cabin in Montana",
        description:
            "Unplug and unwind in this cozy log cabin surrounded by Montana’s natural beauty, perfect for a quiet countryside escape.",
        image: {
            filename: "listingimage21",
            url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 1100,
        location: "Montana",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-110.3626, 46.8797]
        }
    },
    {
        title: "Beachfront Villa in Greece",
        description:
            "Enjoy crystal-clear Mediterranean waters from this beautiful beachfront villa located on a stunning Greek island.",
        image: {
            filename: "listingimage22",
            url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 2500,
        location: "Mykonos",
        country: "Greece",
        geometry: {
            type: "Point",
            coordinates: [25.3289, 37.4467]
        }
    },
    {
        title: "Eco-Friendly Treehouse Retreat",
        description:
            "Stay in an eco-friendly treehouse nestled deep in the forest, offering sustainability, comfort, and a peaceful escape.",
        image: {
            filename: "listingimage23",
            url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 750,
        location: "Costa Rica",
        country: "Costa Rica",
        geometry: {
            type: "Point",
            coordinates: [-83.7534, 9.7489]
        }
    },
    {
        title: "Historic Cottage in Charleston",
        description:
            "Experience the charm of historic Charleston in this beautifully restored cottage complete with a private garden.",
        image: {
            filename: "listingimage24",
            url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 1600,
        location: "Charleston",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-79.9311, 32.7765]
        }
    },
    {
        title: "Modern Apartment in Tokyo",
        description:
            "Explore the vibrant city of Tokyo from this modern, centrally located apartment with easy access to transport and attractions.",
        image: {
            filename: "listingimage25",
            url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 2000,
        location: "Tokyo",
        country: "Japan",
        geometry: {
            type: "Point",
            coordinates: [139.6503, 35.6762]
        }
    },
    {
        title: "Lakefront Cabin in New Hampshire",
        description:
            "Spend your days by the lake in this cozy cabin located in the scenic White Mountains, perfect for peaceful relaxation.",
        image: {
            filename: "listingimage26",
            url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 1200,
        location: "New Hampshire",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-71.5724, 43.1939]
        }
    },
    {
        title: "Luxury Villa in the Maldives",
        description:
            "Indulge in pure luxury in this overwater villa offering breathtaking views of the Indian Ocean and world-class comfort.",
        image: {
            filename: "listingimage27",
            url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 6000,
        location: "Maldives",
        country: "Maldives",
        geometry: {
            type: "Point",
            coordinates: [73.2207, 3.2028]
        }
    },
    {
        title: "Ski Chalet in Aspen",
        description:
            "Hit the slopes in style with this luxurious ski chalet located in the world-famous Aspen ski resort.",
        image: {
            filename: "listingimage28",
            url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 4000,
        location: "Aspen",
        country: "United States",
        geometry: {
            type: "Point",
            coordinates: [-106.8175, 39.1911]
        }
    },
    {
        title: "Secluded Beach House in Costa Rica",
        description:
            "Escape to a secluded beach house on Costa Rica’s Pacific coast, perfect for surfing, relaxing, and reconnecting with nature.",
        image: {
            filename: "listingimage29",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 1800,
        location: "Costa Rica",
        country: "Costa Rica",
        geometry: {
            type: "Point",
            coordinates: [-83.7534, 9.7489]
        }
    },
];

module.exports = { data: sampleListings };
