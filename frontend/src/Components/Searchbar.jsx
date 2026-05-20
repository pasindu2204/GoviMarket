import { useState, useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { LanguageContext } from '../context/LanguageContext.jsx'
import { apiUrl } from '../utils/api.js'

const searchContent = {
  En: {
    search_placeholder: 'Search Products...',
    search_button: 'Search',
  },
  Tm: {
    search_placeholder: 'தயாரிப்புகளைத் தேடு...',
    search_button: 'தேடுக',
  },
  Si: {
    search_placeholder: 'නිෂ්පාදන සොයන්න...',
    search_button: 'සොයන්න',
  },
}

function searchText(language, key) {
  return searchContent[language]?.[key] ?? searchContent.En[key] ?? key
}

function SearchIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      <path d="M10.5 4a6.5 6.5 0 1 0 4.14 11.53l4.42 4.42 1.42-1.42-4.42-4.42A6.5 6.5 0 0 0 10.5 4Zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" />
    </svg>
  )
}

function Searchbar() {
  const [searchValue, setSearchValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [products, setProducts] = useState([])
  const { language } = useContext(LanguageContext)
  const navigate = useNavigate()
  const suggestionRef = useRef(null)

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(apiUrl('/api/products'))
        if (response.ok) {
          const data = await response.json()
          const normalizedProducts = Array.isArray(data) ? data : data?.products || []
          setProducts(normalizedProducts)
        }
      } catch {
        // Silently fail - suggestions just won't show
      }
    }

    fetchProducts()
  }, [])

  // Update suggestions when search value changes
  useEffect(() => {
    if (searchValue.trim().length > 0) {
      const filtered = products
        .filter((product) =>
          product.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .slice(0, 5)
      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchValue, products])

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionRef.current && !suggestionRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (searchValue.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchValue)}`)
      setSearchValue('')
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (productName) => {
    setSearchValue(productName)
    navigate(`/shop?search=${encodeURIComponent(productName)}`)
    setSearchValue('')
    setSuggestions([])
    setShowSuggestions(false)
  }

  return (
    <div className="order-3 relative min-[1101px]:order-0" ref={suggestionRef}>
      <form
        className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-[18px] border border-(--border) bg-white/90 px-3 py-2.5"
        role="search"
        onSubmit={handleSubmit}
      >
        <SearchIcon className="h-5 w-5 fill-current" />
        <input
          type="search"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          onFocus={() => searchValue.trim() && setShowSuggestions(true)}
          placeholder={searchText(language, 'search_placeholder')}
          aria-label="Search food items"
          className="min-w-0 border-0 bg-transparent text-(--text) outline-0 placeholder:text-[#988a7e]"
        />
        <button
          type="submit"
          className="cursor-pointer rounded-[14px] border-0 bg-linear-to-br from-(--brand-deep) to-(--brand) px-4 py-2.5 text-white"
        >
          {searchText(language, 'search_button')}
        </button>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white/95 border border-(--border) rounded-[12px] shadow-lg z-50">
          {suggestions.map((product, index) => (
            <button
              key={`${product.id}-${index}`}
              type="button"
              onClick={() => handleSuggestionClick(product.name)}
              className="w-full text-left px-4 py-2.5 hover:bg-[rgba(255,201,139,0.3)] transition duration-150 border-b border-gray-200 last:border-b-0 text-(--text) flex items-center gap-2"
            >
              <SearchIcon className="h-4 w-4 fill-current flex-shrink-0" />
              <span className="truncate">{product.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Searchbar
