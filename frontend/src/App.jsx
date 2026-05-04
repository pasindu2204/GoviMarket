import { useState, useContext } from 'react'
import Navbar from './Components/Navbar.jsx'
import AdvertisementBanner from './Components/AdvertisementBanner.jsx'
import FarmHeroSection from './Components/FarmHeroSection.jsx'
import CategorySection from './Components/CategorySection.jsx'
import { LanguageContext } from './context/LanguageContext.jsx'
import { t } from './i18n/translations.js'
import './App.css'

const featuredItems = [
  {
    name_key: 'dish_1',
    desc_key: 'dish_1_desc',
    price_key: 'dish_1_price',
    tone: 'sunrise',
  },
  {
    name_key: 'dish_2',
    desc_key: 'dish_2_desc',
    price_key: 'dish_2_price',
    tone: 'leaf',
  },
  {
    name_key: 'dish_3',
    desc_key: 'dish_3_desc',
    price_key: 'dish_3_price',
    tone: 'ember',
  },
]

function App() {
  const [cartCount, setCartCount] = useState(2)
  const { language, changeLanguage } = useContext(LanguageContext)

  return (
    <div className="app-shell">
      <AdvertisementBanner />
      <Navbar cartCount={cartCount} activeLanguage={language} onLanguageChange={changeLanguage} />

      <main className="page-content">
        <FarmHeroSection />
        <CategorySection />
      </main>
    </div>
  )
}

export default App
