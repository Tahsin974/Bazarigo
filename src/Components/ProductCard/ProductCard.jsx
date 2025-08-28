import { useState } from "react";
import img from "../../assets/Products/iPhone 15 Pro Max.jpg";
import PreviewProduct from "./PreviewProduct/PreviewProduct";
import "./ProductCard.css";
export default function ProductCard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="card bg-white max-w-96 shadow-sm">
        <figure>
          <img src={img} alt="products" />
        </figure>
        <div className="card-body">
          {/* Product Title */}
          <h2 className="card-title">iPhone 15 Pro Max</h2>
          {/* Product Short Description */}
          <p>256GB, Titanium Blue</p>
          {/* Price Section */}
          <div class="flex items-center justify-between mb-3">
            <div>
              <span className="text-purple-600 font-bold text-lg">
                ৳ 89,999
              </span>
              <span className="text-gray-400 line-through ml-2">
                ৳ 1,05,999
              </span>
            </div>
          </div>
          <div className="card-actions justify-between">
            {/* Add to Cart Button */}
            <button className="btn btn-primary flex-1">Add To Cart</button>
            {/* Preview Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="quick-view bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              👁️
            </button>
            {isOpen && (
              <div className="fixed inset-0 bg-black/60  flex items-center justify-center z-50 ">
                <div className="bg-white p-4 space-y-3 xl:w-3xl lg:w-3xl max-w-xl transform transition-all duration-200 ease-out scale-100 opacity-0 animate-fadeIn overflow-y-auto">
                  <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-semibold">Quick View</h2>
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
/* 
<button
              className="btn btn-info"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              👁️
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box bg-white ">
                <form method="dialog">
                
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <div className="space-y-2.5">
                  <h3 className="font-bold text-2xl">Quick View!</h3>
                  <PreviewProduct />
                </div>
              </div>
            </dialog> */
