import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

function FarmHeroSection() {
  const { language } = useContext(LanguageContext)

  const content = {
    En: {
      badge: "Sri Lanka's #1 Farm Marketplace",
      fresh: 'Fresh',
      title: 'Farm Products',
      subtitle: 'Delivered to Your Door',
      description: 'Direct from farmers — vegetables, fruits, grains, fish, dairy, Colombo goods and more — best prices, island-wide delivery!',
      shopNow: 'Shop Now',
      freshProducts: 'Fresh Products',
      customers: '50,000+',
      customersLabel: 'Customers',
      products: '2,800+',
      productsLabel: 'Products',
      farmers: '1,200+',
      farmersLabel: 'Farmers',
      districts: '25',
      districtsLabel: 'Districts',
      imageTitle: '🥬 Fresh Farm Products',
      imageSubtitle: '[Image will be added here]',
    },
    Tm: {
      badge: 'இலங்கையின் #1 விவசாய சந்தை',
      fresh: 'புதிய',
      title: 'விவசாய பொருட்கள்',
      subtitle: 'உங்கள் வாசலுக்கு வழங்கப்பட்டது',
      description: 'விவசாயীদிடமிருந்து நேரடியாக — காய்கறிகள், பழங்கள், தானியங்கள், மீன், பால், கொழும்பு பொருட்கள் மற்றும் பலவும் — சிறந்த விலைகள், ஐக்கிய நாடுகளில் வழங்கல்!',
      shopNow: 'இப்போது வாங்குங்கள்',
      freshProducts: 'புதிய பொருட்கள்',
      customers: '50,000+',
      customersLabel: 'வாடிக்கையாளர்கள்',
      products: '2,800+',
      productsLabel: 'பொருட்கள்',
      farmers: '1,200+',
      farmersLabel: 'விவசாயிகள்',
      districts: '25',
      districtsLabel: 'மாவட்டங்கள்',
      imageTitle: '🥬 புதிய விவசாய பொருட்கள்',
      imageSubtitle: '[படம் இங்கே சேர்க்கப்படும்]',
    },
    Si: {
      badge: 'ශ්‍රී ලංකාවේ #1 ගොවි වෙළඳ පොළ',
      fresh: 'ताজा',
      title: 'ගොවි නිෂ්පාදන',
      subtitle: 'ඔබගේ දොරට පෙරadelaide එව්ව',
      description: 'ගොවීන්ගෙන් සෘජුවම — එළවළු, පළතුරු, ධාන්ය, මසු, කිරීම, කොළඹ භාණ්ඩ සහ තවත් බොහෝ — හොඳම ధර, දුපුටෙ පුරා ව්‍යාපනය!',
      shopNow: 'දැන් මිල දී ගන්න',
      freshProducts: 'ताजा නිෂ්පාදන',
      customers: '50,000+',
      customersLabel: 'ගිණුම්',
      products: '2,800+',
      productsLabel: 'නිෂ්පාදන',
      farmers: '1,200+',
      farmersLabel: 'ගොවීන්',
      districts: '25',
      districtsLabel: 'දිස්ත්‍රික්ක',
      imageTitle: '🥬 නැවුම් ගොවි නිෂ්පාදන',
      imageSubtitle: '[රූපය මෙහි එක් කරනු ඇත]',
    },
  }

  const currentContent = content[language] || content.En

  return (
    <section className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 px-6 py-16 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-700 rounded-full px-4 py-2 w-fit">
            <span className="text-green-400 text-xl">🌱</span>
            <span className="text-sm font-medium text-gray-200">{currentContent.badge}</span>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <p className="text-yellow-500 text-4xl md:text-5xl font-italic">{currentContent.fresh}</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              {currentContent.title}
            </h1>
            <p className="text-3xl md:text-4xl font-semibold text-gray-300">{currentContent.subtitle}</p>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-md">
            {currentContent.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-colors">
              📦 {currentContent.shopNow}
            </button>
            <button className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-colors">
              🌿 {currentContent.freshProducts}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            <div>
              <p className="text-yellow-500 text-2xl md:text-3xl font-bold">{currentContent.customers}</p>
              <p className="text-gray-400 text-sm">{currentContent.customersLabel}</p>
            </div>
            <div>
              <p className="text-yellow-500 text-2xl md:text-3xl font-bold">{currentContent.products}</p>
              <p className="text-gray-400 text-sm">{currentContent.productsLabel}</p>
            </div>
            <div>
              <p className="text-yellow-500 text-2xl md:text-3xl font-bold">{currentContent.farmers}</p>
              <p className="text-gray-400 text-sm">{currentContent.farmersLabel}</p>
            </div>
            <div>
              <p className="text-yellow-500 text-2xl md:text-3xl font-bold">{currentContent.districts}</p>
              <p className="text-gray-400 text-sm">{currentContent.districtsLabel}</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image Placeholder */}
        <div className="flex items-center justify-center">
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br from-green-400 to-green-600">
            <div className="text-center">
              <p className="text-xl font-semibold text-[#f4efe6]">{currentContent.imageTitle}</p>
              <p className="mt-2 text-sm text-[#d2cdbc]">{currentContent.imageSubtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FarmHeroSection
