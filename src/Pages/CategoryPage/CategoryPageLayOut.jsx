import { useParams } from "react-router";
import PageTitle from "../../Components/PageTitle/PageTitle";
import FilterBar from "./FilterBar/FilterBar";
import SideBar from "./SideBar/SideBar";
import { myCategories } from "../../Data/mockCategories";

export default function CategoryPageLayOut() {
  const { category } = useParams();
  const categoryData = myCategories.find((c) => c.category === category);
  const subcategories = categoryData?.subcategories || [];
  console.log(subcategories);
  return (
    <>
      <PageTitle>{category}</PageTitle>
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        <aside className="max-w-90 bg-white text-black p-4">
          <SideBar subcategories={subcategories} />
        </aside>
        <article className="flex-1">
          <FilterBar />
          <h3>Content</h3>
        </article>
      </div>
    </>
  );
}
