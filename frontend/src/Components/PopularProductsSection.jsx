import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'

const productsByLanguage = {
  En: {
    badge: 'BEST DEALS',
    title: 'Popular Products',
    viewAll: 'View All',
    products: [
      {
        name: 'Fresh Tomatoes',
        price: 'Rs. 180',
        image: 'https://plus.unsplash.com/premium_photo-1661811820259-2575b82101bf?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        highlight: 'Fresh',
      },
      {
        name: 'Watermelon',
        price: 'Rs. 180',
        image:
          'https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=900&q=80',
        highlight: '',
      },
      {
        name: 'Banana (Ambul)',
        price: 'Rs. 120',
        image:
          'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=80',
        highlight: '',
      },
      {
        name: 'Rambutan',
        price: 'Rs. 350',
        image:
          'https://plus.unsplash.com/premium_photo-1725623971827-5cd7b970fb09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        highlight: '',
      },
      {
        name: 'Fresh Tuna',
        price: 'Rs. 850',
        image:
          'https://images.unsplash.com/photo-1648431529663-8ae9606630c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVuYSUyMGZpc2h8ZW58MHx8MHx8fDA%3D',
        highlight: '',
      },
      {
        name: 'Dry Fish',
        price: 'Rs. 1,200',
        image:
          'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=80',
        highlight: '',
      },
      {
        name: 'Dry Fish (Hall Messso)',
        price: 'Rs. 950',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQ8A0Yffv6kQjauOGvLzLl-izgiHFBwX8_A&s',
        highlight: '',
      },
    ],
  },
  Tm: {
    badge: 'சிறந்த சலுகைகள்',
    title: 'பிரபலமான பொருட்கள்',
    viewAll: 'அனைத்தும் பார்க்க',
    
    products: [
      {
        name: 'புதிய தக்காளி',
        price: 'ரூ. 180',
        image:
          'https://plus.unsplash.com/premium_photo-1661811820259-2575b82101bf?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        highlight: 'புதிய',
      },
      {
        name: 'தர்பூசணி',
        price: 'ரூ. 180',
        image:
          'https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=900&q=80',
        highlight: '',
      },
      {
        name: 'வாழை (அம்புல்)',
        price: 'ரூ. 120',
        image:
          'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=80',
        highlight: '',
      },
      {
        name: 'ரம்புட்டான்',
        price: 'ரூ. 350',
        image:
          'https://plus.unsplash.com/premium_photo-1725623971827-5cd7b970fb09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        highlight: '',
      },
      {
        name: 'புதிய தூனா (தலபத்)',
        price: 'ரூ. 850',
        image:
          'https://images.unsplash.com/photo-1648431529663-8ae9606630c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVuYSUyMGZpc2h8ZW58MHx8MHx8fDA%3D',
        highlight: '',
      },
      {
        name: 'உலர் மீன்',
        price: 'ரூ. 1,200',
        image:
          'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=80',
        highlight: '',
      },
      {
        name: 'ஹால் மெஸ்ஸோ',
        price: 'ரூ. 950',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQ8A0Yffv6kQjauOGvLzLl-izgiHFBwX8_A&s',
        highlight: '',
      },
    ],
  },
  Si: {
    badge: 'හොඳම දීමනා',
    title: 'ජනප්‍රිය නිෂ්පාදන',
    viewAll: 'සියල්ල බලන්න',
    products: [
      {
        name: 'නැවුම් තක්කාලි',
        price: 'රු. 180',
        image:
          'https://plus.unsplash.com/premium_photo-1661811820259-2575b82101bf?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        highlight: 'නැවුම්',
      },
      {
        name: 'කොමඩු ',
        price: 'රු. 180',
        image:
          'https://images.unsplash.com/photo-1563114773-84221bd62daa?auto=format&fit=crop&w=900&q=80',
        highlight: '',
      },
      {
        name: 'කෙසෙල් (ඇම්බුල්)',
        price: 'රු. 120',
        image:
          'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=80',
        highlight: '',
      },
      {
        name: 'රඹුටන් ',
        price: 'රු. 350',
        image:
          'https://plus.unsplash.com/premium_photo-1725623971827-5cd7b970fb09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        highlight: '',
      },
      {
        name: 'නැවුම් ටුනා (තලපත්)',
        price: 'රු. 850',
        image:
          'https://images.unsplash.com/photo-1648431529663-8ae9606630c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVuYSUyMGZpc2h8ZW58MHx8MHx8fDA%3D',
        highlight: '',
      },
      {
        name: 'වියළි මසුන්',
        price: 'රු. 1,200',
        image:
          'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=900&q=80',
        highlight: '',
      },
      {
        name: 'හාල් මැස්සෝ',
        price: 'රු. 950',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQ8A0Yffv6kQjauOGvLzLl-izgiHFBwX8_A&s',
        highlight: '',
      },
    ],
  },
}

function PopularProductsSection() {
  const { language } = useContext(LanguageContext)
  const content = productsByLanguage[language] || productsByLanguage.En
  

// const [fetchedProducts, setFetchedProducts] = useState([])

//   useEffect(() => {
//     const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

//     async function load() {
//       try {
//         const res = await fetch(`${API_BASE}/api/products`)
//         if (!res.ok) throw new Error(`Status ${res.status}`)
//         const data = await res.json()
//         setFetchedProducts(Array.isArray(data) ? data : [])
//       } catch (err) {
//         console.warn('Could not fetch products:', err.message)
//       }
//     }

//     load()
//   }, [])

//   const productsToShow = (fetchedProducts && fetchedProducts.length > 0)
//     ? fetchedProducts.slice(0, 7).map((p) => ({
//         name: p.name,
//         price: p.price,
//         image: p.image,
//         highlight: p.badge || p.highlight || '',
//       }))
//     : content.products



  return (
    <section className="bg-[#071307] px-6 py-16 md:px-10 lg:px-12">
      <div className="mx-auto max-w-450">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-yellow-400 shadow-[0_0_0_1px_rgba(250,204,21,0.08)]">
              {content.badge}
            </span>
            <h2 className="mt-5 text-3xl font-black text-[#f2eadf] md:text-5xl">{content.title}</h2>
          </div>

          <button className="hidden items-center gap-3 rounded-full border border-yellow-500/35 px-6 py-3 text-sm font-semibold text-[#f2eadf] transition duration-300 hover:border-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-300 md:inline-flex">
            {content.viewAll}
            <span className="text-base">→</span>
          </button>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex min-w-max gap-5">
            {content.products.map((product, index) => (
              <article
                key={`${product.name}-${index}`}
                className="group relative w-60 overflow-hidden rounded-3xl border border-yellow-500/15 bg-[#123012] shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-62.5 overflow-hidden bg-[#f3efe6]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                  {product.highlight ? (
                    <span className="absolute right-3 top-3 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-[#111] shadow-lg">
                      {product.highlight}
                    </span>
                  ) : null}
                </div>

                <div className="flex items-end justify-between gap-3 px-4 py-4">
                  <div>
                    <h3 className="text-[17px] font-bold leading-tight text-[#f4f0e8]">{product.name}</h3>
                    <p className="mt-2 text-sm font-semibold text-yellow-400">{product.price}</p>
                  </div>

                  <button className="grid h-10 w-10 place-items-center rounded-xl bg-yellow-400 text-lg font-black text-[#111] transition duration-300 group-hover:scale-105 group-hover:bg-yellow-300">
                    +
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularProductsSection
