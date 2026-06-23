import { useProducts } from "../../ProductContext"

function DashboardHome() {
  const { products, cart } = useProducts()

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
        Welcome to Dashboard
      </h1>
      <p className="text-gray-600 text-sm sm:text-base">
        Manage your products and orders from here.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <div className="bg-white p-5 rounded-xl shadow-md">
          <p className="text-gray-500 text-sm">Total Products</p>
          <p className="text-2xl font-bold text-purple-600">{products.length}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-md">
          <p className="text-gray-500 text-sm">Cart Items</p>
          <p className="text-2xl font-bold text-purple-600">{cart.length}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-md">
          <p className="text-gray-500 text-sm">Total Orders</p>
          <p className="text-2xl font-bold text-purple-600">0</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome