function Contact () {
    return (
        <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16 text-center">
             <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
                Contact Us
             </h1>
             <p className="text-gray-600 text-sm sm:text-base mb-8">
                Have a question or need help? Reach out to us anytime.
             </p>
             <form className="space-y-4 text-left">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
                 />
                 <input
                   type="email"
                   placeholder="Your Email"
                   className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
                 />
                  <input
                    type="text"
                    placeholder="Subject"
                   className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
                 />
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
                    ></textarea>
                    <button
                    type="submit"
                    className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition w-full sm:w-auto">
                        Send Message
                    </button>
             </form>
             <div className="mt-10 text-gray-600 text-sm">
                <p>📧 support@trendora.com</p>
                <p>📞 +92 300 1234567</p>
             </div>
        </div>
    )
}
export default Contact