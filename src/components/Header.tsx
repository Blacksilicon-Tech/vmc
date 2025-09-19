import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-amber-900 text-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-1">
          🍰 Vicfield
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="hover:text-amber-400 text-lg font-semibold"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-amber-400 text-lg font-semibold"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="hover:text-amber-400 text-lg font-semibold"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-amber-800 text-center py-4 space-y-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-amber-400 text-lg font-semibold"
          >
            Home
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="block hover:text-amber-400 text-lg font-semibold"
          >
            Products
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-amber-400 text-lg font-semibold"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
