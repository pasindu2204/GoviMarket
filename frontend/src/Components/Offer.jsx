import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

function Offer() {
  const { language } = useContext(LanguageContext)

  const content = {
    En: {
      cards: [
        {
          tag: 'LIMITED TIME OFFER',
          titleA: 'Fresh Fish &',
          titleB: 'Dry Fish 25% OFF',
          subtitle: 'Haal Messo, Shrimp, Karawala - direct from Galle, Trinco Harbour',
          action: 'Shop Now',
          icon: '🛒',
        },
        {
          tag: 'NATURAL',
          titleA: 'Kithul Treacle',
          titleB: '& Pure Honey',
          subtitle: 'From Ratnapura, Galle Forests',
          action: 'Buy',
          icon: '🥤',
        },
        {
          tag: 'HOME MEALS',
          titleA: 'Order Home',
          titleB: 'Cooked Meals',
          subtitle: 'Lamprais, Roti, Rice & Curry',
          action: 'Order',
          icon: '🍽️',
        },
      ],
    },
    Tm: {
      cards: [
        {
          tag: 'குறைந்த நேர சலுகை',
          titleA: 'புதிய மீன் &',
          titleB: 'உலர் மீன் 25% தள்ளுபடி',
          subtitle: 'ஹால் மெஸ்ஸோ, இறால், கரவாளா - காளி மற்றும் திருகோணமலை துறைமுகம்',
          action: 'இப்போது வாங்க',
          icon: '🛒',
        },
        {
          tag: 'இயற்கை',
          titleA: 'கித்துள் ட்ரீகிள்',
          titleB: '& தூய தேன்',
          subtitle: 'ரத்னபுரா, காளி காடுகளில் இருந்து',
          action: 'வாங்க',
          icon: '🥤',
        },
        {
          tag: 'வீட்டு உணவு',
          titleA: 'வீட்டில் சமைத்த',
          titleB: 'உணவை ஆர்டர் செய்யுங்கள்',
          subtitle: 'லம்ப்ரைஸ், ரொட்டி, சாதம் & கறி',
          action: 'ஆர்டர்',
          icon: '🍽️',
        },
      ],
    },
    Si: {
      cards: [
        {
          tag: 'සීමිත කාලීන දීමනාව',
          titleA: 'නැවුම් මාළු සහ',
          titleB: 'වියලි මාළු 25% වට්ටම',
          subtitle: 'හාල් මෙස්සෝ, ඉස්සෝ, කරවල - ගාල්ල හා ත්රිකුණාමල වරායන් සිට',
          action: 'දැන් මිලදී ගන්න',
          icon: '🛒',
        },
        {
          tag: 'ස්වභාවික',
          titleA: 'කිතුල් පැණි',
          titleB: '& පිරිසිදු මී පැණි',
          subtitle: 'රත්නපුර, ගාල්ල වනාන්තර වලින්',
          action: 'මිලදී ගන්න',
          icon: '🥤',
        },
        {
          tag: 'ගෙදර කෑම',
          titleA: 'ගෙදර පිසූ',
          titleB: 'කෑම ඇණවුම් කරන්න',
          subtitle: 'ලම්ප්රයිස්, රොටි, බත් හා කරි',
          action: 'ඇණවුම් කරන්න',
          icon: '🍽️',
        },
      ],
    },
  }

  const selected = content[language] || content.En

  return (
    <section className="relative mt-3 overflow-hidden border-y border-emerald-900/50 bg-[#001f12] px-4 py-7 md:px-6 md:py-9">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(55,133,73,0.45),transparent_22%),radial-gradient(circle_at_92%_84%,rgba(52,111,70,0.35),transparent_30%),linear-gradient(180deg,#001f12_0%,#032816_52%,#012313_100%)]" />

      <div className="relative mx-auto grid max-w-430 gap-5 lg:grid-cols-[2.1fr_1fr_1fr]">
        <article className="group relative min-h-72.5 overflow-hidden rounded-[22px] border border-emerald-300/30 p-6 text-[#f8f9ef] shadow-[0_22px_40px_rgba(0,0,0,0.35)] md:p-8">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,73,36,0.9),rgba(14,61,35,0.65)),radial-gradient(circle_at_80%_22%,rgba(130,198,112,0.28),transparent_36%),linear-gradient(130deg,#315f2c,#2f4233_46%,#233730)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(4,55,26,0.66),rgba(7,45,28,0.72))]" />

          <div className="relative z-10 flex h-full flex-col">
            <p className="text-[0.92rem] font-bold uppercase tracking-[0.06em] text-amber-300">{selected.cards[0].tag}</p>
            <h2 className="mt-3 font-serif text-[clamp(1.9rem,2.3vw,3rem)] font-black leading-[1.2] text-balance">
              {selected.cards[0].titleA}
              <br />
              {selected.cards[0].titleB}
            </h2>
            <p className="mt-3 max-w-[38ch] text-base leading-relaxed text-emerald-50/85">{selected.cards[0].subtitle}</p>

            <button
              type="button"
              className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-linear-to-br from-amber-300 to-amber-500 px-5 py-2.5 text-lg font-extrabold text-amber-950 shadow-[0_12px_24px_rgba(220,158,21,0.3)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/85 text-sm">{selected.cards[0].icon}</span>
              {selected.cards[0].action}
            </button>
          </div>
        </article>

        <article className="group relative min-h-72.5 overflow-hidden rounded-[22px] border border-lime-300/20 p-6 text-[#f8f9ef] shadow-[0_22px_40px_rgba(0,0,0,0.35)] md:p-7">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(67,101,22,0.92),rgba(48,72,26,0.84)),radial-gradient(circle_at_65%_34%,rgba(170,205,54,0.21),transparent_35%),linear-gradient(130deg,#58751e,#3a5219_44%,#2b4123)]" />
          <div className="absolute inset-0 bg-[linear-gradient(122deg,rgba(38,63,15,0.52),rgba(33,58,17,0.58))]" />

          <div className="relative z-10 flex h-full flex-col">
            <p className="text-[0.92rem] font-bold uppercase tracking-[0.06em] text-amber-300">{selected.cards[1].tag}</p>
            <h3 className="mt-3 font-serif text-[clamp(1.6rem,1.8vw,2.35rem)] font-black leading-[1.22] text-balance">
              {selected.cards[1].titleA}
              <br />
              {selected.cards[1].titleB}
            </h3>
            <p className="mt-3 max-w-[32ch] text-base leading-relaxed text-emerald-50/85">{selected.cards[1].subtitle}</p>

            <button
              type="button"
              className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-linear-to-br from-amber-300 to-amber-500 px-5 py-2 text-lg font-extrabold text-amber-950 shadow-[0_12px_24px_rgba(220,158,21,0.3)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/85 text-sm">{selected.cards[1].icon}</span>
              {selected.cards[1].action}
            </button>
          </div>
        </article>

        <article className="group relative min-h-72.5 overflow-hidden rounded-[22px] border border-violet-300/20 p-6 text-[#f8f9ef] shadow-[0_22px_40px_rgba(0,0,0,0.35)] md:p-7">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(51,25,83,0.95),rgba(38,23,72,0.88)),radial-gradient(circle_at_67%_36%,rgba(136,96,255,0.19),transparent_34%),linear-gradient(130deg,#3f2460,#281848_44%,#20143d)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(43,23,71,0.5),rgba(25,15,47,0.58))]" />

          <div className="relative z-10 flex h-full flex-col">
            <p className="text-[0.92rem] font-bold uppercase tracking-[0.06em] text-orange-300">{selected.cards[2].tag}</p>
            <h3 className="mt-3 font-serif text-[clamp(1.6rem,1.8vw,2.35rem)] font-black leading-[1.22] text-balance">
              {selected.cards[2].titleA}
              <br />
              {selected.cards[2].titleB}
            </h3>
            <p className="mt-3 max-w-[32ch] text-base leading-relaxed text-violet-50/85">{selected.cards[2].subtitle}</p>

            <button
              type="button"
              className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-linear-to-br from-orange-300 to-orange-500 px-5 py-2 text-lg font-extrabold text-orange-950 shadow-[0_12px_24px_rgba(229,120,20,0.32)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/85 text-sm">{selected.cards[2].icon}</span>
              {selected.cards[2].action}
            </button>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Offer
