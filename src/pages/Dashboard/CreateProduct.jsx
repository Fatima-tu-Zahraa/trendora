import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useProducts } from "../../ProductContext"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

function CreateProduct() {
  const { addProduct } = useProducts()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !price) return
    addProduct({ name, price, description, image })
    navigate("/dashboard/products")
  }

  return (
    <div className="max-w-lg">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => navigate("/dashboard/products")}
        className="flex items-center gap-2 text-gray-500 hover:text-purple-600 transition mb-6 text-sm"
      >
        <ArrowLeft size={16} />
        Back to Products
      </motion.button>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6"
      >
        Create New Product
      </motion.h1>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="text-sm font-medium text-gray-700 mb-1 block">Product Name *</label>
          <input
            type="text"
            placeholder="e.g. Wireless Headphones"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label className="text-sm font-medium text-gray-700 mb-1 block">Price (Rs.) *</label>
          <input
            type="number"
            placeholder="e.g. 2500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label className="text-sm font-medium text-gray-700 mb-1 block">Image URL</label>
          <input
            type="text"
            placeholder="https://example.com/image.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {image && (
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={image}
              alt="Preview"
              className="mt-2 w-full h-32 object-cover rounded-lg"
            />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <label className="text-sm font-medium text-gray-700 mb-1 block">Description</label>
          <textarea
            placeholder="Product description..."
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Create Product
        </motion.button>
      </motion.form>
    </div>
  )
}

export default CreateProduct