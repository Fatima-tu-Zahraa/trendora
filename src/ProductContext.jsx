import { createContext, useState, useContext, useEffect } from "react"

const ProductContext = createContext()

const defaultProducts = [
  { id: 1, name: "Wireless Headphones", price: 2500, description: "Premium sound quality with noise cancellation", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80" },
  { id: 2, name: "Sunglasses", price: 1200, description: "UV protection stylish sunglasses", image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&q=80" },
  { id: 3, name: "Perfume", price: 4500, description: "Luxury fragrance for all occasions", image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=400&q=80" },
  { id: 4, name: "Leather Handbag", price: 3500, description: "Premium leather, multiple compartments", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80" },
  { id: 5, name: "Sneakers", price: 4500, description: "Comfortable everyday sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
  { id: 6, name: "Watch", price: 6000, description: "Classic analog watch with leather strap", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" }
]

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("trendora-products")
    return saved ? JSON.parse(saved) : defaultProducts
  })

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("trendora-cart")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("trendora-products", JSON.stringify(products))
  }, [products])

  useEffect(() => {
    localStorage.setItem("trendora-cart", JSON.stringify(cart))
  }, [cart])

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: Date.now() }])
  }

  const removeProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id)
    if (existing) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ))
    } else {
      setCart([...cart, { ...product, qty: 1 }])
    }
  }

  const increaseQty = (id) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ))
  }

  const decreaseQty = (id) => {
    setCart(cart.map((item) =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    ))
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  return (
    <ProductContext.Provider value={{ products, addProduct, removeProduct, cart, addToCart, increaseQty, decreaseQty, removeFromCart }}>
      {children}
    </ProductContext.Provider>
  )
}

export function useProducts() {
  return useContext(ProductContext)
}