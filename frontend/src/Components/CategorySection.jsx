import { useState, useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

function CategorySection() {
  const { language } = useContext(LanguageContext)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = {
    En: [
      { id: 'all', label: 'All', icon: '⭐', count: '2800+' },
      { id: 'vegetables', label: 'Vegetables', icon: '🥒', count: '340+' },
      { id: 'fruits', label: 'Fruits', icon: '🍎', count: '280+' },
      { id: 'fish', label: 'Fish/Dry Fish', icon: '🐟', count: '120+' },
      { id: 'grains', label: 'Grains/Rice', icon: '🌾', count: '95+' },
      { id: 'dairy', label: 'Dairy/Curds', icon: '🥛', count: '60+' },
      { id: 'honey', label: 'Honey/Kithul', icon: '🍯', count: '40+' },
    ],
    Tm: [
      { id: 'all', label: 'அனைத்து', icon: '⭐', count: '2800+' },
      { id: 'vegetables', label: 'காய்கறிகள்', icon: '🥒', count: '340+' },
      { id: 'fruits', label: 'பழங்கள்', icon: '🍎', count: '280+' },
      { id: 'fish', label: 'மீன்/உலர் மீன்', icon: '🐟', count: '120+' },
      { id: 'grains', label: 'தானியங்கள்/அரிசி', icon: '🌾', count: '95+' },
      { id: 'dairy', label: 'பால்/தயிர்', icon: '🥛', count: '60+' },
      { id: 'honey', label: 'தேன்/கிதுல்', icon: '🍯', count: '40+' },
    ],
    Si: [
      { id: 'all', label: 'සියල්ල', icon: '⭐', count: '2800+' },
      { id: 'vegetables', label: 'එළවළු', icon: '🥒', count: '340+' },
      { id: 'fruits', label: 'පළතුරු', icon: '🍎', count: '280+' },
      { id: 'fish', label: 'මසු/වියළි මසු', icon: '🐟', count: '120+' },
      { id: 'grains', label: 'ධාන්ය/බත්', icon: '🌾', count: '95+' },
      { id: 'dairy', label: 'කිරීම/දධි', icon: '🥛', count: '60+' },
      { id: 'honey', label: 'පැණි/කිතුල්', icon: '🍯', count: '40+' },
    ],
  }

  const products = {
    En: {
      all: [
        { id: 1, title: 'Vegetables', count: '340+ types', image: '🥬', badge: 'Fresh' },
        { id: 2, title: 'Fish & Dry Fish', count: '120+ types', image: '🐟', badge: 'සුවඳ' },
        { id: 3, title: 'Fruits', count: '280+ types', image: '🍊', badge: '' },
        { id: 4, title: 'Honey & Kithul', count: '40+ types', image: '🍯', badge: '100% Natural' },
      ],
      vegetables: [
        { id: 1, title: 'Vegetables', count: '340+ types', image: '🥬', badge: 'Fresh' },
      ],
      fruits: [
        { id: 3, title: 'Fruits', count: '280+ types', image: '🍊', badge: '' },
      ],
      fish: [
        { id: 2, title: 'Fish & Dry Fish', count: '120+ types', image: '🐟', badge: 'සුවඳ' },
      ],
      honey: [
        { id: 4, title: 'Honey & Kithul', count: '40+ types', image: '🍯', badge: '100% Natural' },
      ],
    },
    Tm: {
      all: [
        { id: 1, title: 'காய்கறிகள்', count: '340+ வகைகள்', image: '🥬', badge: 'புதிய' },
        { id: 2, title: 'மீன் மற்றும் உலர் மீன்', count: '120+ வகைகள்', image: '🐟', badge: 'சுவாசம்' },
        { id: 3, title: 'பழங்கள்', count: '280+ வகைகள்', image: '🍊', badge: '' },
        { id: 4, title: 'தேன் மற்றும் கிதுல்', count: '40+ வகைகள்', image: '🍯', badge: '100% இயற்கை' },
      ],
    },
    Si: [
      { id: 1, title: 'එළවළු', count: '340+ වර්ගයන්', image: '🥬', badge: 'ताजा' },
      { id: 2, title: 'මසු සහ වියළි මසු', count: '120+ වර්ගයන්', image: '🐟', badge: 'සුවඳ' },
      { id: 3, title: 'පළතුරු', count: '280+ වර්ගයන්', image: '🍊', badge: '' },
      { id: 4, title: 'පැණි සහ කිතුල්', count: '40+ වර්ගයන්', image: '🍯', badge: '100% ස්වාභාවික' },
    ],
  }

  const currentCategories = categories[language] || categories.En
  const currentProducts = products[language] || products.En
  const displayProducts = currentProducts[activeCategory] || currentProducts.all

  return (
    <section className="bg-slate-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start items-center">
          {currentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2
                ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-slate-900 shadow-lg scale-105'
                    : 'border-2 border-slate-700 text-gray-300 hover:border-yellow-500 hover:text-yellow-400'
                }
              `}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.label}</span>
              <span className="text-xs ml-1 opacity-75">{category.count}</span>
            </button>
          ))}
          <div className="hidden md:block text-2xl text-green-400 ml-auto animate-bounce">
            🌿
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Card Container with Hover Effect */}
              <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-700 overflow-hidden rounded-3xl">
                {/* Background Image/Color */}
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                >
                  {/* Decorative gradient based on product type */}
                  <div
                    className={`
                      absolute inset-0 transition-all duration-500
                      ${
                        product.id === 1
                          ? 'bg-gradient-to-br from-green-600 to-slate-800'
                          : product.id === 2
                          ? 'bg-gradient-to-br from-blue-600 to-slate-800'
                          : product.id === 3
                          ? 'bg-gradient-to-br from-yellow-500 to-slate-800'
                          : 'bg-gradient-to-br from-amber-600 to-slate-800'
                      }
                    `}
                  />
                  {/* Overlay Pattern */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Product Image/Icon - Centered with Zoom */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-4">
                    {product.image}
                  </div>
                </div>

                {/* Content - Appears on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 text-sm">{product.count}</p>
                </div>

                {/* Bottom Content - Always Visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent transition-all duration-500 group-hover:translate-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:opacity-0 transition-opacity duration-500">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:opacity-0 transition-opacity duration-500">
                    {product.count}
                  </p>
                </div>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-yellow-400/0 group-hover:border-yellow-400/50 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
