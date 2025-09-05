import { useState } from "react";

import PreviewProduct from "./PreviewProduct/PreviewProduct";
import "./ProductCard.css";
import { TbCurrencyTaka } from "react-icons/tb";
export default function ProductCard({ product }) {
  const {
    name,
    price,
    originalPrice,

    features,
    image,
  } = product;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="card bg-white max-w-96 shadow-lg h-[500px]">
        <figure>
          <img src={image} alt="products" />
        </figure>
        <div className="card-body">
          {/* Product Title */}
          <h2 className="text-xl font-bold">{name}</h2>
          {/* Product Short Description */}
          <ol>
            {features.map((feature, index) => (
              <li key={index}>
                <p className="text-sm">
                  {index + 1}. {feature}
                </p>
              </li>
            ))}
          </ol>

          {/* Price Section */}
          {originalPrice ? (
            <div className="flex items-center justify-between mb-2 w-[150px]">
              <span className="text-purple-600 font-bold text-xl flex items-center">
                <TbCurrencyTaka /> {price.toLocaleString("en-IN")}
              </span>
              <span className="text-gray-400 line-through ml-2 flex items-center">
                <TbCurrencyTaka /> {originalPrice.toLocaleString("en-IN")}
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-purple-600 font-bold text-xl flex items-center">
                  <TbCurrencyTaka /> {price.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          )}

          <div className="card-actions justify-between mt-auto">
            {/* Add to Cart Button */}
            <button className="btn btn-primary flex-1 font-bold text-lg">
              Add To Cart
            </button>
            {/* Preview Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="btn btn-primary   transition-colors font-bold text-lg"
            >
              👁️
            </button>
            {isOpen && (
              <div className="fixed inset-0 bg-black/60  flex items-center justify-center z-50 ">
                <div className="bg-white p-4 space-y-3 xl:w-3xl lg:w-3xl max-w-xl transform transition-all duration-200 ease-out scale-100 opacity-0 animate-fadeIn overflow-y-auto rounded-2xl">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Quick View</h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="btn btn-sm btn-circle btn-ghost "
                    >
                      ✕
                    </button>
                  </div>

                  <PreviewProduct />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
