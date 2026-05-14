import { useEffect, useMemo, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LanguageContext } from '../context/LanguageContext.jsx'

const cartContent = {
  En: {
    cart_title: 'Cart',
    cart_subtitle: 'Review items, adjust quantities, and continue to checkout.',
    back_to_shop: 'Back to Shop',
    subtotal: 'Subtotal:',
    total: 'Total:',
    checkout: 'Proceed to Checkout',
    empty_cart: 'Your cart is empty',
    continue_shopping: 'Continue Shopping',
    remove: 'Remove item',
    quantity: 'Quantity',
  },
  Tm: {
    cart_title: 'கூடை',
    cart_subtitle: 'பொருட்களை சரிபார்த்து, அளவை மாற்றி, checkout தொடரவும்.',
    back_to_shop: 'கடைக்கு திரும்பு',
    subtotal: 'இடைநிலை மொத்தம்:',
    total: 'மொத்தம்:',
    checkout: 'செக்அவுட்டுக்குச் செல்லவும்',
    empty_cart: 'உங்கள் கூடை வெற்று உள்ளது',
    continue_shopping: 'வாங்குவதைத் தொடரவும்',
    remove: 'பொருளை நீக்கு',
    quantity: 'அளவு',
  },
  Si: {
    cart_title: 'කරත්තය',
    cart_subtitle: 'අයිතම පරීක්ෂා කර, ප්‍රමාණය වෙනස් කර, checkout වෙත යන්න.',
    back_to_shop: 'Shop වෙත ආපසු',
    subtotal: 'උප එකතුව:',
    total: 'එකතුව:',
    checkout: 'පිරිවිතුරු සඳහා ගෙන යන්න',
    empty_cart: 'ඔබේ කරත්තය හිස් ය',
    continue_shopping: 'ගනුදෙනුව දිගටම කරන්න',
    remove: 'අයිතමය ඉවත් කරන්න',
    quantity: 'ප්‍රමාණය',
  },
}

function cartText(language, key) {
  return cartContent[language]?.[key] ?? cartContent.En[key] ?? key
}

function TrashIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-9l-1 1H5v2h14V4z" />
    </svg>
  )
}

function BackIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      <path d="M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z" />
    </svg>
  )
}

function LockIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5s-5 2.24-5 5v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
    </svg>
  )
}

export default function Cart({ cartItems = [], onUpdateCart }) {
  const { language } = useContext(LanguageContext)
  const navigate = useNavigate()
  const [items, setItems] = useState(cartItems)

  useEffect(() => {
    setItems(cartItems)
  }, [cartItems])

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) return

    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    )
    setItems(updatedItems)
    onUpdateCart?.(updatedItems)
  }

  const handleRemoveItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId)
    setItems(updatedItems)
    onUpdateCart?.(updatedItems)
  }

  const subtotal = items.reduce((sum, item) => {
    const price = parseFloat(item.price?.replace(/[^\d.]/g, '') || 0)
    return sum + price * (item.quantity || 1)
  }, 0)

  const total = subtotal

  const handleCheckout = () => {
    navigate('/checkout')
  }

  const handleContinueShopping = () => {
    navigate('/shop')
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(55,94,42,0.28),transparent_28%),linear-gradient(180deg,#07130a_0%,#0b170d_52%,#061008_100%)] text-[#f4efe6]">
      <main className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-6 sm:flex-row sm:items-end sm:justify-between sm:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-200/70">
                {cartText(language, 'cart_title')}
              </p>
              <h1 className="mt-2 text-3xl font-black tracking-tight text-[#fff8ec] sm:text-5xl">
                {cartText(language, 'cart_title')} ({items.length})
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-emerald-50/65 sm:text-base">
                {cartText(language, 'cart_subtitle')}
              </p>
            </div>

            <button
              type="button"
              onClick={handleContinueShopping}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300/15"
            >
              <BackIcon className="h-4 w-4 fill-current" />
              {cartText(language, 'back_to_shop')}
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-16 text-center sm:px-8">
              <div className="mb-5 rounded-full border border-white/10 bg-white/5 p-5">
                <svg className="h-12 w-12 text-emerald-100/45" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 2L6 6H3v2h2l1 6v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4l1-6h2V6h-3L15 2H9z" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#fff8ec]">{cartText(language, 'empty_cart')}</h2>
              <button
                onClick={handleContinueShopping}
                className="mt-6 rounded-full bg-linear-to-br from-[#efc34a] to-[#d39f1d] px-6 py-3 font-bold text-[#241a06] shadow-[0_18px_30px_rgba(211,159,29,0.2)] transition hover:brightness-105"
              >
                {cartText(language, 'continue_shopping')}
              </button>
            </div>
          ) : (
            <div className="grid gap-6 px-6 py-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-8 lg:px-8 lg:py-8">
              <div className="space-y-4">
                {items.map((item) => (
                  <article
                    key={item.id}
                    className="grid gap-4 rounded-[22px] border border-emerald-300/10 bg-[#142117]/90 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:grid-cols-[96px_minmax(0,1fr)_auto] sm:items-center sm:p-5"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-[18px] object-cover shadow-md"
                    />

                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-bold text-[#fff8ec]">{item.name}</h3>
                      <p className="mt-1 text-xl font-black text-[#efc34a]">{item.price}</p>

                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                          <span className="text-xs uppercase tracking-[0.18em] text-emerald-100/55">
                            {cartText(language, 'quantity')}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleQuantityChange(item.id, (item.quantity || 1) - 1)}
                              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-lg font-bold text-white transition hover:bg-white/10"
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <span className="min-w-8 text-center text-base font-bold text-white">
                              {item.quantity || 1}
                            </span>
                            <button
                              onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}
                              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-lg font-bold text-white transition hover:bg-white/10"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-3 sm:flex-col sm:items-end sm:justify-center">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-emerald-100/70 transition hover:bg-white/10 hover:text-white"
                        aria-label={cartText(language, 'remove')}
                      >
                        <TrashIcon className="h-4 w-4 fill-current" />
                        <span className="sm:hidden">Remove</span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="lg:sticky lg:top-8 h-fit rounded-[24px] border border-white/10 bg-[#142117]/95 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.24)] sm:p-6">
                <h2 className="text-xl font-black text-[#fff8ec]">{cartText(language, 'cart_title')}</h2>

                <div className="mt-5 space-y-4 border-b border-white/10 pb-5">
                  <div className="flex items-center justify-between gap-4 text-sm sm:text-base">
                    <span className="text-emerald-50/60">{cartText(language, 'subtotal')}</span>
                    <span className="font-semibold text-white">
                      Rs. {subtotal.toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 text-sm sm:text-base">
                    <span className="text-emerald-50/60">{cartText(language, 'total')}</span>
                    <span className="text-2xl font-black text-[#efc34a]">
                     Rs. {total.toLocaleString('en-IN',  { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[18px] bg-linear-to-br from-[#efc34a] to-[#d39f1d] px-5 py-4 text-base font-black text-[#241a06] shadow-[0_18px_30px_rgba(211,159,29,0.2)] transition hover:brightness-105"
                >
                  <LockIcon className="h-5 w-5 fill-current" />
                  {cartText(language, 'checkout')}
                </button>
              </aside>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
