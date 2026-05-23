import { useState, useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext.jsx'
import { apiUrl } from '../utils/api.js'

const content = {
  En: {
    eyebrow: 'Contact GoviMarket',
    title: 'Tell us what you need and we will help you find it.',
    description:
      'GoviMarket is a simple place to connect with fresh produce, local goods, and meal options. Use the form to ask a question, request support, or share any other details we should know.',
    highlights: [
      {
        title: 'Quick response',
        text: 'We try to answer every message as soon as possible during business hours.',
      },
      {
        title: 'Local support',
        text: 'Ask about orders, product help, delivery updates, or anything related to GoviMarket.',
      },
      {
        title: 'Simple follow-up',
        text: 'Leave your contact details and we will get back with the next steps.',
      },
    ],
    formEyebrow: 'Send a message',
    formTitle: 'We are here to listen',
    formDescription:
      'Fill in your name, email, phone number, and what you want to ask. Add any other things in the message box.',
    labels: {
      name: 'Your name',
      email: 'Email',
      phone: 'Tele no',
      subject: 'About your ask',
      message: 'Other things',
      submit: 'Send message',
    },
    placeholders: {
      name: 'Enter your name',
      email: 'Enter your email',
      phone: 'Enter your phone number',
      subject: 'What do you need help with?',
      message: 'Tell us more about your request, delivery details, or any other notes.',
    },
    status: 'We will reply as soon as possible after you send the message.',
    sentStatus: 'Thanks for reaching out. Your message has been sent.',
  },
  Si: {
    eyebrow: 'ගොවිMarket අමතන්න',
    title: 'ඔබට අවශ්‍ය දේ අපට කියන්න, අපි උදව් කරමු.',
    description:
      'ගොවිMarket යනු නැවුම් නිෂ්පාදන, දේශීය භාණ්ඩ සහ ආහාර විකල්ප එක් කරන සරල ස්ථානයකි. ප්‍රශ්නයක් අසන්න, සහාය ඉල්ලන්න, නැතහොත් වෙනත් තොරතුරු මෙහි යොමු කරන්න.',
    highlights: [
      {
        title: 'ඉක්මන් පිළිතුර',
        text: 'වැඩ කරන වේලාවන් තුළ හැකි ඉක්මනින් සෑම පණිවිඩයකටම පිළිතුරු දීමට අපි උත්සාහ කරමු.',
      },
      {
        title: 'දේශීය සහාය',
        text: 'ඇණවුම්, නිෂ්පාදන උදව්, බෙදාහැරීම් යාවත්කාලීන හෝ ගොවිMarket සම්බන්ධ ඕනෑම දෙයක් අසන්න.',
      },
      {
        title: 'සරල පසු විපරම',
        text: 'ඔබගේ සම්බන්ධතා තොරතුරු තබා යන්න, අපි ඊළඟ පියවර සමඟ නැවත සම්බන්ධ වන්නෙමු.',
      },
    ],
    formEyebrow: 'පණිවිඩයක් යවන්න',
    formTitle: 'අපි සවන් දීමට මෙහි සිටිමු',
    formDescription:
      'ඔබගේ නම, ඊමේල්, දුරකථන අංකය සහ ඔබට අසන්නට අවශ්‍ය දේ ඇතුළත් කරන්න. වෙනත් තොරතුරුද පණිවිඩ කොටුවේ ලියන්න.',
    labels: {
      name: 'ඔබගේ නම',
      email: 'ඊමේල්',
      phone: 'දුරකථන අංකය',
      subject: 'ඔබගේ ඉල්ලීම ගැන',
      message: 'වෙනත් දේ',
      submit: 'පණිවිඩය යවන්න',
    },
    placeholders: {
      name: 'ඔබගේ නම ඇතුළත් කරන්න',
      email: 'ඔබගේ ඊමේල් ඇතුළත් කරන්න',
      phone: 'ඔබගේ දුරකථන අංකය ඇතුළත් කරන්න',
      subject: 'ඔබට උදව් අවශ්‍ය කුමක්ද?',
      message: 'ඔබගේ ඉල්ලීම, බෙදාහැරීම් තොරතුරු හෝ වෙනත් සටහන් මෙතැන ලියන්න.',
    },
    status: 'ඔබ පණිවිඩය යැවූ පසු හැකි ඉක්මනින් පිළිතුරු දෙන්නෙමු.',
    sentStatus: 'සම්බන්ධ වීම සඳහා ස්තූතියි. ඔබගේ පණිවිඩය යවා ඇත.',
  },
  Tm: {
    eyebrow: 'கோவிமார்கெட்டை தொடர்பு கொள்ளவும்',
    title: 'உங்களுக்கு என்ன தேவை என்பதை சொல்லுங்கள், நாங்கள் உதவுகிறோம்.',
    description:
      'கோவிமார்கெட் என்பது புதிய விளைபொருட்கள், உள்ளூர் பொருட்கள், மற்றும் உணவு விருப்பங்களை இணைக்கும் எளிய இடம். கேள்வி கேட்கவும், உதவி கோரவும், அல்லது மற்ற விவரங்களை பகிரவும்.',
    highlights: [
      {
        title: 'விரைவான பதில்',
        text: 'வேலை நேரங்களில் ஒவ்வொரு செய்திக்கும் இயன்ற அளவு விரைவாக பதிலளிக்க முயல்கிறோம்.',
      },
      {
        title: 'உள்ளூர் ஆதரவு',
        text: 'ஆர்டர்கள், தயாரிப்பு உதவி, டெலிவரி புதுப்பிப்புகள் அல்லது கோவிமார்கெட்டைச் சார்ந்த எதையும் கேளுங்கள்.',
      },
      {
        title: 'எளிய தொடர்ச்சி',
        text: 'உங்கள் தொடர்பு விவரங்களை விடுங்கள், அடுத்த படிகளுடன் நாங்கள் மீண்டும் தொடர்பு கொள்கிறோம்.',
      },
    ],
    formEyebrow: 'செய்தி அனுப்பவும்',
    formTitle: 'நாங்கள் கேட்க இங்கே இருக்கிறோம்',
    formDescription:
      'உங்கள் பெயர், மின்னஞ்சல், தொலைபேசி எண் மற்றும் நீங்கள் கேட்க விரும்பும் விஷயத்தை நிரப்பவும். மற்ற விவரங்களை செய்திப் பெட்டியில் சேர்க்கவும்.',
    labels: {
      name: 'உங்கள் பெயர்',
      email: 'மின்னஞ்சல்',
      phone: 'தொலைபேசி எண்',
      subject: 'உங்கள் கேள்வி பற்றி',
      message: 'மற்றவை',
      submit: 'செய்தி அனுப்பு',
    },
    placeholders: {
      name: 'உங்கள் பெயரை உள்ளிடவும்',
      email: 'உங்கள் மின்னஞ்சலை உள்ளிடவும்',
      phone: 'உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்',
      subject: 'எதில் உதவி தேவை?',
      message: 'உங்கள் கோரிக்கை, டெலிவரி விவரங்கள் அல்லது வேறு குறிப்புகளை இங்கே எழுதவும்.',
    },
    status: 'நீங்கள் செய்தியை அனுப்பியவுடன் விரைவில் பதில் அளிப்போம்.',
    sentStatus: 'தொடர்பு கொண்டதற்கு நன்றி. உங்கள் செய்தி அனுப்பப்பட்டது.',
  },
}

function ContactUs() {
  const { language } = useContext(LanguageContext)
  const current = content[language] || content.En
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [statusMessage, setStatusMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsSubmitting(true)

    try {
      const response = await fetch(apiUrl('/api/contact-us'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const payload = await response.json()

      if (!response.ok) {
        throw new Error(payload.message || 'Unable to send message.')
      }

      setStatusMessage(payload.message || current.sentStatus)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setStatusMessage(error.message || 'Unable to send message.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="mx-auto w-full max-w-7xl py-8 md:py-12">
      <div className="relative overflow-hidden rounded-4xl border border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(255,243,231,0.82))] px-5 py-6 shadow-[0_24px_60px_rgba(89,47,14,0.14)] md:px-8 md:py-8">
        <div className="pointer-events-none absolute -top-14 right-0 h-44 w-44 rounded-full bg-[rgba(255,181,115,0.28)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-44 w-44 rounded-full bg-[rgba(234,106,26,0.12)] blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between gap-6 rounded-[28px] bg-[linear-gradient(160deg,#2d1a10_0%,#4a2814_100%)] p-6 text-white shadow-[0_20px_40px_rgba(45,26,16,0.24)] md:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[rgba(255,214,176,0.85)]">{current.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{current.title}</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[rgba(255,248,242,0.82)] md:text-base">{current.description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {current.highlights.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm">
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[rgba(255,248,242,0.78)]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[rgba(91,54,28,0.12)] bg-white/85 p-6 shadow-[0_20px_40px_rgba(89,47,14,0.1)] md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-(--brand-deep)">{current.formEyebrow}</p>
            <h3 className="mt-3 text-2xl font-semibold text-(--text)">{current.formTitle}</h3>
            <p className="mt-3 text-sm leading-6 text-(--muted)">{current.formDescription}</p>

            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-(--text)">
                  {current.labels.name}
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={current.placeholders.name}
                    className="h-12 rounded-2xl border border-[rgba(91,54,28,0.14)] bg-white px-4 text-(--text) outline-none transition placeholder:text-(--muted)/70 focus:border-(--brand) focus:ring-4 focus:ring-[rgba(234,106,26,0.12)]"
                    required
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-(--text)">
                  {current.labels.email}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={current.placeholders.email}
                    className="h-12 rounded-2xl border border-[rgba(91,54,28,0.14)] bg-white px-4 text-(--text) outline-none transition placeholder:text-(--muted)/70 focus:border-(--brand) focus:ring-4 focus:ring-[rgba(234,106,26,0.12)]"
                    required
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-(--text)">
                {current.labels.phone}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={current.placeholders.phone}
                  className="h-12 rounded-2xl border border-[rgba(91,54,28,0.14)] bg-white px-4 text-(--text) outline-none transition placeholder:text-(--muted)/70 focus:border-(--brand) focus:ring-4 focus:ring-[rgba(234,106,26,0.12)]"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-(--text)">
                {current.labels.subject}
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={current.placeholders.subject}
                  className="h-12 rounded-2xl border border-[rgba(91,54,28,0.14)] bg-white px-4 text-(--text) outline-none transition placeholder:text-(--muted)/70 focus:border-(--brand) focus:ring-4 focus:ring-[rgba(234,106,26,0.12)]"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-(--text)">
                {current.labels.message}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={current.placeholders.message}
                  rows="5"
                  className="min-h-36 rounded-2xl border border-[rgba(91,54,28,0.14)] bg-white px-4 py-3 text-(--text) outline-none transition placeholder:text-(--muted)/70 focus:border-(--brand) focus:ring-4 focus:ring-[rgba(234,106,26,0.12)]"
                  required
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-(--muted)">{statusMessage || current.status}</p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-linear-to-br from-(--brand-deep) to-(--brand) px-6 text-sm font-semibold text-white shadow-[0_16px_28px_rgba(234,106,26,0.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_32px_rgba(234,106,26,0.28)]"
                >
                  {isSubmitting ? 'Sending...' : current.labels.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs