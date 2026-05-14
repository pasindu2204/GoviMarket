import { useState, useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

function AdvertisementBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const { language } = useContext(LanguageContext)

  const messages = {
    En: '🎉 Special Offer: 20% OFF Everything — Order Now!',
    Tm: '🎉 சிறப்பு வாய்ப்பு: சிறப்பு: 20% தள்ளுபடி!',
    Si: '🎉  විශේෂ දීමනාව: සියලු නිෂ්පාදන 20% වට්ටම් — අදම ඇණවුම් කරන්න! ',
  }

  if (!isVisible) return null

  return (
    <div className="bg-yellow-400 text-center py-3 px-4 flex items-center justify-between">
      <p className="text-sm md:text-base font-semibold text-gray-900 flex-1">
        {messages[language] || messages.En}
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="ml-4 text-gray-900 hover:text-gray-700 font-bold text-xl leading-none"
        aria-label="Close advertisement"
      >
        ✕
      </button>
    </div>
  )
}

export default AdvertisementBanner
