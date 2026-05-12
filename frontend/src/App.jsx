import { useState, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import AdvertisementBanner from './Components/AdvertisementBanner.jsx'
import FarmHeroSection from './Components/FarmHeroSection.jsx'
import CategorySection from './Components/CategorySection.jsx'
import PopularProductsSection from './Components/PopularProductsSection.jsx'
import OurOffer from './Components/OurOffer.jsx'
import CustormerComment from './Components/CustormerComment.jsx'
import Footer from './Components/Footer.jsx'
import Shop from './Pages/Shop.jsx'
import Fresh from './Pages/Fresh.jsx'
import ColomboGoods from './Pages/ColomboGoods.jsx'
import Meals from './Pages/Meals.jsx'
import { LanguageContext } from './context/LanguageContext.jsx'
import './App.css'

function HomePage() {
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
        <OurOffer />
        <CustormerComment />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  const [cartCount] = useState(2)
  const { language, changeLanguage } = useContext(LanguageContext)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/fresh" element={<Fresh />} />
        <Route path="/colombo" element={<ColomboGoods />} />
        <Route path="/meals" element={<Meals />} />
      </Routes>
    </Router>
  )
}

export default App
