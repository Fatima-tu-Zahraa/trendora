import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../ProductContext";

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
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Create New Product
      </h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
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
          Create Product
        </button>
      </form>
    </div>
  )
}

export default CreateProduct