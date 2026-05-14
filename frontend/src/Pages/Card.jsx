import React from 'react'

export default function Card({ product, language = 'En', translateTag = (t) => t, copy = {}, showPrice = true, showAddToCart = true, onAddToCart }) {
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
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/50 bg-linear-to-br from-slate-800 to-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/50 hover:shadow-2xl">
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

      <div className="flex flex-1 flex-col p-4">
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

        <div className="mt-auto space-y-3 pt-3">
          {showPrice && (
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
                    {copy?.oneKgPrice || '1kg Price'}
                  </span>
                  <p className="mt-1 text-2xl font-black text-yellow-400">{safePrice}</p>
                </div>
                <div className="text-right">
                  <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
                    {copy?.discountPrice || 'Discount Price'}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-emerald-400 line-through decoration-emerald-400/60">
                    {safeOriginalPrice}
                  </p>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-500">{safeUnit}</span>
                {discount > 0 && (
                  <span className="rounded-full bg-red-500/90 px-2.5 py-1 text-xs font-black text-white">
                    -{discount}%
                  </span>
                )}
              </div>
            </div>
          )}

          {showAddToCart && (
            <button
              onClick={() => onAddToCart?.(product)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-yellow-500 to-yellow-600 px-3 py-3 font-bold text-slate-900 shadow-lg transition-all duration-300 hover:from-yellow-400 hover:to-yellow-500 hover:shadow-yellow-500/50 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!isInStock}
            >
              {isInStock ? '➕' : '✗'}
              <span>{isInStock ? (copy?.addToCart || 'Add to Cart') : (copy?.outOfStock || 'Out of Stock')}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
