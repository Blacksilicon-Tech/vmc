import { useContext, useMemo, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (showSearch && search) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      result = result.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      result = result.filter((item) => subCategory.includes(item.subCategory));
    }

    switch (sortType) {
      case "low-high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [products, search, showSearch, category, subCategory, sortType]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Filter Options */}
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS
            <img
              className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
              src={assets.dropdown_icon}
              alt="Toggle Filters"
            />
          </p>

          {/* Category Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {["Men", "Women", "Up & Down", "Shoes"].map((item) => (
                <label key={item} className="flex gap-2 cursor-pointer">
                  <input type="checkbox" value={item} onChange={toggleCategory} />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* SubCategory Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-5 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {[
                { label: "Topwear", value: "Topwear" },
                { label: "Anime", value: "Anime" },
                { label: "Tank top", value: "Tank top" },
                { label: "Bottomwear", value: "Bottomwear" },
                { label: "Hoodies", value: "Winterwear" },
                { label: "Nike", value: "Shoes" },
              ].map(({ label, value }) => (
                <label key={value} className="flex gap-2 cursor-pointer">
                  <input type="checkbox" value={value} onChange={toggleSubCategory} />
                  {label}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1="ALL" text2=" COLLECTIONS" />
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Map Products */}
          <div className="grid grid-cols-2 mdd:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filteredAndSortedProducts.length > 0 ? (
              filteredAndSortedProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              ))
            ) : (
              <p className="col-span-4 text-center text-gray-500">
                No products available.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collection;
