import { Link } from "react-router-dom";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      <section className="bg-amber-400 py-20 text-center">
        <h1 className="text-5xl font-bold text-amber-950">Welcome to SweetTreats Bakery</h1>
        <p className="mt-4 text-lg text-gray-700">Deliciousness made with love.</p>
        <Link to="/products">
          <button className="mt-6 px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800">
            View All Products
          </button>
        </Link>
      </section>

      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/products" className="text-amber-600 hover:underline">See More →</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
