import { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";

export default function ProductInfo() {
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-6 text-black">
      <h1
        style={{ fontFamily: "Poppins", fontWeight: 500 }}
        className="xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold "
      >
        Premium Cotton Hoodie
      </h1>
      <h3 className="bg-gradient-to-r from-[#4cc0ff]  to-[#4679d8] bg-clip-text text-transparent font-bold  xl:text-xl lg:text-xl md:text-xl sm:text-lg text-base flex items-center ">
        <span>
          <TbCurrencyTaka className="text-[#4679d8]" />
        </span>{" "}
        <span>59.99</span>
      </h3>
      <p
        style={{ fontFamily: "Roboto", fontWeight: 400 }}
        className="text-gray-600 xl:text-base lg:text-base md:text-base text-sm "
      >
        A stylish, comfortable hoodie perfect for any season.
      </p>

      {/* Size Selection */}
      <div>
        <h3 className="font-semibold mb-2">Size</h3>
        <div className="flex gap-2">
          {["S", "M", "L", "XL"].map((s) => (
            <button
              key={s}
              className={`px-3 py-1 rounded-lg border ${
                size === s ? "bg-blue-600 text-white" : "bg-white text-gray-800"
              }`}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <h3 className="font-semibold mb-2">Quantity</h3>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-1 border rounded"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-1 border rounded"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="flex items-center gap-4">
        <button className="bg-[#38b9f5] text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-[#1c9cd8]">
          Add To Cart
        </button>
        <button className="bg-[#8ad15f] text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-[#69d128]">
          Buy Now
        </button>
        <button className="bg-[#f0428a] text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-[#e91a70]">
          Add To Wishlist
        </button>
      </div>
    </div>
  );
}
