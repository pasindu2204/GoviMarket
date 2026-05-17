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
    "image": "https://images.unsplash.com/photo-1568584711271-6c929fb49b60?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    "image": "https://images.unsplash.com/photo-1633380110125-f6e685676160?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    "image": "https://images.unsplash.com/photo-1652860213441-6622f9fec77f?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    "image": "https://images.unsplash.com/photo-1669863347362-1630fe821708?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    "image": "https://plus.unsplash.com/premium_photo-1702403157830-9df749dc6c1e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    "image": "https://plus.unsplash.com/premium_photo-1701714006884-30414c114152?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    "image": "https://plus.unsplash.com/premium_photo-1725623971827-5cd7b970fb09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    "image": "https://images.unsplash.com/photo-1519096845289-95806ee03a1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1hbmdvfGVufDB8fDB8fHww",
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
    "image": "https://images.unsplash.com/photo-1517260911058-0fcfd733702f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFBpbmVhcHBsZXxlbnwwfHwwfHx8MA%3D%3D",
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
    "image": "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFwYXlhfGVufDB8fDB8fHww",
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
    "image": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://images.unsplash.com/photo-1547514701-42782101795e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3JhbmdlfGVufDB8fDB8fHww",
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
    "image": "https://images.unsplash.com/photo-1689996647327-5d263fbbc79d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEd1YXZhfGVufDB8fDB8fHww",
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
    "image": "https://images.unsplash.com/photo-1515778767554-42d4b373f2b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdyYXBlc3xlbnwwfHwwfHx8MA%3D%3D",
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
    "image": "https://plus.unsplash.com/premium_photo-1668076515507-c5bc223c99a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG9tZWdyYW5hdGV8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://images.unsplash.com/photo-1757366471921-1549d75b1b63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9zYW1iaXxlbnwwfHwwfHx8MA%3D%3D",
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
    "image": "https://images.unsplash.com/photo-1648431529663-8ae9606630c0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    "image": "https://images.unsplash.com/photo-1642517245891-74906b8d8873?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERyeSUyMEZpc2h8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://images.unsplash.com/photo-1649405087405-6ed3bfbaee3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RHJ5JTIwRmlzaHxlbnwwfHwwfHx8MA%3D%3D",
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
    "image": "https://images.unsplash.com/photo-1674066625481-8cffd7cf5aac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RnJlc2glMjBQcmF3bnN8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://images.unsplash.com/photo-1567087978459-8a8eeac7bc75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2FyZGluZSUyMEZpc2h8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://images.unsplash.com/photo-1554071407-1fb7259a9118?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFja2VyZWx8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://plus.unsplash.com/premium_photo-1707764619267-cce43a4be884?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENyYWJ8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://images.unsplash.com/photo-1623910270365-9b45727235c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNxdWlkfGVufDB8fDB8fHww",
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
    "image": "https://images.unsplash.com/photo-1773739685848-a46fb41ae4f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZpc2glMjBGaWxsZXR8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://plus.unsplash.com/premium_photo-1663040449123-17547d08945c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEFuY2hvdnklMjBEcnklMjBGaXNofGVufDB8fDB8fHww",
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
    "image": "https://images.unsplash.com/photo-1672787380764-a603a9d4196d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RHVjayUyMG1lYXR8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://images.unsplash.com/photo-1723475158232-819e29803f4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmFzbWF0aSUyMFJpY2V8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://plus.unsplash.com/premium_photo-1723925093264-40b6b957c44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SmFzbWluZSUyMFJpY2V8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://images.unsplash.com/photo-1561767782-d8e3aa77ef77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJvd24lMjBSaWNlfGVufDB8fDB8fHww",
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
    "image": "https://images.unsplash.com/photo-1646980990815-1e97d5ee932f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdoaXRlJTIwUmljZXxlbnwwfHwwfHx8MA%3D%3D",
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
    "image": "https://plus.unsplash.com/premium_photo-1723874530196-b7931642fea1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlZCUyMFJpY2V8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://plus.unsplash.com/premium_photo-1671377660174-e43996bfdf03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8V2hlYXQlMjBGbG91cnxlbnwwfHwwfHx8MA%3D%3D",
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
    "image": "https://media.istockphoto.com/id/471729991/photo/a-picture-of-grains-in-a-wooden-spoon.webp?a=1&b=1&s=612x612&w=0&k=20&c=RVkAHIE9oJVofvXXT_lOeRlLFlx2ssaI0B-iDmQnhow=",
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
    "image": "https://plus.unsplash.com/premium_photo-1675237626370-caf08f2b9966?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE1pbGxldHxlbnwwfHwwfHx8MA%3D%3D",
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
    "image": "https://images.unsplash.com/photo-1599579085809-4edbc35cee01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TGVudGlsc3xlbnwwfHwwfHx8MA%3D%3D",
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
    "image": "https://images.unsplash.com/photo-1644432757699-bb5a01e8fb0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2twZWF8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://media.istockphoto.com/id/1384591396/photo/closeup-of-homemade-dahi-or-curd-in-an-earthen-bowl-with-spoon-on-burlap-fabric-in-vertical.webp?a=1&b=1&s=612x612&w=0&k=20&c=IL0KRhRBpYD5tReyfIiKu6wfRxeLa4e7Efo4i31tO2Y=",
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
    "image": "https://images.unsplash.com/photo-1741461532466-bc0abda5cdc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEdoZWV8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://images.unsplash.com/photo-1588710929895-6ee7a0a4d155?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://images.unsplash.com/photo-1708793873401-e8c6c153b76a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBhbmVlcnxlbnwwfHwwfHx8MA%3D%3D",
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
    "image": "https://images.unsplash.com/photo-1686998424265-075c0a30b9b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1venphcmVsbGF8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://images.unsplash.com/photo-1587185717368-4d92f8de4ad2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QnV0dGVyfGVufDB8fDB8fHww",
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
    "image": "https://images.unsplash.com/photo-1562114808-b4b33cf60f4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8WW9ndXJ0fGVufDB8fDB8fHww",
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
    "image": "https://images.unsplash.com/photo-1583130879758-db8ac95a9b68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdoaXBwZWQlMjBDcmVhbXxlbnwwfHwwfHx8MA%3D%3D",
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
    "image": "https://media.istockphoto.com/id/506600713/photo/khoya-25.webp?a=1&b=1&s=612x612&w=0&k=20&c=y0AtMsI2XSkwXWL_0l6W0JS75050vQ4IEwEIhuCUanQ=",
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
    "image": "https://media.istockphoto.com/id/2214375556/photo/lassi-in-clay-cup-topped-with-dry-fruits.webp?a=1&b=1&s=612x612&w=0&k=20&c=OsxAg9ZKpsQI-lc4bcmujNQb6kQCPVUun4e_aHeEUMY=",
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
    "image": "https://images.unsplash.com/photo-1605880980331-20a711b27338?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFJhdyUyMEhvbmV5fGVufDB8fDB8fHww",
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
    "image": "https://images.unsplash.com/photo-1613548058193-1cd24c1bebcf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SG9uZXl8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://images.unsplash.com/photo-1642067958024-1a2d9f836920?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SG9uZXl8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://images.unsplash.com/photo-1637087040720-281e2fbea375?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWNhY2lhJTIwSG9uZXl8ZW58MHx8MHx8fDA%3D",
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
    "image": "https://images.unsplash.com/photo-1605880980331-20a711b27338?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbmV5JTIwamFyfGVufDB8fDB8fHww",
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
