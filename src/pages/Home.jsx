function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-purple-50 py-12 sm:py-16 md:py-20 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
          Discover Trends. Shop Smart.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
          Your one-stop destination for everything you love
        </p>
        <button className="bg-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-purple-700 transition">
          Shop Now
        </button>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Why Choose Trendora?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              We bring you the latest trends with quality you can trust.
              Every product is handpicked to give you the best shopping experience.
            </p>
            <ul className="text-gray-600 text-sm sm:text-base space-y-2">
              <li>✅ Fast & Free Delivery</li>
              <li>✅ Quality Guaranteed</li>
              <li>✅ 24/7 Customer Support</li>
            </ul>
          </div>
          <img
  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
  alt="Shopping bags"
  className="rounded-2xl w-full h-48 sm:h-64 md:h-80 object-cover"
/>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-10">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-5 shadow-md">
            <p className="text-gray-600 text-sm mb-4">
              "Amazing quality products and super fast delivery. Highly recommend!"
            </p>
            <p className="font-semibold text-gray-800">— Ayesha Khan</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-md">
            <p className="text-gray-600 text-sm mb-4">
              "Best online shopping experience I've had. Will shop again!"
            </p>
            <p className="font-semibold text-gray-800">— Bilal Ahmed</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-md">
            <p className="text-gray-600 text-sm mb-4">
              "Customer support was so helpful. Loved the whole experience."
            </p>
            <p className="font-semibold text-gray-800">— Sara Malik</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8">
          Have a question? We'd love to hear from you.
        </p>
        <form className="space-y-4">
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
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition w-full sm:w-auto"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}

export default Home