import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true, false);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();
  

  useEffect(() => {
    setLoading(true);

    fetch(`${BASEURL}/api/products/${id}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id, BASEURL]);

  if (loading)
    return <div className="pt-24 text-center text-lg">Loading...</div>;

  if (error)
    return (
      <div className="pt-24 text-center text-red-500">
        Error: {error}
      </div>
    );

  if (!product)
    return <div className="pt-24 text-center">No product found</div>;

  // image fallback (important)
  const imageUrl = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `http://127.0.0.1:8000${product.image}`
    : "https://via.placeholder.com/500x400?text=No+Image";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 pt-24 pb-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* IMAGE */}
          <div className="bg-gray-50 flex items-center justify-center p-6">
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-[420px] object-cover rounded-xl"
            />
          </div>

          {/* DETAILS */}
          <div className="p-8 flex flex-col">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold text-green-600">
                ₹{product.price}
              </span>
              <span className="text-sm text-gray-500">
                Inclusive of all taxes
              </span>
            </div>

            <button
              disabled={loading}
              onClick={() => addToCart(product)}
              className={`mt-auto text-white text-lg px-8 py-3 rounded-xl
                         transition-all duration-200
                        ${loading ? "bg-orange-400 cursor-not-allowed"
                                  : "bg-orange-500 hover:bg-orange-600 active:scale-95"}`}>

                                    {loading ? "🛒 Add to Carting..": "🛒 Add to Cart"}
                         

            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
