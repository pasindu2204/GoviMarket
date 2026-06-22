import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LanguageContext } from '../context/LanguageContext.jsx'
import { apiUrl } from '../utils/api.js'

const signinCopy = {
	En: {
		accountLabel: 'FoodCart Account',
		registerTitle: 'Create your new account',
		loginTitle: 'Welcome back to your account',
		registerDescription: 'Register once to save your details, track orders, and checkout faster next time.',
		loginDescription: 'Log in to continue shopping, review your cart, and manage your saved details.',
		featureOne: 'Fast checkout',
		featureTwo: 'Order tracking',
		featureThree: 'Saved addresses',
		registerTab: 'Register',
		loginTab: 'Login',
		createAccountHeading: 'Create account',
		loginHeading: 'Sign in',
		registerNote: 'Fill in your details to create a new user profile.',
		loginNote: 'Use your registered email and password to continue.',
		fullName: 'Full name',
		email: 'Email address',
		password: 'Password',
		confirmPassword: 'Confirm password',
		rememberMe: 'Remember me',
		forgotPassword: 'Forgot password?',
		submitRegister: 'Create account',
		submitLogin: 'Login',
		accountPromptRegister: 'Already have an account?',
		accountPromptLogin: "Don't have an account?",
		toggleToLogin: 'Login here',
		toggleToRegister: 'Register here',
		backHome: 'Back to home',
		fullNamePlaceholder: 'Enter your name',
		emailPlaceholder: 'you@example.com',
		passwordPlaceholder: '••••••••',
	},
	Tm: {
		accountLabel: 'FoodCart கணக்கு',
		registerTitle: 'உங்கள் புதிய கணக்கை உருவாக்குங்கள்',
		loginTitle: 'மீண்டும் வரவேற்கிறோம்',
		registerDescription: 'உங்கள் விவரங்களை சேமிக்கவும், ஆர்டர்களை கண்காணிக்கவும், அடுத்த முறை விரைவாக செலுத்தவும் பதிவு செய்யுங்கள்.',
		loginDescription: 'ஷாப்பிங் தொடர, கார்டைப் பார்க்க, மற்றும் சேமிக்கப்பட்ட விவரங்களை நிர்வகிக்க உள்நுழையுங்கள்.',
		featureOne: 'விரைவு Checkout',
		featureTwo: 'ஆர்டர் கண்காணிப்பு',
		featureThree: 'சேமிக்கப்பட்ட முகவரிகள்',
		registerTab: 'பதிவு',
		loginTab: 'உள்நுழை',
		createAccountHeading: 'கணக்கு உருவாக்கு',
		loginHeading: 'உள்நுழைய',
		registerNote: 'புதிய பயனர் சுயவிவரம் உருவாக்க உங்கள் விவரங்களை நிரப்புங்கள்.',
		loginNote: 'தொடர உங்கள் பதிவு செய்யப்பட்ட மின்னஞ்சல் மற்றும் கடவுச்சொல்லைப் பயன்படுத்துங்கள்.',
		fullName: 'முழுப் பெயர்',
		email: 'மின்னஞ்சல் முகவரி',
		password: 'கடவுச்சொல்',
		confirmPassword: 'கடவுச்சொல்லை உறுதிசெய்',
		rememberMe: 'என்னை நினைவில் வை',
		forgotPassword: 'கடவுச்சொல் மறந்ததா?',
		submitRegister: 'கணக்கு உருவாக்கு',
		submitLogin: 'உள்நுழை',
		accountPromptRegister: 'ஏற்கனவே கணக்கு உள்ளதா?',
		accountPromptLogin: 'கணக்கு இல்லையா?',
		toggleToLogin: 'இங்கே உள்நுழைய',
		toggleToRegister: 'இங்கே பதிவு செய்ய',
		backHome: 'முகப்புக்கு திரும்பு',
		fullNamePlaceholder: 'உங்கள் பெயரை உள்ளிடுங்கள்',
		emailPlaceholder: 'you@example.com',
		passwordPlaceholder: '••••••••',
	},
	Si: {
		accountLabel: 'FoodCart ගිණුම',
		registerTitle: 'ඔබේ නව ගිණුම සාදන්න',
		loginTitle: 'නැවතත් සාදරයෙන් පිළිගනිමු',
		registerDescription: 'ඔබේ විස්තර සුරැකීමට, ඇණවුම් නිරීක්ෂණය කිරීමට සහ ඊළඟ වතාවේ වේගයෙන් ගෙවීමට එක්වරක් ලියාපදිංචි වන්න.',
		loginDescription: 'සාප්පු සෙවීම සඳහා, ඔබේ කරත්තය පරීක්ෂා කිරීමට සහ සුරැකූ විස්තර කළමනාකරණය කිරීමට ලොග් වන්න.',
		featureOne: 'වේගවත් ගෙවීම',
		featureTwo: 'ඇණවුම් නිරීක්ෂණය',
		featureThree: 'සුරැකි ලිපින',
		registerTab: 'ලියාපදිංචි වන්න',
		loginTab: 'ඇතුළුවන්න',
		createAccountHeading: 'ගිණුම සාදන්න',
		loginHeading: 'ඇතුළුවන්න',
		registerNote: 'නව පරිශීලක පැතිකඩක් සාදීමට ඔබේ විස්තර පුරවන්න.',
		loginNote: 'ඉදිරියට යාමට ඔබේ ලියාපදිංචි ඊමේල් සහ මුරපදය භාවිතා කරන්න.',
		fullName: 'සම්පූර්ණ නම',
		email: 'ඊමේල් ලිපිනය',
		password: 'මුරපදය',
		confirmPassword: 'මුරපදය තහවුරු කරන්න',
		rememberMe: 'මාව මතක තබා ගන්න',
		forgotPassword: 'මුරපදය අමතක වුණාද?',
		submitRegister: 'ගිණුම සාදන්න',
		submitLogin: 'ඇතුළුවන්න',
		accountPromptRegister: 'දැනටමත් ගිණුමක් තිබේද?',
		accountPromptLogin: 'ගිණුමක් නැද්ද?',
		toggleToLogin: 'මෙතැනින් ඇතුළුවන්න',
		toggleToRegister: 'මෙතැනින් ලියාපදිංචි වන්න',
		backHome: 'මුල් පිටුවට ආපසු',
		fullNamePlaceholder: 'ඔබේ නම ඇතුළත් කරන්න',
		emailPlaceholder: 'you@example.com',
		passwordPlaceholder: '••••••••',
	},
}

function InputField({ label, type = 'text', placeholder, name, value, onChange }) {
	return (
		<label className="grid gap-2">
			<span className="text-sm font-semibold text-slate-700">{label}</span>
			<input
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className="w-full rounded-2xl border border-orange-200 bg-white/90 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
			/>
		</label>
	)
}

function Signin() {
	const { language } = useContext(LanguageContext)
	const [mode, setMode] = useState('register')
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		password: '',
		confirmPassword: '',
	})
	const [message, setMessage] = useState('')
	const [messageType, setMessageType] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const copy = signinCopy[language] || signinCopy.En
	const isRegisterMode = mode === 'register'

	function handleChange(event) {
		const { name, value } = event.target
		setFormData((currentForm) => ({
			...currentForm,
			[name]: value,
		}))
	}

	async function handleSubmit(event) {
		event.preventDefault()
		setIsSubmitting(true)
		setMessage('')
		setMessageType('')

		const endpoint = isRegisterMode ? '/api/profile/register' : '/api/profile/login'
		const payload = isRegisterMode
			? {
				fullName: formData.fullName,
				email: formData.email,
				password: formData.password,
				confirmPassword: formData.confirmPassword,
			}
			: {
				email: formData.email,
				password: formData.password,
			}

		try {
			const response = await fetch(apiUrl(endpoint), {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			})

			const contentType = response.headers.get('content-type') || ''
			let data

			if (contentType.includes('application/json')) {
				data = await response.json()
			} else {
				const text = await response.text()
				// Surface the raw response to help debug HTML/404 returns
				throw new Error(`Unexpected non-JSON response: ${text.slice(0, 1000)}`)
			}

			if (!response.ok) {
				throw new Error(data.message || 'Something went wrong.')
			}

			setMessage(data.message || 'Request completed successfully.')
			setMessageType('success')
			toast.success(data.message || 'Request completed successfully.')

			if (isRegisterMode) {
				setMode('login')
			}

			setFormData((currentForm) => ({
				...currentForm,
				password: '',
				confirmPassword: '',
			}))
		} catch (error) {
			setMessage(error.message || 'Unable to submit the form.')
			setMessageType('error')
			toast.error(error.message || 'Unable to submit the form.')
		} finally {
			setIsSubmitting(false)
		}
	}

	function switchMode(nextMode) {
		setMode(nextMode)
		setMessage('')
		setMessageType('')
	}

	return (
		<section className="min-h-[calc(100vh-120px)] px-4 py-10 sm:px-6 lg:px-8">
			<div className="mx-auto grid max-w-6xl gap-6 overflow-hidden rounded-4xl border border-white/70 bg-white/80 shadow-[0_28px_80px_rgba(89,47,14,0.16)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
				<div className="relative overflow-hidden bg-linear-to-br from-[#1d3b20] via-[#2c5a31] to-[#173019] px-8 py-10 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-14">
					<div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-[#f4a93a]/20 blur-3xl" />
					<div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#ea6a1a]/20 blur-3xl" />

					<div className="relative max-w-xl">
						<p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-200">{copy.accountLabel}</p>
						<h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
							{isRegisterMode ? copy.registerTitle : copy.loginTitle}
						</h1>
						<p className="mt-4 max-w-lg text-sm leading-7 text-white/80 sm:text-base">
							{isRegisterMode ? copy.registerDescription : copy.loginDescription}
						</p>

						<div className="mt-10 grid gap-4 sm:grid-cols-3">
							<div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
								<p className="text-3xl font-black">01</p>
								<p className="mt-2 text-sm text-white/75">{copy.featureOne}</p>
							</div>
							<div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
								<p className="text-3xl font-black">02</p>
								<p className="mt-2 text-sm text-white/75">{copy.featureTwo}</p>
							</div>
							<div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
								<p className="text-3xl font-black">03</p>
								<p className="mt-2 text-sm text-white/75">{copy.featureThree}</p>
							</div>
						</div>
					</div>
				</div>

				<div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
					<div className="mx-auto max-w-md">
						<div className="inline-flex rounded-full border border-orange-100 bg-orange-50 p-1">
							<button
								type="button"
								onClick={() => switchMode('register')}
								className={`rounded-full px-4 py-2 text-sm font-bold transition ${mode === 'register' ? 'bg-[#ea6a1a] text-white shadow-lg shadow-orange-200' : 'text-slate-600'}`}
							>
								{copy.registerTab}
							</button>
							<button
								type="button"
								onClick={() => switchMode('login')}
								className={`rounded-full px-4 py-2 text-sm font-bold transition ${mode === 'login' ? 'bg-[#ea6a1a] text-white shadow-lg shadow-orange-200' : 'text-slate-600'}`}
							>
								{copy.loginTab}
							</button>
						</div>

						<div className="mt-6">
							<h2 className="text-3xl font-black text-slate-900">
								{isRegisterMode ? copy.createAccountHeading : copy.loginHeading}
							</h2>
							<p className="mt-2 text-sm leading-6 text-slate-500">
								{isRegisterMode ? copy.registerNote : copy.loginNote}
							</p>
						</div>

						<form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
							{isRegisterMode && (
								<InputField
									label={copy.fullName}
									name="fullName"
									placeholder={copy.fullNamePlaceholder}
									value={formData.fullName}
									onChange={handleChange}
								/>
							)}
							<InputField
								label={copy.email}
								name="email"
								type="email"
								placeholder={copy.emailPlaceholder}
								value={formData.email}
								onChange={handleChange}
							/>
							<InputField
								label={copy.password}
								name="password"
								type="password"
								placeholder={copy.passwordPlaceholder}
								value={formData.password}
								onChange={handleChange}
							/>
							{isRegisterMode && (
								<InputField
									label={copy.confirmPassword}
									name="confirmPassword"
									type="password"
									placeholder={copy.passwordPlaceholder}
									value={formData.confirmPassword}
									onChange={handleChange}
								/>
							)}

							<div className="flex items-center justify-between gap-4 pt-2">
								<label className="flex items-center gap-2 text-sm text-slate-600">
									<input type="checkbox" className="h-4 w-4 rounded border-orange-300 text-orange-600 focus:ring-orange-200" />
									{copy.rememberMe}
								</label>
								<button type="button" className="text-sm font-semibold text-[#ea6a1a] hover:underline">
									{copy.forgotPassword}
								</button>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="mt-2 rounded-2xl bg-linear-to-r from-[#ea6a1a] to-[#ff8a39] px-5 py-3.5 text-base font-bold text-white shadow-[0_18px_36px_rgba(234,106,26,0.28)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
							>
									{isSubmitting ? 'Please wait...' : isRegisterMode ? copy.submitRegister : copy.submitLogin}
							</button>

								{message && (
									<p className={`rounded-2xl px-4 py-3 text-sm font-medium ${messageType === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
										{message}
									</p>
								)}
						</form>

						<p className="mt-6 text-sm text-slate-600">
							{isRegisterMode ? copy.accountPromptRegister : copy.accountPromptLogin}{' '}
							<button
								type="button"
								onClick={() => switchMode(mode === 'register' ? 'login' : 'register')}
								className="font-bold text-[#ea6a1a] hover:underline"
							>
								{isRegisterMode ? copy.toggleToLogin : copy.toggleToRegister}
							</button>
						</p>

						<div className="mt-6">
							<Link to="/" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
								← {copy.backHome}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Signin
