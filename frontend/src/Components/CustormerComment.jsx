import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

function CustormerComment() {
  const { language } = useContext(LanguageContext)

  const content = {
    En: {
      kicker: 'Customers',
      title: 'What They Say',
      testimonials: [
        {
          name: 'Sahan Kumara',
          location: 'Colombo',
          quote:
            'GoviMarket service is excellent. Fresh vegetables, rice, fish, and fruit are delivered fast and the quality is always reliable.',
          avatar: 'SK',
          stars: 5,
        },
        {
          name: 'Kamala Devi',
          location: 'Jaffna',
          quote:
            'I order every week from here. The prices are fair, the food is fresh, and the delivery is always on time. Very convenient!',
          avatar: 'KD',
          stars: 5,
        },
        {
          name: 'Rohan Perera',
          location: 'Colombo',
          quote:
            'Absolutely love GoviMarket! Fresh watermelons, chillis and long beans delivered to my doorstep in Colombo. Best prices in Sri Lanka!',
          avatar: 'RP',
          stars: 5,
        },
      ],
    },
    Tm: {
      kicker: 'வாடிக்கையாளர்கள்',
      title: 'அவர்கள் என்ன சொல்கிறார்கள்',
      testimonials: [
        {
          name: 'சஹான் குமார',
          location: 'கொழும்பு',
          quote:
            'GoviMarket சேவை மிக சிறப்பு. புதிய காய்கறிகள், அரிசி, மீன், பழங்கள் வேகமாக வழங்கப்படுகின்றன, தரமும் எப்போதும் நம்பகமானது.',
          avatar: 'SK',
          stars: 5,
        },
        {
          name: 'கமலா தேவி',
          location: 'யாழ்ப்பாணம்',
          quote:
            'நான் ஒவ்வொரு வாரமும் இங்கிருந்து ஆர்டர் செய்கிறேன். விலைகள் நியாயமானவை, உணவு புதியது, மற்றும் விநியோகம் நேரத்தில் இருக்கும். மிகவும் வசதி!',
          avatar: 'KD',
          stars: 5,
        },
        {
          name: 'ரோஹன் பெரேரா',
          location: 'கொழும்பு',
          quote:
            'GoviMarket-ஐ மிகவும் விரும்புகிறேன்! புதிய தர்பூசணி, மிளகாய், மற்றும் நீளப்பயறு கொழும்பிலுள்ள என் வீட்டிற்கு வழங்கப்பட்டது. இலங்கையில் சிறந்த விலைகள்!',
          avatar: 'RP',
          stars: 5,
        },
      ],
    },
    Si: {
      kicker: 'පාරිභෝගිකයින්',
      title: 'ඔවුන් කියන දේ',
      testimonials: [
        {
          name: 'සහන් කුමාර',
          location: 'කොළඹ',
          quote:
            'GoviMarket සේවාව අතිවිශිෂ්ටයි. නැවුම් එළවළු, බත්, මසු සහ පළතුරු වේගයෙන් ලබාදේ, ගුණාත්මකභාවය නිතරම විශ්වාසදායකයි.',
          avatar: 'SK',
          stars: 5,
        },
        {
          name: 'කමලා දේවි',
          location: 'යාපනය',
          quote:
            'මම සතියෙන් සතිය මෙතැනින් ඇණවුම් කරනවා. මිල සාධාරණයි, ආහාර නැවුම්යි, සහ බෙදාහැරීම හැමවිටම වේලාවට. ඉතා පහසුයි!',
          avatar: 'KD',
          stars: 5,
        },
        {
          name: 'රෝහන් පෙරේරා',
          location: 'කොළඹ',
          quote:
            'GoviMarket මට ඉතාමත් ප්‍රියයි! නැවුම් වතුරමැල්ල, මිරිස් සහ දිග බෝංචි කොළඹ මගේ දොරකඩටම ලබාදුන්නා. ශ්‍රී ලංකාවේ හොඳම මිල!',
          avatar: 'RP',
          stars: 5,
        },
      ],
    },
  }

  const current = content[language] || content.En

  return (
    <section className="bg-[#07140b] px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <span className="inline-flex rounded-full border border-amber-500/25 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
            {current.kicker}
          </span>
          <h2 className="mt-5 font-serif text-4xl font-black tracking-tight text-[#f4efe6] md:text-6xl">
            {current.title}
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {current.testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-emerald-800/70 bg-linear-to-br from-[#21391f] to-[#1a2f1b] p-6 text-[#efe6d8] shadow-[0_18px_40px_rgba(0,0,0,0.22)] md:p-7"
            >
              <div className="mb-5 flex items-center gap-1 text-amber-300">
                {Array.from({ length: item.stars }).map((_, index) => (
                  <span key={index} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-[1.05rem] leading-relaxed text-[#d7d0c4] italic md:text-[1.1rem]">
                “{item.quote}”
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-full border-2 border-[#334f2d] bg-linear-to-br from-amber-300 to-orange-500 text-sm font-black text-[#1a1204] shadow-md">
                  {item.avatar}
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#f7f2eb]">{item.name}</h3>
                  <p className="mt-1 text-sm text-[#a8a091]">📍 {item.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustormerComment
