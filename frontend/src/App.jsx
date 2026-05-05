import { useState, useContext } from 'react'
import Navbar from './Components/Navbar.jsx'
import AdvertisementBanner from './Components/AdvertisementBanner.jsx'
import FarmHeroSection from './Components/FarmHeroSection.jsx'
import CategorySection from './Components/CategorySection.jsx'
import PopularProductsSection from './Components/PopularProductsSection.jsx'
import { LanguageContext } from './context/LanguageContext.jsx'
import './App.css'

function App() {
  const [cartCount] = useState(2)
  const { language, changeLanguage } = useContext(LanguageContext)

  return (
    <div className="app-shell">
      <AdvertisementBanner />
      <Navbar cartCount={cartCount} activeLanguage={language} onLanguageChange={changeLanguage} />

      <main className="page-content">
        <FarmHeroSection />
        <CategorySection />
        <PopularProductsSection />
      </main>
    </div>
  )
}

export default App
