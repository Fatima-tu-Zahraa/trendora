import { useProducts } from "../../ProductContext"

function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useProducts()

  const total = cart.reduce((sum, item) => sum + Number(item.price) * item.qty, 0)

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-4">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between border-b py-4 last:border-none gap-3">
              
              {/* Product Info */}
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between sm:justify-end gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="bg-gray-200 w-7 h-7 rounded-full font-bold hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span className="font-semibold w-4 text-center">{item.qty}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="bg-gray-200 w-7 h-7 rounded-full font-bold hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <p className="text-purple-600 font-bold min-w-[80px] text-right">
                  Rs. {item.price * item.qty}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-600 text-sm font-medium"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center mt-4 pt-4 border-t">
            <p className="text-lg font-bold text-gray-800">Total</p>
            <p className="text-lg font-bold text-purple-600">Rs. {total}</p>
          </div>

          <button className="w-full mt-6 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart