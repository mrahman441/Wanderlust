const sampleListings = [
    {
        title: "Beachfront Cottage in Cox's Bazar",
        description:
            "Wake up to the sound of waves at the world's longest natural sea beach. This cozy beachfront cottage offers stunning sunrise views, direct beach access, and a serene escape from city life.",
        image: {
            filename: "listingimage1",
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 3500,
        location: "Cox's Bazar",
        country: "Bangladesh",
        geometry: { type: "Point", coordinates: [91.9775, 21.4272] }
    },
    {
        title: "Sundarbans Safari Lodge",
        description:
            "Stay deep in the heart of the Sundarbans, the world's largest mangrove forest. Listen to the jungle at night, spot Royal Bengal Tigers, and cruise through winding rivers at dawn.",
        image: {
            filename: "listingimage2",
            url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 5000,
        location: "Khulna",
        country: "Bangladesh",
        geometry: { type: "Point", coordinates: [89.5644, 22.8456] }
    },
    {
        title: "Sylhet Tea Garden Villa",
        description:
            "Immerse yourself in the lush green tea gardens of Sylhet. This charming villa sits among rolling tea estates offering misty mornings, fresh tea, and a peaceful hillside retreat.",
        image: {
            filename: "listingimage3",
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 4000,
        location: "Sylhet",
        country: "Bangladesh",
        geometry: { type: "Point", coordinates: [91.8687, 24.8949] }
    },
    {
        title: "Bandarban Mountain Retreat",
        description:
            "Escape to the misty peaks of the Chittagong Hill Tracts. This hilltop retreat offers breathtaking panoramic views, cool mountain air, and a gateway to trekking trails through tribal villages.",
        image: {
            filename: "listingimage4",
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 3000,
        location: "Bandarban",
        country: "Bangladesh",
        geometry: { type: "Point", coordinates: [92.2186, 22.1953] }
    },
    {
        title: "Saint Martin's Island Bungalow",
        description:
            "Bangladesh's only coral island awaits. This beachfront bungalow gives you crystal-clear turquoise waters, vibrant reef life, fresh seafood, and some of the most spectacular starry skies in the country.",
        image: {
            filename: "listingimage5",
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 4500,
        location: "Saint Martin's Island",
        country: "Bangladesh",
        geometry: { type: "Point", coordinates: [92.3211, 20.6277] }
    },
    {
        title: "Rangamati Lakeside Cabin",
        description:
            "Perched on the banks of the stunning Kaptai Lake, this wooden cabin offers breathtaking water views, boat rides through shimmering valleys, and a glimpse into the culture of indigenous hill communities.",
        image: {
            filename: "listingimage6",
            url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 2800,
        location: "Rangamati",
        country: "Bangladesh",
        geometry: { type: "Point", coordinates: [92.1988, 22.6524] }
    },
    {
        title: "Old Dhaka Heritage Haveli",
        description:
            "Step back in time in this beautifully restored Mughal-era haveli in the heart of Old Dhaka. Walking distance from Lalbagh Fort, Ahsan Manzil, and the buzzing lanes of the old city.",
        image: {
            filename: "listingimage7",
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 3200,
        location: "Dhaka",
        country: "Bangladesh",
        geometry: { type: "Point", coordinates: [90.4125, 23.8103] }
    },
    {
        title: "Kuakata Sunrise Beach House",
        description:
            "Kuakata — the Daughter of the Sea — is one of the few places in the world where you can see both sunrise and sunset over the ocean. Wake up early to witness magical golden dawns from your private porch.",
        image: {
            filename: "listingimage8",
            url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 2500,
        location: "Kuakata",
        country: "Bangladesh",
        geometry: { type: "Point", coordinates: [90.1154, 21.8219] }
    },
    {
        title: "Srimangal Tea Estate Cabin",
        description:
            "Known as the tea capital of Bangladesh, Srimangal's rolling estates are a sight to behold. Stay in this cozy wooden cabin surrounded by tea bushes, birds, and the serene beauty of the countryside.",
        image: {
            filename: "listingimage9",
            url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 2200,
        location: "Srimangal",
        country: "Bangladesh",
        geometry: { type: "Point", coordinates: [91.7306, 24.3059] }
    },
    {
        title: "Khagrachhari Eco Lodge",
        description:
            "Nestled in the lush green hills of Khagrachhari, this eco lodge offers trekking to Alutila Cave, visits to nearby waterfalls, and authentic tribal cuisine — all surrounded by untouched natural beauty.",
        image: {
            filename: "listingimage10",
            url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 2000,
        location: "Khagrachhari",
        country: "Bangladesh",
        geometry: { type: "Point", coordinates: [91.9847, 23.1193] }
    },
    {
        title: "Barisal River Float House",
        description:
            "Experience the Venice of Bengal from a traditional float house on the serene backwaters of Barisal. Drift past floating guava markets, lush wetlands, and timeless rural life at a gentle pace.",
        image: {
            filename: "listingimage11",
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        },
        price: 1800,
        location: "Barisal",
        country: "Bangladesh",
        geometry: { type: "Point", coordinates: [90.3635, 22.7010] }
    },
    {
        title: "Paharpur Heritage Guesthouse",
        description:
            "Stay steps away from the UNESCO World Heritage Site of Somapura Mahavihara — the largest Buddhist monastery in the Indian subcontinent. A truly historic and tranquil destination in northern Bangladesh.",
        image: {
            filename: "listingimage12",
            url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        },
        price: 1500,
        location: "Naogaon",
        country: "Bangladesh",
        geometry: { type: "Point", coordinates: [88.9757, 25.0317] }
    },
];

module.exports = { data: sampleListings };
