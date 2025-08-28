import { BsArrowRight } from "react-icons/bs";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";

export default function FeaturedProductsSection() {
  return (
    <div>
      <div className=" bg-white text-black min-h-screen">
        {/* Section Title */}
        <div className="flex justify-between items-center w-full xl:px-12 lg:px-12 md:px-12 px-4">
          <SectionTitle>Featured Products</SectionTitle>
          <button className="btn btn-link link-hover btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg">
            View All <BsArrowRight />
          </button>
        </div>
        {/* Featured  Products */}
        <div className="xl:px-12 lg:px-12 md:px-12 px-4">
          <FeaturedProducts />
        </div>
      </div>
    </div>
  );
}
