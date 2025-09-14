export default function SideBar({ subcategories }) {
  const priceRanges = ["Under $50", "$50 - $100", "$100 - $200", "$200+"];
  const brands = ["Apple", "Samsung", "Sony", "Bose"];
  return (
    <div className="w-full lg:w-70 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 lg:sticky lg:top-6 space-y-8 ">
        {/* Categories */}
        <div>
          <h3
            style={{ fontFamily: "Montserrat", fontWeight: 700 }}
            className="font-semibold text-gray-900 mb-4 text-lg"
          >
            Categories
          </h3>
          <nav
            style={{ fontFamily: "Roboto", fontWeight: 400 }}
            className="space-y-2 text-base"
          >
            {subcategories.map((cat, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center justify-between py-2 px-3 rounded-md transition-colors ${
                  cat.active
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-xs ${
                    cat.active ? "text-blue-500" : "text-gray-400"
                  }`}
                >
                  ({cat.count})
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Price Range */}
        <div>
          <h4
            style={{ fontFamily: "Montserrat", fontWeight: 700 }}
            className="font-medium text-gray-900 mb-3"
          >
            Price Range
          </h4>
          <div
            style={{ fontFamily: "Roboto", fontWeight: 400 }}
            className="space-y-2 text-base"
          >
            {priceRanges.map((price) => (
              <label key={price} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded checkbox checkbox-xs border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">{price}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div>
          <h4
            style={{ fontFamily: "Montserrat", fontWeight: 700 }}
            className="font-medium text-gray-900 mb-3"
          >
            Brands
          </h4>
          <div
            style={{ fontFamily: "Roboto", fontWeight: 400 }}
            className="space-y-2 text-base"
          >
            {brands.map((brand) => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 checkbox checkbox-xs"
                />
                <span className="ml-2 text-sm text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
