import { products } from "../data/product";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
