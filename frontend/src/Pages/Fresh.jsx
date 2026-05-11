import { useContext, useEffect, useMemo, useState } from 'react'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import Card from './Card.jsx'
import { LanguageContext } from '../context/LanguageContext.jsx'

const pageContent = {
  En: {
    badge: 'DAILY FRESH',
    title: 'Fresh Products',
    subtitle: 'Picked this morning, packed for today, and brought straight from the seed list.',
    heroNote: 'Only items marked Fresh in the backend seed are shown here.',
    stats: [
      { value: 'Seed synced', label: 'From backend products' },
      { value: 'Fresh-only', label: 'Filtered by Fresh tag' },
      { value: 'Fast view', label: 'Built for quick browsing' },
    ],
    sectionTitle: 'Freshly brought items',
    sectionText: 'A focused collection of the freshest produce currently available in the seed data.',
    loading: 'Loading fresh items...',
    error: 'Unable to load fresh items. Make sure the backend is running on port 5000.',
    empty: 'No fresh items were found in the seed data.',
    filterLabel: 'Fresh picks',
  },
  Tm: {
    badge: 'தினசரி புதியது',
    title: 'புதிய பொருட்கள்',
    subtitle: 'இன்று காலை சேகரிக்கப்பட்டு, seed பட்டியிலிருந்து நேரடியாக கொண்டு வரப்பட்டவை.',
    heroNote: 'Backend seed-ல் Fresh என்று குறிக்கப்பட்ட பொருட்கள் மட்டும் காண்பிக்கப்படும்.',
    stats: [
      { value: 'Seed இணைப்பு', label: 'Backend products இலிருந்து' },
      { value: 'Fresh மட்டும்', label: 'Fresh tag மூலம் வடிகட்டப்பட்டது' },
      { value: 'வேகமான பார்வை', label: 'சுலபமாக உலாவ வடிவமைக்கப்பட்டது' },
    ],
    sectionTitle: 'புதியதாக கொண்டுவரப்பட்ட பொருட்கள்',
    sectionText: 'தற்போது seed data-வில் உள்ள மிகப் புதிய பொருட்களின் தொகுப்பு.',
    loading: 'புதிய பொருட்கள் ஏற்றப்படுகின்றன...',
    error: 'புதிய பொருட்களை ஏற்ற முடியவில்லை. backend port 5000 இல் இயங்குகிறதா என உறுதிப்படுத்தவும்.',
    empty: 'Seed data-வில் புதிய பொருட்கள் எதுவும் இல்லை.',
    filterLabel: 'புதிய தேர்வுகள்',
  },
  Si: {
    badge: 'දෛනික නැවුම්',
    title: 'නැවුම් නිෂ්පාදන',
    subtitle: 'අද උදෑසන ගත්, seed ලැයිස්තුවෙන් සෘජුවම ගෙනා නිෂ්පාදන.',
    heroNote: 'Backend seed තුළ Fresh ලෙස සලකුණු කර ඇති අයිතම පමණක් මෙහි පෙන්වයි.',
    stats: [
      { value: 'Seed sync', label: 'Backend products වෙතින්' },
      { value: 'Fresh only', label: 'Fresh tag එකෙන් පෙරහන් කළා' },
      { value: 'Quick view', label: 'වේගවත් browse කිරීම සඳහා' },
    ],
    sectionTitle: 'නැවුම් ලෙස ගෙනා අයිතම',
    sectionText: 'දැන් seed data තුළ ඇති ඉතා නැවුම් නිෂ්පාදන එකතුව.',
    loading: 'නැවුම් අයිතම පූරණය වෙමින්...',
    error: 'නැවුම් අයිතම පූරණය කළ නොහැක. backend port 5000 මත ක්‍රියාත්මක වන බව තහවුරු කරන්න.',
    empty: 'Seed data තුළ නැවුම් අයිතම සොයාගත නොහැකි විය.',
    filterLabel: 'නැවුම් තේරීම්',
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

function getFreshText(language) {
  return pageContent[language] || pageContent.En
}

function translateTag(tag, language) {
  return productTagTranslations[language]?.[tag] || productTagTranslations.En[tag] || tag
}

function isFreshProduct(product) {
  const tags = Array.isArray(product?.tags) ? product.tags : []
  return tags.includes('Fresh') || product?.badge === 'Fresh'
}

export default function Fresh() {
  const { language, changeLanguage } = useContext(LanguageContext)
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState('')

  const content = getFreshText(language)

  useEffect(() => {
    let isActive = true

    async function loadProducts() {
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

  const freshProducts = useMemo(
    () => products.filter(isFreshProduct).sort((a, b) => (b.rating || 0) - (a.rating || 0)),
    [products],
  )

  const spotlightProducts = freshProducts.slice(0, 3)
  const totalReviews = freshProducts.reduce((sum, product) => sum + (product.reviews || 0), 0)

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(120,198,122,0.18),transparent_30%),linear-gradient(180deg,#061309_0%,#0b1a0d_45%,#061009_100%)] text-[#f4efe6]">
      <Navbar cartCount={0} activeLanguage={language} onLanguageChange={changeLanguage} />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-4xl border border-emerald-400/15 bg-[linear-gradient(135deg,rgba(14,32,16,0.94),rgba(8,22,11,0.9))] px-6 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:px-8 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute -left-10 top-0 h-44 w-44 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-yellow-400/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-bold tracking-[0.22em] text-emerald-200">
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
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm"
                >
                  <p className="text-2xl font-black text-yellow-300">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-emerald-50/72">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
          <aside className="rounded-[28px] border border-emerald-400/12 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-200/70">{content.filterLabel}</p>
            <h2 className="mt-3 text-2xl font-black text-[#fff8ec]">{content.sectionTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-emerald-50/70">{content.sectionText}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              <div className="rounded-[20px] border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/55">Items</p>
                <p className="mt-2 text-3xl font-black text-[#fff8ec]">{freshProducts.length.toString().padStart(2, '0')}</p>
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
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-16 w-16 rounded-2xl object-cover"
                  />
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
              <div className="grid min-h-80 place-items-center rounded-4xl border border-dashed border-emerald-400/20 bg-white/5 px-6 text-center text-emerald-50/70">
                <div>
                  <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-emerald-300/20 border-t-emerald-300" />
                  <p className="mt-4 text-lg font-semibold text-[#fff8ec]">{content.loading}</p>
                </div>
              </div>
            ) : loadError ? (
              <div className="rounded-[28px] border border-red-400/20 bg-red-500/10 px-6 py-10 text-center text-red-100">
                <p className="text-lg font-semibold">{loadError}</p>
              </div>
            ) : freshProducts.length === 0 ? (
              <div className="rounded-[28px] border border-emerald-400/20 bg-white/5 px-6 py-10 text-center text-emerald-50/75">
                <p className="text-lg font-semibold text-[#fff8ec]">{content.empty}</p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 2xl:grid-cols-3">
                {freshProducts.map((product) => (
                  <Card
                    key={product.id}
                    product={product}
                    language={language}
                    translateTag={translateTag}
                    copy={cardCopy[language] || cardCopy.En}
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