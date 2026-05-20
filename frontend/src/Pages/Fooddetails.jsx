import { useContext, useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { LanguageContext } from '../context/LanguageContext.jsx'
import { apiUrl } from '../utils/api.js'

const pageCopy = {
  En: {
    back: 'Back to products',
    details: 'Product details',
    stock: 'Stock',
    origin: 'Origin',
    unit: 'Unit',
    rating: 'Rating',
    reviews: 'reviews',
    descriptionLabel: 'Why you will love it',
    quantity: 'Quantity',
    addToCart: 'Add to Cart',
    buyNow: 'Buy Now',
    notFound: 'This product could not be loaded.',
    loading: 'Loading product details...',
    unavailable: 'Product details are unavailable right now.',
    inStock: 'In stock',
    outOfStock: 'Out of stock',
  },
  Tm: {
    back: 'பொருட்களுக்குத் திரும்பு',
    details: 'பொருள் விவரங்கள்',
    stock: 'கையிருப்பு',
    origin: 'தோற்றம்',
    unit: 'அலகு',
    rating: 'மதிப்பீடு',
    reviews: 'விமர்சனங்கள்',
    descriptionLabel: 'ஏன் இதை விரும்புவீர்கள்',
    quantity: 'அளவு',
    addToCart: 'கூடையில் சேர்',
    buyNow: 'இப்போது வாங்கு',
    notFound: 'இந்த பொருளை ஏற்ற முடியவில்லை.',
    loading: 'பொருள் விவரங்கள் ஏற்றப்படுகின்றன...',
    unavailable: 'இப்போது பொருள் விவரங்கள் கிடைக்கவில்லை.',
    inStock: 'கையிருப்பில் உள்ளது',
    outOfStock: 'கையிருப்பில் இல்லை',
  },
  Si: {
    back: 'නිෂ්පාදන වෙත ආපසු',
    details: 'නිෂ්පාදන විස්තර',
    stock: 'තොග',
    origin: 'මූලය',
    unit: 'ඒකකය',
    rating: 'ශ්‍රේණිගත කිරීම',
    reviews: 'සමාලෝචන',
    descriptionLabel: 'ඔබ මෙය ඇසුරුම් කරගනු ඇති හේතු',
    quantity: 'ප්‍රමාණය',
    addToCart: 'කරත්තයට එක් කරන්න',
    buyNow: 'දැන් මිලදී ගන්න',
    notFound: 'මෙම නිෂ්පාදනය පෙන්විය නොහැකි විය.',
    loading: 'නිෂ්පාදන විස්තර පූරණය වෙමින්...',
    unavailable: 'දැනට නිෂ්පාදන විස්තර ලබා ගත නොහැක.',
    inStock: 'තොග ඇත',
    outOfStock: 'තොග නොමැත',
  },
}

const tagLabels = {
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

const categoryNames = {
  vegetables: { En: 'Vegetables', Tm: 'காய்கறிகள்', Si: 'එළවළු' },
  fruits: { En: 'Fruits', Tm: 'பழங்கள்', Si: 'පළතුරු' },
  fish: { En: 'Fish', Tm: 'மீன்', Si: 'මාළු' },
  grains: { En: 'Grains', Tm: 'தானியங்கள்', Si: 'ධාන්ය' },
  dairy: { En: 'Dairy', Tm: 'பால் பொருட்கள்', Si: 'කිරි නිෂ්පාදන' },
  honey: { En: 'Honey', Tm: 'தேன்', Si: 'මී පැණි' },
}

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function getPageCopy(language) {
  return pageCopy[language] || pageCopy.En
}

function translateTag(tag, language) {
  return tagLabels[language]?.[tag] || tagLabels.En[tag] || tag
}

function buildStory(product, language) {
  if (!product) {
    return ''
  }

  const base = {
    En: `${product.name} is a carefully selected ${categoryNames[product.category]?.En || product.category || 'market'} item sourced from ${product.farmName || 'trusted farmers'} in ${product.location || 'Sri Lanka'}.`,
    Tm: `${product.name} என்பது ${product.farmName || 'நம்பகமான விவசாயிகள்'} வழங்கும் ${categoryNames[product.category]?.Tm || product.category || 'சந்தை'} பொருள்.`,
    Si: `${product.name} යනු ${product.farmName || 'විශ්වාසනීය ගොවීන්'} විසින් සැපයූ ${categoryNames[product.category]?.Si || product.category || 'වෙළඳපොළ'} නිෂ්පාදනයකි.`,
  }

  return base[language] || base.En
}

async function fetchProducts() {
  const response = await fetch(apiUrl('/api/products'))
  if (!response.ok) {
    throw new Error('Failed to load product list')
  }

  const data = await response.json()
  return Array.isArray(data) ? data : Array.isArray(data?.products) ? data.products : []
}

export default function Fooddetails({ onAddToCart }) {
  const { language } = useContext(LanguageContext)
  const navigate = useNavigate()
  const location = useLocation()
  const { productId } = useParams()
  const content = getPageCopy(language)
  const [product, setProduct] = useState(location.state?.product || null)
  const [isLoading, setIsLoading] = useState(!location.state?.product)
  const [loadError, setLoadError] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    let isActive = true

    async function loadProduct() {
      if (location.state?.product) {
        return
      }

      setIsLoading(true)
      setLoadError('')

      try {
        const products = await fetchProducts()
        const fallbackProduct = products.find((item) => String(item.id) === String(productId))
          || products.find((item) => slugify(item.name) === slugify(productId))

        if (!isActive) {
          return
        }

        setProduct(fallbackProduct || null)
        setLoadError(fallbackProduct ? '' : content.notFound)
      } catch {
        if (isActive) {
          setLoadError(content.unavailable)
        }
      } finally {
        if (isActive) {
          setIsLoading(false)
        }
      }
    }

    loadProduct()

    return () => {
      isActive = false
    }
  }, [content.notFound, content.unavailable, location.state?.product, productId])

  useEffect(() => {
    setQuantity(1)
  }, [product?.id])

  const numericPrice = useMemo(
    () => parseFloat(String(product?.price || '').replace(/[^\d.]/g, '')) || 0,
    [product?.price],
  )
  const originalPrice = useMemo(
    () => parseFloat(String(product?.originalPrice || '').replace(/[^\d.]/g, '')) || numericPrice,
    [product?.originalPrice, numericPrice],
  )
  const discount = originalPrice > 0 ? Math.round(((originalPrice - numericPrice) / originalPrice) * 100) : 0
  const safeStock = typeof product?.stock === 'boolean' ? product.stock : true
  const safeUnit = product?.unit || '/item'
  const ratingValue = Number(product?.rating || 0)
  const reviewCount = Number(product?.reviews || 0)
  const productTags = Array.isArray(product?.tags) ? product.tags : []
  const productStory = buildStory(product, language)

  const handleAdd = () => {
    if (!product || !safeStock) {
      return
    }

    onAddToCart?.({ ...product, quantity })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(120,198,122,0.22),transparent_28%),linear-gradient(180deg,#08160a_0%,#0d1f11_45%,#081009_100%)] px-4 py-10 text-[#f5efe2] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-4xl border border-emerald-400/15 bg-black/20 px-6 py-16 text-center shadow-[0_28px_90px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200/70">{content.details}</p>
          <h1 className="mt-4 text-3xl font-black text-white sm:text-5xl">{content.loading}</h1>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(120,198,122,0.22),transparent_28%),linear-gradient(180deg,#08160a_0%,#0d1f11_45%,#081009_100%)] px-4 py-10 text-[#f5efe2] sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center rounded-4xl border border-emerald-400/15 bg-black/20 px-6 py-16 text-center shadow-[0_28px_90px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200/70">{content.details}</p>
          <h1 className="mt-4 text-3xl font-black text-white sm:text-5xl">{loadError || content.notFound}</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-emerald-50/70">
            {content.unavailable}
          </p>
          <button
            type="button"
            onClick={() => navigate('/shop')}
            className="mt-8 rounded-full bg-linear-to-r from-yellow-400 to-amber-500 px-6 py-3 font-bold text-slate-950 shadow-[0_14px_30px_rgba(250,204,21,0.25)] transition hover:scale-[1.02]"
          >
            {content.back}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(120,198,122,0.2),transparent_28%),linear-gradient(180deg,#08160a_0%,#0d1f11_44%,#081009_100%)] px-4 py-6 text-[#f5efe2] sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-white/5 px-5 py-3 text-sm font-semibold text-emerald-50/80 transition hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-200"
          >
            <span className="text-lg">←</span>
            {content.back}
          </button>

          <div className="hidden rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-yellow-200 md:block">
            {content.details}
          </div>
        </div>

        <section className="relative overflow-hidden rounded-[34px] border border-emerald-400/12 bg-[linear-gradient(135deg,rgba(14,32,16,0.96),rgba(8,22,11,0.92))] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-emerald-400/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-yellow-400/8 blur-3xl" />

          <div className="relative grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-b border-emerald-400/10 p-5 sm:p-8 lg:border-b-0 lg:border-r lg:p-8 xl:p-10">
              <div className="overflow-hidden rounded-[28px] border border-white/8 bg-[#f2ebe0] shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                <div className="relative aspect-4/3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                  {discount > 0 ? (
                    <span className="absolute left-5 top-5 rounded-full bg-yellow-400 px-4 py-2 text-xs font-black text-slate-950 shadow-lg">
                      -{discount}% OFF
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {(productTags.length > 0 ? productTags : [product.badge].filter(Boolean)).map((tag) => (
                  <span key={tag} className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-200">
                    {translateTag(tag, language)}
                  </span>
                ))}
                {product.category ? (
                  <span className="rounded-full border border-emerald-300/15 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100/85">
                    {categoryNames[product.category]?.[language] || product.category}
                  </span>
                ) : null}
              </div>
            </div>

            <div className="p-5 sm:p-8 xl:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-200/55">{product.category || content.details}</p>
              <h1 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-[#fff8ec] sm:text-5xl">
                {product.name}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-emerald-50/72">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  📍 {product.location || 'Sri Lanka'}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  🏡 {product.farmName || 'Local farm'}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-end gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-emerald-100/45">Price</p>
                  <div className="mt-2 flex items-baseline gap-3">
                    <span className="text-4xl font-black text-yellow-300">{product.price}</span>
                    <span className="text-lg text-emerald-50/40 line-through">{product.originalPrice}</span>
                  </div>
                </div>
                <span className={`rounded-full px-4 py-2 text-sm font-bold ${safeStock ? 'bg-emerald-400/12 text-emerald-200' : 'bg-red-500/10 text-red-200'}`}>
                  {safeStock ? content.inStock : content.outOfStock}
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/45">{content.stock}</p>
                  <p className="mt-2 text-xl font-black text-[#fff8ec]">{typeof product.stock === 'number' ? product.stock : '450'} {language === 'Tm' ? 'பொருட்கள்' : language === 'Si' ? 'අයිතම' : 'items'}</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/45">{content.unit}</p>
                  <p className="mt-2 text-xl font-black text-[#fff8ec]">{safeUnit}</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/45">{content.rating}</p>
                  <p className="mt-2 text-xl font-black text-[#fff8ec]">★ {ratingValue.toFixed(1)}/5</p>
                </div>
              </div>

              <div className="mt-6 rounded-[26px] border border-yellow-400/12 bg-yellow-400/6 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-yellow-200/70">{content.descriptionLabel}</p>
                <p className="mt-3 max-w-2xl text-base leading-8 text-emerald-50/78">
                  {product.description || productStory || content.unavailable}
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-[22px] border border-white/8 bg-black/18 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/45">{content.origin}</p>
                  <p className="mt-2 text-lg font-bold text-[#fff8ec]">{product.location || 'Sri Lanka'}</p>
                </div>
                <div className="rounded-[22px] border border-white/8 bg-black/18 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/45">{content.reviews}</p>
                  <p className="mt-2 text-lg font-bold text-[#fff8ec]">{ratingValue.toFixed(1)} ★ ({reviewCount.toLocaleString()})</p>
                </div>
                <div className="rounded-[22px] border border-white/8 bg-black/18 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/45">{content.unit}</p>
                  <p className="mt-2 text-lg font-bold text-[#fff8ec]">{safeUnit}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 p-2">
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-black/20 text-xl font-black text-[#fff8ec] transition hover:bg-white/10"
                  >
                    −
                  </button>
                  <span className="min-w-10 text-center text-2xl font-black text-[#fff8ec]">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((value) => value + 1)}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-black/20 text-xl font-black text-[#fff8ec] transition hover:bg-white/10"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAdd}
                  disabled={!safeStock}
                  className="inline-flex flex-1 items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-yellow-400 to-amber-500 px-6 py-4 text-base font-black text-slate-950 shadow-[0_20px_40px_rgba(250,204,21,0.2)] transition hover:-translate-y-px hover:from-yellow-300 hover:to-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {content.addToCart}
                  <span className="text-xl">→</span>
                </button>

                <Link
                  to="/checkout"
                  className="inline-flex items-center justify-center rounded-2xl border border-emerald-300/15 bg-emerald-300/10 px-6 py-4 text-base font-bold text-emerald-50 transition hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-100"
                >
                  {content.buyNow}
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/8 bg-black/18 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/45">Tag 1</p>
                  <p className="mt-2 text-lg font-bold text-[#fff8ec]">{translateTag(productTags[0] || product.badge || 'Fresh', language)}</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-black/18 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/45">Tag 2</p>
                  <p className="mt-2 text-lg font-bold text-[#fff8ec]">{translateTag(productTags[1] || 'Organic', language)}</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-black/18 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-100/45">{content.quantity}</p>
                  <p className="mt-2 text-lg font-bold text-[#fff8ec]">{quantity} {safeUnit}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}