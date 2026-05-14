import { useContext, useEffect, useMemo, useState } from 'react'
import Footer from '../Components/Footer.jsx'
import Card from './Card.jsx'
import { LanguageContext } from '../context/LanguageContext.jsx'

const pageContent = {
	En: {
		badge: 'TRADITIONAL TABLE',
		title: 'Sri Lankan Meals',
		subtitle: 'A curated selection of traditional meal staples from the backend seed list.',
		heroNote: 'Only a few Sri Lankan traditional foods are shown here, not the full product catalog.',
		stats: [
			{ value: 'Seed synced', label: 'Loaded from backend products' },
			{ value: 'Curated set', label: 'Traditional foods only' },
			{ value: 'Fast browse', label: 'Same flow as Fresh page' },
		],
		sectionTitle: 'Traditional picks',
		sectionText: 'Rice and dry-fish staples chosen from the backend seed data for a focused meals view.',
		loading: 'Loading traditional meal items...',
		error: 'Unable to load meal items. Make sure the backend is running on port 5000.',
		empty: 'No traditional meal items were found in the seed data.',
		filterLabel: 'Meal picks',
	},
	Tm: {
		badge: 'பாரம்பரிய மேஜை',
		title: 'இலங்கை உணவுகள்',
		subtitle: 'Backend seed பட்டியலிலிருந்து தேர்ந்தெடுக்கப்பட்ட சில பாரம்பரிய உணவுகள்.',
		heroNote: 'முழு product catalog அல்ல, சில Sri Lankan traditional foods மட்டும் காட்டப்படும்.',
		stats: [
			{ value: 'Seed sync', label: 'Backend products இலிருந்து' },
			{ value: 'Curated', label: 'பாரம்பரிய உணவுகள் மட்டும்' },
			{ value: 'வேகமான பார்வை', label: 'Fresh page போலவே' },
		],
		sectionTitle: 'பாரம்பரிய தேர்வுகள்',
		sectionText: 'Rice மற்றும் dry-fish staples களை கொண்டு, meals view க்கு மட்டும் வடிகட்டப்பட்டுள்ளது.',
		loading: 'உணவுப் பொருட்கள் ஏற்றப்படுகின்றன...',
		error: 'உணவுப் பொருட்களை ஏற்ற முடியவில்லை. backend port 5000 இல் இயங்குகிறதா என உறுதிப்படுத்தவும்.',
		empty: 'Seed data-வில் பாரம்பரிய உணவுகள் எதுவும் இல்லை.',
		filterLabel: 'உணவு தேர்வுகள்',
	},
	Si: {
		badge: 'සාම්ප්‍රදායික මේසය',
		title: 'ශ්‍රී ලාංකික ආහාර',
		subtitle: 'Backend seed ලැයිස්තුවෙන් තෝරාගත් සාම්ප්‍රදායික ආහාර කිහිපයක්.',
		heroNote: 'සම්පූර්ණ catalog එක නොව, Sri Lankan traditional foods කිහිපයක් පමණක් මෙහි පෙන්වයි.',
		stats: [
			{ value: 'Seed sync', label: 'Backend products වලින්' },
			{ value: 'Curated', label: 'සාම්ප්‍රදායික ආහාර පමණි' },
			{ value: 'Quick view', label: 'Fresh page flow එකමයි' },
		],
		sectionTitle: 'සාම්ප්‍රදායික තේරීම්',
		sectionText: 'Rice සහ dry-fish වගේ හැදෑරූ staples backend seed data එකෙන් තෝරාගත්තා.',
		loading: 'ආහාර අයිතම පූරණය වෙමින්...',
		error: 'ආහාර අයිතම පූරණය කළ නොහැක. backend port 5000 මත ක්‍රියාත්මක වන බව තහවුරු කරන්න.',
		empty: 'Seed data තුළ සාම්ප්‍රදායික ආහාර සොයාගත නොහැකි විය.',
		filterLabel: 'ආහාර තේරීම්',
	},
}

const mealProductNames = [
	'Dry Fish (Kala Karawala)',
	'Anchovy Dry Fish',
	'Basmati Rice (2kg)',
	'Jasmine Rice (1kg)',
	'Brown Rice (1kg)',
]

const cardCopy = {
	En: {
		addToCart: 'Add to Cart',
		outOfStock: 'Out of Stock',
		oneKgPrice: 'Meal Price',
		discountPrice: 'Original Price',
	},
	Tm: {
		addToCart: 'கூடையில் சேர்',
		outOfStock: 'கையிருப்பில் இல்லை',
		oneKgPrice: 'உணவு விலை',
		discountPrice: 'முதற்க் விலை',
	},
	Si: {
		addToCart: 'කරත්තයට එක් කරන්න',
		outOfStock: 'තොග නොමැත',
		oneKgPrice: 'ආහාර මිල',
		discountPrice: 'මුල් මිල',
	},
}

function getMealsText(language) {
	return pageContent[language] || pageContent.En
}

function isTraditionalMeal(product) {
	if (!product?.name) {
		return false
	}

	return mealProductNames.includes(product.name) || Array.isArray(product.tags) && product.tags.includes('Traditional')
}

export default function Meals({ onAddToCart }) {
	const { language, changeLanguage } = useContext(LanguageContext)
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [loadError, setLoadError] = useState('')

	const content = getMealsText(language)

	useEffect(() => {
		let isActive = true

		async function loadProducts() {
			setIsLoading(true)
			setLoadError('')

			try {
				const response = await fetch('http://localhost:5000/api/products')

				if (!response.ok) {
					throw new Error('Failed to load products')
				}

				const data = await response.json()
				const normalizedProducts = Array.isArray(data)
					? data
					: Array.isArray(data?.products)
						? data.products
						: []

				if (!isActive) {
					return
				}

				setProducts(normalizedProducts)
				setIsLoading(false)
				return
			} catch {
				// Fall through to the shared error state below.
			}

			if (isActive) {
				setProducts([])
				setLoadError(content.error)
				setIsLoading(false)
			}
		}

		loadProducts()

		return () => {
			isActive = false
		}
	}, [content.error])

	const mealProducts = useMemo(() => {
		const selected = products.filter(isTraditionalMeal)

		return selected.sort((left, right) => {
			const leftIndex = mealProductNames.indexOf(left.name)
			const rightIndex = mealProductNames.indexOf(right.name)

			if (leftIndex === -1 && rightIndex === -1) {
				return (right.rating || 0) - (left.rating || 0)
			}

			if (leftIndex === -1) {
				return 1
			}

			if (rightIndex === -1) {
				return -1
			}

			return leftIndex - rightIndex
		})
	}, [products])

	const spotlightProducts = mealProducts.slice(0, 3)
	const totalReviews = mealProducts.reduce((sum, product) => sum + (product.reviews || 0), 0)

	return (
		<div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(120,198,122,0.18),transparent_30%),linear-gradient(180deg,#061309_0%,#0b1a0d_45%,#061009_100%)] text-[#f4efe6]">
			<main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
				<section className="relative overflow-hidden rounded-4xl border border-emerald-400/15 bg-[linear-gradient(135deg,rgba(14,32,16,0.94),rgba(8,22,11,0.9))] px-6 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:px-8 lg:px-12 lg:py-14">
					<div className="pointer-events-none absolute -left-10 top-0 h-44 w-44 rounded-full bg-emerald-400/15 blur-3xl" />
					<div className="pointer-events-none absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-yellow-400/10 blur-3xl" />

					<div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
						<div>
							<span className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-bold tracking-[0.22em] text-emerald-200">
								{content.badge}
							</span>
							<h1 className="mt-5 max-w-2xl text-4xl font-black tracking-tighter text-[#fff8ec] sm:text-5xl lg:text-7xl">
								{content.title}
							</h1>
							<p className="mt-5 max-w-2xl text-base leading-8 text-emerald-50/75 sm:text-lg">
								{content.subtitle}
							</p>
							<p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50/55">
								{content.heroNote}
							</p>
						</div>

						<div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
							{content.stats.map((stat) => (
								<div
									key={stat.label}
									className="rounded-3xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm"
								>
									<p className="text-2xl font-black text-yellow-300">{stat.value}</p>
									<p className="mt-2 text-sm leading-6 text-emerald-50/72">{stat.label}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="mt-8 grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
					<aside className="rounded-[28px] border border-emerald-400/12 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-sm">
						<p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-200/70">{content.filterLabel}</p>
						<h2 className="mt-3 text-2xl font-black text-[#fff8ec]">{content.sectionTitle}</h2>
						<p className="mt-4 text-sm leading-7 text-emerald-50/70">{content.sectionText}</p>

						<div className="mt-6 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
							<div className="rounded-[20px] border border-white/10 bg-black/20 p-4">
								<p className="text-xs uppercase tracking-[0.22em] text-emerald-100/55">Items</p>
								<p className="mt-2 text-3xl font-black text-[#fff8ec]">{mealProducts.length.toString().padStart(2, '0')}</p>
							</div>
							<div className="rounded-[20px] border border-white/10 bg-black/20 p-4">
								<p className="text-xs uppercase tracking-[0.22em] text-emerald-100/55">Reviews</p>
								<p className="mt-2 text-3xl font-black text-[#fff8ec]">{totalReviews.toLocaleString()}</p>
							</div>
							<div className="rounded-[20px] border border-white/10 bg-black/20 p-4">
								<p className="text-xs uppercase tracking-[0.22em] text-emerald-100/55">Featured</p>
								<p className="mt-2 text-3xl font-black text-[#fff8ec]">{spotlightProducts.length}</p>
							</div>
						</div>

						<div className="mt-6 space-y-3">
							{spotlightProducts.map((product) => (
								<div key={product.id} className="flex items-center gap-4 rounded-[22px] border border-white/10 bg-white/6 p-3">
									<img
										src={product.image}
										alt={product.name}
										className="h-16 w-16 rounded-2xl object-cover"
									/>
									<div className="min-w-0 flex-1">
										<p className="truncate text-sm font-bold text-[#fff8ec]">{product.name}</p>
										<p className="mt-1 text-xs text-emerald-50/65">
											{product.location} · {product.farmName}
										</p>
									</div>
								</div>
							))}
						</div>
					</aside>

					<div>
						{isLoading ? (
							<div className="grid min-h-80 place-items-center rounded-4xl border border-dashed border-emerald-400/20 bg-white/5 px-6 text-center text-emerald-50/70">
								<div>
									<div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-emerald-300/20 border-t-emerald-300" />
									<p className="mt-4 text-lg font-semibold text-[#fff8ec]">{content.loading}</p>
								</div>
							</div>
						) : loadError ? (
							<div className="rounded-[28px] border border-red-400/20 bg-red-500/10 px-6 py-10 text-center text-red-100">
								<p className="text-lg font-semibold">{loadError}</p>
							</div>
						) : mealProducts.length === 0 ? (
							<div className="rounded-[28px] border border-emerald-400/20 bg-white/5 px-6 py-10 text-center text-emerald-50/75">
								<p className="text-lg font-semibold text-[#fff8ec]">{content.empty}</p>
							</div>
						) : (
							<div className="grid gap-5 sm:grid-cols-2 2xl:grid-cols-3">
								{mealProducts.map((product) => (
									<Card
										key={product.id}
										product={product}
										language={language}
										translateTag={(tag) => tag}
										copy={cardCopy[language] || cardCopy.En}
										onAddToCart={onAddToCart}
									/>
								))}
							</div>
						)}
					</div>
				</section>
			</main>

			<Footer />
		</div>
	)
}
