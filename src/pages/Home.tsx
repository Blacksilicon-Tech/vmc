import { Link } from "react-router-dom";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-400 to-amber-300 py-24 text-center relative overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-extrabold text-amber-950 drop-shadow-lg">
          Welcome to SweetTreats Bakery
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
          Handcrafted with love ❤️ Freshly baked every day to bring sweetness to your moments.
        </p>
        <Link to="/products">
          <button className="mt-8 px-8 py-4 bg-amber-900 text-white rounded-full shadow-md transition">
            🍩 View All Products
          </button>
        </Link>

        {/* Decorative circle accents */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-200 rounded-full opacity-30"></div>
        <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-pink-200 rounded-full opacity-40"></div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-900">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="transform hover:-translate-y-2 transition"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-block px-6 py-3 bg-white border border-amber-700 text-amber-900 font-medium rounded-lg hover:bg-amber-700 hover:text-white shadow transition"
          >
            See More →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
