import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

function Contact() {
  const form = useRef()
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setError(false)

    emailjs.sendForm(
      "service_daan2p9",
      "template_5rzuwf1",
      form.current,
      "2YThTdvQ3SCpO4_LW"
    ).then(() => {
      setSending(false)
      setSent(true)
      form.current.reset()
    }).catch(() => {
      setSending(false)
      setError(true)
    })
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3"
      >
        Contact Us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-600 text-sm sm:text-base mb-8"
      >
        Have a question or need help? Reach out to us anytime.
      </motion.p>

      {sent ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
        >
          <p className="text-4xl mb-3">✅</p>
          <h2 className="text-xl font-bold text-green-700 mb-2">Message Sent!</h2>
          <p className="text-green-600">We'll get back to you soon.</p>
          <button
            onClick={() => setSent(false)}
            className="mt-4 text-purple-600 hover:underline text-sm"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          ref={form}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-4 text-left"
        >
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="name"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
          />

          <label htmlFor="email" className="sr-only">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
          />

          <label htmlFor="title" className="sr-only">Subject</label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Subject"
            autoComplete="off"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
          />

          <label htmlFor="message" className="sr-only">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            autoComplete="off"
            rows="5"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
          ></textarea>

          {error && (
            <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={sending}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition w-full sm:w-auto disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10 text-gray-600 text-sm space-y-1"
      >
        <p>📧 support@trendora.com</p>
        <p>📞 +92 300 1234567</p>
      </motion.div>
    </div>
  )
}

export default Contact