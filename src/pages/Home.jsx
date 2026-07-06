import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-purple-50 py-12 sm:py-16 md:py-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4"
        >
          Discover Trends. Shop Smart.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8"
        >
          Your one-stop destination for everything you love
        </motion.p>
        <Link to="/login">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-purple-700 transition"
          >
            Shop Now
          </motion.button>
        </Link>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 sm:py-16 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600"
            alt="Shopping bags"
            className="rounded-2xl w-full h-48 sm:h-64 md:h-80 object-cover"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-10"
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { text: "Amazing quality products and super fast delivery. Highly recommend!", name: "Ayesha Khan" },
            { text: "Best online shopping experience I've had. Will shop again!", name: "Bilal Ahmed" },
            { text: "Customer support was so helpful. Loved the whole experience.", name: "Sara Malik" },
          ].map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-5 shadow-md"
            >
              <p className="text-gray-600 text-sm mb-4">"{review.text}"</p>
              <p className="font-semibold text-gray-800">— {review.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3"
        >
          Ready to Start Shopping?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-sm sm:text-base mb-8"
        >
          Join thousands of happy customers today!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link to="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Create Account
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home