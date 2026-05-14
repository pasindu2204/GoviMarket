import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LanguageContext } from '../context/LanguageContext.jsx'

const checkoutContent = {
  En: {
    title: 'Checkout',
    subtitle: 'This checkout flow is ready for your next step.',
    backToCart: 'Back to Cart',
    continueShopping: 'Continue Shopping',
  },
  Tm: {
    title: 'Checkout',
    subtitle: 'அடுத்த படிக்கு செல்ல checkout திரை தயார்.',
    backToCart: 'கூடைக்குத் திரும்பு',
    continueShopping: 'வாங்குவதைத் தொடரவும்',
  },
  Si: {
    title: 'Checkout',
    subtitle: 'ඊළඟ පියවර සඳහා checkout තිරය සූදානම්.',
    backToCart: 'කරත්තයට ආපසු',
    continueShopping: 'ගනුදෙනුව දිගටම කරන්න',
  },
}

function checkoutText(language, key) {
  return checkoutContent[language]?.[key] ?? checkoutContent.En[key] ?? key
}

export default function Checkout() {
  const { language } = useContext(LanguageContext)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(35,74,37,0.25),transparent_28%),linear-gradient(180deg,#07130a_0%,#0b170d_52%,#061008_100%)] text-[#f4efe6]">
      <main className="mx-auto max-w-5xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-white/10 bg-white/5 px-6 py-10 shadow-[0_28px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:px-8 lg:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-200/70">{checkoutText(language, 'title')}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#fff8ec] sm:text-6xl">{checkoutText(language, 'title')}</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-emerald-50/65 sm:text-lg">{checkoutText(language, 'subtitle')}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate('/cart')}
              className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-5 py-3 font-semibold text-emerald-100 transition hover:bg-emerald-300/15"
            >
              {checkoutText(language, 'backToCart')}
            </button>
            <button
              type="button"
              onClick={() => navigate('/shop')}
              className="rounded-full bg-linear-to-br from-[#efc34a] to-[#d39f1d] px-5 py-3 font-black text-[#241a06] transition hover:brightness-105"
            >
              {checkoutText(language, 'continueShopping')}
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
