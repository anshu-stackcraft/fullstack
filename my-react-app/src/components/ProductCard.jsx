import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const imageUrl = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `http://127.0.0.1:8000${product.image}`
    : "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white shadow-md rounded-2xl overflow-hidden cursor-pointer
                 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <img
        src={imageUrl}
        alt={product.name}
        className="h-44 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h2>

        <p className="text-green-600 font-bold text-lg mt-1">
          ₹{product.price}
        </p>

        <div className="mt-3 flex justify-end">
          <span className="text-blue-600 text-sm font-medium">
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
