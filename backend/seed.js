const products = [
  {
    "id": 1,
    "name": "Fresh Tomatoes",
    "category": "vegetables",
    "price": "Rs. 180",
    "originalPrice": "Rs. 220",
    "image": "https://plus.unsplash.com/premium_photo-1661811820259-2575b82101bf?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.8,
    "reviews": 245,
    "badge": "Fresh",
    "unit": "/kg",
    "location": "Nuwara Eliya",
    "farmName": "Sunil Farm",
    "tags": [
      "Fresh",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 2,
    "name": "Red Chili (Sandhaniya)",
    "category": "vegetables",
    "price": "Rs. 220",
    "originalPrice": "Rs. 280",
    "image": "https://images.unsplash.com/photo-1526346698789-22fd84314424?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.5,
    "reviews": 203,
    "badge": "Spicy",
    "unit": "/kg",
    "location": "Jaffna",
    "farmName": "Spice Valley Farm",
    "tags": [
      "Fresh",
      "Spicy"
    ],
    "stock": true
  },
  {
    "id": 3,
    "name": "Long Beans",
    "category": "vegetables",
    "price": "Rs. 180",
    "originalPrice": "Rs. 220",
    "image": "https://images.unsplash.com/photo-1574963835594-61eede2070dc?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.4,
    "reviews": 141,
    "badge": "",
    "unit": "/kg",
    "location": "Kandy",
    "farmName": "Green Valley Farms",
    "tags": [
      "Fresh",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 4,
    "name": "Onion (Bulam)",
    "category": "vegetables",
    "price": "Rs. 160",
    "originalPrice": "Rs. 200",
    "image": "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.3,
    "reviews": 287,
    "badge": "",
    "unit": "/kg",
    "location": "Matara",
    "farmName": "Coastal Harvest",
    "tags": [
      "Fresh"
    ],
    "stock": true
  },
  {
    "id": 5,
    "name": "Pumpkin (Poṭol)",
    "category": "vegetables",
    "price": "Rs. 140",
    "originalPrice": "Rs. 180",
    "image": "https://images.unsplash.com/photo-1459260216545-994dda21d51a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.5,
    "reviews": 178,
    "badge": "",
    "unit": "/kg",
    "location": "Colombo",
    "farmName": "Urban Garden Co.",
    "tags": [
      "Fresh",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 6,
    "name": "Sweet Corn",
    "category": "vegetables",
    "price": "Rs. 240",
    "originalPrice": "Rs. 320",
    "image": "https://images.unsplash.com/photo-1634467524884-897d0af5e104?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.5,
    "reviews": 145,
    "badge": "Seasonal",
    "unit": "/piece",
    "location": "Badulla",
    "farmName": "Highland Harvest",
    "tags": [
      "Fresh",
      "Seasonal"
    ],
    "stock": true
  },
  {
    "id": 7,
    "name": "Cucumber (Kakdi)",
    "category": "vegetables",
    "price": "Rs. 120",
    "originalPrice": "Rs. 160",
    "image": "https://images.unsplash.com/photo-1590369141086-36ec3ba86952?auto=format&fit=crop&w=900&q=80",
    "rating": 4.6,
    "reviews": 112,
    "badge": "Fresh",
    "unit": "/kg",
    "location": "Peradeniya",
    "farmName": "Vegetable Paradise",
    "tags": [
      "Fresh",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 8,
    "name": "Carrot (Gajar)",
    "category": "vegetables",
    "price": "Rs. 150",
    "originalPrice": "Rs. 200",
    "image": "https://images.unsplash.com/photo-1447003613355-e39f08266d4d?auto=format&fit=crop&w=900&q=80",
    "rating": 4.7,
    "reviews": 198,
    "badge": "Organic",
    "unit": "/kg",
    "location": "Galle",
    "farmName": "Organic Excellence",
    "tags": [
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 9,
    "name": "Cabbage (Bandh Gobi)",
    "category": "vegetables",
    "price": "Rs. 110",
    "originalPrice": "Rs. 150",
    "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
    "rating": 4.4,
    "reviews": 156,
    "badge": "",
    "unit": "/kg",
    "location": "Kurunegala",
    "farmName": "Fresh Produce Farm",
    "tags": [
      "Fresh"
    ],
    "stock": true
  },
  {
    "id": 10,
    "name": "Bell Pepper (Shimla Mirch)",
    "category": "vegetables",
    "price": "Rs. 280",
    "originalPrice": "Rs. 350",
    "image": "https://images.unsplash.com/photo-1599600810694-b5ac4dd26f6f?auto=format&fit=crop&w=900&q=80",
    "rating": 4.8,
    "reviews": 267,
    "badge": "Fresh",
    "unit": "/kg",
    "location": "Negombo",
    "farmName": "Prime Farm",
    "tags": [
      "Fresh",
      "Premium"
    ],
    "stock": true
  },
  {
    "id": 11,
    "name": "Broccoli",
    "category": "vegetables",
    "price": "Rs. 320",
    "originalPrice": "Rs. 400",
    "image": "https://images.unsplash.com/photo-1550258987-920a2eae8b13?auto=format&fit=crop&w=900&q=80",
    "rating": 4.6,
    "reviews": 89,
    "badge": "Premium",
    "unit": "/kg",
    "location": "Nuwara Eliya",
    "farmName": "Premium Vegetables",
    "tags": [
      "Organic",
      "Premium"
    ],
    "stock": true
  },
  {
    "id": 12,
    "name": "Spinach (Palak)",
    "category": "vegetables",
    "price": "Rs. 95",
    "originalPrice": "Rs. 130",
    "image": "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=80",
    "rating": 4.5,
    "reviews": 134,
    "badge": "Fresh",
    "unit": "/bunch",
    "location": "Kandy",
    "farmName": "Green Life Farms",
    "tags": [
      "Fresh",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 20,
    "name": "Watermelon",
    "category": "fruits",
    "price": "Rs. 180",
    "originalPrice": "Rs. 250",
    "image": "https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=900&q=80",
    "rating": 4.6,
    "reviews": 189,
    "unit": "/piece",
    "location": "Polonnaruwa",
    "farmName": "Harvest Fresh Farm",
    "tags": [
      "Fresh",
      "Seasonal"
    ],
    "stock": true
  },
  {
    "id": 21,
    "name": "Banana (Ambul)",
    "category": "fruits",
    "price": "Rs. 120",
    "originalPrice": "Rs. 160",
    "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=80",
    "rating": 4.7,
    "reviews": 312,
    "unit": "/bunch",
    "location": "Colombo",
    "farmName": "Tropical Fruits Co.",
    "tags": [
      "Fresh",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 22,
    "name": "Rambutan",
    "category": "fruits",
    "price": "Rs. 350",
    "originalPrice": "Rs. 450",
    "image": "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=900&q=80",
    "rating": 4.5,
    "reviews": 156,
    "unit": "/kg",
    "location": "Galle",
    "farmName": "Exotic Fruits Farm",
    "tags": [
      "Exotic",
      "Premium"
    ],
    "stock": true
  },
  {
    "id": 23,
    "name": "Mango (Alphonso)",
    "category": "fruits",
    "price": "Rs. 280",
    "originalPrice": "Rs. 350",
    "image": "https://images.unsplash.com/photo-1585518419759-69172da8dcd0?auto=format&fit=crop&w=900&q=80",
    "rating": 4.9,
    "reviews": 423,
    "unit": "/kg",
    "location": "Matara",
    "farmName": "Mango Valley Estates",
    "tags": [
      "Fresh",
      "Seasonal",
      "Premium"
    ],
    "stock": true
  },
  {
    "id": 24,
    "name": "Pineapple",
    "category": "fruits",
    "price": "Rs. 200",
    "originalPrice": "Rs. 270",
    "image": "https://images.unsplash.com/photo-1599599810694-b5ac4dd26f6f?auto=format&fit=crop&w=900&q=80",
    "rating": 4.7,
    "reviews": 289,
    "unit": "/piece",
    "location": "Jaffna",
    "farmName": "Tropical Paradise Farm",
    "tags": [
      "Fresh",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 25,
    "name": "Papaya",
    "category": "fruits",
    "price": "Rs. 160",
    "originalPrice": "Rs. 210",
    "image": "https://images.unsplash.com/photo-1590518868895-1bf26e5a5b8b?auto=format&fit=crop&w=900&q=80",
    "rating": 4.4,
    "reviews": 176,
    "unit": "/piece",
    "location": "Anuradhapura",
    "farmName": "Green Valley Orchards",
    "tags": [
      "Fresh"
    ],
    "stock": true
  },
  {
    "id": 26,
    "name": "Apple (Kashmiri)",
    "category": "fruits",
    "price": "Rs. 240",
    "originalPrice": "Rs. 320",
    "image": "https://images.unsplash.com/photo-1560806887-1519a4f6235f?auto=format&fit=crop&w=900&q=80",
    "rating": 4.8,
    "reviews": 298,
    "unit": "/kg",
    "location": "Badulla",
    "farmName": "Premium Fruit Imports",
    "tags": [
      "Premium",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 27,
    "name": "Orange (Santra)",
    "category": "fruits",
    "price": "Rs. 180",
    "originalPrice": "Rs. 240",
    "image": "https://images.unsplash.com/photo-1582979489946-62ce15ef6442?auto=format&fit=crop&w=900&q=80",
    "rating": 4.6,
    "reviews": 215,
    "unit": "/kg",
    "location": "Kandy",
    "farmName": "Citrus Grove Farm",
    "tags": [
      "Fresh",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 28,
    "name": "Guava (Amrud)",
    "category": "fruits",
    "price": "Rs. 140",
    "originalPrice": "Rs. 180",
    "image": "https://images.unsplash.com/photo-1590518068802-af72fafb3fef?auto=format&fit=crop&w=900&q=80",
    "rating": 4.5,
    "reviews": 147,
    "unit": "/kg",
    "location": "Negombo",
    "farmName": "Coastal Orchards",
    "tags": [
      "Fresh",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 29,
    "name": "Grapes (Angur)",
    "category": "fruits",
    "price": "Rs. 320",
    "originalPrice": "Rs. 420",
    "image": "https://images.unsplash.com/photo-1557804506-669714d2e9d8?auto=format&fit=crop&w=900&q=80",
    "rating": 4.7,
    "reviews": 267,
    "unit": "/kg",
    "location": "Peradeniya",
    "farmName": "Vineyard Estates",
    "tags": [
      "Premium"
    ],
    "stock": true
  },
  {
    "id": 30,
    "name": "Pomegranate (Anaar)",
    "category": "fruits",
    "price": "Rs. 280",
    "originalPrice": "Rs. 360",
    "image": "https://images.unsplash.com/photo-1599599810694-b5ac4dd26f6f?auto=format&fit=crop&w=900&q=80",
    "rating": 4.8,
    "reviews": 189,
    "unit": "/kg",
    "location": "Kurunegala",
    "farmName": "Heritage Fruit Farm",
    "tags": [
      "Fresh",
      "Seasonal"
    ],
    "stock": true
  },
  {
    "id": 31,
    "name": "Mosambi (Sweet Lime)",
    "category": "fruits",
    "price": "Rs. 120",
    "originalPrice": "Rs. 160",
    "image": "https://images.unsplash.com/photo-1585314317383-c7f2f6dfe6d7?auto=format&fit=crop&w=900&q=80",
    "rating": 4.5,
    "reviews": 134,
    "unit": "/kg",
    "location": "Avissawella",
    "farmName": "Fresh Citrus Farm",
    "tags": [
      "Fresh",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 40,
    "name": "Fresh Tuna (Thalapath)",
    "category": "fish",
    "price": "Rs. 850",
    "originalPrice": "Rs. 950",
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    "rating": 4.7,
    "reviews": 128,
    "unit": "/kg",
    "location": "Negombo",
    "farmName": "Morning Fresh Catch",
    "tags": [
      "Fresh",
      "Daily"
    ],
    "stock": true
  },
  {
    "id": 41,
    "name": "Dry Fish (Kala Karawala)",
    "category": "fish",
    "price": "Rs. 1,200",
    "originalPrice": "Rs. 1,500",
    "image": "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=80",
    "rating": 4.6,
    "reviews": 95,
    "unit": "/kg",
    "location": "Mirissa",
    "farmName": "Dried Fish Specialists",
    "tags": [
      "Premium",
      "Traditional"
    ],
    "stock": true
  },
  {
    "id": 42,
    "name": "Haal Messo (Grouper Fish)",
    "category": "fish",
    "price": "Rs. 950",
    "originalPrice": "Rs. 1,150",
    "image": "https://images.unsplash.com/photo-1548940740-204726a19be3?auto=format&fit=crop&w=900&q=80",
    "rating": 4.8,
    "reviews": 167,
    "unit": "/kg",
    "location": "Colombo Port",
    "farmName": "Elite Fish Market",
    "tags": [
      "Fresh",
      "Premium"
    ],
    "stock": true
  },
  {
    "id": 43,
    "name": "Fresh Prawns (Shrimp)",
    "category": "fish",
    "price": "Rs. 680",
    "originalPrice": "Rs. 850",
    "image": "https://images.unsplash.com/photo-1585518419759-69172da8dcd0?auto=format&fit=crop&w=900&q=80",
    "rating": 4.8,
    "reviews": 267,
    "unit": "/kg",
    "location": "Galle",
    "farmName": "Seafood Excellence",
    "tags": [
      "Fresh",
      "Daily"
    ],
    "stock": true
  },
  {
    "id": 44,
    "name": "Sardine Fish (Sardincha)",
    "category": "fish",
    "price": "Rs. 420",
    "originalPrice": "Rs. 550",
    "image": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=900&q=80",
    "rating": 4.5,
    "reviews": 112,
    "unit": "/kg",
    "location": "Matara",
    "farmName": "Coastal Catch",
    "tags": [
      "Fresh"
    ],
    "stock": true
  },
  {
    "id": 45,
    "name": "Mackerel (Bangda)",
    "category": "fish",
    "price": "Rs. 520",
    "originalPrice": "Rs. 680",
    "image": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?auto=format&fit=crop&w=900&q=80",
    "rating": 4.6,
    "reviews": 143,
    "unit": "/kg",
    "location": "Jaffna",
    "farmName": "Northern Fish Market",
    "tags": [
      "Fresh",
      "Daily"
    ],
    "stock": true
  },
  {
    "id": 46,
    "name": "Crab (Live)",
    "category": "fish",
    "price": "Rs. 1,100",
    "originalPrice": "Rs. 1,400",
    "image": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=900&q=80",
    "rating": 4.9,
    "reviews": 198,
    "unit": "/piece",
    "location": "Bentota",
    "farmName": "Luxury Seafood",
    "tags": [
      "Premium",
      "Fresh"
    ],
    "stock": true
  },
  {
    "id": 47,
    "name": "Squid (Kalamari)",
    "category": "fish",
    "price": "Rs. 620",
    "originalPrice": "Rs. 800",
    "image": "https://images.unsplash.com/photo-1580822261290-991b38693d1b?auto=format&fit=crop&w=900&q=80",
    "rating": 4.7,
    "reviews": 156,
    "unit": "/kg",
    "location": "Weligama",
    "farmName": "Deep Sea Delicacies",
    "tags": [
      "Fresh",
      "Daily"
    ],
    "stock": true
  },
  {
    "id": 48,
    "name": "Fish Fillet (Pomfret)",
    "category": "fish",
    "price": "Rs. 780",
    "originalPrice": "Rs. 950",
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
    "rating": 4.6,
    "reviews": 134,
    "unit": "/kg",
    "location": "Kalutara",
    "farmName": "Premium Fillets Co.",
    "tags": [
      "Fresh",
      "Premium"
    ],
    "stock": true
  },
  {
    "id": 49,
    "name": "Anchovy Dry Fish",
    "category": "fish",
    "price": "Rs. 680",
    "originalPrice": "Rs. 850",
    "image": "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=80",
    "rating": 4.5,
    "reviews": 89,
    "unit": "/kg",
    "location": "Chilaw",
    "farmName": "Dried Fish Treasures",
    "tags": [
      "Premium",
      "Traditional"
    ],
    "stock": true
  },
  {
    "id": 50,
    "name": "Bombay Duck (Bommalo)",
    "category": "fish",
    "price": "Rs. 480",
    "originalPrice": "Rs. 620",
    "image": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=900&q=80",
    "rating": 4.4,
    "reviews": 112,
    "unit": "/kg",
    "location": "Kalmunai",
    "farmName": "East Coast Fish Market",
    "tags": [
      "Fresh",
      "Daily"
    ],
    "stock": true
  },
  {
    "id": 60,
    "name": "Basmati Rice (2kg)",
    "category": "grains",
    "price": "Rs. 520",
    "originalPrice": "Rs. 650",
    "image": "https://images.unsplash.com/photo-1586042091544-8ac2f6438b1d?auto=format&fit=crop&w=900&q=80",
    "rating": 4.7,
    "reviews": 356,
    "unit": "/pack",
    "location": "Colombo",
    "farmName": "Premium Rice Traders",
    "tags": [
      "Premium",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 61,
    "name": "Jasmine Rice (1kg)",
    "category": "grains",
    "price": "Rs. 180",
    "originalPrice": "Rs. 240",
    "image": "https://images.unsplash.com/photo-1606788067892-93f8b4fb5ff8?auto=format&fit=crop&w=900&q=80",
    "rating": 4.6,
    "reviews": 267,
    "unit": "/pack",
    "location": "Kandy",
    "farmName": "Golden Rice Farm",
    "tags": [
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 62,
    "name": "Brown Rice (1kg)",
    "category": "grains",
    "price": "Rs. 160",
    "originalPrice": "Rs. 220",
    "image": "https://images.unsplash.com/photo-1508491767596-76ae79badc31?auto=format&fit=crop&w=900&q=80",
    "rating": 4.5,
    "reviews": 189,
    "unit": "/pack",
    "location": "Nuwara Eliya",
    "farmName": "Healthy Grain Co.",
    "tags": [
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 63,
    "name": "White Rice (5kg)",
    "category": "grains",
    "price": "Rs. 280",
    "originalPrice": "Rs. 350",
    "image": "https://images.unsplash.com/photo-1586042091544-8ac2f6438b1d?auto=format&fit=crop&w=900&q=80",
    "rating": 4.4,
    "reviews": 143,
    "unit": "/pack",
    "location": "Polonnaruwa",
    "farmName": "Bulk Rice Supplies",
    "tags": [
      "Fresh"
    ],
    "stock": true
  },
  {
    "id": 64,
    "name": "Red Rice (2kg)",
    "category": "grains",
    "price": "Rs. 420",
    "originalPrice": "Rs. 550",
    "image": "https://images.unsplash.com/photo-1599599810694-b5ac4dd26f6f?auto=format&fit=crop&w=900&q=80",
    "rating": 4.6,
    "reviews": 112,
    "unit": "/pack",
    "location": "Matara",
    "farmName": "Heritage Grain Farm",
    "tags": [
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 65,
    "name": "Wheat Flour (5kg)",
    "category": "grains",
    "price": "Rs. 240",
    "originalPrice": "Rs. 310",
    "image": "https://images.unsplash.com/photo-1599599810694-b5ac4dd26f6f?auto=format&fit=crop&w=900&q=80",
    "rating": 4.7,
    "reviews": 234,
    "unit": "/pack",
    "location": "Badulla",
    "farmName": "Mill House Grains",
    "tags": [
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 66,
    "name": "Jowar (Sorghum) (1kg)",
    "category": "grains",
    "price": "Rs. 120",
    "originalPrice": "Rs. 160",
    "image": "https://images.unsplash.com/photo-1586042091544-8ac2f6438b1d?auto=format&fit=crop&w=900&q=80",
    "rating": 4.5,
    "reviews": 98,
    "unit": "/pack",
    "location": "Jaffna",
    "farmName": "Ancient Grains Farm",
    "tags": [
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 67,
    "name": "Millet (Bajra) (1kg)",
    "category": "grains",
    "price": "Rs. 140",
    "originalPrice": "Rs. 190",
    "image": "https://images.unsplash.com/photo-1599599810694-b5ac4dd26f6f?auto=format&fit=crop&w=900&q=80",
    "rating": 4.6,
    "reviews": 134,
    "unit": "/pack",
    "location": "Galle",
    "farmName": "Health First Grains",
    "tags": [
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 68,
    "name": "Lentils (Dal) (500g)",
    "category": "grains",
    "price": "Rs. 180",
    "originalPrice": "Rs. 240",
    "image": "https://images.unsplash.com/photo-1599599810694-b5ac4dd26f6f?auto=format&fit=crop&w=900&q=80",
    "rating": 4.8,
    "reviews": 267,
    "unit": "/pack",
    "location": "Colombo",
    "farmName": "Legume Specialists",
    "tags": [
      "Fresh"
    ],
    "stock": true
  },
  {
    "id": 69,
    "name": "Chickpea (Chana) (500g)",
    "category": "grains",
    "price": "Rs. 150",
    "originalPrice": "Rs. 200",
    "image": "https://images.unsplash.com/photo-1599599810694-b5ac4dd26f6f?auto=format&fit=crop&w=900&q=80",
    "rating": 4.5,
    "reviews": 145,
    "unit": "/pack",
    "location": "Negombo",
    "farmName": "Premium Pulses",
    "tags": [
      "Fresh"
    ],
    "stock": true
  },
  {
    "id": 80,
    "name": "Curd (500ml)",
    "category": "dairy",
    "price": "Rs. 85",
    "originalPrice": "Rs. 110",
    "image": "https://images.unsplash.com/photo-1488477181946-85a4ce683881?auto=format&fit=crop&w=900&q=80",
    "rating": 4.6,
    "reviews": 512,
    "unit": "/pack",
    "location": "Kandy",
    "farmName": "Fresh Dairy Farm",
    "tags": [
      "Fresh",
      "Daily"
    ],
    "stock": true
  },
  {
    "id": 81,
    "name": "Ghee (500ml)",
    "category": "dairy",
    "price": "Rs. 750",
    "originalPrice": "Rs. 950",
    "image": "https://images.unsplash.com/photo-1488477181946-85a4ce683881?auto=format&fit=crop&w=900&q=80",
    "rating": 4.9,
    "reviews": 198,
    "unit": "/bottle",
    "location": "Matara",
    "farmName": "Pure Ghee Makers",
    "tags": [
      "Pure",
      "Premium"
    ],
    "stock": true
  },
  {
    "id": 82,
    "name": "Milk (1 Liter)",
    "category": "dairy",
    "price": "Rs. 65",
    "originalPrice": "Rs. 85",
    "image": "https://images.unsplash.com/photo-1488477181946-85a4ce683881?auto=format&fit=crop&w=900&q=80",
    "rating": 4.7,
    "reviews": 342,
    "unit": "/liter",
    "location": "Colombo",
    "farmName": "Daily Fresh Milk",
    "tags": [
      "Fresh",
      "Daily"
    ],
    "stock": true
  },
  {
    "id": 83,
    "name": "Paneer (250g)",
    "category": "dairy",
    "price": "Rs. 280",
    "originalPrice": "Rs. 350",
    "image": "https://images.unsplash.com/photo-1488477181946-85a4ce683881?auto=format&fit=crop&w=900&q=80",
    "rating": 4.8,
    "reviews": 267,
    "unit": "/pack",
    "location": "Badulla",
    "farmName": "Premium Paneer House",
    "tags": [
      "Fresh",
      "Premium"
    ],
    "stock": true
  },
  {
    "id": 84,
    "name": "Mozzarella Cheese (200g)",
    "category": "dairy",
    "price": "Rs. 420",
    "originalPrice": "Rs. 550",
    "image": "https://images.unsplash.com/photo-1488477181946-85a4ce683881?auto=format&fit=crop&w=900&q=80",
    "rating": 4.6,
    "reviews": 156,
    "unit": "/pack",
    "location": "Jaffna",
    "farmName": "Imported Cheese Co.",
    "tags": [
      "Premium"
    ],
    "stock": true
  },
  {
    "id": 85,
    "name": "Butter (200g)",
    "category": "dairy",
    "price": "Rs. 320",
    "originalPrice": "Rs. 400",
    "image": "https://images.unsplash.com/photo-1488477181946-85a4ce683881?auto=format&fit=crop&w=900&q=80",
    "rating": 4.7,
    "reviews": 189,
    "unit": "/pack",
    "location": "Galle",
    "farmName": "Creamy Butter Factory",
    "tags": [
      "Fresh",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 86,
    "name": "Yogurt (500g)",
    "category": "dairy",
    "price": "Rs. 120",
    "originalPrice": "Rs. 160",
    "image": "https://images.unsplash.com/photo-1488477181946-85a4ce683881?auto=format&fit=crop&w=900&q=80",
    "rating": 4.5,
    "reviews": 234,
    "unit": "/pack",
    "location": "Negombo",
    "farmName": "Healthy Yogurt Farm",
    "tags": [
      "Fresh",
      "Daily"
    ],
    "stock": true
  },
  {
    "id": 87,
    "name": "Whipped Cream (200ml)",
    "category": "dairy",
    "price": "Rs. 180",
    "originalPrice": "Rs. 240",
    "image": "https://images.unsplash.com/photo-1488477181946-85a4ce683881?auto=format&fit=crop&w=900&q=80",
    "rating": 4.6,
    "reviews": 134,
    "unit": "/bottle",
    "location": "Peradeniya",
    "farmName": "Luxury Dairy",
    "tags": [
      "Premium"
    ],
    "stock": true
  },
  {
    "id": 88,
    "name": "Khoya (500g)",
    "category": "dairy",
    "price": "Rs. 480",
    "originalPrice": "Rs. 620",
    "image": "https://images.unsplash.com/photo-1488477181946-85a4ce683881?auto=format&fit=crop&w=900&q=80",
    "rating": 4.8,
    "reviews": 178,
    "unit": "/pack",
    "location": "Kurunegala",
    "farmName": "Khoya Specialists",
    "tags": [
      "Premium"
    ],
    "stock": true
  },
  {
    "id": 89,
    "name": "Lassi (1 Liter)",
    "category": "dairy",
    "price": "Rs. 95",
    "originalPrice": "Rs. 130",
    "image": "https://images.unsplash.com/photo-1488477181946-85a4ce683881?auto=format&fit=crop&w=900&q=80",
    "rating": 4.5,
    "reviews": 112,
    "unit": "/bottle",
    "location": "Anuradhapura",
    "farmName": "Fresh Lassi House",
    "tags": [
      "Fresh",
      "Daily"
    ],
    "stock": true
  },
  {
    "id": 100,
    "name": "Raw Honey",
    "category": "honey",
    "price": "Rs. 450",
    "originalPrice": "Rs. 550",
    "image": "https://images.unsplash.com/photo-1585395363610-44a60ec80203?auto=format&fit=crop&w=900&q=80",
    "rating": 4.8,
    "reviews": 234,
    "badge": "100% Natural",
    "stock": true
  },
  {
    "id": 101,
    "name": "Forest Honey (500g)",
    "category": "honey",
    "price": "Rs. 520",
    "originalPrice": "Rs. 680",
    "image": "https://images.unsplash.com/photo-1585395363610-44a60ec80203?auto=format&fit=crop&w=900&q=80",
    "rating": 4.9,
    "reviews": 267,
    "unit": "/jar",
    "location": "Kandy",
    "farmName": "Forest Honey Collectors",
    "tags": [
      "Premium",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 102,
    "name": "Wildflower Honey (1kg)",
    "category": "honey",
    "price": "Rs. 890",
    "originalPrice": "Rs. 1,100",
    "image": "https://images.unsplash.com/photo-1585395363610-44a60ec80203?auto=format&fit=crop&w=900&q=80",
    "rating": 4.7,
    "reviews": 189,
    "unit": "/jar",
    "location": "Matara",
    "farmName": "Wildflower Honey Co.",
    "tags": [
      "Organic",
      "100% Natural"
    ],
    "stock": true
  },
  {
    "id": 103,
    "name": "Acacia Honey (500g)",
    "category": "honey",
    "price": "Rs. 480",
    "originalPrice": "Rs. 620",
    "image": "https://images.unsplash.com/photo-1585395363610-44a60ec80203?auto=format&fit=crop&w=900&q=80",
    "rating": 4.8,
    "reviews": 156,
    "unit": "/jar",
    "location": "Galle",
    "farmName": "Acacia Beekeepers",
    "tags": [
      "Pure",
      "Premium"
    ],
    "stock": true
  },
  {
    "id": 104,
    "name": "Manuka Honey (250g)",
    "category": "honey",
    "price": "Rs. 680",
    "originalPrice": "Rs. 850",
    "image": "https://images.unsplash.com/photo-1585395363610-44a60ec80203?auto=format&fit=crop&w=900&q=80",
    "rating": 4.9,
    "reviews": 145,
    "unit": "/jar",
    "location": "Badulla",
    "farmName": "Premium Manuka",
    "tags": [
      "Premium",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 105,
    "name": "Clover Honey (500g)",
    "category": "honey",
    "price": "Rs. 420",
    "originalPrice": "Rs. 540",
    "image": "https://images.unsplash.com/photo-1585395363610-44a60ec80203?auto=format&fit=crop&w=900&q=80",
    "rating": 4.6,
    "reviews": 123,
    "unit": "/jar",
    "location": "Peradeniya",
    "farmName": "Eucalyptus Honey Co.",
    "tags": [
      "Natural",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 106,
    "name": "Sidr Honey (250g)",
    "category": "honey",
    "price": "Rs. 560",
    "originalPrice": "Rs. 720",
    "image": "https://images.unsplash.com/photo-1585395363610-44a60ec80203?auto=format&fit=crop&w=900&q=80",
    "rating": 4.8,
    "reviews": 98,
    "unit": "/jar",
    "location": "Jaffna",
    "farmName": "Sidr Honey Specialists",
    "tags": [
      "Premium"
    ],
    "stock": true
  },
  {
    "id": 107,
    "name": "Buckwheat Honey (500g)",
    "category": "honey",
    "price": "Rs. 380",
    "originalPrice": "Rs. 500",
    "image": "https://images.unsplash.com/photo-1585395363610-44a60ec80203?auto=format&fit=crop&w=900&q=80",
    "rating": 4.5,
    "reviews": 112,
    "unit": "/jar",
    "location": "Negombo",
    "farmName": "Buckwheat Beekeepers",
    "tags": [
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 108,
    "name": "Multifloral Honey (1kg)",
    "category": "honey",
    "price": "Rs. 750",
    "originalPrice": "Rs. 950",
    "image": "https://images.unsplash.com/photo-1585395363610-44a60ec80203?auto=format&fit=crop&w=900&q=80",
    "rating": 4.7,
    "reviews": 178,
    "unit": "/jar",
    "location": "Kurunegala",
    "farmName": "Multifloral Farm",
    "tags": [
      "100% Natural",
      "Organic"
    ],
    "stock": true
  },
  {
    "id": 109,
    "name": "Eucalyptus Honey (500g)",
    "category": "honey",
    "price": "Rs. 440",
    "originalPrice": "Rs. 580",
    "image": "https://images.unsplash.com/photo-1585395363610-44a60ec80203?auto=format&fit=crop&w=900&q=80",
    "rating": 4.6,
    "reviews": 134,
    "unit": "/jar",
    "location": "Colombo",
    "farmName": "Clover Honey Farm",
    "tags": [
      "Natural",
      "Organic"
    ],
    "stock": true
  }
]

module.exports = { products }
