import FeaturedProductsSection from "../FeaturedProductsSection/FeaturedProductsSection";
import FlashSaleSection from "../FlashSaleSection/FlashSaleSection";
import HeroSection from "../Hero-Section/HeroSection";
import NewArrivalsSection from "../NewArrivalsSection/NewArrivalsSection";
import CategoriesSection from "../CategoriesSection/CategoriesSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FlashSaleSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <NewArrivalsSection />
    </div>
  );
}
