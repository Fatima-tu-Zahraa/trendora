 import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useProducts } from "../../ProductContext"
import { Search, Plus, X, Trash2 } from "lucide-react"

function ProductList() {
  const { products, addProduct, addToCart, removeProduct } = useProducts()
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [addedId, setAddedId] = useState(null)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleAddToCart = (product) => {
    addToCart(product)
    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1500)
  }

  const handleCreate = (e) => {
    e.preventDefault()
    if (!name.trim() || !price) return
    addProduct({ name, price, description, image })
    setName("")
    setPrice("")
    setDescription("")
    setImage("")
    setShowForm(false)
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          All Products
        </h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition text-sm font-semibold"
        >
          {showForm ? <X size={16} /> : <Plus size={16} />}
          {showForm ? "Cancel" : "Create New Product"}
        </button>
      </div>

      {/* Create Form */}
      {showForm && (
        <form onSubmit={handleCreate} className="bg-white p-6 rounded-xl shadow-md space-y-4 mb-6 max-w-lg">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="number"
            placeholder="Price (Rs.)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            placeholder="Description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Save Product
          </button>
        </form>
      )}

      {/* Search Bar */}
      <div className="relative mb-6 max-w-sm">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 p-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
        />
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">
          {products.length === 0 ? "No products yet. Create one!" : "No products match your search."}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl p-4 shadow-md flex flex-col">
              <img
                src={product.image && product.image.trim() !== "" ? product.image : "https://placehold.co/400x300?text=No+Image"}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold text-gray-800 capitalize">{product.name}</h3>
              <p className="text-gray-500 text-sm mt-1 mb-2 flex-1">{product.description}</p>
              <p className="text-purple-600 font-bold mb-3">Rs. {product.price}</p>

              <button
                onClick={() => handleAddToCart(product)}
                className={`w-full py-2 rounded-lg transition text-sm font-semibold mb-2 ${
                  addedId === product.id
                    ? "bg-green-500 text-white"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
              >
                {addedId === product.id ? "Added! ✓" : "Add to Cart"}
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    addToCart(product)
                    navigate("/dashboard/cart")
                  }}
                  className="flex-1 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition text-xs font-semibold"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => removeProduct(product.id)}
                  className="flex-1 bg-red-50 text-red-500 border border-red-200 py-2 rounded-lg hover:bg-red-500 hover:text-white transition text-xs font-semibold flex items-center justify-center gap-1"
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList