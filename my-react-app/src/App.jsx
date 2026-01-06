import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Products
      </h1>

      {loading && (
        <p className="text-center text-gray-500">Loading...</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            {product.image && (
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
            )}

            <h2 className="text-xl font-semibold mb-1">
              {product.name}
            </h2>

            <p className="text-gray-600 text-sm mb-2">
              {product.description}
            </p>

            <p className="text-lg font-bold text-green-600">
              ₹ {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
