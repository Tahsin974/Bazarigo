import img from "../../../assets/Products/iPhone 15 Pro Max.jpg";
export default function PreviewProduct() {
  return (
    <div>
      <div className="card lg:card-side bg-white">
        {/* Product Image */}
        <figure>
          <img src={img} alt="product" />
        </figure>
        {/* Product Details */}
        <div className="card-body">
          {/* product title */}
          <h2 className="card-title">iPhone 15 Pro Max</h2>
          {/* product short description */}
          <p>
            {" "}
            Experience the ultimate iPhone with titanium design, A17 Pro chip,
            and advanced camera system.
          </p>
          {/* product price section */}
          <div>
            <span className="text-purple-600 font-bold text-xl">৳ 89,999</span>
            <span className="text-gray-400 line-through ml-2">৳ 1,05,999</span>
          </div>
          <div className="card-actions justify-between">
            {/* Add to Cart Button */}
            <button className="btn btn-primary flex-1">Add To Cart</button>
            {/* Preview Button */}
            <button className="btn btn-info">👁️</button>
          </div>
        </div>
      </div>
    </div>
  );
}
