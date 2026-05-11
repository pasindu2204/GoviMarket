import { useState, useContext, useEffect, useCallback } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import Card from './Card.jsx'

const allProductsData = {
  En: {
    title: 'All Products',
    subtitle: '2,800+ Products - Direct from Farmers',
    searchPlaceholder: 'Search products...',
    filterLabel: 'Filter by Category',
    noResults: 'No products found',
    categories: [
      { id: 'all', label: 'All Products', icon: '⭐' },
      { id: 'vegetables', label: 'Vegetables', icon: '🥒' },
      { id: 'fruits', label: 'Fruits', icon: '🍎' },
      { id: 'fish', label: 'Fish/Dry Fish', icon: '🐟' },
      { id: 'grains', label: 'Grains/Rice', icon: '🌾' },
      { id: 'dairy', label: 'Dairy/Curds', icon: '🥛' },
      { id: 'honey', label: 'Honey', icon: '🍯' },
    ],
    products: [],
  },
  Tm: {
    title: 'அனைத்து பொருட்கள்',
    subtitle: '2,800+ பொருட்கள் - விவசாயிகளிடமிருந்து நேரடியாக',
    searchPlaceholder: 'பொருட்களைத் தேடுங்கள்...',
    filterLabel: 'வகைப்படி வடிகட்டுங்கள்',
    noResults: 'பொருட்கள் கிடைக்கவில்லை',
    categories: [
      { id: 'all', label: 'அனைத்து பொருட்கள்', icon: '⭐' },
      { id: 'vegetables', label: 'காய்கறிகள்', icon: '🥒' },
      { id: 'fruits', label: 'பழங்கள்', icon: '🍎' },
      { id: 'fish', label: 'மீன்', icon: '🐟' },
      { id: 'grains', label: 'தானியங்கள்', icon: '🌾' },
      { id: 'dairy', label: 'பால் பொருட்கள்', icon: '🥛' },
      { id: 'honey', label: 'தேன்', icon: '🍯' },
    ],
    products: [],
  },
  Si: {
    title: 'සියලු නිෂ්පාදන',
    subtitle: '2,800+ නිෂ්පාදන - ගොවීන්ගෙන් සෘජුවම',
    searchPlaceholder: 'නිෂ්පාදන සොයන්න...',
    filterLabel: 'ප්‍රවර්ගය අනුසාරයෙන් පෙරීම් කරන්න',
    noResults: 'නිෂ්පාදන හමු නොවිණි',
    categories: [
      { id: 'all', label: 'සියලු නිෂ්පාදන', icon: '⭐' },
      { id: 'vegetables', label: 'එළවළු', icon: '🥒' },
      { id: 'fruits', label: 'පළතුරු', icon: '🍎' },
      { id: 'fish', label: 'මසු', icon: '🐟' },
      { id: 'grains', label: 'ධාන්ය', icon: '🌾' },
      { id: 'dairy', label: 'කිරීම', icon: '🥛' },
      { id: 'honey', label: 'පැණි', icon: '🍯' },
    ],
    products: [],
  },
}

const productNameTranslations = {
  Tm: {
    1: 'புதிய தக்காளி',
    2: 'சிவப்பு மிளகாய் (சந்தானியா)',
    3: 'நீண்ட அவரைக்காய்',
    4: 'வெங்காயம் (புலம்)',
    5: 'பூசணிக்காய் (போடோல்)',
    6: 'இனிப்பு மக்காச்சோளம்',
    7: 'வெள்ளரிக்காய் (கக்டி)',
    8: 'கேரட் (கஜர்)',
    9: 'முட்டைக்கோஸ் (பந்த் கோபி)',
    10: 'குடை மிளகாய் (ஷிம்லா மிர்ச்)',
    11: 'ப்ரோக்கோலி',
    12: 'கீரை (பாலக்)',
    20: 'தர்பூசணி',
    21: 'வாழைப்பழம் (அம்புல்)',
    22: 'ராம்புட்டான்',
    23: 'மாம்பழம் (அல்போன்சோ)',
    24: 'அன்னாசிப்பழம்',
    25: 'பப்பாளி',
    26: 'ஆப்பிள் (காஷ்மீரி)',
    27: 'ஆரஞ்சு (சந்த்ரா)',
    28: 'கொய்யாப்பழம் (அம்ருத்)',
    29: 'திராட்சை (அங்கூர்)',
    30: 'மாதுளை (அனார்)',
    31: 'இனிப்பு எலுமிச்சை (மோசம்பி)',
    40: 'புதிய சூரை மீன் (தளபத்)',
    41: 'உலர்ந்த மீன் (கலா கரவாலா)',
    42: 'குரூப்பர் மீன் (ஹால் மெஸ்ஸோ)',
    43: 'புதிய இறால் (ஷ்ரிம்ப்)',
    44: 'சார்டின் மீன் (சார்டின்சா)',
    45: 'மாக்கரல் (பாங்க்டா)',
    46: 'உயிருடன் நண்டு',
    47: 'ஸ்க்விட் (கலாமாரி)',
    48: 'மீன் துண்டுகள் (பாம்ஃப்ரெட்)',
    49: 'அஞ்சோவி உலர் மீன்',
    50: 'பாம்பே டக் (பொம்மாலோ)',
    60: 'பாஸ்மதி அரிசி (2kg)',
    61: 'மல்லிகை அரிசி (1kg)',
    62: 'பழுப்பு அரிசி (1kg)',
    63: 'வெள்ளை அரிசி (5kg)',
    64: 'சிவப்பு அரிசி (2kg)',
    65: 'கோதுமை மாவு (5kg)',
    66: 'சோளம் (சோர்கம்) (1kg)',
    67: 'கம்பு (பஜ்ரா) (1kg)',
    68: 'பருப்பு (தால்) (500g)',
    69: 'கொண்டைக்கடலை (சனா) (500g)',
    80: 'தயிர் (500ml)',
    81: 'நெய் (500ml)',
    82: 'பால் (1 Liter)',
    83: 'பன்னீர் (250g)',
    84: 'மொசரெல்லா சீஸ் (200g)',
    85: 'வெண்ணெய் (200g)',
    86: 'யோகர்ட் (500g)',
    87: 'அடித்த கிரீம் (200ml)',
    88: 'கோயா (500g)',
    89: 'லஸ்ஸி (1 Liter)',
    100: 'மூல தேன்',
    101: 'காடு தேன் (500g)',
    102: 'காட்டு மலர் தேன் (1kg)',
    103: 'அகேஷியா தேன் (500g)',
    104: 'மானுகா தேன் (250g)',
    105: 'கிளோவர் தேன் (500g)',
    106: 'சித்ர் தேன் (250g)',
    107: 'பக்வீட் தேன் (500g)',
    108: 'பல மலர் தேன் (1kg)',
    109: 'யூகலிப்டஸ் தேன் (500g)',
  },
  Si: {
    1: 'නැවුම් තක්කාලි',
    2: 'රතු මිරිස් (සන්ධානිය)',
    3: 'දිගු බෝංචි',
    4: 'ළූණු (බුලම්)',
    5: 'වට්ටක්කා (පොටෝල්)',
    6: 'මිහිරි බඩ ඉරිඟු',
    7: 'පිපිඤ්ඤා (කක්දි)',
    8: 'කැරට් (ගාජර්)',
    9: 'ගෝවා (බන්ද් ගෝබි)',
    10: 'බෙල් පෙපර් (සිම්ලා මිර්ච්)',
    11: 'බ්‍රොකොලි',
    12: 'නිවිති (පාලක්)',
    20: 'කොමඩු',
    21: 'කෙසෙල් (අඹුල්)',
    22: 'රඹුටන්',
    23: 'අඹ (අල්ෆොන්සෝ)',
    24: 'අන්නාසි',
    25: 'පැපොල්',
    26: 'ඇපල් (කාශ්මීරි)',
    27: 'දොඩම් (සන්ත්‍රා)',
    28: 'පේර (අම්රුද්)',
    29: 'මිදි (අංගුර්)',
    30: 'දෙළුම් (අනාර්)',
    31: 'මිහිරි දෙහි (මෝසම්බි)',
    40: 'නැවුම් ටූනා මාළු (තලපත්)',
    41: 'වියළි මාළු (කළ කරවල)',
    42: 'ගෲපර් මාළු (හාල් මෙස්සෝ)',
    43: 'නැවුම් ඉස්සෝ (ෂ්‍රිම්ප්)',
    44: 'සාර්ඩින් මාළු (සාර්ඩින්චා)',
    45: 'මැකරල් (බාංග්ඩා)',
    46: 'සජීවී කකුළුවා',
    47: 'ස්කුවිඩ් (කලමාරි)',
    48: 'මාළු ෆිලේ (පොම්ෆ්‍රෙට්)',
    49: 'ඇන්චෝවි වියළි මාළු',
    50: 'බොම්බේ ඩක් (බොම්මාලෝ)',
    60: 'බාස්මති සහල් (2kg)',
    61: 'ජැස්මින් සහල් (1kg)',
    62: 'දුඹුරු සහල් (1kg)',
    63: 'සුදු සහල් (5kg)',
    64: 'රතු සහල් (2kg)',
    65: 'තිරිඟු පිටි (5kg)',
    66: 'සෝර්ගම් (ජෝවාර්) (1kg)',
    67: 'කුරහන් (බජ්රා) (1kg)',
    68: 'පරිප්පු (දාල්) (500g)',
    69: 'කඩල (චනා) (500g)',
    80: 'දහී (500ml)',
    81: 'ගී (500ml)',
    82: 'කිරි (1 Liter)',
    83: 'පනීර් (250g)',
    84: 'මොසැරෙල්ලා චීස් (200g)',
    85: 'බටර් (200g)',
    86: 'යෝගට් (500g)',
    87: 'විප්ඩ් ක්‍රීම් (200ml)',
    88: 'ඛෝයා (500g)',
    89: 'ලස්සි (1 Liter)',
    100: 'අමු මී පැණි',
    101: 'වනාන්තර මී පැණි (500g)',
    102: 'වල් මල් මී පැණි (1kg)',
    103: 'ඇකේෂියා මී පැණි (500g)',
    104: 'මනුකා මී පැණි (250g)',
    105: 'ක්ලෝවර් මී පැණි (500g)',
    106: 'සිද්ර් මී පැණි (250g)',
    107: 'බක්වීට් මී පැණි (500g)',
    108: 'බහු මල් මී පැණි (1kg)',
    109: 'යුකැලිප්ටස් මී පැණි (500g)',
  },
}

const productTagTranslations = {
  Tm: {
    Fresh: 'புதிய',
    Organic: 'கரிம',
    Premium: 'முன்னிலை',
    Seasonal: 'பருவகால',
    Spicy: 'காரம்',
    Exotic: 'அரிய',
    Tropical: 'உஷ்ணமண்டல',
    Daily: 'தினசரி',
    Traditional: 'பாரம்பரிய',
    Pure: 'தூய',
    Natural: 'இயற்கை',
    '100% Natural': '100% இயற்கை',
    '100% Pure': '100% தூய்மை',
  },
  Si: {
    Fresh: 'නැවුම්',
    Organic: 'කාබනික',
    Premium: 'ප්‍රිමියම්',
    Seasonal: 'කාලික',
    Spicy: 'තීව්‍ර',
    Exotic: 'විදේශීය',
    Tropical: 'උෂ්ණ කලාපීය',
    Daily: 'දෛනික',
    Traditional: 'සාම්ප්‍රදායික',
    Pure: 'පිරිසිදු',
    Natural: 'ස්වාභාවික',
    '100% Natural': '100% ස්වාභාවික',
    '100% Pure': '100% පිරිසිදු',
  },
}

const cardCopy = {
  En: {
    addToCart: 'Add to Cart',
    outOfStock: 'Out of Stock',
    oneKgPrice: '1kg Price',
    discountPrice: 'Discount Price',
  },
  Tm: {
    addToCart: 'கூடையில் சேர்',
    outOfStock: 'கையிருப்பில் இல்லை',
    oneKgPrice: '1கிலோ விலை',
    discountPrice: 'தள்ளுபடி விலை',
  },
  Si: {
    addToCart: 'කරත්තයට එක් කරන්න',
    outOfStock: 'තොග නොමැත',
    oneKgPrice: '1kg මිල',
    discountPrice: 'වට්ටම් මිල',
  },
}

function getLocalizedShopContent(language, products = []) {
  const baseContent = allProductsData.En
  const baseProducts = Array.isArray(products) ? products : []

  if (language === 'En') {
    return {
      ...baseContent,
      products: baseProducts,
    }
  }

  const languageContent = allProductsData[language] || baseContent
  const translatedNames = productNameTranslations[language] || {}

  return {
    ...languageContent,
    products: baseProducts.map((product) => ({
      ...product,
      name: translatedNames[product.id] || product.name,
    })),
  }
}

function translateTag(tag, language) {
  return productTagTranslations[language]?.[tag] || tag
}

// Product card rendering moved to ./Card.jsx — use `Card` component in the products grid.

export default function Shop() {
  const { language, changeLanguage } = useContext(LanguageContext)
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState('')
  const content = getLocalizedShopContent(language, products)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('popular')

  const fetchProducts = useCallback(async () => {
    setIsLoading(true)
    setLoadError('')

    try {
      const response = await fetch('/api/products')
      if (!response.ok) {
        throw new Error('Failed to load products')
      }

      const data = await response.json()
      const normalizedProducts = Array.isArray(data)
        ? data
        : Array.isArray(data?.products)
          ? data.products
          : []

      setProducts(normalizedProducts)
      setIsLoading(false)
      return
    } catch {
      setProducts([])
      setLoadError('Unable to load products. Please make sure the backend is running.')
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  // Filter products
  let filteredProducts = content.products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, '')))
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => parseFloat(b.price.replace(/[^\d.]/g, '')) - parseFloat(a.price.replace(/[^\d.]/g, '')))
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating)
  }

  return (
    <div className="min-h-screen bg-[#071307]">
      <Navbar cartCount={0} activeLanguage={language} onLanguageChange={changeLanguage} />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-slate-800 via-slate-900 to-[#071307] px-6 py-12 md:py-16 border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-[#f2eadf] mb-2">{content.title}</h1>
          <p className="text-lg text-slate-300">{content.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="mb-8">
              <input
                type="text"
                placeholder={content.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-[#f2eadf] placeholder-slate-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
              />
            </div>

            {/* Sort */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-[#f2eadf] mb-3">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-[#f2eadf] focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/50 transition-all"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-sm font-bold text-[#f2eadf] mb-4">{content.filterLabel}</h3>
              <div className="space-y-2">
                {content.categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 font-semibold ${
                      activeCategory === category.id
                        ? 'bg-linear-to-r from-yellow-500 to-yellow-400 text-slate-900 shadow-lg'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="truncate">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Results Info */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#f2eadf]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} Found
              </h2>
            </div>

            {/* Products */}
            {isLoading ? (
              <div className="col-span-full text-center py-16">
                <div className="text-4xl mb-4">⏳</div>
                <p className="text-xl text-slate-400">Loading products...</p>
              </div>
            ) : loadError ? (
              <div className="col-span-full text-center py-16">
                <div className="text-5xl mb-4">⚠️</div>
                <p className="text-lg text-slate-300 mb-4">{loadError}</p>
                <button
                  type="button"
                  onClick={fetchProducts}
                  className="bg-linear-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold py-2.5 px-5 rounded-lg transition-all"
                >
                  Retry
                </button>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    product={product}
                    language={language}
                    translateTag={translateTag}
                    copy={cardCopy[language] || cardCopy.En}
                    showPrice={true}
                    showAddToCart={true}
                  />
                ))}
              </div>
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-xl text-slate-400">{content.noResults}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
