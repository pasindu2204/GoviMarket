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
import Cart from './Pages/Cart.jsx'
import Shop from './Pages/Shop.jsx'
import Fresh from './Pages/Fresh.jsx'
import ColomboGoods from './Pages/ColomboGoods.jsx'
import Meals from './Pages/Meals.jsx'
import Checkout from './Pages/Checkout.jsx'
import Fooddetails from './Pages/Fooddetails.jsx'
import Signin from './Components/Signin.jsx'
import { LanguageContext } from './context/LanguageContext.jsx'
import './App.css'

function HomePage({ cartItems, onUpdateCart }) {
  const { language, changeLanguage } = useContext(LanguageContext)

  return (
    <div className="app-shell">
      <AdvertisementBanner />
      <Navbar cartItems={cartItems} onUpdateCart={onUpdateCart} activeLanguage={language} onLanguageChange={changeLanguage} />

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

function AppLayout({ cartItems, onUpdateCart, children }) {
  const { language, changeLanguage } = useContext(LanguageContext)

  return (
    <div className="app-shell">
      <Navbar cartItems={cartItems} onUpdateCart={onUpdateCart} activeLanguage={language} onLanguageChange={changeLanguage} />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  )
}

function App() {
  const [cartItems, setCartItems] = useState([])

  const handleUpdateCart = (updatedItems) => {
    setCartItems(updatedItems)
  }

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id)

    if (existingItem) {
      const updated = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
      setCartItems(updated)
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage cartItems={cartItems} onUpdateCart={handleUpdateCart} />} />
        <Route
          path="/shop"
          element={
            <AppLayout cartItems={cartItems} onUpdateCart={handleUpdateCart}>
              <Shop onAddToCart={handleAddToCart} />
            </AppLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <AppLayout cartItems={cartItems} onUpdateCart={handleUpdateCart}>
              <Cart cartItems={cartItems} onUpdateCart={handleUpdateCart} />
            </AppLayout>
          }
        />
        <Route
          path="/checkout"
          element={
            <AppLayout cartItems={cartItems} onUpdateCart={handleUpdateCart}>
              <Checkout />
            </AppLayout>
          }
        />
        <Route
          path="/fresh"
          element={
            <AppLayout cartItems={cartItems} onUpdateCart={handleUpdateCart}>
              <Fresh onAddToCart={handleAddToCart} />
            </AppLayout>
          }
        />
        <Route
          path="/colombo"
          element={
            <AppLayout cartItems={cartItems} onUpdateCart={handleUpdateCart}>
              <ColomboGoods onAddToCart={handleAddToCart} />
            </AppLayout>
          }
        />
        <Route
          path="/meals"
          element={
            <AppLayout cartItems={cartItems} onUpdateCart={handleUpdateCart}>
              <Meals onAddToCart={handleAddToCart} />
            </AppLayout>
          }
        />
        <Route
          path="/fooddetails/:productId"
          element={
            <AppLayout cartItems={cartItems} onUpdateCart={handleUpdateCart}>
              <Fooddetails onAddToCart={handleAddToCart} />
            </AppLayout>
          }
        />
        <Route
          path="/signin"
          element={
            <AppLayout cartItems={cartItems} onUpdateCart={handleUpdateCart}>
              <Signin />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
