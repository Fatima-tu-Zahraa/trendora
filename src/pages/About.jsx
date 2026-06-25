import { motion } from "framer-motion"

function About() {
  return (
    <div>
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-purple-50 py-12 sm:py-16 px-4 text-center"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          About Trendora
        </h1>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
          Your trusted destination for the latest trends, quality products, and a seamless shopping experience.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-16">

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Trendora was founded with a simple mission — to bring the latest
              trends to your doorstep without compromising on quality or affordability.
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              What started as a small idea has grown into a platform trusted by
              thousands of happy customers who shop with us every day.
            </p>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"
            alt="Online shopping"
            className="rounded-2xl w-full h-64 sm:h-80 object-cover"
          />
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600"
            alt="Quality products"
            className="rounded-2xl w-full h-64 sm:h-80 object-cover md:order-1 order-2"
          />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:order-2 order-1"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              We believe shopping should be easy, enjoyable, and trustworthy.
              That's why we carefully select every product on our platform.
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Quality, affordability, and customer satisfaction are at the
              heart of everything we do.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { emoji: "⚡", title: "Fast Delivery", desc: "Quick and reliable shipping to your doorstep." },
            { emoji: "✅", title: "Quality Assured", desc: "Every product is checked before it reaches you." },
            { emoji: "💬", title: "24/7 Support", desc: "We're always here to help with any questions." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-md text-center cursor-default"
            >
              <p className="text-3xl mb-3">{item.emoji}</p>
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About