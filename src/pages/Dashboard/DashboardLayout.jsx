import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useProducts } from "../../ProductContext"
import { ShoppingCart, LayoutDashboard, Package, LogOut, User, Menu, X } from "lucide-react"

function DashboardLayout() {
  const { cart } = useProducts()
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)
  const isActive = (path) => location.pathname === path

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/dashboard/products": "Products",
    "/dashboard/cart": "Cart",
  }
  const currentTitle = pageTitles[location.pathname] || "Dashboard"

  const handleLogout = () => navigate("/login")

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-50">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:relative z-30 top-0 left-0 h-full
        w-64 min-w-[256px] bg-gray-900 text-white flex flex-col
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
      `}>
        <div className="p-6 flex justify-between items-center">
          <Link to="/dashboard" className="text-2xl font-bold text-purple-400">
            Trendora
          </Link>
          <button className="md:hidden text-white" onClick={() => setSidebarOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-1 px-4">
          <Link
            to="/dashboard"
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              isActive("/dashboard") ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            <LayoutDashboard size={18} />
            <span>Dashboard Home</span>
          </Link>
          <Link
            to="/dashboard/products"
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
              isActive("/dashboard/products") ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            <Package size={18} />
            <span>Products</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 transition w-full"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Right Side */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top Bar */}
        <header className="bg-white shadow-sm px-4 py-4 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-semibold text-gray-800">{currentTitle}</h2>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/dashboard/cart" className="relative">
              <ShoppingCart size={22} className="text-gray-700 hover:text-purple-600 transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <User size={16} className="text-purple-600" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout