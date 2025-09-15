import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-amber-900 text-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/"><h1 className="text-2xl font-bold">🍰 Vicfield</h1></Link>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-amber-400 text-lg font-semibold">Home</Link>
          <Link to="/products" className="hover:text-amber-400 text-lg font-semibold">Products</Link>
          <Link to="/contact" className="hover:text-amber-400 text-lg font-semibold">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
