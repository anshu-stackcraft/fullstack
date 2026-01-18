import { Link } from "react-router-dom";

function ProductCard({ product }) {

  const imageUrl = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `http://127.0.0.1:8000${product.image}`
    : "https://via.placeholder.com/300x200?text=No+Image";

  return (
    <div className="bg-white shadow rounded-xl p-4">
      <img
        src={imageUrl}
        alt={product.name}
        className="h-40 w-full object-cover rounded"
      />

      <h2 className="text-lg font-semibold mt-2">
        {product.name}
      </h2>

      <p className="text-green-600 font-bold">
        ₹{product.price}
      </p>

      <Link
        to={`/product/${product.id}`}
        className="inline-block mt-3 text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
