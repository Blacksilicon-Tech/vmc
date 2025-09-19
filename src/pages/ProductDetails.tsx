import { useParams, Link } from "react-router-dom";
import { products } from "../data/product";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white border shadow-md p-2 rounded-full hover:bg-pink-600 hover:text-white transition z-10"
  >
    <FiChevronRight size={20} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white border shadow-md p-2 rounded-full hover:bg-pink-600 hover:text-white transition z-10"
  >
    <FiChevronLeft size={20} />
  </button>
);

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto py-12 px-6 text-center">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <Link to="/products" className="text-amber-600 underline mt-4 block">
          Back to Products
        </Link>
      </div>
    );
  }

  // Related products: same category, exclude current product
  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 10);

  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="container mx-auto py-12 px-6">
      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg shadow-lg w-full max-w-sm mx-auto object-cover"
        />
        <div>
          <h2 className="text-4xl font-bold text-amber-700">{product.name}</h2>
          <p className="text-gray-700 mt-4">{product.description}</p>
          {product.ingredients && (
            <p className="mt-4">
              <strong>Ingredients:</strong> {product.ingredients}
            </p>
          )}
          {product.Allergy && (
            <p className="mt-2 text-red-600">
              <strong>Allergy Info:</strong> {product.Allergy}
            </p>
          )}
          <Link to="/products">
            <button className="mt-6 px-6 py-3 bg-amber-900 text-white rounded-lg shadow-md transition">
              Back to Products
            </button>
          </Link>
        </div>
      </div>

      {/* Related Products Carousel */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 relative">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Related Products
          </h3>
          <Slider {...settings}>
            {relatedProducts.map((item) => (
              <div key={item.id} className="px-3">
                <Link
                  to={`/products/${item.id}`}
                  className="block bg-white border rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition transform p-4"
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
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
