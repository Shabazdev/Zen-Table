export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'starters' | 'sushi' | 'asian' | 'mains' | 'rice_noodles' | 'desserts' | 'beverages';
  isSignature?: boolean;
  isVegetarian?: boolean;
  spicyLevel?: number; // 0 to 3
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Food' | 'Interior' | 'Ambience' | 'Events';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export const restaurantData = {
  name: "Zen Table",
  tagline: "A Journey Through Asian Flavors",
  subtitle: "Pan-Asian Restaurant & Fine Dining in Chattogram",
  description: "Experience thoughtfully crafted Pan-Asian cuisine in an elegant dining atmosphere. From exquisite artisanal sushi and dim sum to masterfully wok-tossed signatures, Zen Table brings refined culinary art to the heart of Chattogram.",
  address: "5th Floor, Innovative Bhuiyan Orchid, 1025/A Bayazid Bostami Road, Chattogram 4000, Bangladesh",
  phone: "+880 1854-062222",
  email: "reservations@zentablectg.com",
  facebookUrl: "https://www.facebook.com/zentablectg",
  instagramUrl: "https://www.instagram.com/zentablectg",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.873!2d91.815!2d22.356!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDIxJzIxLjYiTiA5McKwMzAnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1",
  
  openingHours: [
    { day: "Saturday", hours: "12:00 PM – 12:00 AM" },
    { day: "Sunday", hours: "12:00 PM – 12:00 AM" },
    { day: "Monday", hours: "12:00 PM – 12:00 AM" },
    { day: "Tuesday", hours: "12:00 PM – 12:00 AM" },
    { day: "Wednesday", hours: "12:00 PM – 12:00 AM" },
    { day: "Thursday", hours: "12:00 PM – 12:00 AM" },
    { day: "Friday", hours: "2:00 PM – 12:00 AM" },
  ],

  stats: [
    { label: "Signature Dishes", value: "45+" },
    { label: "Asian Culinary Styles", value: "6" },
    { label: "Dining Experience", value: "Luxury" },
    { label: "Chattogram Location", value: "Bayazid" },
  ],

  signatureDishes: [
    {
      id: "sig-1",
      name: "Zen Special Truffle Salmon Nigiri",
      description: "Fresh Norwegian salmon torch-seared with truffle oil, black caviar, and artisanal sweet soy glaze.",
      price: "৳ 1,250",
      category: "sushi" as const,
      image: "/src/assets/images/zen_table_dish_sushi_1790426246666.jpg",
    },
    {
      id: "sig-2",
      name: "Artisanal Tonkotsu Ramen",
      description: "24-hour simmered creamy pork bone broth, tender chashu pork, ajitsuke tamago, black garlic oil, and handmade noodles.",
      price: "৳ 1,480",
      category: "asian" as const,
      image: "/src/assets/images/zen_table_dish_ramen_1790426258838.jpg",
    },
    {
      id: "sig-3",
      name: "Imperial Crystal Shrimp Dim Sum",
      description: "Hand-crafted translucent rice flour pastry filled with succulent tiger prawns, bamboo shoots, and sesame touch.",
      price: "৳ 890",
      category: "starters" as const,
      image: "/src/assets/images/zen_table_dish_dimsum_1790426280057.jpg",
    },
    {
      id: "sig-4",
      name: "Crispy Peking Duck Breast",
      description: "Crispy-skinned roast duck breast served with scallion julienne, cucumber ribbons, hoisin reduction, and steamed lotus pancakes.",
      price: "৳ 2,150",
      category: "mains" as const,
      image: "/src/assets/images/zen_table_dish_duck_1790426291436.jpg",
    },
  ],

  menuItems: [
    // Starters
    {
      id: "m-1",
      name: "Imperial Crystal Shrimp Dumplings (Har Gow)",
      description: "Delicate translucent wrappers, juicy tiger prawns, bamboo shoots.",
      price: "৳ 890",
      category: "starters",
      isSignature: true,
    },
    {
      id: "m-2",
      name: "Wagyu Beef Gyoza",
      description: "Pan-fried Japanese dumplings with minced wagyu beef, scallions, and chili-ponzu dip.",
      price: "৳ 1,050",
      category: "starters",
      spicyLevel: 1,
    },
    {
      id: "m-3",
      name: "Crispy Vegetable Spring Rolls",
      description: "Shiitake mushrooms, glass noodles, cabbage, sweet chili plum sauce.",
      price: "৳ 650",
      category: "starters",
      isVegetarian: true,
    },
    {
      id: "m-4",
      name: "Spicy Edamame with Truffle Sea Salt",
      description: "Steamed young soybeans tossed in garlic chili oil and truffle sea salt.",
      price: "৳ 550",
      category: "starters",
      isVegetarian: true,
      spicyLevel: 1,
    },

    // Sushi
    {
      id: "m-5",
      name: "Zen Special Truffle Salmon Nigiri",
      description: "Torch-seared Norwegian salmon, truffle oil, caviar, sweet soy glaze.",
      price: "৳ 1,250",
      category: "sushi",
      isSignature: true,
    },
    {
      id: "m-6",
      name: "Dragon Roll",
      description: "Tempura shrimp, cucumber, avocado topped with unagi eel and unagi reduction.",
      price: "৳ 1,650",
      category: "sushi",
    },
    {
      id: "m-7",
      name: "Spicy Tuna Volcano Roll",
      description: "Yellowfin tuna, spicy mayo, crispy tempura flakes, tobiko.",
      price: "৳ 1,450",
      category: "sushi",
      spicyLevel: 2,
    },
    {
      id: "m-8",
      name: "Aburi Scallop & Foie Gras Roll",
      description: "Hokkaido scallop, seared duck liver, tare reduction, microgreens.",
      price: "৳ 1,950",
      category: "sushi",
    },

    // Asian & Mains
    {
      id: "m-9",
      name: "Crispy Peking Duck Breast",
      description: "Crispy duck breast, scallions, cucumber, hoisin reduction, lotus pancakes.",
      price: "৳ 2,150",
      category: "mains",
      isSignature: true,
    },
    {
      id: "m-10",
      name: "Wok-Fried Black Pepper Angus Beef",
      description: "Tender cubes of Angus beef tenderloin, bell peppers, crushed Kampot black pepper sauce.",
      price: "৳ 1,850",
      category: "mains",
      spicyLevel: 2,
    },
    {
      id: "m-11",
      name: "Sichuan Kung Pao Chicken",
      description: "Crispy chicken thigh, dried chili peppers, peanuts, Sichuan peppercorn glaze.",
      price: "৳ 1,200",
      category: "asian",
      spicyLevel: 2,
    },
    {
      id: "m-12",
      name: "Thai Green Curry with Prawns",
      description: "Fragrant coconut milk curry, tiger prawns, Thai basil, bamboo shoots, kaffir lime.",
      price: "৳ 1,550",
      category: "asian",
      spicyLevel: 2,
    },

    // Rice & Noodles
    {
      id: "m-13",
      name: "Artisanal Tonkotsu Ramen",
      description: "Rich pork broth, chashu pork, ajitsuke tamago, black garlic oil.",
      price: "৳ 1,480",
      category: "rice_noodles",
      isSignature: true,
    },
    {
      id: "m-14",
      name: "Wagyu Beef Truffle Fried Rice",
      description: "Wok-tossed jasmine rice, diced wagyu beef, egg, scallions, black truffle paste.",
      price: "৳ 1,350",
      category: "rice_noodles",
    },
    {
      id: "m-15",
      name: "Pad Thai with Tiger Prawns",
      description: "Traditional rice noodles, tamarind sauce, prawns, bean sprouts, crushed peanuts.",
      price: "৳ 1,280",
      category: "rice_noodles",
    },

    // Desserts
    {
      id: "m-16",
      name: "Matcha Lava Cake with Black Sesame Gelato",
      description: "Warm Japanese green tea cake with gooey molten center, artisanal black sesame ice cream.",
      price: "৳ 750",
      category: "desserts",
    },
    {
      id: "m-17",
      name: "Mango Sticky Rice with Coconut Cream",
      description: "Sweet sticky rice, fresh Alphonso mango slices, warm salted coconut cream, toasted sesame.",
      price: "৳ 680",
      category: "desserts",
    },

    // Beverages
    {
      id: "m-18",
      name: "Yuzu Honey Sparkling Cooler",
      description: "Refreshing Japanese yuzu citrus, raw honey, sparkling soda, mint.",
      price: "৳ 450",
      category: "beverages",
    },
    {
      id: "m-19",
      name: "Lychee Zen Mojito (Mocktail)",
      description: "Fresh lychee puree, lime juice, mint leaves, ginger ale.",
      price: "৳ 480",
      category: "beverages",
    },
    {
      id: "m-20",
      name: "Japanese Sencha Green Tea",
      description: "Premium steeped green tea served in cast-iron teapot.",
      price: "৳ 350",
      category: "beverages",
    },
  ],

  gallery: [
    {
      id: "g-1",
      title: "Main Dining Hall",
      category: "Interior" as const,
      image: "/src/assets/images/zen_table_interior_1790426269832.jpg",
      description: "Warm pendant lighting and elegant wooden architecture.",
    },
    {
      id: "g-2",
      title: "Artisanal Sushi Platters",
      category: "Food" as const,
      image: "/src/assets/images/zen_table_dish_sushi_1790426246666.jpg",
      description: "Fresh Norwegian salmon and torch-seared specialties.",
    },
    {
      id: "g-3",
      title: "Tonkotsu Ramen Masterpiece",
      category: "Food" as const,
      image: "/src/assets/images/zen_table_dish_ramen_1790426258838.jpg",
      description: "24-hour simmered broth with handcrafted noodles.",
    },
    {
      id: "g-4",
      title: "Atmospheric Evening Ambience",
      category: "Ambience" as const,
      image: "/src/assets/images/zen_table_hero_1790426234541.jpg",
      description: "Sophisticated dining experience in Bayazid, Chattogram.",
    },
    {
      id: "g-5",
      title: "Crystal Shrimp Dim Sum",
      category: "Food" as const,
      image: "/src/assets/images/zen_table_dish_dimsum_1790426280057.jpg",
      description: "Steamed to absolute perfection.",
    },
    {
      id: "g-6",
      title: "Crispy Peking Duck",
      category: "Food" as const,
      image: "/src/assets/images/zen_table_dish_duck_1790426291436.jpg",
      description: "Crispy skin with hoisin reduction and lotus pancakes.",
    },
  ],

  testimonials: [
    {
      id: "t-1",
      quote: "Zen Table completely redefines fine dining in Chattogram. The ambiance is breathtakingly serene, and every bite of the sushi and ramen is world-class.",
      author: "Tanvir Ahmed",
      role: "Food & Travel Critic",
      rating: 5,
    },
    {
      id: "t-2",
      quote: "An absolute gem on Bayazid Bostami Road. Impeccable hospitality, stunning interior architecture, and the truffle salmon nigiri is unforgettable.",
      author: "Dr. Nusrat Jahan",
      role: "Regular Patron",
      rating: 5,
    },
    {
      id: "t-3",
      quote: "From the dim sum to the Peking duck, the authenticity and presentation are unmatched in Chattogram. Perfect spot for celebrating special occasions.",
      author: "Farhan Chowdhury",
      role: "Architect & Designer",
      rating: 5,
    },
  ],
};
