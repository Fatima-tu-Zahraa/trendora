function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-purple-400 mb-3">Trendora</h3>
          <p className="text-gray-400 text-sm">Discover Trends. Shop Smart.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <p className="text-gray-400 text-sm mb-2">About Us</p>
          <p className="text-gray-400 text-sm mb-2">Contact</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <p className="text-gray-400 text-sm mb-2">Privacy Policy</p>
          <p className="text-gray-400 text-sm mb-2">Terms & Conditions</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact Us</h4>
          <p className="text-gray-400 text-sm">support@trendora.com</p>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-8">
        © 2026 Trendora. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer