import { useState, useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'
import { t } from '../i18n/translations.js'

const menuItems = ['menu_home', 'menu_shop', 'menu_fresh', 'menu_colombo', 'menu_meals']
const languages = ['En', 'Tm', 'Si']

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M10.5 4a6.5 6.5 0 1 0 4.14 11.53l4.42 4.42 1.42-1.42-4.42-4.42A6.5 6.5 0 0 0 10.5 4Zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 4H5.2L5 2H2v2h1.2l2.2 11.3A2 2 0 0 0 7.4 17h8.7a2 2 0 0 0 2-1.6L20 8H7.4l-.3-2H20V4H7ZM7.4 15 6.3 8h11.1l-1.2 6.4H7.4ZM8 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
  )
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 2a5 5 0 0 0-3.54 8.54A7 7 0 0 0 4 17v2h2v-2a5 5 0 0 1 10 0v2h2v-2a7 7 0 0 0-4.46-6.46A5 5 0 0 0 12 2Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
    </svg>
  )
}

function Navbar({ cartCount = 0, activeLanguage = 'En', onLanguageChange }) {
  const [searchValue, setSearchValue] = useState('')
  const { language } = useContext(LanguageContext)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <header className="navbar-shell">
      <div className="navbar-glow navbar-glow-left" />
      <div className="navbar-glow navbar-glow-right" />

      <div className="navbar-topbar">
        <div className="brand-block">
          <div className="brand-mark" aria-hidden="true">
            <span>Sp</span>
          </div>
          <div>
            <p className="brand-kicker">{t('brand_kicker', language)}</p>
            <h1>{t('brand_name', language)}</h1>
          </div>
        </div>

        <form className="search-bar" role="search" onSubmit={handleSubmit}>
          <SearchIcon />
          <input
            type="search"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder={t('search_placeholder', language)}
            aria-label="Search food items"
          />
          <button type="submit">{t('search_button', language)}</button>
        </form>

        <div className="header-actions">
          <div className="language-switch" role="group" aria-label="Change language">
            {languages.map((lang) => (
              <button
                key={lang}
                type="button"
                className={lang === activeLanguage ? 'language-pill active' : 'language-pill'}
                onClick={() => onLanguageChange?.(lang)}
              >
                {lang}
              </button>
            ))}
          </div>

          <button type="button" className="icon-button cart-button" aria-label={`Cart with ${cartCount} selected items`}>
            <CartIcon />
            <span>{t('cart_label', language)}</span>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button type="button" className="icon-button profile-button" aria-label="Open profile">
            <ProfileIcon />
          </button>
        </div>
      </div>

      <nav className="navbar-links" aria-label="Primary navigation">
        {menuItems.map((item) => (
          <a key={item} href="#" className="nav-link">
            {t(item, language)}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
