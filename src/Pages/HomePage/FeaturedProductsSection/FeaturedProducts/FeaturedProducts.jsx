import ProductCard from "../../../../Components/ProductCard/ProductCard";

export default function FeaturedProducts() {
  return (
    <div className="grid lg:grid-cols-4 gap-4 justify-items-center">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
