import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-600">
          Trendora
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-purple-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-purple-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-purple-600">Contact</Link>
          <Link to="/login" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Login
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-3 shadow-md">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-600 py-2 border-b">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-600 py-2 border-b">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-purple-600 py-2 border-b">Contact</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="bg-purple-600 text-white px-4 py-2 rounded-lg text-center hover:bg-purple-700">
            Login
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar