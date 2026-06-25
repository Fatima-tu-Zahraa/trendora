import { useProducts } from "../../ProductContext"
import { motion, AnimatePresence } from "framer-motion"

function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useProducts()

  const total = cart.reduce((sum, item) => sum + Number(item.price) * item.qty, 0)

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6"
      >
        Your Cart
      </motion.h1>

      {cart.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center py-16"
        >
          <p className="text-5xl mb-4">🛒</p>
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        </motion.div>
      ) : (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <AnimatePresence>
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-4 p-4 border-b last:border-none hover:bg-gray-50 transition"
              >
                
                {/* Product Image */}
                <img
                  src={item.image && item.image.trim() !== "" ? item.image : "https://placehold.co/80x80?text=No+Image"}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg shrink-0"
                />

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 capitalize truncate">{item.name}</p>
                  <p className="text-gray-400 text-xs truncate">{item.description}</p>
                  <p className="text-purple-600 font-bold text-sm mt-1">Rs. {item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => decreaseQty(item.id)}
                    className="bg-gray-100 hover:bg-gray-200 w-7 h-7 rounded-full font-bold text-gray-600 transition"
                  >
                    −
                  </motion.button>
                  <motion.span
                    key={item.qty}
                    initial={{ scale: 1.3 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="font-semibold w-5 text-center text-sm"
                  >
                    {item.qty}
                  </motion.span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => increaseQty(item.id)}
                    className="bg-gray-100 hover:bg-gray-200 w-7 h-7 rounded-full font-bold text-gray-600 transition"
                  >
                    +
                  </motion.button>
                </div>

                {/* Total + Remove */}
                <div className="text-right shrink-0">
                  <p className="text-purple-600 font-bold">Rs. {item.price * item.qty}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-600 text-xs mt-1 transition"
                  >
                    Remove
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Total */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex justify-between items-center p-4 bg-gray-50 border-t"
          >
            <p className="text-lg font-bold text-gray-800">Total</p>
            <p className="text-xl font-bold text-purple-600">Rs. {total}</p>
          </motion.div>

          <div className="p-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Proceed to Checkout
            </motion.button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart