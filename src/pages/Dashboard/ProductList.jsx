import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useProducts } from "../../ProductContext"
import { Search, Plus, Trash2, Pencil, Check, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

function ProductList() {
  const { products, addToCart, removeProduct, updateProduct } = useProducts()
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [addedId, setAddedId] = useState(null)
  const [editId, setEditId] = useState(null)
  const [editData, setEditData] = useState({})

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleAddToCart = (product) => {
    addToCart(product)
    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1500)
  }

  const handleEditSave = (id) => {
    updateProduct(id, editData)
    setEditId(null)
  }

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap justify-between items-center gap-3 mb-6"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">All Products</h1>
        <Link
          to="/dashboard/create-product"
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition text-sm font-semibold"
        >
          <Plus size={16} />
          Create New Product
        </Link>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="relative mb-6 max-w-sm"
      >
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 p-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
        />
      </motion.div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500"
        >
          {products.length === 0 ? "No products yet. Create one!" : "No products match your search."}
        </motion.p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl p-4 shadow-md flex flex-col"
              >

                {editId === product.id ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-2 flex-1"
                  >
                    <input type="text" value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      className="w-full p-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm" />
                    <input type="number" value={editData.price}
                      onChange={(e) => setEditData({ ...editData, price: e.target.value })}
                      className="w-full p-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm" />
                    <input type="text" value={editData.image} placeholder="Image URL"
                      onChange={(e) => setEditData({ ...editData, image: e.target.value })}
                      className="w-full p-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm" />
                    <textarea value={editData.description} rows="2"
                      onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                      className="w-full p-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"></textarea>
                    <div className="flex gap-2 mt-2">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleEditSave(product.id)}
                        className="flex-1 bg-green-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition flex items-center justify-center gap-1">
                        <Check size={14} /> Save
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setEditId(null)}
                        className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition flex items-center justify-center gap-1">
                        <X size={14} /> Cancel
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <motion.img
                      src={product.image && product.image.trim() !== "" ? product.image : "https://placehold.co/400x300?text=No+Image"}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <h3 className="font-semibold text-gray-800 capitalize">{product.name}</h3>
                    <p className="text-gray-500 text-sm mt-1 mb-2 flex-1">{product.description}</p>
                    <p className="text-purple-600 font-bold mb-3">Rs. {product.price}</p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleAddToCart(product)}
                      animate={addedId === product.id ? { scale: [1, 1.08, 1] } : {}}
                      transition={{ duration: 0.3 }}
                      className={`w-full py-2 rounded-lg transition text-sm font-semibold mb-2 ${
                        addedId === product.id ? "bg-green-500 text-white" : "bg-purple-600 text-white hover:bg-purple-700"
                      }`}>
                      {addedId === product.id ? "Added! ✓" : "Add to Cart"}
                    </motion.button>

                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => { addToCart(product); navigate("/dashboard/cart") }}
                        className="flex-1 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition text-xs font-semibold">
                        Buy Now
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => { setEditId(product.id); setEditData({ ...product }) }}
                        className="flex-1 bg-blue-50 text-blue-500 border border-blue-200 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition text-xs font-semibold flex items-center justify-center gap-1">
                        <Pencil size={13} /> Edit
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => removeProduct(product.id)}
                        className="flex-1 bg-red-50 text-red-500 border border-red-200 py-2 rounded-lg hover:bg-red-500 hover:text-white transition text-xs font-semibold flex items-center justify-center gap-1">
                        <Trash2 size={13} /> Delete
                      </motion.button>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

export default ProductList