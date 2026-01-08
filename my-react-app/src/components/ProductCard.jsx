function ProductCard({ product }) {
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

  const imageUrl = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `${BASEURL}${product.image}`
    : null;

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-56 object-cover rounded-lg mb-4"
        />
      ) : (
        <div className="w-full h-56 bg-gray-200 flex items-center justify-center rounded-lg mb-4">
          No Image
        </div>
      )}

      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">₹ {product.price}</p>
    </div>
  );
}

export default ProductCard;
