import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="pt-24 text-center text-gray-600">
        Cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="pt-24 max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white shadow p-4 mb-4 rounded-lg"
        >
          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-green-600">₹{item.price}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                updateQuantity(item.id, item.quantity - 1)
              }
              className="px-3 py-1 bg-gray-200 rounded"
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() =>
                updateQuantity(item.id, item.quantity + 1)
              }
              className="px-3 py-1 bg-gray-200 rounded"
            >
              +
            </button>

            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
