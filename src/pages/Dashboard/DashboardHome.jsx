import { useProducts } from "../../ProductContext"
import { Link } from "react-router-dom"
import { Package, ShoppingCart, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

function DashboardHome() {
  const { products, cart } = useProducts()
  const total = cart.reduce((sum, item) => sum + Number(item.price) * item.qty, 0)

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Welcome to Dashboard 👋
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Here's what's happening with your store today.
        </p>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { icon: <Package size={22} className="text-purple-600" />, bg: "bg-purple-100", label: "Total Products", value: products.length },
          { icon: <ShoppingCart size={22} className="text-blue-600" />, bg: "bg-blue-100", label: "Cart Items", value: cart.length },
          { icon: <TrendingUp size={22} className="text-green-600" />, bg: "bg-green-100", label: "Cart Value", value: `Rs. ${total}` },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-white p-5 rounded-xl shadow-md flex items-center gap-4"
          >
            <div className={`${card.bg} p-3 rounded-lg shrink-0`}>
              {card.icon}
            </div>
            <div className="min-w-0">
              <p className="text-gray-500 text-sm">{card.label}</p>
              <p className="text-xl font-bold text-gray-800">{card.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Products */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-white rounded-xl shadow-md p-5 mb-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Recent Products</h2>
          <Link to="/dashboard/products" className="text-purple-600 text-sm hover:underline">
            View All
          </Link>
        </div>

        {products.length === 0 ? (
          <p className="text-gray-400 text-sm">No products yet.</p>
        ) : (
          <div className="space-y-3">
            {products.slice(0, 4).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-center gap-3 py-2 border-b last:border-none"
              >
                <img
                  src={product.image && product.image.trim() !== "" ? product.image : "https://placehold.co/40x40?text=?"}
                  alt={product.name}
                  className="w-10 h-10 rounded-lg object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-800 text-sm capitalize truncate">{product.name}</p>
                  <p className="text-gray-400 text-xs truncate">{product.description?.slice(0, 40)}...</p>
                </div>
                <p className="text-purple-600 font-bold text-sm shrink-0">Rs. {product.price}</p>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="bg-white rounded-xl shadow-md p-5"
      >
        <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link to="/dashboard/products"
            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition text-sm font-semibold">
            <Package size={16} />
            View All Products
          </Link>
          <Link to="/dashboard/cart"
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition text-sm font-semibold">
            <ShoppingCart size={16} />
            View Cart
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default DashboardHome