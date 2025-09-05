import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Categories from "./Categories/Categories";

export default function CategoriesSection() {
  return (
    <section className=" bg-white xl:px-12 lg:px-12 md:px-12 px-4 xl:py-12 lg:py-12 md:py-12 py-4  text-black h-[max-content] my-24 space-y-8 lg:block hidden">
      {/* Section Title */}

      <SectionTitle>Categories</SectionTitle>

      {/* Top Categories */}
      <div>
        <Categories />
      </div>
    </section>
  );
}
