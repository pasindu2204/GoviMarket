import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

function OurOffer() {
  const { language } = useContext(LanguageContext)

  const content = {
    En: {
      kicker: 'OUR SERVICES',
      title: 'What We Offer',
      subtitle: 'The best platform connecting Sri Lankan farmers and customers',
      offers: [
        {
          title: 'Free Island-Wide Delivery',
          description: 'Free delivery island-wide on orders over Rs. 2,000. Otherwise Rs. 250.',
          highlight: 'Free / Rs. 250',
          icon: 'TRUCK',
        },
        {
          title: 'Quality Guarantee',
          description: 'All products are lab-tested and certified 100% natural and fresh.',
          highlight: 'Free',
          icon: 'CHECK',
        },
        {
          title: '7-Day Returns',
          description: 'Full refund within 7 days for quality issues. No questions asked.',
          highlight: 'Fair Policy',
          icon: 'SYNC',
        },
        {
          title: '24/7 Support',
          description: 'WhatsApp, call, and chat support in Sinhala, Tamil, and English.',
          highlight: 'WhatsApp: 0777-123456',
          icon: 'PHONE',
        },
        {
          title: 'Secure Payments',
          description: 'PayHere, Visa, Master, eZ Cash, mCash, and bank transfer support.',
          highlight: '256-bit SSL',
          icon: 'CARD',
        },
        {
          title: 'Farmer Registration',
          description: 'Register your farm products to sell. No registration fee required.',
          highlight: 'Free',
          icon: 'SPROUT',
        },
      ],
    },
    Tm: {
      kicker: 'எங்கள் சேவைகள்',
      title: 'நாங்கள் வழங்குவது',
      subtitle: 'இலங்கை விவசாயிகளை வாடிக்கையாளர்களுடன் இணைக்கும் சிறந்த தளம்',
      offers: [
        {
          title: 'நாடு முழுவதும் இலவச விநியோகம்',
          description: 'ரூ. 2,000க்கு மேற்பட்ட ஆர்டர்களுக்கு இலவச விநியோகம். இல்லையெனில் ரூ. 250.',
          highlight: 'இலவசம் / ரூ. 250',
          icon: 'TRUCK',
        },
        {
          title: 'தர உறுதி',
          description: 'அனைத்து பொருட்களும் ஆய்வகத்தில் சோதிக்கப்பட்டு 100% இயற்கை மற்றும் புதியவை என உறுதி செய்யப்படுகின்றன.',
          highlight: 'இலவசம்',
          icon: 'CHECK',
        },
        {
          title: '7 நாள் திருப்பி அளித்தல்',
          description: 'தர பிரச்சினைகளுக்கு 7 நாட்களுக்குள் முழு பணம் திருப்பி வழங்கப்படும். கேள்விகள் இல்லை.',
          highlight: 'நியாயமான கொள்கை',
          icon: 'SYNC',
        },
        {
          title: '24/7 உதவி',
          description: 'சிங்களம், தமிழ், ஆங்கிலத்தில் WhatsApp, அழைப்பு, அரட்டை உதவி.',
          highlight: 'WhatsApp: 0777-123456',
          icon: 'PHONE',
        },
        {
          title: 'பாதுகாப்பான கட்டணங்கள்',
          description: 'PayHere, Visa, Master, eZ Cash, mCash மற்றும் வங்கி பரிமாற்றம் ஆதரவு.',
          highlight: '256-bit SSL',
          icon: 'CARD',
        },
        {
          title: 'விவசாயி பதிவு',
          description: 'உங்கள் விவசாய பொருட்களை விற்க பதிவு செய்யுங்கள். பதிவு கட்டணம் இல்லை.',
          highlight: 'இலவசம்',
          icon: 'SPROUT',
        },
      ],
    },
    Si: {
      kicker: 'අපගේ සේවා',
      title: 'අපි ලබාදෙන්නේ',
      subtitle: 'ශ්‍රී ලාංකීය ගොවීන් සහ පාරිභෝගිකයින් එක් කරන හොඳම වේදිකාව',
      offers: [
        {
          title: 'රට පුරා නොමිලේ බෙදාහැරීම',
          description: 'රු. 10,000 ඉක්මවන ඇණවුම් සඳහා දූපත පුරා නොමිලේ බෙදාහැරීම.',
          highlight: 'කොළඹ අවට නොමිලේ.',
          icon: 'TRUCK',
        },
        {
          title: 'ගුණාත්මකභාවය සහතිකය',
          description: 'සියලු නිෂ්පාදන රසායනාගාරයේ පරීක්ෂා කර 100% ස්වාභාවික සහ නැවුම් බව සහතික කරයි.',
          highlight: 'විශ්වාසනීයත්වය 100%',
          icon: 'CHECK',
        },
        {
          title: 'භාණ්ඩ නැවත ලබාදීම',
          description: 'ගුණාත්මක ගැටළු සඳහා ඉල්ලුම් කල දින සිට  4ක් ඇතුළත මුදල් ආපසු..',
          highlight: 'සාධාරණ ප්‍රතිපත්තිය',
          icon: 'SYNC',
        },
        {
          title: '24/7 සහාය',
          description: 'සිංහල, தமிழ், ඉංග්‍රීසි භාෂාවෙන් WhatsApp, ඇමතුම්, සහ චැට් සහාය.',
          highlight: 'WhatsApp: 0777-123456',
          icon: 'PHONE',
        },
        {
          title: 'ආරක්ෂිත ගෙවීම්',
          description: 'PayHere, Visa, Master, eZ Cash, mCash, සහ බැංකු මාරු සහාය.',
          highlight: '256-bit SSL',
          icon: 'CARD',
        },
        {
          title: 'ගොවි ලියාපදිංචිය',
          description: 'ඔබගේ ගොවි නිෂ්පාදන විකිණීමට ලියාපදිංචි වන්න. ලියාපදිංචි ගාස්තු නැත.',
          highlight: 'නොමිලේ',
          icon: 'SPROUT',
        },
      ],
    },
  }

  const current = content[language] || content.En

  return (
    <section className="relative mt-8 overflow-hidden border-y border-emerald-900/60 bg-[#001b11] px-4 py-14 md:px-8 md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(34,95,60,0.4),transparent_28%),radial-gradient(circle_at_90%_80%,rgba(32,83,56,0.35),transparent_30%),linear-gradient(180deg,#001b11_0%,#012215_55%,#021d13_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-300/10 px-4 py-1 text-xs font-semibold tracking-[0.08em] text-amber-300">
            {current.kicker}
          </span>
          <h2 className="mt-5 font-serif text-4xl font-black text-[#f2efe7] md:text-6xl">{current.title}</h2>
          <p className="mt-4 text-base text-[#d6ddd6] md:text-xl">{current.subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {current.offers.map((offer) => (
            <article
              key={offer.title}
              className="rounded-2xl border border-emerald-700/45 bg-linear-to-r from-emerald-950/85 to-emerald-900/60 p-6 shadow-[0_20px_35px_rgba(0,0,0,0.25)]"
            >
              <div className="mb-5 inline-flex h-10 min-w-10 items-center justify-center rounded-md border border-black/30 bg-lime-400 px-2 text-[0.65rem] font-black tracking-[0.08em] text-black">
                {offer.icon}
              </div>
              <h3 className="text-2xl font-extrabold text-[#f0f1e8]">{offer.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-[#d3dacc]">{offer.description}</p>
              <p className="mt-4 text-lg font-extrabold text-amber-300">{offer.highlight}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurOffer
