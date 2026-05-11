import { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LanguageContext } from '../context/LanguageContext.jsx'

const menuItems = ['menu_home', 'menu_shop', 'menu_fresh', 'menu_colombo', 'menu_meals']
const languages = ['En', 'Tm', 'Si']

const navbarContent = {
  En: {
    brand_kicker: 'Fresh food marketplace',
    brand_name: 'SpiceCart',
    search_placeholder: 'Search biryani, kottu, sambol, fresh goods...',
    search_button: 'Search',
    cart_label: 'Cart',
    menu_home: 'Home',
    menu_shop: 'Shop',
    menu_fresh: 'Fresh',
    menu_colombo: 'Colombo Goods',
    menu_meals: 'Meals',
  },
  Tm: {
    brand_kicker: 'புதிய உணவு சந்தை',
    brand_name: 'மசாலை வண்டி',
    search_placeholder: 'பிரியாணி, கொத்து, சாம்பல், புதிய பொருட்கள் தேடுங்கள்...',
    search_button: 'தேடுக',
    cart_label: 'கூடை',
    menu_home: 'வீடு',
    menu_shop: 'கடை',
    menu_fresh: 'புதிய',
    menu_colombo: 'கொழும்பு பொருட்கள்',
    menu_meals: 'உணவுகள்',
  },
  Si: {
    brand_kicker: 'ताज्य खाद्य बाजार',
    brand_name: 'मसाला कार्ट',
    search_placeholder: 'බිරියානි, කොට්ටු, සම්බෝල්, තಾಜා වස්තු සොයන්න...',
    search_button: 'සොයන්න',
    cart_label: 'කාර්තුව',
    menu_home: 'ගෙදර',
    menu_shop: 'කඩේ',
    menu_fresh: 'ताजा',
    menu_colombo: 'කොළඹ බඩු',
    menu_meals: 'ආහාර',
  },
}

function navbarText(language, key) {
  return navbarContent[language]?.[key] ?? navbarContent.En[key] ?? key
}

function SearchIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      <path d="M10.5 4a6.5 6.5 0 1 0 4.14 11.53l4.42 4.42 1.42-1.42-4.42-4.42A6.5 6.5 0 0 0 10.5 4Zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" />
    </svg>
  )
}

function CartIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      <path d="M7 4H5.2L5 2H2v2h1.2l2.2 11.3A2 2 0 0 0 7.4 17h8.7a2 2 0 0 0 2-1.6L20 8H7.4l-.3-2H20V4H7ZM7.4 15 6.3 8h11.1l-1.2 6.4H7.4ZM8 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
  )
}

function ProfileIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      <path d="M12 2a5 5 0 0 0-3.54 8.54A7 7 0 0 0 4 17v2h2v-2a5 5 0 0 1 10 0v2h2v-2a7 7 0 0 0-4.46-6.46A5 5 0 0 0 12 2Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
    </svg>
  )
}

function Navbar({ cartCount = 0, activeLanguage = 'En', onLanguageChange }) {
  const [searchValue, setSearchValue] = useState('')
  const { language } = useContext(LanguageContext)
  const location = useLocation()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  // Determine active menu item based on current route
  const getActiveMenuClass = (item) => {
    if (item === 'menu_home' && location.pathname === '/') {
      return 'bg-linear-to-br from-(--brand-deep) to-(--brand) text-white'
    }
    if (item === 'menu_shop' && location.pathname === '/shop') {
      return 'bg-linear-to-br from-(--brand-deep) to-(--brand) text-white'
    }
    if (item === 'menu_fresh' && location.pathname === '/fresh') {
      return 'bg-linear-to-br from-(--brand-deep) to-(--brand) text-white'
    }
    if (item === 'menu_colombo' && location.pathname === '/colombo') {
      return 'bg-linear-to-br from-(--brand-deep) to-(--brand) text-white'
    }
    return 'text-(--muted)'
  }

  // Get navigation path for menu item
  const getMenuPath = (item) => {
    switch (item) {
      case 'menu_home':
        return '/'
      case 'menu_shop':
        return '/shop'
      case 'menu_fresh':
        return '/fresh'
      case 'menu_colombo':
        return '/colombo'
      default:
        return '#'
    }
  }

  return (
    <header className="sticky top-0 z-20 mx-auto mt-4 max-w-7xl overflow-hidden rounded-[30px] border border-white/70 bg-white/80 px-5 pt-4.5 pb-4 text-(--text) shadow-[0_24px_60px_rgba(89,47,14,0.15)] backdrop-blur-[18px] max-[720px]:mt-0 max-[720px]:rounded-b-3xl max-[720px]:rounded-t-none max-[720px]:px-3.5">
      <div className="pointer-events-none absolute -top-6 -left-7 h-37.5 w-37.5 rounded-full bg-[rgba(255,201,139,0.42)] blur-md" />
      <div className="pointer-events-none absolute -top-2 -right-4.5 h-30 w-30 rounded-full bg-[rgba(255,154,86,0.22)] blur-md" />

      <div className="relative grid items-center gap-4.5 min-[1101px]:grid-cols-[auto_minmax(0,1fr)_auto]">
        <div className="flex items-center gap-3.5">
          <div
            className="grid h-13.5 w-13.5 place-items-center rounded-[18px] bg-linear-to-br from-(--brand) to-[#ff8d3a] font-extrabold text-white shadow-[0_14px_26px_rgba(234,106,26,0.26)]"
            aria-hidden="true"
          >
            <span className="text-base tracking-[0.04em]">Sp</span>
          </div>
          <div>
            <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-(--brand-deep)">
              {navbarText(language, 'brand_kicker')}
            </p>
            <h1 className="mt-0.5 text-[1.22rem] leading-none">{navbarText(language, 'brand_name')}</h1>
          </div>
        </div>

        <form
          className="order-3 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-[18px] border border-(--border) bg-white/90 px-3 py-2.5 min-[1101px]:order-0"
          role="search"
          onSubmit={handleSubmit}
        >
          <SearchIcon className="h-5 w-5 fill-current" />
          <input
            type="search"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder={navbarText(language, 'search_placeholder')}
            aria-label="Search food items"
            className="min-w-0 border-0 bg-transparent text-(--text) outline-0 placeholder:text-[#988a7e]"
          />
          <button
            type="submit"
            className="cursor-pointer rounded-[14px] border-0 bg-linear-to-br from-(--brand-deep) to-(--brand) px-4 py-2.5 text-white"
          >
            {navbarText(language, 'search_button')}
          </button>
        </form>

        <div className="flex flex-wrap items-center justify-between gap-2 min-[1101px]:justify-start min-[1101px]:gap-2.5">
          <div
            className="inline-flex w-full justify-between rounded-full border border-(--border) bg-[rgba(255,243,231,0.94)] p-1 min-[721px]:w-auto min-[721px]:justify-start"
            role="group"
            aria-label="Change language"
          >
            {languages.map((lang) => (
              <button
                key={lang}
                type="button"
                className={`flex-1 cursor-pointer rounded-full border-0 px-3 py-2.25 min-[721px]:flex-none ${
                  lang === activeLanguage
                    ? 'bg-linear-to-br from-(--brand-deep) to-(--brand) text-white shadow-[0_10px_18px_rgba(234,106,26,0.2)]'
                    : 'bg-transparent text-(--muted)'
                }`}
                onClick={() => onLanguageChange?.(lang)}
              >
                {lang}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="relative inline-flex h-11.5 cursor-pointer items-center justify-center gap-2 rounded-full border border-(--border) bg-white/80 px-4 pr-4.5 text-(--text)"
            aria-label={`Cart with ${cartCount} selected items`}
          >
            <CartIcon className="h-5 w-5 fill-current" />
            <span className="max-[720px]:hidden">{navbarText(language, 'cart_label')}</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.75 -right-1.75 inline-flex h-5.5 min-w-5.5 items-center justify-center rounded-full border-2 border-white bg-linear-to-br from-[#d73e13] to-[#ff7a1a] px-1.5 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            className="inline-flex h-11.5 w-11.5 cursor-pointer items-center justify-center rounded-full border border-(--border) bg-white/80 p-0 text-(--text)"
            aria-label="Open profile"
          >
            <ProfileIcon className="h-5 w-5 fill-current" />
          </button>
        </div>
      </div>

      <nav className="mt-3.5 flex flex-wrap items-center gap-2.5" aria-label="Primary navigation">
        {menuItems.map((item) => {
          const path = getMenuPath(item)
          const isAnchorLink = path === '#'
          
          if (isAnchorLink) {
            return (
              <a
                key={item}
                href="#"
                className="rounded-full px-3.5 py-2.5 font-semibold text-(--muted) transition duration-200 hover:-translate-y-px hover:bg-[rgba(255,233,211,0.9)] hover:text-(--text)"
              >
                {navbarText(language, item)}
              </a>
            )
          }
          
          return (
            <Link
              key={item}
              to={path}
              className={`rounded-full px-3.5 py-2.5 font-semibold transition duration-200 hover:-translate-y-px hover:bg-[rgba(255,233,211,0.9)] ${getActiveMenuClass(item)}`}
            >
              {navbarText(language, item)}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

export default Navbar
