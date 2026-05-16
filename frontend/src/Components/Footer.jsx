import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

function Footer() {
  const { language } = useContext(LanguageContext)

  const content = {
    En: {
      description: "Sri Lanka's best digital marketplace - connecting farmers with customers. Fresh products at the best prices.",
      categoriesTitle: 'Categories',
      districtsTitle: 'Sri Lanka',
      contactTitle: 'Contact Us',
      categories: ['Vegetables', 'Fish/Dry Fish', 'Fruits', 'Grains/Rice', 'Honey/Kithul', 'Clothes'],
      districts: ['Nuwara Eliya', 'Jaffna', 'Galle', 'Anuradhapura', 'Ratnapura', '+ 20 more districts'],
      contacts: [
        { label: '0777 123456', icon: '📞' },
        { label: 'WhatsApp', icon: '💬' },
        { label: 'info@govimarkt.lk', icon: '✉️' },
        { label: 'Every day 6am - 10pm', icon: '⏰' },
      ],
      socialLinks: [
        { label: 'Facebook', icon: '📘' },
        { label: 'Chat', icon: '💬' },
        { label: 'Instagram', icon: '📸' },
        { label: 'YouTube', icon: '▶️' },
      ],
      copyright: '© 2025 GoviMarkt - Sri Lanka lk',
      links: ['Privacy', 'Terms', 'Farmer Registration'],
    },
    Tm: {
      description: 'இலங்கையின் சிறந்த டிஜிட்டல் சந்தை - விவசாயிகளை வாடிக்கையாளர்களுடன் இணைக்கிறது. சிறந்த விலையில் புதிய பொருட்கள்.',
      categoriesTitle: 'வகைகள்',
      districtsTitle: 'இலங்கை',
      contactTitle: 'தொடர்பு கொள்ளவும்',
      categories: ['காய்கறிகள்', 'மீன்/உலர் மீன்', 'பழங்கள்', 'தானியங்கள்/அரிசி', 'தேன்/கிதுல்', 'உடைகள்'],
      districts: ['நுவரெலியா', 'யாழ்ப்பாணம்', 'காலி', 'அனுராதபுரம்', 'இரத்தினபுரி', '+ 20 மேலும் மாவட்டங்கள்'],
      contacts: [
        { label: '0777 123456', icon: '📞' },
        { label: 'வாட்ஸ்அப்', icon: '💬' },
        { label: 'info@govimarkt.lk', icon: '✉️' },
        { label: 'ஒவ்வொரு நாளும் காலை 6 - இரவு 10', icon: '⏰' },
      ],
      socialLinks: [
        { label: 'பேஸ்புக்', icon: '📘' },
        { label: 'அரட்டை', icon: '💬' },
        { label: 'இன்ஸ்டாகிராம்', icon: '📸' },
        { label: 'யூடியூப்', icon: '▶️' },
      ],
      copyright: '© 2025 கோவிமார்க்ட் - இலங்கை lk',
      links: ['தனியுரிமை', 'விதிமுறைகள்', 'விவசாயி பதிவு'],
    },
    Si: {
      description: 'ශ්‍රී ලංකාවේ හොඳම ඩිජිටල් වෙළඳපොළ ගොවීන් සහ පාරිභෝගිකයින් එක් කරයි. හොඳම මිලට නැවුම් නිෂ්පාදන.',
      categoriesTitle: 'කාණ්ඩ',
      districtsTitle: 'ශ්‍රී ලංකාව',
      contactTitle: 'අප අමතන්න',
      categories: ['එළවළු', 'මසු/වියළි මසු', 'පළතුරු', 'ධාන්ය/බත්', 'පැණි/කිතුල්', 'ඇඳුම්'],
      districts: ['නුවරඑළිය', 'යාපනය', 'ගාල්ල', 'අනුරාධපුරය', 'රත්නපුරය', '+ 20 තව දිස්ත්‍රික්ක'],
      contacts: [
        { label: '0777 123456', icon: '📞' },
        { label: 'WhatsApp', icon: '💬' },
        { label: 'info@govimarkt.lk', icon: '✉️' },
        { label: 'සෑම දිනම උදේ 6 - රාත්‍රී 10', icon: '⏰' },
      ],
      socialLinks: [
        { label: 'Facebook', icon: '📘' },
        { label: 'Chat', icon: '💬' },
        { label: 'Instagram', icon: '📸' },
        { label: 'YouTube', icon: '▶️' },
      ],
      copyright: '© 2025 GoviMarkt - Sri Lanka lk',
      links: ['රහස්‍යතාව', 'නියම', 'ගොවි ලියාපදිංචිය'],
    },
  }

  const current = content[language] || content.En

  return (
    <footer className="border-t border-emerald-950/70 bg-[#07140b] px-4 py-10 text-[#d8d4c6] md:px-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-lime-300 to-emerald-500 text-lg font-black text-[#11210c] shadow-[0_10px_24px_rgba(95,172,67,0.25)]">
                🌱
              </div>
              <h2 className="text-2xl font-black tracking-tight text-amber-300">GoviMarkt</h2>
            </div>

            <p className="mt-5 max-w-lg text-base leading-8 text-[#c6c1b4] md:text-lg">
              {current.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {current.socialLinks.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  aria-label={item.label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-emerald-800/80 bg-[#142312] text-lg text-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-emerald-600"
                >
                  <span aria-hidden="true">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">{current.categoriesTitle}</h3>
            <ul className="mt-5 space-y-3 text-[1.05rem] leading-7 text-[#cfc9ba]">
              {current.categories.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden="true">🍃</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">{current.districtsTitle}</h3>
            <ul className="mt-5 space-y-3 text-[1.05rem] leading-7 text-[#cfc9ba]">
              {current.districts.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-orange-400">
                    📍
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">{current.contactTitle}</h3>
            <ul className="mt-5 space-y-4 text-[1.05rem] leading-7 text-[#cfc9ba]">
              {current.contacts.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-0.5">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-emerald-900/70 pt-6 text-sm text-[#8d8a7d] md:flex-row md:items-center md:justify-between">
          <p>{current.copyright}</p>
          <div className="flex flex-wrap gap-5 text-[#9c998c]">
            {current.links.map((item) => (
              <a key={item} href="#" className="transition-colors hover:text-amber-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
