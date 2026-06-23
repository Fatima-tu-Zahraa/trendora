import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import DashboardLayout from "./pages/Dashboard/DashboardLayout"
import DashboardHome from "./pages/Dashboard/DashboardHome"
import ProductList from "./pages/Dashboard/ProductList"
import Cart from "./pages/Dashboard/Cart"

function App() {
  const location = useLocation()
  const isDashboard = location.pathname.startsWith("/dashboard")
  const isLogin = location.pathname === "/login" || location.pathname === "/signup"

  return (
    <div>
      {!isDashboard && !isLogin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="products" element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
      {!isDashboard && !isLogin && <Footer />}
    </div>
  )
}

export default App