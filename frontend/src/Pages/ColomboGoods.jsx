import { useContext, useEffect, useMemo, useState } from 'react'
import Footer from '../Components/Footer.jsx'
import Card from './Card.jsx'
import { LanguageContext } from '../context/LanguageContext.jsx'

const pageContent = {
  En: {
    badge: 'COLOMBO GOODS',
    title: 'Colombo Goods',
    subtitle: 'Direct from Colombo and nearby hubs for city kitchens, stores, and fast delivery.',
    heroNote: 'This page highlights products tagged with Colombo locations from the backend seed.',
    stats: [
      { value: 'City mix', label: 'Items from Colombo and nearby markets' },
      { value: 'Fast delivery', label: 'Built for urban buyers' },
      { value: 'Live stock', label: 'Pulled directly from seed data' },
    ],
    sectionTitle: 'Colombo area products',
    sectionText: 'A focused list of products available from Colombo locations in the backend seed data.',
    loading: 'Loading Colombo goods...',
    error: 'Unable to load Colombo goods. Make sure the backend is running on port 5000.',
    empty: 'No Colombo goods were found in the seed data.',
    filterLabel: 'City picks',
  },
  Tm: {
    badge: 'கொழும்பு பொருட்கள்',
    title: 'கொழும்பு பொருட்கள்',
    subtitle: 'கொழும்பு மற்றும் அருகிலுள்ள இடங்களிலிருந்து நேரடியாக நகர சமையலறைகள், கடைகள், விரைவு விநியோகத்துக்காக.',
    heroNote: 'Backend seed-இல் Colombo இடத்துடன் குறிக்கப்பட்ட பொருட்கள் இங்கு காட்டப்படுகின்றன.',
    stats: [
      { value: 'நகர கலவை', label: 'கொழும்பு மற்றும் அருகிலுள்ள சந்தைகளிலிருந்து' },
      { value: 'விரைவு விநியோகம்', label: 'நகர வாங்குபவர்களுக்கு வடிவமைக்கப்பட்டது' },
      { value: 'நேரடி கையிருப்பு', label: 'Seed data-இலிருந்து பெறப்பட்டது' },
    ],
    sectionTitle: 'கொழும்பு பகுதி பொருட்கள்',
    sectionText: 'Backend seed data-இல் கொழும்பு இடங்களிலிருந்து கிடைக்கும் பொருட்களின் தொகுப்பு.',
    loading: 'கொழும்பு பொருட்கள் ஏற்றப்படுகின்றன...',
    error: 'கொழும்பு பொருட்களை ஏற்ற முடியவில்லை. backend port 5000 இல் இயங்குகிறதா என உறுதிப்படுத்தவும்.',
    empty: 'Seed data-இல் கொழும்பு பொருட்கள் எதுவும் இல்லை.',
    filterLabel: 'நகரத் தேர்வுகள்',
  },
  Si: {
    badge: 'කොළඹ බඩු',
    title: 'කොළඹ බඩු',
    subtitle: 'කොළඹ සහ ආසන්න මධ්‍යස්ථානවලින් සෘජුවම නගර කුස්සි, කඩ, සහ වේගවත් බෙදාහැරීමට.',
    heroNote: 'Backend seed තුළ Colombo ලෙස සලකුණු කර ඇති නිෂ්පාදන මෙහි පෙන්වයි.',
    stats: [
      { value: 'නගර මිශ්‍රණය', label: 'කොළඹ සහ ආසන්න වෙළඳපොළවල්' },
      { value: 'වේගවත් බෙදාහැරීම', label: 'නගර ගැනුම්කරුවන් සඳහා' },
      { value: 'තොග තත්ත්වය', label: 'Seed data වලින් සෘජුවම' },
    ],
    sectionTitle: 'කොළඹ ප්‍රදේශයේ නිෂ්පාදන',
    sectionText: 'Backend seed data තුළ කොළඹ ස්ථානවලින් ලැබෙන නිෂ්පාදන ලැයිස්තුව.',
    loading: 'කොළඹ බඩු පූරණය වෙමින්...',
    error: 'කොළඹ බඩු පූරණය කළ නොහැක. backend port 5000 මත ක්‍රියාත්මක වන බව තහවුරු කරන්න.',
    empty: 'Seed data තුළ කොළඹ බඩු හමු නොවිණි.',
    filterLabel: 'නගර තේරීම්',
  },
}

const productTagTranslations = {
  En: {
    Fresh: 'Fresh',
    Organic: 'Organic',
    Premium: 'Premium',
    Seasonal: 'Seasonal',
    Spicy: 'Spicy',
    Exotic: 'Exotic',
    Tropical: 'Tropical',
    Daily: 'Daily',
    Traditional: 'Traditional',
    Pure: 'Pure',
    Natural: 'Natural',
    '100% Natural': '100% Natural',
    '100% Pure': '100% Pure',
  },
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

function getColomboText(language) {
  return pageContent[language] || pageContent.En
}

function translateTag(tag, language) {
  return productTagTranslations[language]?.[tag] || productTagTranslations.En[tag] || tag
}

function isColomboProduct(product) {
  const location = String(product?.location || '').toLowerCase()
  return location.includes('colombo')
}

export default function ColomboGoods({ onAddToCart }) {
  const { language, changeLanguage } = useContext(LanguageContext)
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState('')

  const content = getColomboText(language)

  useEffect(() => {
    let isActive = true

    async function loadProducts() {
      setIsLoading(true)
      setLoadError('')

      try {
        const response = await fetch('http://localhost:5000/api/products')
        if (!response.ok) {
          throw new Error('Failed to load products')
        }

        const data = await response.json()
        const normalizedProducts = Array.isArray(data)
          ? data
          : Array.isArray(data?.products)
            ? data.products
            : []

        if (!isActive) {
          return
        }

        setProducts(normalizedProducts)
        setIsLoading(false)
        return
      } catch {
        // Fall through to the shared error state below.
      }

      if (isActive) {
        setProducts([])
        setLoadError(content.error)
        setIsLoading(false)
      }
    }

    loadProducts()

    return () => {
      isActive = false
    }
  }, [content.error])

  const colomboProducts = useMemo(
    () => products.filter(isColomboProduct).sort((a, b) => (b.rating || 0) - (a.rating || 0)),
    [products],
  )

  const spotlightProducts = colomboProducts.slice(0, 3)
  const totalReviews = colomboProducts.reduce((sum, product) => sum + (product.reviews || 0), 0)

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(118,97,45,0.22),transparent_30%),linear-gradient(180deg,#061006_0%,#0c170d_44%,#061006_100%)] text-[#f4efe6]">
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[32px] border border-yellow-400/10 bg-[linear-gradient(135deg,rgba(18,29,17,0.96),rgba(11,20,12,0.9))] px-6 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:px-8 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute -left-10 top-0 h-44 w-44 rounded-full bg-yellow-400/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-green-400/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full border border-yellow-300/20 bg-yellow-300/10 px-4 py-2 text-xs font-bold tracking-[0.22em] text-yellow-200">
                {content.badge}
              </span>
              <h1 className="mt-5 max-w-2xl text-4xl font-black tracking-tighter text-[#fff8ec] sm:text-5xl lg:text-7xl">
                {content.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-emerald-50/75 sm:text-lg">
                {content.subtitle}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50/55">
                {content.heroNote}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {content.stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-black text-yellow-300">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-emerald-50/72">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
          <aside className="rounded-[28px] border border-yellow-400/12 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-200/70">{content.filterLabel}</p>
            <h2 className="mt-3 text-2xl font-black text-[#fff8ec]">{content.sectionTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-emerald-50/70">{content.sectionText}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              <div className="rounded-[20px] border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/55">Items</p>
                <p className="mt-2 text-3xl font-black text-[#fff8ec]">{colomboProducts.length.toString().padStart(2, '0')}</p>
              </div>
              <div className="rounded-[20px] border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/55">Reviews</p>
                <p className="mt-2 text-3xl font-black text-[#fff8ec]">{totalReviews.toLocaleString()}</p>
              </div>
              <div className="rounded-[20px] border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/55">Featured</p>
                <p className="mt-2 text-3xl font-black text-[#fff8ec]">{spotlightProducts.length}</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {spotlightProducts.map((product) => (
                <div key={product.id} className="flex items-center gap-4 rounded-[22px] border border-white/10 bg-white/6 p-3">
                  <img src={product.image} alt={product.name} className="h-16 w-16 rounded-2xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-[#fff8ec]">{product.name}</p>
                    <p className="mt-1 text-xs text-emerald-50/65">
                      {product.location} · {product.farmName}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div>
            {isLoading ? (
              <div className="grid min-h-80 place-items-center rounded-[28px] border border-dashed border-yellow-400/20 bg-white/5 px-6 text-center text-emerald-50/70">
                <div>
                  <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-yellow-300/20 border-t-yellow-300" />
                  <p className="mt-4 text-lg font-semibold text-[#fff8ec]">{content.loading}</p>
                </div>
              </div>
            ) : loadError ? (
              <div className="rounded-[28px] border border-red-400/20 bg-red-500/10 px-6 py-10 text-center text-red-100">
                <p className="text-lg font-semibold">{loadError}</p>
              </div>
            ) : colomboProducts.length === 0 ? (
              <div className="rounded-[28px] border border-yellow-400/20 bg-white/5 px-6 py-10 text-center text-emerald-50/75">
                <p className="text-lg font-semibold text-[#fff8ec]">{content.empty}</p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 2xl:grid-cols-3">
                {colomboProducts.map((product) => (
                  <Card
                    key={product.id}
                    product={product}
                    language={language}
                    translateTag={translateTag}
                    copy={cardCopy[language] || cardCopy.En}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}