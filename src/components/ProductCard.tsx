import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="bg-white shadow-md rounded-lg p-4 hover:scale-105 transition-transform">
        <img 
          src={product.image} 
          alt={product.name} 
          className="rounded-md h-40 w-full object-cover" 
        />
        <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
      </div>
    </Link>
  );
};

export default ProductCard;
