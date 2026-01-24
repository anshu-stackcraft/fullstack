import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide text-gray-800 hover:text-blue-600 transition"
        >
          Shop<span className="text-blue-600">Cart</span>
        </Link>

        {/* CART */}
        <Link
          to="/cart"
          className="relative flex items-center gap-2 text-gray-700 hover:text-blue-600 transition font-medium"
        >
          <span className="text-xl">🛒</span>
          <span>Cart</span>

          {cartCount > 0 && (
            <span
              className="absolute -top-2 -right-3 bg-gradient-to-r from-red-500 to-pink-500
                         text-white text-xs font-bold h-5 w-5 rounded-full
                         flex items-center justify-center animate-pulse"
            >
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
