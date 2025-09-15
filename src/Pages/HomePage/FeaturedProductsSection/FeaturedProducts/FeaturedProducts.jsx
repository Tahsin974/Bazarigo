import ProductCard from "../../../../Components/ProductCard/ProductCard";
import styles from "./FeatureProducts.module.css";
import { HashLink } from "react-router-hash-link";

export default function FeaturedProducts({ products }) {
  return (
    <div>
      <div
        className={`${styles["card-container"]} grid  xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5 justify-items-center`}
      >
        {products.map((product) => (
          <HashLink to={`/product-details/${product.id}#`} key={product.id}>
            <ProductCard product={product} />
          </HashLink>
        ))}
      </div>
      <div className="flex xl:justify-end lg:justify-end md:justify-end justify-center  mt-7">
        <button
          style={{ fontFamily: "Montserrat", fontWeight: 700 }}
          className="btn btn-outline  border-[#8ad15f] text-[#8ad15f] hover:bg-[#8ad15f] hover:text-white active:bg-[#8ad15f] active:text-white  btn-xs sm:btn-sm md:btn-md lg:btn-md xl:btn-md shadow-none"
        >
          Explore More
        </button>
      </div>
    </div>
  );
}
