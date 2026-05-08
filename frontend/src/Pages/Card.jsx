import React from 'react'

export default function Card({ product, language = 'En', translateTag = (t) => t, copy = {}, showPrice = true, showAddToCart = true }) {
  const numericPrice = parseFloat(String(product?.price || '').replace(/[^\d.]/g, '')) || 0
  const numericOriginalPrice = parseFloat(String(product?.originalPrice || '').replace(/[^\d.]/g, '')) || numericPrice
  const safePrice = product?.price || `Rs. ${numericPrice}`
  const safeOriginalPrice = product?.originalPrice || `Rs. ${numericOriginalPrice}`
  const safeUnit = product?.unit || '/item'
  const isInStock = typeof product?.stock === 'boolean' ? product.stock : true

  const discount = numericOriginalPrice > 0
    ? Math.round(((numericOriginalPrice - numericPrice) / numericOriginalPrice) * 100)
    : 0

  return (
    <div className="group h-full bg-linear-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-700/50 hover:border-yellow-400/50">
      <div className="relative overflow-hidden bg-slate-900 h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute top-3 left-3 bg-yellow-600/90 backdrop-blur text-yellow-50 text-xs font-bold px-3 py-1 rounded-full">
          📍 {product.location}
        </div>

        <div className="absolute top-3 right-3 flex gap-2 flex-col items-end">
          {product.tags && product.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full shadow-lg ${
                tag === 'Fresh' ? 'bg-green-600 text-white' :
                tag === 'Organic' ? 'bg-emerald-700 text-white' :
                tag === 'Premium' ? 'bg-purple-600 text-white' :
                tag === 'Seasonal' ? 'bg-orange-600 text-white' :
                tag === 'Spicy' ? 'bg-red-600 text-white' :
                'bg-blue-600 text-white'
              }`}
            >
              {translateTag(tag, language)}
            </span>
          ))}

          {discount > 0 && (
            <span className="inline-block bg-linear-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">
              -{discount}%
            </span>
          )}
        </div>

        {!isInStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col h-full">
        <p className="text-xs text-slate-400 mb-1">🏘️ {product.farmName}</p>

        <h3 className="font-bold text-sm text-[#f2eadf] group-hover:text-yellow-300 transition-colors line-clamp-2 mb-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400 text-sm' : 'text-slate-500 text-sm'}>
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-slate-400 ml-1">{product.rating} ({product.reviews})</span>
        </div>

        {showPrice && (
          <div className="mb-4 mt-auto space-y-2">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-xs text-slate-400">{copy?.oneKgPrice || '1kg Price'}</span>
              <span className="text-2xl font-black text-yellow-400">{safePrice}</span>
            </div>
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-xs text-slate-400">{copy?.discountPrice || 'Discount Price'}</span>
              <span className="text-sm text-green-400 font-semibold">{safeOriginalPrice}</span>
            </div>
            <div className="flex items-center justify-end">
              <span className="text-xs text-slate-500">{safeUnit}</span>
            </div>
          </div>
        )}

        {showAddToCart && (
          <button className="w-full bg-linear-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-slate-900 font-bold py-2.5 px-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            disabled={!isInStock}>
            {isInStock ? '➕' : '✗'} {isInStock ? (copy?.addToCart || 'Add to Cart') : (copy?.outOfStock || 'Out of Stock')}
          </button>
        )}
      </div>
    </div>
  )
}
