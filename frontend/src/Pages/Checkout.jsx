import { useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LanguageContext } from '../context/LanguageContext.jsx'

const checkoutContent = {
  En: {
    title: 'Checkout',
    subtitle: 'Complete your delivery details and choose a payment method to place the order.',
    customerDetails: 'Customer details',
    paymentDetails: 'Payment method',
    orderSummary: 'Order summary',
    firstName: 'First name',
    lastName: 'Last name',
    idNumber: 'ID number',
    address: 'Address',
    town: 'Town',
    province: 'Province',
    cash: 'Cash on delivery',
    visa: 'Visa / Card',
    other: 'Other',
    notes: 'Notes',
    notesPlaceholder: 'Add delivery instructions, if any',
    placeOrder: 'Place order',
    orderPlaced: 'Your order details have been captured successfully.',
    emptyCart: 'Your cart is empty. Add items before checking out.',
    backToCart: 'Back to Cart',
    continueShopping: 'Continue Shopping',
    subtotal: 'Subtotal',
    total: 'Total',
    items: 'items',
  },
  Tm: {
    title: 'Checkout',
    subtitle: 'விநியோக விவரங்களை நிரப்பி, கட்டண முறையைத் தேர்ந்தெடுத்து ஆர்டர் செய்யவும்.',
    customerDetails: 'வாடிக்கையாளர் விவரங்கள்',
    paymentDetails: 'கட்டண முறை',
    orderSummary: 'ஆர்டர் சுருக்கம்',
    firstName: 'முதல் பெயர்',
    lastName: 'கடைசி பெயர்',
    idNumber: 'அடையாள எண்',
    address: 'முகவரி',
    town: 'நகரம்',
    province: 'மாகாணம்',
    cash: 'டெலிவரியில் பணம்',
    visa: 'விசா / கார்டு',
    other: 'மற்றவை',
    notes: 'குறிப்புகள்',
    notesPlaceholder: 'டெலிவரி வழிமுறைகள் இருந்தால் சேர்க்கவும்',
    placeOrder: 'ஆர்டர் செய்யவும்',
    orderPlaced: 'உங்கள் ஆர்டர் விவரங்கள் வெற்றிகரமாக பெறப்பட்டன.',
    emptyCart: 'உங்கள் கூடை வெற்று உள்ளது. checkout முன் பொருட்களைச் சேர்க்கவும்.',
    backToCart: 'கூடைக்குத் திரும்பு',
    continueShopping: 'வாங்குவதைத் தொடரவும்',
    subtotal: 'இடைநிலை மொத்தம்',
    total: 'மொத்தம்',
    items: 'பொருட்கள்',
  },
  Si: {
    title: 'Checkout',
    subtitle: 'ඔබේ බෙදාහැරීමේ විස්තර පුරවා ගෙවීමේ ක්‍රමය තෝරා ඇණවුම තහවුරු කරන්න.',
    customerDetails: 'පාරිභෝගික විස්තර',
    paymentDetails: 'ගෙවීමේ ක්‍රමය',
    orderSummary: 'ඇණවුම් සාරාංශය',
    firstName: 'පළමු නම',
    lastName: 'අවසාන නම',
    idNumber: 'හැඳුනුම් අංකය',
    address: 'ලිපිනය',
    town: 'නගරය',
    province: 'පළාත',
    cash: 'භාරගැනීමේදී මුදල්',
    visa: 'වීසා / කාඩ්',
    other: 'වෙනත්',
    notes: 'සටහන්',
    notesPlaceholder: 'බෙදාහැරීමේ උපදෙස් තිබේ නම් එක් කරන්න',
    placeOrder: 'ඇණවුම තහවුරු කරන්න',
    orderPlaced: 'ඔබේ ඇණවුම් විස්තර සාර්ථකව ලබාගෙන ඇත.',
    emptyCart: 'ඔබේ කරත්තය හිස් ය. checkout කිරීමට පෙර අයිතම එක් කරන්න.',
    backToCart: 'කරත්තයට ආපසු',
    continueShopping: 'ගනුදෙනුව දිගටම කරන්න',
    subtotal: 'උප එකතුව',
    total: 'එකතුව',
    items: 'අයිතම',
  },
}

function checkoutText(language, key) {
  return checkoutContent[language]?.[key] ?? checkoutContent.En[key] ?? key
}

function getCurrencyAmount(price) {
  return parseFloat(String(price ?? 0).replace(/[^\d.]/g, '')) || 0
}

export default function Checkout({ cartItems = [] }) {
  const { language } = useContext(LanguageContext)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    address: '',
    town: '',
    province: '',
    paymentMethod: 'cash',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const subtotal = useMemo(
    () =>
      cartItems.reduce((sum, item) => sum + getCurrencyAmount(item.price) * (item.quantity || 1), 0),
    [cartItems]
  )

  const total = subtotal

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(35,74,37,0.25),transparent_28%),linear-gradient(180deg,#07130a_0%,#0b170d_52%,#061008_100%)] text-[#f4efe6]">
      <main className="mx-auto max-w-5xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-white/10 bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
          <div className="border-b border-white/10 px-6 py-8 sm:px-8 lg:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-200/70">{checkoutText(language, 'title')}</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#fff8ec] sm:text-6xl">{checkoutText(language, 'title')}</h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-emerald-50/65 sm:text-lg">{checkoutText(language, 'subtitle')}</p>
          </div>

          <div className="grid gap-6 px-6 py-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8 lg:px-8 lg:py-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-[24px] border border-emerald-300/10 bg-[#142117]/90 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:p-6">
                <h2 className="text-xl font-black text-[#fff8ec]">{checkoutText(language, 'customerDetails')}</h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-emerald-50/75">{checkoutText(language, 'firstName')}</span>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-emerald-50/35 focus:border-emerald-300/30 focus:ring-4 focus:ring-emerald-300/10"
                      placeholder={checkoutText(language, 'firstName')}
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-emerald-50/75">{checkoutText(language, 'lastName')}</span>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-emerald-50/35 focus:border-emerald-300/30 focus:ring-4 focus:ring-emerald-300/10"
                      placeholder={checkoutText(language, 'lastName')}
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-emerald-50/75">{checkoutText(language, 'idNumber')}</span>
                    <input
                      name="idNumber"
                      value={formData.idNumber}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-emerald-50/35 focus:border-emerald-300/30 focus:ring-4 focus:ring-emerald-300/10"
                      placeholder={checkoutText(language, 'idNumber')}
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-emerald-50/75">{checkoutText(language, 'town')}</span>
                    <input
                      name="town"
                      value={formData.town}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-emerald-50/35 focus:border-emerald-300/30 focus:ring-4 focus:ring-emerald-300/10"
                      placeholder={checkoutText(language, 'town')}
                    />
                  </label>

                  <label className="grid gap-2 sm:col-span-2">
                    <span className="text-sm font-semibold text-emerald-50/75">{checkoutText(language, 'address')}</span>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-emerald-50/35 focus:border-emerald-300/30 focus:ring-4 focus:ring-emerald-300/10"
                      placeholder={checkoutText(language, 'address')}
                    />
                  </label>

                  <label className="grid gap-2 sm:col-span-2">
                    <span className="text-sm font-semibold text-emerald-50/75">{checkoutText(language, 'province')}</span>
                    <input
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-emerald-50/35 focus:border-emerald-300/30 focus:ring-4 focus:ring-emerald-300/10"
                      placeholder={checkoutText(language, 'province')}
                    />
                  </label>
                </div>
              </div>

              <div className="rounded-[24px] border border-emerald-300/10 bg-[#142117]/90 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:p-6">
                <h2 className="text-xl font-black text-[#fff8ec]">{checkoutText(language, 'paymentDetails')}</h2>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    { value: 'cash', label: checkoutText(language, 'cash') },
                    { value: 'visa', label: checkoutText(language, 'visa') },
                    { value: 'other', label: checkoutText(language, 'other') },
                  ].map((method) => (
                    <label
                      key={method.value}
                      className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 transition ${
                        formData.paymentMethod === method.value
                          ? 'border-[#efc34a]/60 bg-[#efc34a]/10 text-white'
                          : 'border-white/10 bg-white/5 text-emerald-50/75 hover:bg-white/8'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.value}
                        checked={formData.paymentMethod === method.value}
                        onChange={handleChange}
                        className="h-4 w-4 accent-[#efc34a]"
                      />
                      <span className="text-sm font-semibold">{method.label}</span>
                    </label>
                  ))}
                </div>

                <label className="mt-5 grid gap-2">
                  <span className="text-sm font-semibold text-emerald-50/75">{checkoutText(language, 'notes')}</span>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-emerald-50/35 focus:border-emerald-300/30 focus:ring-4 focus:ring-emerald-300/10"
                    placeholder={checkoutText(language, 'notesPlaceholder')}
                  />
                </label>
              </div>

              {submitted && (
                <div className="rounded-[20px] border border-emerald-300/20 bg-emerald-300/10 px-5 py-4 text-sm font-medium text-emerald-50">
                  {checkoutText(language, 'orderPlaced')}
                </div>
              )}

              <div className="flex flex-wrap gap-3">
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
                <button
                  type="submit"
                  className="rounded-full border border-[#efc34a]/40 bg-[#efc34a]/15 px-5 py-3 font-black text-[#fff0c7] transition hover:bg-[#efc34a]/20"
                >
                  {checkoutText(language, 'placeOrder')}
                </button>
              </div>
            </form>

            <aside className="h-fit rounded-[24px] border border-white/10 bg-[#142117]/95 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.24)] sm:p-6 lg:sticky lg:top-8">
              <h2 className="text-xl font-black text-[#fff8ec]">{checkoutText(language, 'orderSummary')}</h2>

              {cartItems.length === 0 ? (
                <p className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-emerald-50/70">
                  {checkoutText(language, 'emptyCart')}
                </p>
              ) : (
                <div className="mt-5 space-y-4">
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <div className="min-w-0">
                          <p className="truncate font-semibold text-white">{item.name}</p>
                          <p className="text-sm text-emerald-50/60">
                            {item.quantity || 1} {checkoutText(language, 'items')}
                          </p>
                        </div>
                        <p className="text-sm font-bold text-[#efc34a]">
                          Rs. {(getCurrencyAmount(item.price) * (item.quantity || 1)).toLocaleString('en-IN', {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between gap-4 text-sm sm:text-base">
                      <span className="text-emerald-50/60">{checkoutText(language, 'subtotal')}</span>
                      <span className="font-semibold text-white">
                        Rs. {subtotal.toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-4 text-sm sm:text-base">
                      <span className="text-emerald-50/60">{checkoutText(language, 'total')}</span>
                      <span className="text-2xl font-black text-[#efc34a]">
                        Rs. {total.toLocaleString('en-IN', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}
