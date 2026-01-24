import { useCart } from "../context/CartContext";

function Cartpage() {
  const { cartItems, removeFromCart, updateQuantityCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="pt-20 min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          🛒 Your cart is empty. Start shopping!
        </p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4 border-b pb-3"
            >
              {/* Product Info */}
              <div>
                <h2 className="text-lg font-semibold">
                  {item.name}
                </h2>
                <p className="text-gray-600">
                  ₹{item.price} × {item.quantity}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    item.quantity > 1
                      ? updateQuantityCart(item.id, item.quantity - 1)
                      : removeFromCart(item.id)
                  }
                  className="px-2 bg-gray-200 rounded"
                >
                  -
                </button>

                <span className="font-medium">
                  {item.quantity}
                </span>

                <button
                  onClick={() =>
                    updateQuantityCart(item.id, item.quantity + 1)
                  }
                  className="px-2 bg-gray-200 rounded"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total & Checkout */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-xl font-bold">
              Total: ₹{total}
            </p>

            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cartpage;
