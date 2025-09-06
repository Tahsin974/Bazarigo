import { BsArrowRight } from "react-icons/bs";
import ProductCard from "../../../../Components/ProductCard/ProductCard";

export default function FeaturedProducts({ products }) {
  return (
    <div>
      <div className="grid lg:grid-cols-6 gap-5 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-7">
        <button
          style={{ fontFamily: "Montserrat", fontWeight: 700 }}
          className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg"
        >
          View All <BsArrowRight />
        </button>
      </div>
    </div>
  );
}
