import FilterBar from "../../Components/FilterBar/FilterBar";
import PageTitle from "../../Components/PageTitle/PageTitle";

export default function FeaturesPageLayOut() {
  return (
    <div>
      <PageTitle>Features</PageTitle>
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        <article className="flex-1">
          <FilterBar />
          <h3>Content</h3>
        </article>
      </div>
    </div>
  );
}
