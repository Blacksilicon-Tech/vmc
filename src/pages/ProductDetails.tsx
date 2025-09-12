import { useParams, Link } from "react-router-dom";
import { products } from "../data/product";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <Link
          to="/products"
          className="text-pink-600 underline mt-4 block"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  // Related products: same category, exclude current product
  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  return (
    <div className="container mx-auto py-12 px-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg shadow-lg w-96 h-96 object-cover"
        />
        <div>
          <h2 className="text-4xl font-bold text-pink-700">{product.name}</h2>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <p className="mt-4">{product.ingredients}</p>
          <p className="mt-4">{product.Allergy}</p>
          <Link to="/products">
            <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
              Back to Products
            </button>
          </Link>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Related Products
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/products/${item.id}`}
                className="border rounded-lg p-4 hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h4 className="mt-4 text-lg font-semibold text-pink-600">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
