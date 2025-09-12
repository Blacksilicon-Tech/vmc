import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-pink-200 text-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">🍰 Vmc Squared Limited</h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-pink-600 text-lg font-semibold">Home</Link>
          <Link to="/products" className="hover:text-pink-600 text-lg font-semibold">Products</Link>
          <Link to="/contact" className="hover:text-pink-600 text-lg font-semibold">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
