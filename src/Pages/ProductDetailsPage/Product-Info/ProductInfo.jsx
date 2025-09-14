import { useState } from "react";

export default function ProductInfo() {
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">
        Premium Cotton Hoodie
      </h1>
      <p className="text-xl text-blue-600 font-semibold">$59.99</p>
      <p className="text-gray-600">
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
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full font-semibold hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}
