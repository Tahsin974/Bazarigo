import React from "react";

export default function FilterBar() {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6 text-black">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <select
              style={{ fontFamily: "Roboto", fontWeight: 400 }}
              className="border border-gray-300 rounded-md px-3 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>All Prices</option>
              <option>Under $50</option>
              <option>$50 - $100</option>
              <option>$100 - $200</option>
              <option>$200+</option>
            </select>
            <select
              style={{ fontFamily: "Roboto", fontWeight: 400 }}
              className="border border-gray-300 rounded-md px-3 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>All Brands</option>
              <option>Apple</option>
              <option>Samsung</option>
              <option>Sony</option>
              <option>Bose</option>
            </select>
            <select
              style={{ fontFamily: "Roboto", fontWeight: 400 }}
              className="border border-gray-300 rounded-md px-3 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>All Ratings</option>
              <option>4+ Stars</option>
              <option>3+ Stars</option>
              <option>2+ Stars</option>
            </select>
          </div>

          {/* Sort & Info */}
          <div
            style={{ fontFamily: "Roboto", fontWeight: 400 }}
            className="flex flex-wrap items-center gap-4 w-full md:w-auto"
          >
            <span className="text-base text-gray-600">1,234 products</span>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
              <option>Newest First</option>
              <option>Best Sellers</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
